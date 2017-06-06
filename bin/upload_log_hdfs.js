var schedule = require('node-schedule');
var shell = require('shelljs');
var moment = require('moment');

function scheduleCronstyle() {
  // 每天24点执行一次
  schedule.scheduleJob('0 24 * * * *', function() {
    var today = moment().format('YYYYMMDD');
    var logfile = './log/' + today + '.log';
    // 上传log文件到hdfs
    shell.exec('hdfs dfs -put ' + logfile + ' /log/');
  });
}

scheduleCronstyle();