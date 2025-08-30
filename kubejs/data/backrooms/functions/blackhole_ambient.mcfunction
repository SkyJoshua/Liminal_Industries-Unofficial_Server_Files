scoreboard players add @e[type=marker,tag=black_hole] sound 1
scoreboard players set @e[type=marker,tag=black_hole,scores={sound=21..}] sound 0
execute as @e[type=marker,tag=black_hole,scores={sound=20}] at @s run playsound minecraft:ambient.crimson_forest.mood master @a ~ ~ ~ 1 0
execute as @e[type=marker,tag=black_hole] at @s run particle minecraft:dust_color_transition 0 0 0 10 0 0 0 ~ ~ ~ 1 1 1 0 1 force



execute as @e[type=marker,tag=black_hole] at @s unless block ~ ~ ~ antiblocksrechiseled:bright_black run kill @s