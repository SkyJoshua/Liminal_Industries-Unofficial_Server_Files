execute at @e[type=creeper] as @a[gamemode=survival,limit=1,sort=nearest] if entity @s[distance=..4] run scoreboard players add @e[type=creeper,limit=1,sort=nearest] creeper_fuse 1
execute at @e[type=creeper] as @a[gamemode=survival,limit=1,sort=nearest] if entity @s[distance=4..] run scoreboard players set @e[type=creeper,limit=1,sort=nearest] creeper_fuse 0


execute at @e[type=creeper,scores={creeper_fuse=1..}] run particle minecraft:dust_color_transition 0.1 0.1 0.1 2 0 0.6 0.6 ~ ~ ~ 0.5 1 0.5 0.1 4 force
execute at @e[type=creeper,scores={creeper_fuse=1..}] run playsound block.sculk.break master @a ~ ~ ~ 1 2
execute at @e[type=creeper,scores={creeper_fuse=20..}] run function backrooms:creeper_effect
execute at @e[type=creeper,nbt={ignited:1b}] run function backrooms:creeper_effect