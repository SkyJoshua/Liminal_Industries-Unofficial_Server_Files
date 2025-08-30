scoreboard players set max RNG_Constant 26
function backrooms:rng

execute if score RNG RNG_Variable matches 1 run setblock ~ ~ ~ air

execute if score RNG RNG_Variable matches 2 run setblock ~ ~ ~ refurbished_furniture:oak_chair[facing=west]
execute if score RNG RNG_Variable matches 3 run setblock ~ ~ ~ refurbished_furniture:birch_chair[facing=west]
execute if score RNG RNG_Variable matches 4 run setblock ~ ~ ~ refurbished_furniture:jungle_chair[facing=west]
execute if score RNG RNG_Variable matches 5 run setblock ~ ~ ~ refurbished_furniture:spruce_chair[facing=west]
execute if score RNG RNG_Variable matches 6 run setblock ~ ~ ~ refurbished_furniture:oak_table
execute if score RNG RNG_Variable matches 7 run setblock ~ ~ ~ refurbished_furniture:birch_table
execute if score RNG RNG_Variable matches 8 run setblock ~ ~ ~ refurbished_furniture:jungle_table
execute if score RNG RNG_Variable matches 9 run setblock ~ ~ ~ refurbished_furniture:spruce_table
execute if score RNG RNG_Variable matches 10 run setblock ~ ~ ~ refurbished_furniture:oak_chair[facing=west]
execute if score RNG RNG_Variable matches 11 run setblock ~ ~ ~ refurbished_furniture:birch_chair[facing=west]
execute if score RNG RNG_Variable matches 12 run setblock ~ ~ ~ refurbished_furniture:jungle_chair[facing=west]
execute if score RNG RNG_Variable matches 13 run setblock ~ ~ ~ refurbished_furniture:spruce_chair[facing=west]
execute if score RNG RNG_Variable matches 14 run setblock ~ ~ ~ refurbished_furniture:oak_chair[facing=west]
execute if score RNG RNG_Variable matches 15 run setblock ~ ~ ~ mekanism:radioactive_waste_barrel[facing=east]
execute if score RNG RNG_Variable matches 15 run summon marker ~ ~0.5 ~ {Tags:["radioactive_waste_barrel"]}
execute if score RNG RNG_Variable matches 16 run setblock ~ ~ ~ refurbished_furniture:jungle_chair[facing=west]
execute if score RNG RNG_Variable matches 17 run setblock ~ ~ ~ refurbished_furniture:spruce_chair[facing=west]
execute if score RNG RNG_Variable matches 18 unless block ~-1 ~1 ~ minecraft:air run setblock ~ ~1 ~ cfm_circuit_breaker:circuit_breaker[facing=west]
execute if score RNG RNG_Variable matches 18 run function backrooms:circuit_breaker
execute if score RNG RNG_Variable matches 19 run function backrooms:wet_spot
execute if score RNG RNG_Variable matches 20 run function backrooms:pipe_placer
execute if score RNG RNG_Variable matches 21 run setblock ~ ~ ~ refurbished_furniture:television[facing=west]

execute if score RNG RNG_Variable matches 22..25 run function backrooms:rare_loot_placer_east