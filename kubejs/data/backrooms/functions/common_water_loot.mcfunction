scoreboard players set max RNG_Constant 4
function backrooms:rng

execute if score RNG RNG_Variable matches 1 run setblock ~ ~ ~ water

execute if score RNG RNG_Variable matches 2 run setblock ~ ~ ~ mekanism:radioactive_waste_barrel
execute if score RNG RNG_Variable matches 2 run summon marker ~ ~0.5 ~ {Tags:["radioactive_waste_barrel"]}

execute if score RNG RNG_Variable matches 3 run setblock ~ ~ ~ refurbished_furniture:light_freezer
execute if score RNG RNG_Variable matches 3 run setblock ~ ~1 ~ refurbished_furniture:light_fridge
