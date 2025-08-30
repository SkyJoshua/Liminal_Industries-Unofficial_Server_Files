scoreboard players set max RNG_Constant 4
function backrooms:rng

execute if score RNG RNG_Variable matches 0 run function backrooms:common_loot_placer_north
execute if score RNG RNG_Variable matches 1 run function backrooms:common_loot_placer_east
execute if score RNG RNG_Variable matches 2 run function backrooms:common_loot_placer_south
execute if score RNG RNG_Variable matches 3 run function backrooms:common_loot_placer_west