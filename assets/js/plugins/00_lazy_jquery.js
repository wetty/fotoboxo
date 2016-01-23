// loaded anywhere on the page asynchronously.
(function jqIsReady() {
    if (typeof $ === "undefined"){
        setTimeout(jqIsReady,10);
        return ;
    }
    async = async || [];
    while(async.length) { // there is some syncing to be done
        var obj = async.shift();
        if (obj[0] =="ready") {
            $(obj[1]);
        }else if (obj[0] =="load"){
            $(window).load(obj[1]);
        }
    }

    async = {
        push: function(param){
            if (param[0] =="ready") {
                $(param[1]);
            }else if (param[0] =="load"){
                $(window).load(param[1]);
            }
        }
    };
})();