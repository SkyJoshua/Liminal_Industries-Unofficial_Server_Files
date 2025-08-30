setblock ~ ~1 ~ kubejs:ceilling_lamp_off

summon marker ~ ~ ~ {Tags:["light_destruction"]}

summon item ~ ~ ~ {Motion:[-0.1,0.0,0.1],Item:{id:"kubejs:fluorescent_tube",Count:1b}}

playsound block.glass.break master @a ~ ~ ~ 1 0
playsound minecraft:entity.firework_rocket.blast master @a ~ ~ ~ 1 2
playsound jeg:item.pistol.silenced_fire master @a ~ ~ ~ 1 1

particle block kubejs:ceilling_lamp ~ ~ ~ 0.5 0.5 0.5 0.01 50 force
particle firework ~ ~ ~ 0.1 0.1 0.1 0.05 5 force
particle minecraft:white_ash ~ ~ ~ 0.5 0.5 0.5 0.1 50 force

kill @e[type=supplementaries:brick_projectile,limit=1,sort=nearest]
