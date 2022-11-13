def on_button_pressed_a():
    global micro_object
    micro_object = randint(0, 3)
    if 2 == micro_object:
        music.play_tone(392, music.beat(BeatFraction.DOUBLE))
        basic.show_icon(IconNames.YES)
    else:
        music.play_tone(185, music.beat(BeatFraction.WHOLE))
        basic.show_icon(IconNames.NO)
input.on_button_pressed(Button.A, on_button_pressed_a)

micro_object = 0
object2 = 0
micro_object = 0