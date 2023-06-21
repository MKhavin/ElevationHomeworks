const returnTime = function (time) {
    alert('The current time is: ' + time)
}

const getTime = function(callback) {
    const currentTime = new Date()

    callback(currentTime)
}

getTime(returnTime)
