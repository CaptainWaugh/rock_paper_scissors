function show_object (num: number) {
    if (0 == num) {
        basic.showIcon(IconNames.Target)
    } else if (1 == num) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            # # . # #
            # # . # #
            `)
    }
}
input.onButtonPressed(Button.A, function () {
    micro_object = randint(0, 2)
    show_object(micro_object)
    winlosetie(micro_object, 2, 0)
})
input.onButtonPressed(Button.AB, function () {
    micro_object = randint(0, 2)
    show_object(micro_object)
    winlosetie(micro_object, 1, 2)
})
input.onButtonPressed(Button.B, function () {
    micro_object = randint(0, 2)
    show_object(micro_object)
    winlosetie(micro_object, 0, 1)
})
function winlosetie (micro: number, win: number, tie: number) {
    if (win == micro) {
        music.playTone(392, music.beat(BeatFraction.Double))
        basic.showIcon(IconNames.Yes)
    } else if (tie == micro) {
        basic.showLeds(`
            . . . . .
            # # # # #
            . . . . .
            # # # # #
            . . . . .
            `)
    } else {
        music.playTone(185, music.beat(BeatFraction.Whole))
        basic.showIcon(IconNames.No)
    }
}
let micro_object = 0
let object = 0
micro_object = 0
