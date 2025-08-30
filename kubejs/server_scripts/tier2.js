ServerEvents.recipes(event => {

  	event.remove({id: 'create:mechanical_crafting/crushing_wheel'})
  	event.shaped('create:crushing_wheel', [
		'AAA', 
		'ABA',
		'AAA'  
		],{
		A: 'create:andesite_alloy',
		B: 'create:andesite_alloy_block'
	})

	event.remove({output: 'createaddition:alternator'})
	event.shaped('createaddition:alternator', [
		' B ', 
	  	'ACA',
	  	'ADA'  
	  	],{
	  	A: 'create:iron_sheet',
	  	B: 'create:shaft',
		C: 'immersiveengineering:coil_lv',
	  	D: 'immersiveengineering:light_engineering'
  })

  	event.remove({output: 'createaddition:electric_motor'})
	event.shaped('createaddition:electric_motor', [
		' B ', 
	  	'ACA',
	  	'ADA'  
	  	],{
	  	A: 'create:brass_sheet',
	  	B: 'create:shaft',
		C: 'immersiveengineering:coil_mv',
	  	D: 'immersiveengineering:heavy_engineering'
  })

	event.recipes.create.compacting('kubejs:concrete_brick', [
		Fluid.of('immersiveengineering:concrete', 100)
	])

	event.remove({id: 'immersiveengineering:crafting/blastbrick'})
	event.shaped('4x immersiveengineering:blastbrick', [
		'ABA', 
		'BAB',
		'ABA'  
		],{
		A: 'kubejs:concrete_brick',
		B: 'minecraft:nether_brick'
  	})

	event.custom({
		"type": "immersiveengineering:blast_furnace",
		"input": {
			"item": "kubejs:cracked_steel"
		},
		"result": {
			"item": "kubejs:hot_steel"
		},
		"slag": {
			"tag": "forge:slag"
		},
		"time": 1200
	})

	event.custom({
		"type": "immersiveengineering:blast_furnace",
		"input": {
			"item": "kubejs:sculked_sculk_scrubber"
		},
		"result": {
			"item": "kubejs:sculk_scrubber"
		},
		"slag": {
			"item": "minecraft:echo_shard"
		},
		"time": 3600
	})

	event.shaped('kubejs:empty_fuse', [
		'A  ', 
		'B  ',
		'   '  
		],{
		A: 'botania:mana_glass',
		B: 'minecraft:gold_nugget'
  	})

	event.custom({
		"type": "immersiveengineering:coke_oven",
		"creosote": 250,
		"input": {
			"tag": "backrooms:wooden_furniture"
		},
		"result": {
			"item": "thermal:charcoal_block"
		},
		"time": 100
	})

	event.remove({id: 'immersiveengineering:cokeoven/coke'})
	event.custom({
		"type": "immersiveengineering:coke_oven",
		"creosote": 250,
		"input": {
			"tag": "forge:charcoal"
		},
		"result": {
			"item": "immersiveengineering:coal_coke"
		},
		"time": 100
	})

	event.remove({id: 'immersiveengineering:cokeoven/charcoal'})
	event.custom({
		"type": "immersiveengineering:coke_oven",
		"creosote": 250,
		"input": {
			"tag": "minecraft:logs_that_burn"
		},
		"result": {
			"item": "minecraft:charcoal"
		},
		"time": 100
	})

	event.remove({id: 'immersiveengineering:blastfurnace/steel'})
	event.remove({id: 'immersiveengineering:blastfurnace/steel_block'})
	event.custom({
		"type": "immersiveengineering:blast_furnace",
		"input": {
		  "tag": "forge:ingots/iron"
		},
		"result": {
		  "item": "kubejs:hot_steel"
		},
		"slag": {
		  "tag": "forge:slag"
		},
		"time": 1200
	})

	event.remove({id: 'supplementaries:checker'})
	event.recipes.create.crushing([
		'minecraft:quartz',
		'actuallyadditions:black_quartz'
	],
		'supplementaries:checker_block'
	)

	event.shaped('kubejs:light_engineering_empty', [
		'A A', 
		'   ',
		'A A'  
		],{
		A: 'minecraft:iron_ingot'
  	})

	event.shaped('kubejs:heavy_engineering_empty', [
		'A A', 
		'   ',
		'A A'  
		],{
		A: 'immersiveengineering:ingot_steel'
  	})

    event.replaceInput({id: 'minecraft:flint_and_steel'}, 'minecraft:iron_ingot', 'minecraft:flint')

	event.recipes.create.mixing([Item.of('supplementaries:ash').withChance(0.2)], 'kubejs:wallpaper').lowheated()

})