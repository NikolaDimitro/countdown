for (let индекс = 0; индекс <= 2; индекс++) {
    music.playTone(262, music.beat(BeatFraction.Quarter))
    basic.showNumber(3 - индекс)
}
music.playTone(262, music.beat(BeatFraction.Whole))
basic.showString("GO")
basic.forever(function () {
	
})
