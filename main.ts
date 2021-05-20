input.onButtonPressed(Button.A, function () {
    temperature += 1
    basic.showString("" + (temperature))
    if (temperature < 18) {
        basic.showString("C")
    }
    if (temperature >= 18) {
        basic.showString("H")
    }
})
input.onButtonPressed(Button.AB, function () {
    temperature = 15
    basic.showString("" + (temperature))
    if (temperature < 18) {
        basic.showString("C")
    }
})
input.onButtonPressed(Button.B, function () {
    temperature += -1
    basic.showString("" + (temperature))
    if (temperature < 18) {
        basic.showString("C")
    }
    if (temperature >= 18) {
        basic.showString("H")
    }
})
let temperature = 0
temperature = 25
