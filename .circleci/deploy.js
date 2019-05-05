var FtpDeploy = require('ftp-deploy');
var ftpDeploy = new FtpDeploy();
 
var config = {
    user: process.env.FTPUSERNAME,
    password: process.env.FTPPASS,
    host: process.env.FTPHOST,
    port: process.env.FTPPORT,
    localRoot: __dirname + "/../dist/",
    remoteRoot: "/public_html/test/",
    include: ['*']
}
    
ftpDeploy.deploy(config, function(err) {
    if (err) console.log(err)
    else console.log('finished');
});