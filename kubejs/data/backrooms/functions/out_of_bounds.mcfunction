execute as @a run execute store result score @s y run data get entity @s Pos[1]
execute at @a[gamemode=survival,scores={y=48..}] in minecraft:overworld run function backrooms:respawn_player