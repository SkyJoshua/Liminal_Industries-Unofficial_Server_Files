scoreboard players add @e[type=marker,name=reality_core] timer 1
scoreboard players add @e[type=marker,name=reality_core] sound 1

#sound
execute at @e[type=marker,name=reality_core,scores={sound=200..}] run playsound mekanism:tile.machine.antiprotonic_nucleosynthesizer master @a ~ ~ ~ 3 0
execute as @e[type=marker,name=reality_core,scores={sound=200..}] run scoreboard players set @s sound 0

#constant
execute at @e[type=marker,name=reality_core,tag=running] run effect give @e[distance=..5] wither 1 9 true
execute at @e[type=marker,name=reality_core,tag=running] run particle supplementaries:rotation_trail_emitter ~ ~ ~ 0 0 0 1 1 force
#execute at @e[type=marker,name=reality_core,tag=running] run particle minecraft:portal ~ ~ ~ 0 0 0 2.5 1 force

#timed<
execute at @e[type=marker,name=reality_core,tag=running,scores={timer=100..}] run particle supplementaries:rotation_trail_emitter ~ ~ ~ 0 0 0 2 1 force

#timed=
execute at @e[type=marker,name=reality_core,tag=running,scores={timer=1}] run playsound mekanism:tile.machine.antiprotonic_nucleosynthesizer master @a ~ ~ ~ 3 0
execute at @e[type=marker,name=reality_core,tag=running,scores={timer=1}] run playsound minecraft:entity.illusioner.prepare_blindness master @a ~ ~ ~ 1 0
execute at @e[type=marker,name=reality_core,tag=running,scores={timer=1}] run playsound minecraft:block.ender_chest.open master @a ~ ~ ~ 1 0
execute at @e[type=marker,name=reality_core,tag=running,scores={timer=1}] run fill ~ ~ ~ ~ ~ ~ light replace air

execute at @e[type=marker,name=reality_core,tag=running,scores={timer=1}] run execute at @e[type=marker,name=reality_charge,distance=..10] run setblock ~ ~ ~ kubejs:reality_charge_empty
execute at @e[type=marker,name=reality_core,tag=running,scores={timer=1}] run execute at @e[type=marker,name=reality_charge,distance=..10] run playsound minecraft:item.bottle.fill_dragonbreath master @a ~ ~ ~ 1 0
execute at @e[type=marker,name=reality_core,tag=running,scores={timer=1}] run execute at @e[type=marker,name=reality_charge,distance=..10] run particle minecraft:dust_color_transition 1 0 1 5 0 0 0 ~ ~ ~ 0.4 0.4 0.4 0.1 10 force
execute at @e[type=marker,name=reality_core,tag=running,scores={timer=1}] run execute at @e[type=marker,name=reality_charge,distance=..10] run kill @e[type=marker,name=reality_charge,limit=1,sort=nearest]

execute at @e[type=marker,name=reality_core,tag=running,scores={timer=1}] run fill ~4 ~-4 ~ ~4 ~-4 ~ kubejs:reality_controller_running[facing=east] replace kubejs:reality_controller
execute at @e[type=marker,name=reality_core,tag=running,scores={timer=1}] run fill ~-4 ~-4 ~ ~-4 ~-4 ~ kubejs:reality_controller_running[facing=west] replace kubejs:reality_controller
execute at @e[type=marker,name=reality_core,tag=running,scores={timer=1}] run fill ~ ~-4 ~4 ~ ~-4 ~4 kubejs:reality_controller_running[facing=south] replace kubejs:reality_controller
execute at @e[type=marker,name=reality_core,tag=running,scores={timer=1}] run fill ~ ~-4 ~-4 ~ ~-4 ~-4 kubejs:reality_controller_running[facing=north] replace kubejs:reality_controller

execute at @e[type=marker,name=reality_core,tag=running,scores={timer=500}] run function backrooms:reality_burst
execute at @e[type=marker,name=reality_core,tag=running,scores={timer=750}] run function backrooms:reality_burst
execute at @e[type=marker,name=reality_core,tag=running,scores={timer=1000}] run function backrooms:reality_burst
execute at @e[type=marker,name=reality_core,tag=running,scores={timer=1100}] run function backrooms:reality_burst
execute at @e[type=marker,name=reality_core,tag=running,scores={timer=1130}] run function backrooms:reality_burst
execute at @e[type=marker,name=reality_core,tag=running,scores={timer=1160}] run function backrooms:reality_burst
execute at @e[type=marker,name=reality_core,tag=running,scores={timer=1180}] run function backrooms:reality_burst

execute at @e[type=marker,name=reality_core,tag=running,scores={timer=1200..}] run function backrooms:reality_frame_effect