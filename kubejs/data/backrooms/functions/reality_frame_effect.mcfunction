stopsound @a master mekanism:tile.machine.antiprotonic_nucleosynthesizer

execute at @e[type=marker,name=reality_core,tag=running,limit=1,sort=nearest] run fill ~1 ~1 ~1 ~-1 ~-1 ~-1 air replace antiblocksrechiseled:bright_black
execute at @e[type=marker,name=reality_core,tag=running,limit=1,sort=nearest] run fill ~ ~ ~ ~ ~ ~ air replace light

execute at @e[type=marker,name=reality_core,tag=running,limit=1,sort=nearest] run playsound minecraft:ambient.warped_forest.mood master @a ~ ~ ~ 1 2
execute at @e[type=marker,name=reality_core,tag=running,limit=1,sort=nearest] run playsound minecraft:ambient.warped_forest.mood master @a ~ ~ ~ 1 2
execute at @e[type=marker,name=reality_core,tag=running,limit=1,sort=nearest] run playsound minecraft:ambient.warped_forest.mood master @a ~ ~ ~ 1 2
execute at @e[type=marker,name=reality_core,tag=running,limit=1,sort=nearest] run playsound minecraft:ambient.warped_forest.mood master @a ~ ~ ~ 1 2
execute at @e[type=marker,name=reality_core,tag=running,limit=1,sort=nearest] run playsound minecraft:block.beacon.deactivate master @a ~ ~ ~ 1 0
execute at @e[type=marker,name=reality_core,tag=running,limit=1,sort=nearest] run playsound minecraft:entity.illusioner.mirror_move master @a ~ ~ ~ 1 0
execute at @e[type=marker,name=reality_core,tag=running,scores={timer=1}] run playsound minecraft:block.ender_chest.close master @a ~ ~ ~ 2 0

execute at @e[type=marker,name=reality_core,tag=running,limit=1,sort=nearest] run particle minecraft:dust_color_transition 0 1 1 7 0 0 1 ~ ~ ~ 3 3 3 1 300

execute at @e[type=marker,name=reality_core,tag=running,limit=1,sort=nearest] run fill ~4 ~-4 ~ ~4 ~-4 ~ kubejs:reality_controller[facing=east] replace kubejs:reality_controller_running
execute at @e[type=marker,name=reality_core,tag=running,limit=1,sort=nearest] run fill ~-4 ~-4 ~ ~-4 ~-4 ~ kubejs:reality_controller[facing=west] replace kubejs:reality_controller_running
execute at @e[type=marker,name=reality_core,tag=running,limit=1,sort=nearest] run fill ~ ~-4 ~4 ~ ~-4 ~4 kubejs:reality_controller[facing=south] replace kubejs:reality_controller_running
execute at @e[type=marker,name=reality_core,tag=running,limit=1,sort=nearest] run fill ~ ~-4 ~-4 ~ ~-4 ~-4 kubejs:reality_controller[facing=north] replace kubejs:reality_controller_running

#outcomes
execute at @e[type=marker,name=reality_core,tag=cave,limit=1,sort=nearest] positioned ~-3 ~-3 ~-3 run place template backrooms:reality_cave
execute at @e[type=marker,name=reality_core,tag=nether,limit=1,sort=nearest] positioned ~-3 ~-3 ~-3 run place template backrooms:reality_nether
execute at @e[type=marker,name=reality_core,tag=osmium,limit=1,sort=nearest] positioned ~-3 ~-3 ~-3 run place template backrooms:reality_osmium
execute at @e[type=marker,name=reality_core,tag=grass,limit=1,sort=nearest] positioned ~-3 ~-3 ~-3 run place template backrooms:reality_grass
execute at @e[type=marker,name=reality_core,tag=diamonds,limit=1,sort=nearest] positioned ~-3 ~-3 ~-3 run place template backrooms:reality_diamonds
execute at @e[type=marker,name=reality_core,tag=blaze,limit=1,sort=nearest] positioned ~-3 ~-3 ~-3 run place template backrooms:reality_blaze
execute at @e[type=marker,name=reality_core,tag=pyramid,limit=1,sort=nearest] positioned ~-3 ~-3 ~-3 run place template backrooms:reality_pyramid
execute at @e[type=marker,name=reality_core,tag=end,limit=1,sort=nearest] positioned ~-3 ~-3 ~-3 run place template backrooms:reality_end
execute at @e[type=marker,name=reality_core,tag=room,limit=1,sort=nearest] positioned ~-3 ~-3 ~-3 run place template backrooms:reality_room
execute at @e[type=marker,name=reality_core,tag=portal,limit=1,sort=nearest] positioned ~-3 ~-3 ~-3 run place template backrooms:reality_portal
execute at @e[type=marker,name=reality_core,tag=error,limit=1,sort=nearest] positioned ~-3 ~-3 ~-3 run place template backrooms:reality_error
execute at @e[type=marker,name=reality_core,tag=blackhole,limit=1,sort=nearest] positioned ~ ~ ~ run function backrooms:blackhole

kill @e[type=marker,name=reality_core,limit=1,sort=nearest]