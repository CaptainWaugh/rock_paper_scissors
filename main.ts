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
    if (2 == micro_object) {
        music.playTone(392, music.beat(BeatFraction.Double))
        basic.showIcon(IconNames.Yes)
    } else if (0 == micro_object) {
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
})
input.onButtonPressed(Button.AB, function () {
    micro_object = randint(0, 2)
    show_object(micro_object)
    if (1 == micro_object) {
        music.playTone(392, music.beat(BeatFraction.Double))
        basic.showIcon(IconNames.Yes)
    } else if (2 == micro_object) {
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
})
input.onButtonPressed(Button.B, function () {
    micro_object = randint(0, 2)
    show_object(micro_object)
    if (0 == micro_object) {
        music.playTone(392, music.beat(BeatFraction.Double))
        basic.showIcon(IconNames.Yes)
    } else if (1 == micro_object) {
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
})
let micro_object = 0
let object = 0
micro_object = 0
