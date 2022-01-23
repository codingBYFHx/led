function RGB_LED (red: number, green: number, blue: number, nms: number) {
    i_red = red * 4
    i_green = green * 4
    i_blue = blue * 4
    pins.analogWritePin(AnalogPin.P0, i_red)
    pins.analogWritePin(AnalogPin.P1, i_green)
    pins.analogWritePin(AnalogPin.P2, i_blue)
}
let i_blue = 0
let i_green = 0
let i_red = 0
while (true) {
    RGB_LED(255, 0, 0, 1000)
    RGB_LED(0, 255, 0, 1000)
    RGB_LED(0, 0, 255, 1000)
    RGB_LED(255, 255, 0, 1000)
    RGB_LED(255, 0, 255, 1000)
    music.playTone(262, music.beat(BeatFraction.Whole))
    RGB_LED(192, 255, 62, 1000)
    RGB_LED(148, 0, 211, 1000)
    RGB_LED(188, 238, 0, 1000)
    RGB_LED(0, 197, 205, 1000)
    music.playTone(523, music.beat(BeatFraction.Whole))
}
