execute at @e[type=minecraft:marker,tag=room_node] if entity @p[distance=..100] if block ~24 ~-3 ~ air positioned ~23 ~-23 ~-23 run function backrooms:sector_selection
execute at @e[type=minecraft:marker,tag=room_node] if entity @p[distance=..100] if block ~-24 ~-3 ~ air positioned ~-69 ~-23 ~-23 run function backrooms:sector_selection
execute at @e[type=minecraft:marker,tag=room_node] if entity @p[distance=..100] if block ~ ~-3 ~24 air positioned ~-23 ~-23 ~23 run function backrooms:sector_selection
execute at @e[type=minecraft:marker,tag=room_node] if entity @p[distance=..100] if block ~ ~-3 ~-24 air positioned ~-23 ~-23 ~-69 run function backrooms:sector_selection

execute at @e[type=minecraft:marker,tag=room_node] unless block ~24 ~-3 ~ air unless block ~-24 ~-3 ~ air unless block ~ ~-3 ~24 air unless block ~ ~-3 ~-24 air run kill @e[type=minecraft:marker,tag=room_node,sort=nearest,limit=1]