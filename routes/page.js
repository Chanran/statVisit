var express = require('express');
var moment = require('moment')
var router = express.Router();
// 导入MySQL模块
var mysql = require('mysql');
var dbConfig = require('../db/dbConfig');
var pageSQL = require('../db/pagesql');
// 使用DBConfig.js的配置信息创建一个MySQL连接池
var pool = mysql.createPool(dbConfig.mysql);

router.get('/', function (req, res, next) {
    // 从连接池获取连接 
    pool.getConnection(function (err, connection) {
        // 获取前台页面传过来的参数  
        var param = req.query || req.params;
        // 建立连接 增加一个用户信息 
        var pvToday = 0;
        var uvToday = 0;
        var pvYesterday = 0;
        var uvYesterday = 0;
        var pvBeforeYesterday = 0;
        var uvBeforeYesterday = 0;
        var machineNum1 = []
        var machineNum2 = []
        var machineNum3 = []
        var j, len
        connection.query(pageSQL.queryAll, function (err, result) {
            if (result) {
                var momentDate = moment(Date.now()).format('YYYY-MM-DD'),
                    yesterday = moment().subtract(1, 'days').format('YYYY-MM-DD'),
                    beforeYesterday = moment().subtract(2, 'days').format('YYYY-MM-DD')
                var length = result.length
                for (var i = 0; i < length; i++) {
                    // console.log(result[i].log_text.split(" "))
                    console.log(result[i].log_text.split(" ")[0].split("::ffff:")[1])
                    console.log(result[i].log_text.split(" ")[5])
                    if (moment(result[i].log_text.split(" ")[5]).isSame(momentDate)) {
                        pvToday++;
                        len = machineNum1.length
                        if (len) {
                            for (j = 0; j < len; j++) {
                                if (machineNum1[j] != result[i].log_text.split(" ")[0].split("::ffff:")[1]) {
                                    machineNum1.push(result[i].log_text.split(" ")[0].split("::ffff:")[1])
                                }
                                console.log('machineNum1');
                                console.log(machineNum1);
                            }
                        } else {
                            machineNum1.push(result[i].log_text.split(" ")[0].split("::ffff:")[1])
                        }
                    } else if (moment(result[i].log_text.split(" ")[5]).isSame(yesterday)) {
                        pvYesterday++;
                        len = machineNum2.length
                        if (len) {
                            for (j = 0; j < len; j++) {
                                if (machineNum2[j] != result[i].log_text.split(" ")[0].split("::ffff:")[1]) {
                                    machineNum2.push(result[i].log_text.split(" ")[0].split("::ffff:")[1])
                                }
                                console.log('machineNum2');
                                console.log(machineNum2);
                            }
                        } else {
                            machineNum2.push(result[i].log_text.split(" ")[0].split("::ffff:")[1])
                        }

                    } else if (moment(result[i].log_text.split(" ")[5]).isSame(beforeYesterday)) {
                        pvBeforeYesterday++;
                        len = machineNum3.length
                        if (len) {
                            for (j = 0; j < len; j++) {
                                if (machineNum3[j] != result[i].log_text.split(" ")[0].split("::ffff:")[1]) {
                                    machineNum3.push(result[i].log_text.split(" ")[0].split("::ffff:")[1])
                                }
                                console.log('machineNum3');
                                console.log(machineNum3);
                            }
                        } else {
                            machineNum3.push(result[i].log_text.split(" ")[0].split("::ffff:")[1])
                        }

                    }
                }
                console.log(momentDate)
                console.log(moment().subtract(1, 'days').format('YYYY-MM-DD'))
                console.log(moment().subtract(2, 'days').format('YYYY-MM-DD'))
                console.log(moment(momentDate).isSame(momentDate));
                res.render('page', {
                    pvToday: pvToday,
                    uvToday: uvToday,
                    pvYesterday: pvYesterday,
                    uvYesterday: uvYesterday,
                    pvBeforeYesterday: pvBeforeYesterday,
                    uvBeforeYesterday: uvBeforeYesterday,
                    machineNum1: machineNum1.length,
                    machineNum2: machineNum2.length,
                    machineNum3: machineNum3.length
                })

            }


            // 释放连接  
            connection.release();

        });
    });
});

module.exports = router;