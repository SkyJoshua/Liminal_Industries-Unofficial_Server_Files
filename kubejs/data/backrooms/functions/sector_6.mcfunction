scoreboard players set max RNG_Constant 3
function backrooms:rng

execute if score RNG RNG_Variable matches 1 run place template backrooms:base_void ~ ~ ~
execute if score RNG RNG_Variable matches 2 run place template backrooms:void5 ~ ~ ~