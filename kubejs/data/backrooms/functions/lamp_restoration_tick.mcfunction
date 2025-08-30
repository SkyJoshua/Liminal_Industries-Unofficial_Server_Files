execute as @e[type=marker,tag=light_fix] at @s run setblock ~ ~ ~ minecraft:light

execute as @e[type=marker,tag=light_fix] at @s unless block ~ ~-1 ~ minecraft:air run fill ~ ~ ~ ~ ~5 ~ minecraft:air replace minecraft:light
execute as @e[type=marker,tag=light_fix] at @s unless block ~ ~-1 ~ minecraft:air run kill @s

execute as @e[type=marker,tag=light_fix] at @s if block ~ ~-1 ~ minecraft:air run tp @s ~ ~-1 ~