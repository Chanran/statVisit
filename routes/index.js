var express = require('express')
var router = express.Router()
var fs = require('fs')
var path = require('path')

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', {
        title: 'Express',
        movies: [
            {
                id: 1,
                name: '摔跤吧！爸爸',
                img: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1262902868,1895906112&fm=58&s=C5000CF784C264FF5F8510280300B05A'
            },
            {
                id: 2,
                name: '加勒比海盗',
                img: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1622166766,2248716231&fm=58&s=1323E8A4C44238EC70A404130300D0DB'
            },
            {
                id: 3,
                name: '镜子',
                img: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1344035166,1599751198&fm=58&s=613838D342AC58AA53EDAD5B030080B3'
            },
            {
                id: 4,
                name: '银河护卫队',
                img: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1333225910,1873020219&fm=58&s=FF52608CC043BCF776A01E920300D09C'
            },
            {
                id: 5,
                name: '速度与激情8',
                img: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1427074105,2015028670&fm=58&s=4A81E90848B90FA13C11A4CC0300C0B3'
            },
            {
                id: 6,
                name: '美女与野兽',
                img: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1425391060,1911810256&fm=58&s=7D7D04C6C00B64FC5C9F75370300D018'
            },
            {
                id: 7,
                name: '当幸福来敲门',
                img: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1438955885,1958798375&fm=58&s=6F049943DCFA17BD8E35491C03001042'
            },
            {
                id: 8,
                name: '海上钢琴声',
                img: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=710333013,1270143541&fm=58&s=B3367084505635CC4EA749110300D09A'
            },
            {
                id: 9,
                name: '三傻大闹宝莱坞',
                img: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1502063774,1868323843&fm=58&s=1B95F7A644014CED18FFB37303007079'
            },
            {
                id: 10,
                name: '龙猫',
                img: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1453020128,1636615209&fm=58&s=66D27984C0570FDE3465E48C0300E097'
            }
        ]
    })
})

router.post('/stat',function(req,res) {
    var id = req.body.id
    var name = req.body.name
    var time = req.body.time
    var ip = req.connection.remoteAddress
    var url = '../log/' + req.body.logTime + '.log'

    var data = ip + ' click id=' + id + ' name=' + name + ' at ' + time + '\r\n'
    fs.writeFile(path.join(__dirname, url), data, {flag: 'a'}, function(err) {
        if(err) {
            console.log(err)
        }
        console.log('The file was saved!')
        res.json({
            code: 200
        })
    })
})

module.exports = router
