scoreboard players add generation generation 1
execute if score generation generation matches 2 run scoreboard players set generation generation 0

execute if score generation generation matches 1 run say room generation is set to true
execute if score generation generation matches 0 run say room generation is set to false