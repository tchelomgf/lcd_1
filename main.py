LCD1IN8.LCD_Init()
LCD1IN8.LCD_SetBL(330)
LCD1IN8.LCD_Clear()
LCD1IN8.LCD_ClearBuf()
LCD1IN8.draw_point(41, 18, 14270, DOT_PIXEL.DOT_PIXEL_4)
LCD1IN8.draw_line(0,
    128,
    160,
    1,
    14798,
    DOT_PIXEL.DOT_PIXEL_2,
    LINE_STYLE.LINE_DOTTED)
LCD1IN8.draw_rectangle(21,
    42,
    56,
    67,
    29596,
    DRAW_FILL.DRAW_EMPTY,
    DOT_PIXEL.DOT_PIXEL_1)
LCD1IN8.draw_circle(70,
    55,
    9,
    19555,
    DRAW_FILL.DRAW_EMPTY,
    DOT_PIXEL.DOT_PIXEL_1)
LCD1IN8.dis_string(56, 38, "hello world !!!", 28011)
LCD1IN8.LCD_Display()