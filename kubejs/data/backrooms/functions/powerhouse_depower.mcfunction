execute as @e[distance=..1,type=marker,tag=circuit_breaker,limit=1,sort=nearest] at @s run playsound immersiveengineering:chute master @a ~ ~ ~ 1 0
execute as @e[distance=..1,type=marker,tag=circuit_breaker,limit=1,sort=nearest] at @s run particle minecraft:firework ~ ~ ~ 0 0 0 0.2 50 force
execute as @e[distance=..1,type=marker,tag=circuit_breaker,limit=1,sort=nearest] at @s run particle minecraft:campfire_signal_smoke ~ ~0.3 ~ 0.3 0.3 0.3 0 5 force
execute as @e[distance=..1,type=marker,tag=circuit_breaker,limit=1,sort=nearest] at @s run playsound immersiveengineering:electromagnet master @a ~ ~ ~ 1 0

tag @e[distance=..1,type=marker,tag=circuit_breaker,limit=1,sort=nearest] add powerhouse_depower
tp @e[type=marker,tag=powerhouse_depower] ~ 0 ~