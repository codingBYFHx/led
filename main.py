def RGB_LED(red,green,blue,nms):
    i_red=red*4
    i_green=green*4
    i_blue=blue*4
    pins.analog_write_pin(AnalogPin.P0,i_red)
    pins.analog_write_pin(AnalogPin.P1,i_green)
    pins.analog_write_pin(AnalogPin.P2,i_blue)

while True:
    RGB_LED(255,0,0,500) 
    RGB_LED(0,255,0,500)
    RGB_LED(0,0,255,500)
    RGB_LED(255,255,0,500)
    RGB_LED(255,0,255,500)
    RGB_LED(192,255,62,500)
    RGB_LED(148,0,211,500)
    RGB_LED(188,238,0,500)
    RGB_LED(0,197,205,500)