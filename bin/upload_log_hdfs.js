var schedule = require('node-schedule');
var exec = require('child_process').exec;

function scheduleCronstyle() {
  schedule.scheduleJobs('30 * * * * *', function() {
    console.log('object');
  });
}

scheduleCronstyle();