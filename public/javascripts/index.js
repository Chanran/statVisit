$('img').click(function(e) {
    var id = e.target.name;
    var name = e.target.alt;
    var time = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
    var logTime = moment(Date.now()).format('YYYYMMDD')
    console.log(moment(Date.now()).format('YYYYMMDD'))
    $.post('/index/stat',{        
        "id": id,
        "name": name,
        'time': time,
        'logTime': logTime
    },
    function(data, status) {
        console.log("Data: " + data + "\nStatus: " + status)
    })
})