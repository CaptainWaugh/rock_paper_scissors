def show_object(num: number):
    if 0 == num:
        basic.show_icon(IconNames.TARGET)
    elif 1 == num:
        basic.show_icon(IconNames.SQUARE)
    else:
        basic.show_leds("""
            # . . . #
                        . # . # .
                        . . # . .
                        # # . # #
                        # # . # #
        """)

def on_button_pressed_a():
    global micro_object
    micro_object = randint(0, 2)
    show_object(micro_object)
    if 2 == micro_object:
        music.play_tone(392, music.beat(BeatFraction.DOUBLE))
        basic.show_icon(IconNames.YES)
    elif 0 == micro_object:
        basic.show_leds("""
            . . . . .
                        # # # # #
                        . . . . .
                        # # # # #
                        . . . . .
        """)
    else:
        music.play_tone(185, music.beat(BeatFraction.WHOLE))
        basic.show_icon(IconNames.NO)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global micro_object
    micro_object = randint(0, 2)
    show_object(micro_object)
    if 1 == micro_object:
        music.play_tone(392, music.beat(BeatFraction.DOUBLE))
        basic.show_icon(IconNames.YES)
    elif 2 == micro_object:
        basic.show_leds("""
            . . . . .
                        # # # # #
                        . . . . .
                        # # # # #
                        . . . . .
        """)
    else:
        music.play_tone(185, music.beat(BeatFraction.WHOLE))
        basic.show_icon(IconNames.NO)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global micro_object
    micro_object = randint(0, 2)
    show_object(micro_object)
    if 0 == micro_object:
        music.play_tone(392, music.beat(BeatFraction.DOUBLE))
        basic.show_icon(IconNames.YES)
    elif 1 == micro_object:
        basic.show_leds("""
            . . . . .
                        # # # # #
                        . . . . .
                        # # # # #
                        . . . . .
        """)
    else:
        music.play_tone(185, music.beat(BeatFraction.WHOLE))
        basic.show_icon(IconNames.NO)
input.on_button_pressed(Button.B, on_button_pressed_b)

micro_object = 0
object2 = 0
micro_object = 0