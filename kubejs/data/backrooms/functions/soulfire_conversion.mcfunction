execute at @e[type=item,distance=..2] run particle minecraft:soul_fire_flame ~ ~ ~ 0.2 0.2 0.2 0.01 10 force
execute at @e[type=item,distance=..2] run particle minecraft:sculk_soul ~ ~ ~ 0 0 0 0.1 10 force
execute at @e[type=item,distance=..2] run playsound minecraft:entity.firework_rocket.twinkle_far master @a ~ ~ ~ 1 2
execute at @e[type=item,distance=..2] run playsound minecraft:particle.soul_escape master @a ~ ~ ~ 5 0

execute at @e[type=item,distance=..2] run data merge entity @e[type=item,distance=..2,nbt={Item:{id:"kubejs:empty_fuse"}},limit=1,sort=nearest] {Motion:[0.0,0.0,0.0],Item:{id:"kubejs:soul_fuse"}}
execute at @e[type=item,distance=..2] run data merge entity @e[type=item,distance=..2,nbt={Item:{id:"minecraft:brick"}},limit=1,sort=nearest] {Motion:[0.0,0.0,0.0],Item:{id:"minecraft:nether_brick"}}