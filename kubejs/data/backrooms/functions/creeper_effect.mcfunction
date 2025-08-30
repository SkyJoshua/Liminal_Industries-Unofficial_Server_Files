playsound minecraft:entity.generic.explode master @a ~ ~ ~ 5 1.5
playsound minecraft:entity.warden.sonic_boom master @a ~ ~ ~ 5 0
playsound minecraft:entity.warden.dig master @a ~ ~ ~ 5 2
playsound minecraft:entity.warden.dig master @a ~ ~ ~ 5 2

particle minecraft:warped_spore ~ ~1 ~ 0 0 0 9 1000 force
particle minecraft:sculk_soul ~ ~1 ~ 0 0 0 0.3 20 force
particle minecraft:sonic_boom ~ ~ ~ 2 2 2 2 20 force
particle minecraft:dust_color_transition 0.1 0.1 0.1 2 0 0.6 0.6 ~ ~ ~ 2 2 2 0.1 200 force

summon tnt ~ ~ ~
#fill ~3 ~3 ~3 ~-3 ~-3 ~-3 kubejs:sculk2 replace #kubejs:backrooms_enviroment
#fill ~3 ~3 ~3 ~-3 ~-3 ~-3 kubejs:sculk_slab replace #minecraft:slabs
place feature minecraft:sculk_patch_deep_dark ~ ~ ~
fill ~5 ~40 ~5 ~-5 ~-5 ~-5 air replace light
fill ~5 ~40 ~5 ~-5 ~-5 ~-5 kubejs:ceilling_lamp_off replace kubejs:ceilling_lamp
effect give @a[distance=..5] darkness 5 0 true

tag @e[type=creeper,limit=1,sort=nearest] add exploded
tp @e[type=creeper,tag=exploded] ~ ~100 ~
kill @e[type=creeper,tag=exploded]