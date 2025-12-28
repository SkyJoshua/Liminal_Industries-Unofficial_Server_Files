tag @s add splash
execute in backrooms:poolrooms run tp @s 0 65 0

scoreboard objectives add first_pool_gen dummy
execute in backrooms:poolrooms unless score first_pool_gen first_pool_gen matches 1 run place template backrooms:starting_pool -23 24 -23
scoreboard players set first_pool_gen first_pool_gen 1


