
# Safe Circle
execute if entity @e[type=marker,tag=world_center,distance=..250] run scoreboard players set room_location sector 1

# All rooms
execute if entity @e[type=marker,tag=world_center,distance=251..550] run scoreboard players set room_location sector 2

# Repeating Sector 5 - Crosses
execute if entity @e[type=marker,tag=world_center,distance=551..600] run scoreboard players set room_location sector 3

# Repeating 50/50
execute if entity @e[type=marker,tag=world_center,distance=601..650] run scoreboard players set room_location sector 6

# Repeating Sector 5 - Crosses
execute if entity @e[type=marker,tag=world_center,distance=651..700] run scoreboard players set room_location sector 3

# All rooms
execute if entity @e[type=marker,tag=world_center,distance=701..1000] run scoreboard players set room_location sector 2

# Repeating Sector 4
execute if entity @e[type=marker,tag=world_center,distance=1001..1100] run scoreboard players set room_location sector 4

# All rooms
execute if entity @e[type=marker,tag=world_center,distance=1101..1300] run scoreboard players set room_location sector 2

# Repeating Sector 5 - Crosses
execute if entity @e[type=marker,tag=world_center,distance=1301..1350] run scoreboard players set room_location sector 3

# Repeating 50/50
execute if entity @e[type=marker,tag=world_center,distance=1351..1400] run scoreboard players set room_location sector 6

# Repeating Sector 5 - Crosses
execute if entity @e[type=marker,tag=world_center,distance=1401..1450] run scoreboard players set room_location sector 3

# All rooms
execute if entity @e[type=marker,tag=world_center,distance=1451..1600] run scoreboard players set room_location sector 2

# Repeating Sector 3
execute if entity @e[type=marker,tag=world_center,distance=1601..1800] run scoreboard players set room_location sector 5

# All rooms
execute if entity @e[type=marker,tag=world_center,distance=1801..] run scoreboard players set room_location sector 2



execute if score room_location sector matches 1 run function backrooms:sector_1
execute if score room_location sector matches 2 run function backrooms:sector_2
execute if score room_location sector matches 3 run function backrooms:sector_3
execute if score room_location sector matches 4 run function backrooms:sector_4
execute if score room_location sector matches 5 run function backrooms:sector_5
execute if score room_location sector matches 6 run function backrooms:sector_6