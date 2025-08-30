scoreboard players set max RNG_Constant 4
function backrooms:rng

execute if score RNG RNG_Variable matches 0 at @e[type=item_display,tag=weird_chair,limit=1,sort=nearest] run tp @e[type=item_display,tag=weird_chair,limit=1,sort=nearest] ~7.1 ~0.5 ~
execute if score RNG RNG_Variable matches 1 at @e[type=item_display,tag=weird_chair,limit=1,sort=nearest] run tp @e[type=item_display,tag=weird_chair,limit=1,sort=nearest] ~-7.1 ~0.5 ~
execute if score RNG RNG_Variable matches 2 at @e[type=item_display,tag=weird_chair,limit=1,sort=nearest] run tp @e[type=item_display,tag=weird_chair,limit=1,sort=nearest] ~ ~0.5 ~7.1
execute if score RNG RNG_Variable matches 3 at @e[type=item_display,tag=weird_chair,limit=1,sort=nearest] run tp @e[type=item_display,tag=weird_chair,limit=1,sort=nearest] ~ ~0.5 ~-7.1