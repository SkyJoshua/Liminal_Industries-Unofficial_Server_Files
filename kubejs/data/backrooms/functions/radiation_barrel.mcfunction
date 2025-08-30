playsound mekanism:item.geiger_medium master @a ~ ~ ~ 1 2
playsound minecraft:entity.zombie.attack_iron_door master @a ~ ~ ~ 1 1
playsound minecraft:block.lava.extinguish master @a ~ ~ ~ 1 0

particle minecraft:dust_color_transition 0 1 0 5 0 1 1 ~ ~ ~ 5 5 5 0.1 100 force
particle minecraft:dust_color_transition 0 1 0 10 0 1 1 ~ ~ ~ 1 2 1 0.1 100 force

summon area_effect_cloud ~ ~ ~ {Particle:"dust_color_transition 0 1 0 1 0 1 1",Radius:1f,RadiusPerTick:0.05f,Duration:150,Effects:[{Id:20,Amplifier:5b,Duration:60,ShowParticles:0b}]}

kill @e[type=marker,tag=radioactive_waste_barrel,distance=..1]