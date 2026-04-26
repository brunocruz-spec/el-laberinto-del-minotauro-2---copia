enum ActionKind {
    Walking,
    Idle,
    Jumping
}
info.onCountdownEnd(function () {
    game.gameOver(false)
    game.setGameOverEffect(false, effects.blizzard)
    game.setGameOverPlayable(false, music.melodyPlayable(music.wawawawaa), true)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    info.stopCountdown()
    game.splash("Has ganado el segundo nivel", "SU3RT3")
    tiles.setCurrentTilemap(tilemap`nivel2`)
    tiles.placeOnRandomTile(mySprite, assets.tile`miMosaico`)
    info.startCountdown(90)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairEast, function (sprite, location) {
    info.stopCountdown()
    game.splash("Has ganado el primer nivel ")
    tiles.setCurrentTilemap(tilemap`nivel4`)
    tiles.placeOnRandomTile(mySprite, assets.tile`miMosaico`)
    info.startCountdown(60)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    info.stopCountdown()
    game.showLongText("Último nivel", DialogLayout.Bottom)
    tiles.setCurrentTilemap(tilemap`nivel6`)
    tiles.placeOnRandomTile(mySprite, assets.tile`miMosaico`)
    info.startCountdown(10)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLarge, function (sprite, location) {
    info.stopCountdown()
    game.showLongText(" Nunca dije que seria fácil ", DialogLayout.Full)
    game.showLongText("Y tampoco dije que un nivel no tendría partes ", DialogLayout.Full)
    game.showLongText("Bienvenido a la parte 1 ", DialogLayout.Bottom)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    info.stopCountdown()
    game.splash("Has ganado el tercer nivel ", "Corre!")
    tiles.setCurrentTilemap(tilemap`nivel3`)
    tiles.placeOnRandomTile(mySprite, assets.tile`miMosaico`)
    info.startCountdown(35)
})
let mySprite: Sprite = null
mySprite = Render.getRenderSpriteVariable()
Render.setViewAngleInDegree(90)
controller.moveSprite(mySprite, 100, 100)
tiles.setTilemap(tilemap`nivel1`)
tiles.placeOnRandomTile(mySprite, assets.tile`miMosaico`)
scene.cameraFollowSprite(mySprite)
info.startCountdown(30)
forever(function () {
    music.play(music.createSong(hex`0078000408020800001c00010a006400f401640000040000000000000000000000000005000004060000000400012c01001c000f05001202c102c20100040500280000006400280003140006020004060028002c00011e03001c0001dc00690000045e0100040000000000000000000005640001040003060000000400012904001c00100500640000041e000004000000000000000000000000000a0400040c0008000c00012420002400012505001c000f0a006400f4010a0000040000000000000000000000000000000002060010001400012907001c00020a006400f401640000040000000000000000000000000000000003060010001400012c08001c000e050046006603320000040a002d0000006400140001320002010002060018001c00012c09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8000600200021000103`), music.PlaybackMode.UntilDone)
})
forever(function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . . f e 4 d d d d 4 e f e . . 
        . . f e f 2 2 2 2 e d d 4 e . . 
        . . e 4 f 2 2 2 2 e d d e . . . 
        . . . . f 4 4 5 5 f e e . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f e e 2 2 2 2 2 2 e f f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . e f e 4 d d d d 4 e f . . . 
        . . e 4 d d e 2 2 2 2 f e f . . 
        . . . e d d e 2 2 2 2 f 4 e . . 
        . . . . e e f 5 5 4 4 f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . f f f . . . . 
        `],
    500,
    true
    )
})
