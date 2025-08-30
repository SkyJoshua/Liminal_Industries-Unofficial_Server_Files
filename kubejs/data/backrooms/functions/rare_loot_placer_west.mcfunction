scoreboard players set max RNG_Constant 15
function backrooms:rng

execute if score RNG RNG_Variable matches 1 run setblock ~ ~ ~ refurbished_furniture:recycle_bin
execute if score RNG RNG_Variable matches 2 run setblock ~ ~ ~ refurbished_furniture:light_toaster[facing=east]
execute if score RNG RNG_Variable matches 3 run setblock ~ ~ ~ minecraft:jukebox
execute if score RNG RNG_Variable matches 4 run setblock ~ ~ ~ refurbished_furniture:light_stove[facing=west]
execute if score RNG RNG_Variable matches 5 run setblock ~ ~ ~ refurbished_furniture:light_stove[facing=east]
execute if score RNG RNG_Variable matches 6 run setblock ~ ~ ~ refurbished_furniture:light_microwave[facing=east]
execute if score RNG RNG_Variable matches 7 run setblock ~ ~ ~ refurbished_furniture:red_cooler[facing=east]
execute if score RNG RNG_Variable matches 8 run setblock ~ ~ ~ refurbished_furniture:light_electricity_generator[facing=east]
execute if score RNG RNG_Variable matches 9 run setblock ~ ~ ~ refurbished_furniture:oak_drawer[facing=east]
execute if score RNG RNG_Variable matches 10 run function backrooms:weird_chair
execute if score RNG RNG_Variable matches 11 run setblock ~ ~ ~ refurbished_furniture:plate
execute if score RNG RNG_Variable matches 12 run setblock ~ ~ ~ moyai:moyai[facing=west]
execute if score RNG RNG_Variable matches 13 run setblock ~ ~ ~ kubejs:batteries
execute if score RNG RNG_Variable matches 14 run function backrooms:wet_spot