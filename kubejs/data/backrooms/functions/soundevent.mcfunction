scoreboard players set max RNG_Constant 20
function backrooms:rng
function backrooms:rng
function backrooms:rng

execute if score RNG RNG_Variable matches 1 run playsound minecraft:custom.beep1 ambient @a ~ ~ ~ 10000 1
execute if score RNG RNG_Variable matches 2 run playsound minecraft:custom.train_horn ambient @a ~ ~ ~ 10000 1
execute if score RNG RNG_Variable matches 3 run playsound minecraft:custom.dripping ambient @a ~ ~ ~ 10000 1
execute if score RNG RNG_Variable matches 4 run playsound minecraft:custom.time_loop ambient @a ~ ~ ~ 10000 1
execute if score RNG RNG_Variable matches 5 run playsound minecraft:custom.hum1 ambient @a ~ ~ ~ 10000 1
execute if score RNG RNG_Variable matches 6 run playsound minecraft:custom.hum2 ambient @a ~ ~ ~ 10000 1
execute if score RNG RNG_Variable matches 7 run playsound minecraft:custom.hum3 ambient @a ~ ~ ~ 10000 1
execute if score RNG RNG_Variable matches 8 run playsound minecraft:custom.hum4 ambient @a ~ ~ ~ 10000 1
execute if score RNG RNG_Variable matches 9 run playsound minecraft:custom.hum5 ambient @a ~ ~ ~ 10000 1
execute if score RNG RNG_Variable matches 10 run playsound minecraft:custom.hum6 ambient @a ~ ~ ~ 10000 1
execute if score RNG RNG_Variable matches 11 run playsound minecraft:custom.fan ambient @a ~ ~ ~ 10000 1
execute if score RNG RNG_Variable matches 12 run playsound minecraft:custom.infuser ambient @a ~ ~ ~ 10000 1
execute if score RNG RNG_Variable matches 13 run playsound minecraft:custom.hum1 ambient @a ~ ~ ~ 10000 1
execute if score RNG RNG_Variable matches 14 run playsound minecraft:custom.talking ambient @a ~ ~ ~ 10000 1
execute if score RNG RNG_Variable matches 15 run playsound minecraft:custom.highway ambient @a ~ ~ ~ 10000 1
execute if score RNG RNG_Variable matches 16 run playsound minecraft:custom.greg ambient @a ~ ~ ~ 10000 1
execute if score RNG RNG_Variable matches 17 run playsound minecraft:custom.horror ambient @a ~ ~ ~ 10000 1
execute if score RNG RNG_Variable matches 18 run playsound minecraft:custom.radio ambient @a ~ ~ ~ 10000 1
execute if score RNG RNG_Variable matches 19 run playsound minecraft:custom.ship_horn ambient @a ~ ~ ~ 10000 1

execute as @a[scores={ambience=10000..}] run scoreboard players set @a ambience 0