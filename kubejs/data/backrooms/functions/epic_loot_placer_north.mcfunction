scoreboard players set max RNG_Constant 31
function backrooms:rng

execute if score RNG RNG_Variable matches 0..9 run setblock ~ ~ ~ air

execute if score RNG RNG_Variable matches 11..20 run setblock ~ ~ ~ refurbished_furniture:computer[facing=north]
execute if score RNG RNG_Variable matches 21..30 run setblock ~ ~ ~ refurbished_furniture:television[facing=north]

#execute if score RNG RNG_Variable matches 90..94 run setblock ~ ~ ~ minecraft:lightning_rod
#execute if score RNG RNG_Variable matches 95..99 run setblock ~ ~ ~ immersiveengineering:coil_lv
#execute if score RNG RNG_Variable matches 100..104 run setblock ~ ~ ~ miners_delight:copper_pot
#execute if score RNG RNG_Variable matches 105..109 run setblock ~ ~ ~ minecraft:weathered_copper
#execute if score RNG RNG_Variable matches 110..114 run setblock ~ ~ ~ minecraft:exposed_copper
#execute if score RNG RNG_Variable matches 115..119 run setblock ~ ~ ~ supplementaries:cog_block
#execute if score RNG RNG_Variable matches 120..124 run setblock ~ ~ ~ immersiveengineering:electromagnet

#execute if score RNG RNG_Variable matches 125..127 run setblock ~ ~ ~ farmersdelight:rice_bag
#execute if score RNG RNG_Variable matches 128..129 run setblock ~ ~ ~ thermal:peanut_block
#execute if score RNG RNG_Variable matches 131..133 run setblock ~ ~ ~ farmersdelight:beetroot_crate
#execute if score RNG RNG_Variable matches 135..137 run setblock ~ ~ ~ farmersdelight:tomato_crate
#execute if score RNG RNG_Variable matches 138..140 run setblock ~ ~ ~ thermal:sugar_cane_block