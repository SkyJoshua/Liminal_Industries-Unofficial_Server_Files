execute at @e[type=ravager] if block ~2 ~ ~ #kubejs:ravager_whitelist run playsound entity.wither.break_block master @a ~ ~ ~ 1 0
execute at @e[type=ravager] if block ~2 ~ ~ #kubejs:ravager_whitelist run particle campfire_signal_smoke ~ ~1 ~ 2 1 2 0.001 30 force
execute at @e[type=ravager] if block ~-2 ~ ~ #kubejs:ravager_whitelist run playsound entity.wither.break_block master @a ~ ~ ~ 1 0
execute at @e[type=ravager] if block ~-2 ~ ~ #kubejs:ravager_whitelist run particle campfire_signal_smoke ~ ~1 ~ 2 1 2 0.001 30 force
execute at @e[type=ravager] if block ~ ~ ~2 #kubejs:ravager_whitelist run playsound entity.wither.break_block master @a ~ ~ ~ 1 0
execute at @e[type=ravager] if block ~ ~ ~2 #kubejs:ravager_whitelist run particle campfire_signal_smoke ~ ~1 ~ 2 1 2 0.001 30 force
execute at @e[type=ravager] if block ~ ~ ~-2 #kubejs:ravager_whitelist run playsound entity.wither.break_block master @a ~ ~ ~ 1 0
execute at @e[type=ravager] if block ~ ~ ~-2 #kubejs:ravager_whitelist run particle campfire_signal_smoke ~ ~1 ~ 2 1 2 0.001 30 force

execute at @e[type=ravager] run fill ~2 ~2 ~2 ~-2 ~-2 ~-2 air replace #kubejs:ravager_whitelist