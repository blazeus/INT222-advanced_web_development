var i = 0 
var timeFunc = () =>{
    console.log(i++)
    setInterval(timeFunc,1000)
}

exports.timer = timeFunc()