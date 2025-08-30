scoreboard objectives add first_gen dummy
execute unless score first_gen first_gen matches 1 run place template backrooms:base_room ~-23 ~-23 ~-23

scoreboard players set first_gen first_gen 1

tp @a[tag=!first] -1000 23 -1000
execute as @a at @s if block ~ ~-3 ~ kubejs:carpet run tag @a[tag=!first] add first