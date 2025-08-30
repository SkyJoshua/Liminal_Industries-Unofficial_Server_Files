playsound minecraft:custom.metal_pipe_close master @a ~ ~ ~ 10 1
execute as @e[type=item,tag=!clunked,nbt={OnGround:1b}] run tag @s add clunked