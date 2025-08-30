execute as @e[type=interaction,tag=!dragons_breath] at @s run summon interaction ~ ~-1.5 ~ {width:7f,height:0.2f,Tags:["dragons_breath"]}
execute as @e[type=interaction,tag=!dragons_breath] at @s run playsound minecraft:entity.ender_dragon.growl master @a ~ ~ ~ 1 0.5
execute as @e[type=interaction,tag=!dragons_breath] at @s run particle minecraft:dust_color_transition 1 0 1 5 0.3 0 0.3 ~ ~2 ~ 0.3 0.3 0.3 0 10 force

execute as @e[type=interaction,tag=dragons_breath] at @s run particle dragon_breath ~ ~0.4 ~ 3 0 3 0.01 50 force
execute as @e[type=interaction,tag=dragons_breath] at @s run effect give @e[distance=..5] instant_damage 1 1 true
scoreboard players add @e[type=interaction,tag=dragons_breath] timer 1

kill @e[type=interaction,tag=!dragons_breath]
kill @e[type=interaction,tag=dragons_breath,scores={timer=100..}]
