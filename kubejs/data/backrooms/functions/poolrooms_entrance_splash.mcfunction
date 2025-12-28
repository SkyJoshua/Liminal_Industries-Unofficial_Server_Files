playsound minecraft:entity.player.splash.high_speed master @a ~ ~ ~ 1 0
playsound minecraft:entity.player.splash master @a ~ ~ ~ 1 1
playsound minecraft:entity.player.swim master @a ~ ~ ~ 1 0
playsound minecraft:ambient.underwater.enter master @a ~ ~ ~ 1 0

playsound minecraft:ambient.cave master @a ~ ~30 ~ 35 0
playsound minecraft:ambient.cave master @a ~ ~30 ~ 35 0
playsound minecraft:ambient.cave master @a ~ ~30 ~ 35 0
playsound minecraft:ambient.cave master @a ~ ~30 ~ 35 0
playsound minecraft:ambient.cave master @a ~ ~30 ~ 35 0

particle particular:water_splash_emitter 0.5 43.9 0.5 0 0 0 1.5 30 force
particle bubble 0.5 41 0.5 2 2 2 0 2000 force
particle minecraft:falling_water ~ ~1 ~ 2 5 2 1 100 force

tag @a[distance=..12] remove splash