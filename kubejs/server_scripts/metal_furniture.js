ServerEvents.recipes(event => {

	event.remove({ mod: 'chimes'})
	event.remove({ mod: 'refurbished_furniture'})
	event.remove({ mod: 'refurbished_furniture', type: 'crafting_shaped' })
	event.remove({ mod: 'refurbished_furniture', type: 'crafting_shapeless' })
	event.remove({ mod: 'refurbished_furniture', type: 'refurbished_furniture:constructing' })
	event.remove({ output: 'supplementaries:safe' })
	event.remove({ output: 'mekanism:basic_chemical_tank' })
	event.remove({ output: 	'minecraft:jukebox' })

	event.shaped('refurbished_furniture:wrench', [
		' A ', 
		' BA',
		'B  '  
		],{
		  A: 'minecraft:iron_ingot', 
		  B: 'minecraft:stick'
	})

	event.shaped('refurbished_furniture:spatula', [
		'A  ', 
		' B ',
		'  B'  
		],{
		  A: 'minecraft:iron_ingot', 
		  B: 'minecraft:stick'
	})

	event.shaped('refurbished_furniture:knife', [
		'  A', 
		' B ',
		'   '  
		],{
		  A: 'minecraft:iron_ingot', 
		  B: 'minecraft:stick'
	})

	let melting = (Input, Output, Amount) => {
		event.custom({"type": "tconstruct:melting",

			"ingredient": {
			"item": Input
			},
			"result": {
			"amount": Amount,
			"tag": Output
			},
			"temperature": 800,
			"time": 100
		})
	}

	event.remove({ id: 'refurbished_furniture:constructing/light_fridge' })
	event.remove({ id: 'refurbished_furniture:constructing/dark_fridge' })
	melting(
		'refurbished_furniture:light_fridge', 
		'tconstruct:molten_iron', 
		2160
	)

	melting(
		'refurbished_furniture:light_stove', 
		'tconstruct:molten_iron', 
		900
	)

	melting(
		'kubejs:scrap', 
		'tconstruct:molten_iron', 
		90
	)

	melting(
		'supplementaries:wind_vane', 
		'tconstruct:molten_iron', 
		270
	)

	melting(
		'supplementaries:faucet', 
		'tconstruct:molten_iron', 
		270
	)

	melting(
		'immersiveengineering:fluid_pipe', 
		'tconstruct:molten_iron', 
		45
	)

	melting(
		'chimes:iron_chimes', 
		'tconstruct:molten_iron', 
		270
	)

	melting(
		'supplementaries:candle_holder', 
		'tconstruct:molten_iron', 
		90
	)

	melting(
		'decorative_blocks:brazier', 
		'tconstruct:molten_iron', 
		90
	)

	event.remove({output:'mekanism:radioactive_waste_barrel'})
	melting(
		'mekanism:radioactive_waste_barrel', 
		'tconstruct:molten_lead', 
		630
	)

	event.remove({output:'supplementaries:cannonball'})
	melting(
		'supplementaries:cannonball', 
		'tconstruct:molten_lead', 
		270
	)

	melting(
		'kubejs:battery', 
		'tconstruct:molten_zinc', 
		270
	)

	melting(
		'miners_delight:copper_pot', 
		'tconstruct:molten_copper', 
		450
	)

	melting(
		'create:fluid_pipe', 
		'tconstruct:molten_copper', 
		60
	)

	melting(
		'create:fluid_tank', 
		'tconstruct:molten_copper', 
		90
	)

	melting(
		'chimes:copper_chimes', 
		'tconstruct:molten_copper', 
		270
	)

	event.remove({output:'minecraft:amethyst_cluster'})
	melting(
		'chimes:amethyst_chimes', 
		'tconstruct:molten_amethyst', 
		300
	)

	melting(
		'refurbished_furniture:light_microwave', 
		'tconstruct:molten_tin', 
		900
	)

	melting(
		'refurbished_furniture:red_cooler', 
		'tconstruct:molten_aluminum', 
		450
	)

	melting(
		'refurbished_furniture:recycle_bin', 
		'tconstruct:molten_aluminum', 
		450
	)

	event.custom({"type": "tconstruct:melting",

		"ingredient": {
		"tag": "refurbished_furniture:trampolines"
		},
		"result": {
		"amount": 45,
		"tag": "tconstruct:molten_aluminum"
		},
		"temperature": 800,
		"time": 100
	})

	melting(
		'refurbished_furniture:doorbell', 
		'tconstruct:molten_tin', 
		450
	)

	melting(
		'refurbished_furniture:light_lightswitch', 
		'tconstruct:molten_tin', 
		900
	)

	melting(
		'refurbished_furniture:light_toaster', 
		'tconstruct:molten_nickel', 
		900
	)

	melting(
		'refurbished_furniture:light_electricity_generator', 
		'tconstruct:molten_gold', 
		900
	)

	melting(
		'cfm_circuit_breaker:circuit_breaker', 
		'tconstruct:molten_gold', 
		2250
	)

	event.remove({ mod: 'tconstruct', input: 'minecraft:jukebox' })
	melting(
		'minecraft:jukebox', 
		'tconstruct:molten_diamond', 
		100
	)

	melting(
		'refurbished_furniture:computer', 
		'tconstruct:molten_diamond', 
		500
	)

	melting(
		'refurbished_furniture:television', 
		'tconstruct:molten_silver', 
		900
	)
/*
	let iron_melting = (Input) => {
		melting(
			Input, 
			'tconstruct:molten_iron', 
			90
		)
	}

	iron_melting('kubejs:traffic_pole')
	iron_melting('kubejs:traffic_pole')		
	iron_melting('kubejs:arrow1_sign') 		
	iron_melting('kubejs:arrow2_sign')
	iron_melting('kubejs:liminal_warning')
	iron_melting('kubejs:liminal_warning2') 	
	iron_melting('kubejs:box_sign') 			
	iron_melting('kubejs:infinity_sign') 		
	iron_melting('kubejs:skull_sign')	
	iron_melting('kubejs:stop_sign')			
	iron_melting('kubejs:explantion1_sign') 	
	iron_melting('kubejs:explantion2_sign')
	iron_melting('kubejs:unknown1')
	iron_melting('kubejs:cross_sign') 		
	iron_melting('kubejs:exit_sign')			
	iron_melting('kubejs:exit_sign2') 		
	iron_melting('kubejs:left_arrow_sign') 	
	iron_melting('kubejs:right_arrow_sign') 	
	iron_melting('kubejs:nowhere_sign')	
	iron_melting('kubejs:monolith_sign') 		
	iron_melting('kubejs:witahdigroi_sign') 	
	iron_melting('kubejs:tripple_sign') 		
	iron_melting('kubejs:turn_back_sign')
	iron_melting('kubejs:inkblod_sign') 		
*/
//Tier 1
/*
	event.recipes.create.crushing([
		'64x minecraft:iron_nugget',
		'25x create:copper_nugget',
		'16x thermal:tin_nugget',
		'immersiveengineering:coil_lv',
		'3x neapolitan:ice_cubes'
	],
	'refurbished_furniture:light_fridge'
	)

	event.recipes.create.crushing([
		'10x create:copper_nugget',
		'5x immersiveengineering:wire_copper'
	],
	'immersiveengineering:coil_lv'
	)

	event.recipes.create.crushing([
		'3x thermal:gold_nugget'
	],
	'thermal:gold_coin')
	event.recipes.create.crushing([
		'3x thermal:silver_nugget'
	],
	'thermal:silver_coin')
	event.recipes.create.crushing([
		'3x thermal:copper_nugget'
	],
	'thermal:copper_coin')

	event.recipes.create.crushing([
		'64x minecraft:iron_nugget',
		'32x minecraft:gold_nugget',
		'16x thermal:tin_nugget',
		'3x minecraft:glass'
	],
	'refurbished_furniture:television'
	)

	event.recipes.create.crushing([
		'64x minecraft:iron_nugget'
	],
	'mekanism:basic_chemical_tank'
	)
	
	event.shapeless('create:propeller', ['#kubejs:fans'])

	event.recipes.create.crushing([
		'9x immersiveengineering:nugget_aluminum'
	],
	'#kubejs:traffic_signs',
	)

	event.recipes.create.crushing([
		'32x minecraft:iron_nugget'
	],
	'refurbished_furniture:frying_pan',
	)

	event.recipes.create.crushing([
		'32x minecraft:iron_nugget'
	],
	'refurbished_furniture:recycle_bin',
	)

	event.recipes.create.crushing([
		'32x minecraft:iron_nugget'
	],
	'immersiveengineering:metal_barrel',
	)

//Tier 2

	event.recipes.create.crushing([
		'32x minecraft:iron_nugget',
		'2x immersiveengineering:coil_lv'
	],
	'refurbished_furniture:light_fridge',
	)

	event.recipes.create.crushing([
		'64x minecraft:iron_nugget',
		'32x thermal:tin_nugget'
	],
	'refurbished_furniture:light_stove',
	)

	event.recipes.create.crushing([
		'64x create:copper_nugget',
		'32x minecraft:iron_nugget',
		'16x thermal:tin_nugget'
	],
	'refurbished_furniture:light_microwave',
	)

	event.recipes.create.crushing([
		'64x immersiveengineering:nugget_aluminum',
		'32x minecraft:iron_nugget'
	],
	'#refurbished_furniture:trampolines',
	)

	event.recipes.create.crushing([
		'32x minecraft:iron_nugget',
		'16x thermal:tin_nugget'
	],
	'#backrooms:sinks',
	)

	event.recipes.create.crushing([
		'32x minecraft:iron_nugget',
		'16x create:copper_nugget'
	],
	'#refurbished_furniture:coolers',
	)

	event.recipes.create.crushing([
		'32x minecraft:iron_nugget',
		'32x thermal:tin_nugget',
	],
	'refurbished_furniture:light_range_hood',
	)

	event.recipes.create.crushing([
		'32x minecraft:iron_nugget'
	],
	'#refurbished_furniture:grills',
	)

	event.recipes.create.crushing([
		'64 create:copper_nugget',
		'32x thermal:tin_nugget'
	],
	'refurbished_furniture:light_toaster',
	)

	event.recipes.create.crushing([
		'32x minecraft:iron_nugget'
	],
	'refurbished_furniture:recycle_bin',
	)

	event.recipes.create.crushing([
		'32x create:zinc_nugget',
		'32x create:copper_nugget'
	],
	'kubejs:battery',
	)

	event.remove({output: 'immersiveengineering:transformer_hv'})
	event.recipes.create.crushing([
		'64x minecraft:gold_nugget',
		'64x thermal:silver_nugget',
		'5x immersiveengineering:coil_lv'
	],
	'immersiveengineering:transformer_hv',
	)

//Tier 3
	event.remove({output: 'minecraft:jukebox'})
	event.recipes.create.crushing([
		'3x minecraft:diamond'
	],
	'minecraft:jukebox',
	)

	event.recipes.create.crushing([
		'minecraft:diamond',
		'64x minecraft:gold_nugget',
		'64x thermal:silver_nugget'
	],
	'refurbished_furniture:television',
	)

	event.recipes.create.crushing([
		'2x minecraft:diamond',
		'64x minecraft:gold_nugget',
		'64x thermal:silver_nugget'
	],
	'refurbished_furniture:computer',
	)

	event.recipes.create.crushing([
		'16x minecraft:gold_ingot',
		'16x thermal:silver_ingot',
		'16x thermal:gold_coin',
		'32x thermal:silver_coin'
	],
	'supplementaries:safe',
	)
*/
})