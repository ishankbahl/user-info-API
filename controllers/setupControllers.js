module.exports=function(app){
    app.get("/api",function(req,res){
        var ip = req.headers['x-forwarded-for'] || 
        req.connection.remoteAddress || 
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;
        var lang=req.headers["accept-language"];
        var browser=req.headers["user-agent"];
        var index1=browser.indexOf("(");
        var index2=browser.indexOf(")",index1+1);
        if(lang.indexOf(",")!==-1)
            lang=lang.slice(0,lang.indexOf(","));
        browser=browser.slice(index1+1,index2);
        res.send(JSON.stringify({
            ipaddress:ip,
            language:lang,
            software:browser
        }));
    });
};