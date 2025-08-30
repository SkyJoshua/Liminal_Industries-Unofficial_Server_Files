#execute at @e[type=item_display,tag=weird_chair] if entity @a[distance=..3] run particle minecraft:dust_color_transition 10 10 10 3 10 10 10 ~ ~ ~ 0.5 0.5 0.5 0.1 100 force
execute at @e[type=item_display,tag=weird_chair] if entity @a[distance=..7] run playsound minecraft:block.bamboo.step master @a ~ ~ ~ 1 1
execute at @e[type=item_display,tag=weird_chair] if entity @a[distance=..7] run tp @e[type=item_display,tag=weird_chair,limit=1,sort=nearest] @a[limit=1,sort=nearest]
execute at @e[type=item_display,tag=weird_chair] if entity @a[distance=..7] run function backrooms:weird_chair_placement

#execute at @e[type=item_display,tag=weird_chair] if entity @a[distance=..3] run kill @e[type=item_display,tag=weird_chair,limit=1,sort=nearest]