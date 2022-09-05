let y = 10
let x = 10
LCD1IN8.LCD_Init()
LCD1IN8.LCD_Clear()
LCD1IN8.LCD_ClearBuf()
LCD1IN8.LCD_SetBL(100)
// LCD1IN8.DrawPoint(
// 41,
// 18,
// 14270,
// DOT_PIXEL.DOT_PIXEL_4
// )
// LCD1IN8.DrawLine(
// 0,
// 128,
// 160,
// 1,
// 14798,
// DOT_PIXEL.DOT_PIXEL_2,
// LINE_STYLE.LINE_DOTTED
// )
// LCD1IN8.DrawRectangle(
// 21,
// 42,
// 56,
// 67,
// 29596,
// DRAW_FILL.DRAW_EMPTY,
// DOT_PIXEL.DOT_PIXEL_1
// )
// LCD1IN8.DrawCircle(
// 70,
// 55,
// 9,
// 19555,
// DRAW_FILL.DRAW_EMPTY,
// DOT_PIXEL.DOT_PIXEL_1
// )
LCD1IN8.DisString(
40,
0,
"hello world !!!",
0
)
LCD1IN8.LCD_Display()

for (let index = 0; index < 400; index++) {
    LCD1IN8.DrawPoint(
    x,
    y,
    0,
    DOT_PIXEL.DOT_PIXEL_4
    )
    x = x + 12
    if (x > (LCD_WIDTH - 4)) {
        y = y + 4
        x = x - (LCD_WIDTH)
    }
    if (y > (LCD_HEIGHT - 4)) {
        y = y - (LCD_HEIGHT)
    }

    LCD1IN8.LCD_Display()
}
