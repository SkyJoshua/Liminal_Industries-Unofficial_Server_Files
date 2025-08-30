// priority: 0

ServerEvents.tags('block', event => {

	event.add('minecraft:dirt', 'kubejs:soggy_carpet')
	event.add('supplementaries:slingshot_blacklist', 'kubejs:sculk_scrubber')
	event.add('farmersdelight:mushroom_colony_growable_on', 'kubejs:soggy_carpet')
	event.add('minecraft:mushroom_grow_block', 'kubejs:soggy_carpet')
	event.remove('minecraft:moss_replaceable', 'kubejs:soggy_carpet')
	event.remove('minecraft:logs', 'botania:livingwood_log')
	event.remove('minecraft:soul_fire_base_blocks', 'tconstruct:soul_glass')

	event.add('minecraft:sculk_replaceable', 'kubejs:ceilling')
	event.add('minecraft:sculk_replaceable', 'kubejs:ceilling2')
	event.add('minecraft:sculk_replaceable', 'kubejs:ceilling_lamp')
	event.add('minecraft:sculk_replaceable', 'kubejs:ceilling_lamp_off')
	event.add('minecraft:sculk_replaceable', 'kubejs:carpet')
	event.add('minecraft:sculk_replaceable', 'kubejs:red_carpet')
	event.add('minecraft:sculk_replaceable', 'kubejs:soggy_carpet')
	event.add('minecraft:sculk_replaceable', 'kubejs:wallpaper1')
	event.add('minecraft:sculk_replaceable', 'kubejs:wallpaper2')
	event.add('minecraft:sculk_replaceable', 'kubejs:wallpaper3')
	event.add('minecraft:sculk_replaceable', 'kubejs:wallpaper4')
	event.add('minecraft:sculk_replaceable', 'kubejs:wallpaper5')
	event.add('minecraft:sculk_replaceable', 'kubejs:wallpaper6')
	event.add('minecraft:sculk_replaceable', 'kubejs:stripped_wallpaper')
	event.add('minecraft:sculk_replaceable', 'kubejs:porous_stone')

	event.add('kubejs:backrooms_enviroment', 'kubejs:ceilling')
	event.add('kubejs:backrooms_enviroment', 'kubejs:ceilling2')
	event.add('kubejs:backrooms_enviroment', 'kubejs:ceilling_lamp')
	event.add('kubejs:backrooms_enviroment', 'kubejs:ceilling_lamp_off')
	event.add('kubejs:backrooms_enviroment', 'kubejs:carpet')
	event.add('kubejs:backrooms_enviroment', 'kubejs:floor_tiles')
	event.add('kubejs:backrooms_enviroment', 'kubejs:red_carpet')
	event.add('kubejs:backrooms_enviroment', 'kubejs:soggy_carpet')
	event.add('kubejs:backrooms_enviroment', 'kubejs:wallpaper1')
	event.add('kubejs:backrooms_enviroment', 'kubejs:wallpaper2')
	event.add('kubejs:backrooms_enviroment', 'kubejs:wallpaper3')
	event.add('kubejs:backrooms_enviroment', 'kubejs:wallpaper4')
	event.add('kubejs:backrooms_enviroment', 'kubejs:wallpaper5')
	event.add('kubejs:backrooms_enviroment', 'kubejs:wallpaper6')
	event.add('kubejs:backrooms_enviroment', 'kubejs:stripped_wallpaper')
	event.add('kubejs:backrooms_enviroment', 'kubejs:ceilling_frame')
	event.add('kubejs:backrooms_enviroment', 'kubejs:carpet_stairs')
	event.add('kubejs:backrooms_enviroment', 'kubejs:carpet_slab')
	event.add('kubejs:backrooms_enviroment', 'kubejs:red_carpet_stairs')
	event.add('kubejs:backrooms_enviroment', 'kubejs:red_carpet_slab')
	event.add('kubejs:backrooms_enviroment', 'kubejs:ceilling_stairs')
	event.add('kubejs:backrooms_enviroment', 'kubejs:ceilling_slab')
	event.add('kubejs:backrooms_enviroment', 'minecraft:water')
	event.add('kubejs:backrooms_enviroment', 'minecraft:lava')

	event.add('kubejs:sculk', 'minecraft:sculk')
	event.add('kubejs:sculk', 'kubejs:sculk_carapace')
	event.add('kubejs:sculk', 'kubejs:sculk_shroom')
	event.add('kubejs:sculk', 'kubejs:sculk_tendrils')
	event.add('kubejs:sculk', 'minecraft:spawner')
	event.add('kubejs:sculk', 'minecraft:sculk_vein')
	event.add('kubejs:sculk', 'minecraft:sculk_catalyst')
	event.add('kubejs:sculk', 'minecraft:sculk_shrieker')
	event.add('kubejs:sculk', 'minecraft:sculk_sensor')
	event.add('kubejs:sculk', 'minecraft:calibrated_sculk_sensor')

	event.add('kubejs:block_sculk', 'minecraft:sculk')
	event.add('kubejs:block_sculk', 'minecraft:spawner')
	event.add('kubejs:block_sculk', 'kubejs:sculk_stairs')
	event.add('kubejs:block_sculk', 'kubejs:sculk_slab')

	event.add('kubejs:soft_sculk', 'minecraft:sculk_vein')
	event.add('kubejs:soft_sculk', 'minecraft:sculk_catalyst')
	event.add('kubejs:soft_sculk', 'minecraft:sculk_shrieker')
	event.add('kubejs:soft_sculk', 'minecraft:sculk_sensor')
	event.add('kubejs:soft_sculk', 'minecraft:calibrated_sculk_sensor')
	event.add('kubejs:soft_sculk', 'kubejs:sculk_shroom')
	event.add('kubejs:soft_sculk', 'kubejs:sculk_tendrils')

	event.add('kubejs:ravager_blacklist', 'minecraft:air')

	event.add('kubejs:ravager_blacklist', '#kubejs:backrooms_enviroment')
	event.add('kubejs:ravager_blacklist', '#kubejs:sculk')
	event.add('kubejs:ravager_blacklist', 'minecraft:barrier')
	event.add('kubejs:ravager_blacklist', 'minecraft:bedrock')

	event.add('minecraft:features_cannot_replace', '#kubejs:backrooms_enviroment')
	event.add('mekanism:cardboard_blacklist', '#kubejs:backrooms_enviroment')

	let ravager_blacklist = event.get("kubejs:ravager_blacklist").getObjectIds()
    let allBlocks  = []
    ravager_blacklist.forEach(block=>{
        allBlocks.push(block.toString())
    })
    Block.getTypeList().forEach(block => {
        if (!allBlocks.includes(block)){
            event.add('kubejs:ravager_whitelist',block)
        }
    })

	event.add('create:fan_processing_catalysts/splashing', 'minecraft:wet_sponge')
	event.remove('minecraft:moss_replaceable', 'kubejs:soggy_carpet')
	event.add('minecraft:replaceable_by_trees', 'minecraft:light')
	event.add('create:fan_transparent', 'minecraft:wet_sponge')

	event.remove('minecraft:planks', 'immersiveengineering:fiberboard')

	const mushrooms = event.get('botania:shimmering_mushrooms').getObjectIds()
  	mushrooms.forEach(mushrooms => {
    	event.removeAllTagsFrom(mushrooms)
  	})
	
})

ServerEvents.tags('item', event => {

	event.add('backrooms:chairs', /^refurbished_furniture:.+_chair$/)
	event.add('backrooms:wooden_furniture', '#backrooms:chairs')

	event.add('backrooms:tables', /^refurbished_furniture:.+_table$/)
	event.add('backrooms:wooden_furniture', '#backrooms:tables')

	event.add('backrooms:desks', /^refurbished_furniture:.+_desk$/)
	event.add('backrooms:wooden_furniture', '#backrooms:desks')

	event.add('backrooms:drawers', /^refurbished_furniture:.+_drawer$/)
	event.remove('backrooms:drawers', '@storagedrawers')
	event.add('backrooms:wooden_furniture', '#backrooms:drawers')
	
	event.add('backrooms:sinks', /^refurbished_furniture:.+_sink$/)
	event.add('backrooms:wooden_furniture', '#backrooms:sinks')

	event.add('backrooms:lamps', /^refurbished_furniture:.+_lamp$/)
	event.add('backrooms:wooden_furniture', '#backrooms:lamps')

	event.add('backrooms:cabinetry', /^refurbished_furniture:.+_cabinetry$/)
	event.add('backrooms:wooden_furniture', '#backrooms:cabinetry')

	event.add('backrooms:fans', /^refurbished_furniture:.+_fan$/)
	event.add('backrooms:wooden_furniture', '#backrooms:fans')

	const furniture = event.get('backrooms:wooden_furniture').getObjectIds()
	const oak = Ingredient.of(/.*oak.*/)
	const spruce = Ingredient.of(/.*spruce.*/)
	const birch = Ingredient.of(/.*birch.*/)
	const jungle = Ingredient.of(/.*jungle.*/)
	const acacia = Ingredient.of(/.*acacia.*/)
	const dark_oak = Ingredient.of(/.*dark_oak.*/)
	const mangrove = Ingredient.of(/.*mangrove.*/)
	const cherry = Ingredient.of(/.*cherry.*/)
	//const bamboo = Ingredient.of(/.*bamboo.*/)
	const warped = Ingredient.of(/.*warped.*/)
	const crimson = Ingredient.of(/.*crimson.*/)

	furniture.forEach(furniture => {
		if (oak.test(furniture)) event.add('backrooms:oak_furniture', furniture)
		if (spruce.test(furniture)) event.add('backrooms:spruce_furniture', furniture)
		if (birch.test(furniture)) event.add('backrooms:birch_furniture', furniture)
		if (jungle.test(furniture)) event.add('backrooms:jungle_furniture', furniture)
		if (acacia.test(furniture)) event.add('backrooms:acacia_furniture', furniture)
		if (dark_oak.test(furniture)) event.add('backrooms:dark_oak_furniture', furniture)
		if (mangrove.test(furniture)) event.add('backrooms:mangrove_furniture', furniture)
		if (cherry.test(furniture)) event.add('backrooms:cherry_furniture', furniture)
		//if (bamboo.test(furniture)) event.add('backrooms:bamboo_furniture', furniture)
		if (warped.test(furniture)) event.add('backrooms:warped_furniture', furniture)
		if (crimson.test(furniture)) event.add('backrooms:crimson_furniture', furniture)

	})

	//event.remove('backrooms:bamboo_furniture', '@storagedrawers')

	event.remove('minecraft:planks', 'immersiveengineering:fiberboard')

	event.add('minecraft:logs_that_burn', 'minecraft:bamboo_block')
	event.add('minecraft:logs_that_burn', 'minecraft:stripped_bamboo_block')

	event.add('kubejs:ceilling_lamp', 'kubejs:ceilling_lamp')
	event.add('kubejs:ceilling_lamp', 'kubejs:ceilling_lamp2')

	event.add('kubejs:ender_gear', 'enderio:wood_gear')
	event.add('kubejs:ender_gear', 'enderio:stone_gear')
	event.add('kubejs:ender_gear', 'enderio:iron_gear')
	event.add('kubejs:ender_gear', 'enderio:energized_gear')
	event.add('kubejs:ender_gear', 'enderio:vibrant_gear')

	event.add('kubejs:ender_gear', 'enderio:dark_bimetal_gear')
	event.add('minecraft:completes_find_tree_tutorial', '#backrooms:wooden_furniture')
	event.add('forge:slimeball/blood', 'minecraft:slime_ball')

	event.add('thermal:crafting/casts', 'immersiveengineering:mold_plate')
	event.add('thermal:crafting/dies', 'thermal:chiller_rod_cast')
	event.add('thermal:crafting/dies', 'thermal:chiller_ingot_cast')
	event.add('thermal:crafting/dies', 'thermal:chiller_ball_cast')
	event.add('thermal:crafting/dies', 'ae2:silicon_press')
	event.add('thermal:crafting/dies', 'ae2:calculation_processor_press')
	event.add('thermal:crafting/dies', 'ae2:logic_processor_press')
	event.add('thermal:crafting/dies', 'ae2:engineering_processor_press')

	event.remove('minecraft:planks', 'eidolon:polished_planks')
	event.remove('minecraft:planks', 'botania:livingwood_planks')
	event.remove('minecraft:planks', 'botania:framed_livingwood')
	event.remove('minecraft:planks', 'botania:pattern_framed_livingwood')
	event.remove('minecraft:planks', 'botania:mossy_livingwood_planks')
	event.remove('minecraft:planks', 'botania:dreamwood_planks')
	event.remove('minecraft:planks', 'botania:framed_dreamwood')
	event.remove('minecraft:planks', 'botania:pattern_framed_dreamwood')
	event.remove('minecraft:planks', 'botania:mossy_dreamwood_planks')

	event.remove('minecraft:soul_fire_base_blocks', 'tconstruct:soul_glass')
	event.remove('tconstruct:melting/copper/tools_costing_1', 'minecraft:brush')
	event.remove('tconstruct:melting/iron/tools_costing_1', 'minecraft:flint_and_steel')

	//event.add('minecraft:axes', 'kubejs:putty_knife')
	event.add('forge:tools/axes', '#minecraft:axes')
	event.add('forge:tools/knives', 'tconstruct:dagger')

	const mushrooms = event.get('botania:shimmering_mushrooms').getObjectIds()
  	mushrooms.forEach(mushrooms => {
    	event.removeAllTagsFrom(mushrooms)
  	})


})

