##execute if block ~ ~ ~1 kubejs:floor_tiles run setblock ~ ~ ~1 kubejs:floor_tiles_full

fill ~ ~ ~ ~ ~-3 ~ air
setblock ~ ~-3 ~ antiblocksrechiseled:wool_white
setblock ~ ~-4 ~ repeating_command_block[facing=up]{auto:1b,Command:"execute as @a[distance=..2] run function backrooms:poolrooms_enter"} replace

setblock ~1 ~-1 ~ kubejs:pool_tiles
setblock ~-1 ~-1 ~ kubejs:pool_tiles
setblock ~ ~-1 ~1 kubejs:pool_tiles
setblock ~ ~-1 ~-1 kubejs:pool_tiles

setblock ~1 ~-2 ~ kubejs:pool_tiles
setblock ~-1 ~-2 ~ kubejs:pool_tiles
setblock ~ ~-2 ~1 kubejs:pool_tiles
setblock ~ ~-2 ~-1 kubejs:pool_tiles

playsound minecraft:entity.zombie.attack_iron_door master @a ~ ~ ~ 0.1 1
playsound minecraft:item.armor.equip_netherite master @a ~ ~ ~ 1 0
playsound minecraft:item.axe.scrape master @a ~ ~ ~ 1 0

particle minecraft:campfire_cosy_smoke ~ ~1 ~ 0.3 0.3 0.3 0.01 10 force
particle minecraft:block kubejs:drain ~ ~1 ~ 0.3 0.3 0.3 0.01 10 force

playsound minecraft:ambient.underwater.loop.additions.ultra_rare master @a ~ ~ ~ 1 0
playsound minecraft:ambient.underwater.loop.additions.ultra_rare master @a ~ ~ ~ 1 0
playsound minecraft:ambient.underwater.loop.additions.ultra_rare master @a ~ ~ ~ 1 0
playsound minecraft:ambient.underwater.loop.additions.ultra_rare master @a ~ ~ ~ 1 0
playsound minecraft:ambient.underwater.loop.additions.ultra_rare master @a ~ ~ ~ 1 0
playsound minecraft:ambient.underwater.loop.additions.ultra_rare master @a ~ ~ ~ 1 0