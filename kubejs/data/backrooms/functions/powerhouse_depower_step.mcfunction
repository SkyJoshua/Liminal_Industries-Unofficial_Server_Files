execute at @e[tag=powerhouse_depower,type=marker,limit=1,sort=nearest] run fill ~50 ~ ~50 ~-50 ~ ~-50 kubejs:ceilling_lamp_off replace kubejs:ceilling_lamp
execute at @e[tag=powerhouse_depower,type=marker,limit=1,sort=nearest] run fill ~50 ~ ~50 ~-50 ~ ~-50 kubejs:ceilling_lamp_off replace kubejs:ceilling_lamp2
execute at @e[tag=powerhouse_depower,type=marker,limit=1,sort=nearest] run fill ~50 ~ ~50 ~-50 ~ ~-50 minecraft:air replace minecraft:light

execute at @e[tag=powerhouse_depower,type=marker,limit=1,sort=nearest] run tp @e[tag=powerhouse_depower,type=marker,limit=1,sort=nearest] ~ ~1 ~
scoreboard players add @e[tag=powerhouse_depower,type=marker,limit=1,sort=nearest] powerhouse_depower 1

kill @e[tag=powerhouse_depower,type=marker,scores={powerhouse_depower=100..}]