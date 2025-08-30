scoreboard players set max RNG_Constant 2
function backrooms:rng

execute if score RNG RNG_Variable matches 0 run place template backrooms:sub_void ~ ~ ~
execute if score RNG RNG_Variable matches 1 run place template backrooms:sub_table ~ ~ ~