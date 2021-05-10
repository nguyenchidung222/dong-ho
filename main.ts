input.onButtonPressed(Button.A, function () {
    basic.showString("" + hour + ":" + minute + ":" + sec)
})
let sec = 0
let hour = 0
let minute = 0
minute = 30
hour = 13
sec = 5
basic.forever(function () {
    let second = 0
    sec += 1
    if (second >= 60) {
        sec = 0
        minute += 1
    }
    if (minute >= 60) {
        minute = 0
        hour += 1
    }
    if (hour >= 24) {
        hour = 0
    }
    basic.pause(1000)
})
