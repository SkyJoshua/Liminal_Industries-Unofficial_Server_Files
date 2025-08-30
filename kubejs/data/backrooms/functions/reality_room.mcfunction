summon marker ~ ~1 ~ {CustomName:'{"text":"reality_charge"}'}

execute if block ~ ~ ~ kubejs:reality_controller[facing=north] run summon marker ~ ~4.5 ~4 {CustomName:'{"text":"reality_core"}'}
execute if block ~ ~ ~ kubejs:reality_controller[facing=east] run summon marker ~-4 ~4.5 ~ {CustomName:'{"text":"reality_core"}'}
execute if block ~ ~ ~ kubejs:reality_controller[facing=south] run summon marker ~ ~4.5 ~-4 {CustomName:'{"text":"reality_core"}'}
execute if block ~ ~ ~ kubejs:reality_controller[facing=west] run summon marker ~4 ~4.5 ~ {CustomName:'{"text":"reality_core"}'}

execute at @e[type=marker,name=reality_core,distance=..10] run tag @e[type=marker,limit=1,sort=nearest] add room
execute at @e[type=marker,name=reality_core,distance=..10] run summon marker ~4 ~-4 ~4 {CustomName:'{"text":"frame_detector"}'}
execute at @e[type=marker,name=frame_detector] run function backrooms:reality_check