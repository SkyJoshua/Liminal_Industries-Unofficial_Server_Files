particle minecraft:dust_color_transition 1 0 1 5 0 0 0 ~ ~ ~ 0.5 0.5 0.5 0 20 force
playsound minecraft:entity.illusioner.prepare_blindness master @a ~ ~ ~ 1 0

summon eidolon:wraith ~ ~1 ~ {Health:1f,Tags:["spread"]}
execute positioned ~ ~ ~ run spreadplayers ~ ~ 2 5 under 40 false @e[type=eidolon:wraith,tag=spread]
tag @e[type=eidolon:wraith,tag=spread] remove spread