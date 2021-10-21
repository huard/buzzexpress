input.onButtonPressed(Button.A, function () {
    radio.sendString("A")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("B")
    basic.clearScreen()
})
radio.onReceivedValue(function (name, value) {
    if (name == "maitre") {
        if (true) {
            basic.showIcon(IconNames.SmallSquare)
        } else {
            basic.showIcon(IconNames.No)
        }
    }
})
let groupe = 1
radio.setGroup(groupe)
