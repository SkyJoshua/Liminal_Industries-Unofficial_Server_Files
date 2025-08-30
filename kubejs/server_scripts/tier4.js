ServerEvents.recipes(event => {

	event.remove({id: 'enderio:item_conduit'})
	event.recipes.thermal.bottler('enderio:item_conduit', [
		Fluid.of('thermal:ender', 100), 
		'enderio:pressurized_fluid_conduit'])

	event.remove({output: 'ae2:controller'})
	event.shaped('ae2:controller', [
		'ABA',
		'CDE',
		'FGH'  
		],{
		A: 'immersiveengineering:component_electronic_adv',
		B: 'ae2:engineering_processor',
		C: 'actuallyadditions:empowered_diamatine_crystal',
		D: 'thermal:machine_frame',
		E: 'actuallyadditions:empowered_restonia_crystal',
		F: 'ae2:formation_core',
		G: 'actuallyadditions:empowered_void_crystal',
		H: 'ae2:annihilation_core'
	})

	event.remove({output: 'enderio:void_chassis'})
	event.shaped('enderio:void_chassis', [
		'AEA', 
		'BCB',
		'ADA'  
		],{
		A: 'enderio:dark_steel_ingot',
		B: 'enderio:infinity_rod',
		C: 'thermal:machine_frame',
		D: 'actuallyadditions:empowered_void_crystal',
		E: 'eidolon:ender_calx'
	})

	event.remove({output: 'enderio:ensouled_chassis'})
	event.shaped('enderio:ensouled_chassis', [
		'AEA', 
		'BCB',
		'ADA'  
		],{
		A: 'enderio:soularium_ingot',
		B: 'enderio:soul_powder',
		C: 'enderio:void_chassis',
		D: 'actuallyadditions:empowered_emeradic_crystal',
		E: 'kubejs:moderate_soul_gem'
	})

	event.recipes.thermal.pulverizer('immersiveengineering:dust_hop_graphite', 'immersiveengineering:ingot_hop_graphite')

	let pressing = (output, die, input, count) => {
		event.custom({
			"type": "thermal:press",
			"ingredients": [
			{
				"item": input,
				"count": count
			},
			{
				"item": die
			}
			],
			"result": [
			{
				"item": output
			}
			],
			"energy": 800
		})
	}

	event.remove({output: 'immersiveengineering:graphite_electrode'})
	event.remove({output: 'immersiveengineering:ingot_hop_graphite'})
	event.remove({output: 'immersiveengineering:dust_hop_graphite'})
	event.remove({output: 'ae2:fluix_pearl'})
	pressing("immersiveengineering:ingot_hop_graphite", "thermal:chiller_ingot_cast", "immersiveengineering:dust_coke", 8)
	pressing("immersiveengineering:graphite_electrode", "thermal:chiller_rod_cast", "immersiveengineering:dust_hop_graphite", 4)
	pressing("ae2:fluix_pearl", "thermal:chiller_ball_cast", "ae2:fluix_dust", 3)

	event.remove({output: 'enderio:grains_of_infinity'})
	event.recipes.thermal.centrifuge([
		Item.of('enderio:confusing_powder').withChance(0.10)
	], 
		'kubejs:carpet_dust')

	event.shaped('kubejs:diamond_brush', [
		'  A', 
		' B ',
		'   '  
		],{
		A: 'minecraft:stick',
		B: '#forge:dusts/diamond'
	})

	event.remove({id: 'immersiveengineering:alloysmelter/brass'})

	event.replaceInput({ mod: 'actuallyadditions' }, 'actuallyadditions:wood_casing', 'create:brass_casing')
	event.replaceInput({ mod: 'actuallyadditions' }, 'actuallyadditions:iron_casing', 'create:railway_casing')
	event.replaceInput({ mod: 'actuallyadditions' }, 'actuallyadditions:ender_casing', 'create:railway_casing')

	event.remove({output: 'thermal:tar'})
	event.remove({output: 'thermal:bitumen'})
	event.custom({
		"type": "thermal:pyrolyzer",
		"ingredient": {
		  "item": "thermal:bitumen"
		},
		"result": [
		  {
			"item": "thermal:tar"
		  },
		  {
			"item": "minecraft:coal",
			"chance": 0.25
		  },
		  {
			"fluid": "immersiveengineering:creosote",
			"amount": 250
		  }
		],
		"experience": 0.15
	})

	event.custom({
		"type": "thermal:pyrolyzer",
		"ingredient": {
		  "item": "kubejs:sculked_sculk_scrubber"
		},
		"result": [
		  {
			"item": "kubejs:sculk_scrubber"
		  },
		  {
			"item": "minecraft:echo_shard"
		  },
		  {
			"item": "minecraft:echo_shard"
		  },
		  {
			"fluid": "enderio:dew_of_the_void",
			"amount": 250
		  }
		],
		"experience": 0.15
	})

	event.custom({
		"type": "thermal:refinery",
		"ingredient": {
		  "fluid": "thermal:crude_oil",
		  "amount": 500
		},
		"result": [
		  {
			"fluid": "thermal:heavy_oil",
			"amount": 20
		  },
		  {
			"fluid": "thermal:light_oil",
			"amount": 30
		  },
		  {
			"item": "thermal:bitumen"
		  }
		],
		"energy": 1000
	})

		event.custom({
		"type": "thermal:refinery",
		"ingredient": {
		  "fluid": "thermal:heavy_oil",
		  "amount": 500
		},
		"result": [
		  {
			"fluid": "thermal:light_oil",
			"amount": 250
		  }
		],
		"energy": 1000
	})

	event.recipes.createFilling('immersiveengineering:fiberboard', [
		'#minecraft:planks',
		Fluid.of('immersiveengineering:phenolic_resin', 100)
])

	event.remove({id: 'create:crushing/crimsite_recycling'})
	event.remove({id: 'create:crushing/crimsite'})

	event.recipes.createCrushing([
 		Item.of('create:crushed_raw_iron').withChance(0.4),
	 	Item.of('immersiveengineering:raw_aluminum').withChance(0.02),
	], 'create:crimsite')

})