scoreboard players add @e[type=marker,tag=scrubber] catalyst_death 1

execute as @e[type=marker,tag=scrubber] at @s if block ~ ~ ~ kubejs:sculk_scrubber if score @s catalyst_death matches 1 run setblock ~ ~ ~ kubejs:sculked_sculk_scrubber

execute as @e[type=marker,tag=scrubber] at @s if block ~ ~ ~ kubejs:sculked_sculk_scrubber if score @s catalyst_death matches 1 run playsound minecraft:entity.warden.death master @a ~ ~ ~ 1 0
execute as @e[type=marker,tag=scrubber] at @s if block ~ ~ ~ kubejs:sculked_sculk_scrubber if score @s catalyst_death matches 1 run playsound minecraft:block.respawn_anchor.charge master @a ~ ~ ~ 1 0
execute as @e[type=marker,tag=scrubber] at @s if block ~ ~ ~ kubejs:sculked_sculk_scrubber if score @s catalyst_death matches 1 run particle minecraft:sonic_boom ~ ~ ~ 0 0 0 0.1 1 force

execute as @e[type=marker,tag=scrubber] at @s if block ~ ~ ~ kubejs:sculked_sculk_scrubber if score @s catalyst_death matches 50 run fill ~1 ~20 ~1 ~-1 ~-1 ~-1 kubejs:porous_stone replace #kubejs:block_sculk
execute as @e[type=marker,tag=scrubber] at @s if block ~ ~ ~ kubejs:sculked_sculk_scrubber if score @s catalyst_death matches 100 run fill ~2 ~20 ~2 ~-2 ~-2 ~-2 kubejs:porous_stone replace #kubejs:block_sculk
execute as @e[type=marker,tag=scrubber] at @s if block ~ ~ ~ kubejs:sculked_sculk_scrubber if score @s catalyst_death matches 150 run fill ~3 ~20 ~3 ~-3 ~-3 ~-3 kubejs:porous_stone replace #kubejs:block_sculk
execute as @e[type=marker,tag=scrubber] at @s if block ~ ~ ~ kubejs:sculked_sculk_scrubber if score @s catalyst_death matches 200 run fill ~4 ~20 ~4 ~-4 ~-4 ~-4 kubejs:porous_stone replace #kubejs:block_sculk
execute as @e[type=marker,tag=scrubber] at @s if block ~ ~ ~ kubejs:sculked_sculk_scrubber if score @s catalyst_death matches 250 run fill ~5 ~20 ~5 ~-5 ~-5 ~-5 kubejs:porous_stone replace #kubejs:block_sculk

execute as @e[type=marker,tag=scrubber] at @s if block ~ ~ ~ kubejs:sculked_sculk_scrubber if score @s catalyst_death matches 50 run fill ~1 ~20 ~1 ~-1 ~-1 ~-1 air replace sculk_vein
execute as @e[type=marker,tag=scrubber] at @s if block ~ ~ ~ kubejs:sculked_sculk_scrubber if score @s catalyst_death matches 100 run fill ~2 ~20 ~2 ~-2 ~-2 ~-2 air replace sculk_vein
execute as @e[type=marker,tag=scrubber] at @s if block ~ ~ ~ kubejs:sculked_sculk_scrubber if score @s catalyst_death matches 150 run fill ~3 ~20 ~3 ~-3 ~-3 ~-3 air replace sculk_vein
execute as @e[type=marker,tag=scrubber] at @s if block ~ ~ ~ kubejs:sculked_sculk_scrubber if score @s catalyst_death matches 200 run fill ~4 ~20 ~4 ~-4 ~-4 ~-4 air replace sculk_vein
execute as @e[type=marker,tag=scrubber] at @s if block ~ ~ ~ kubejs:sculked_sculk_scrubber if score @s catalyst_death matches 250 run fill ~5 ~20 ~5 ~-5 ~-5 ~-5 air replace sculk_vein

execute as @e[type=marker,tag=scrubber] at @s if block ~ ~ ~ kubejs:sculked_sculk_scrubber if score @s catalyst_death matches 150 run fill ~5 ~20 ~5 ~-5 ~-5 ~-5 air replace #kubejs:soft_sculk
execute as @e[type=marker,tag=scrubber] at @s if block ~ ~ ~ kubejs:sculked_sculk_scrubber if score @s catalyst_death matches 150 run fill ~5 ~20 ~5 ~-5 ~-5 ~-5 air replace kubejs:sculk_shroom
execute as @e[type=marker,tag=scrubber] at @s if block ~ ~ ~ kubejs:sculked_sculk_scrubber if score @s catalyst_death matches 150 run fill ~5 ~20 ~5 ~-5 ~-5 ~-5 air replace kubejs:sculk_tendrils

execute as @e[type=marker,tag=scrubber] at @s if block ~ ~ ~ kubejs:sculked_sculk_scrubber if score @s catalyst_death matches 50 run function backrooms:sculk_scrubber_effect
execute as @e[type=marker,tag=scrubber] at @s if block ~ ~ ~ kubejs:sculked_sculk_scrubber if score @s catalyst_death matches 100 run function backrooms:sculk_scrubber_effect
execute as @e[type=marker,tag=scrubber] at @s if block ~ ~ ~ kubejs:sculked_sculk_scrubber if score @s catalyst_death matches 150 run function backrooms:sculk_scrubber_effect
execute as @e[type=marker,tag=scrubber] at @s if block ~ ~ ~ kubejs:sculked_sculk_scrubber if score @s catalyst_death matches 200 run function backrooms:sculk_scrubber_effect
execute as @e[type=marker,tag=scrubber] at @s if block ~ ~ ~ kubejs:sculked_sculk_scrubber if score @s catalyst_death matches 250 run function backrooms:sculk_scrubber_effect

execute as @e[type=marker,tag=scrubber] at @s if score @s catalyst_death matches 300.. run playsound minecraft:block.respawn_anchor.deplete master @a ~ ~ ~ 1 0
execute as @e[type=marker,tag=scrubber] at @s if score @s catalyst_death matches 300.. run kill @s