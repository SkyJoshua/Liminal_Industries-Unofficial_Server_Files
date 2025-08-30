ServerEvents.recipes(event => {

	event.shaped(
		'2x kubejs:wall_destroyer',
		[ 
		'CBC', 
		'DAD',
		'CEC'  
		],{
		  A: 'thermal:machine_frame',
		  B: 'botania:lens_power',
		  C: 'thermal:constantan_ingot',
		  D: 'thermal:rf_coil',
		  E: 'thermal:charge_bench'
	})

	event.shaped(
		'immersiveengineering:gunpart_barrel',
		[ 
		' A ', 
		'A  ',
		'   '  
		],{
		  A: 'immersiveengineering:stick_steel'
	})

	event.shaped(
		'immersiveengineering:gunpart_barrel',
		[ 
		' A ', 
		'A  ',
		'   '  
		],{
		  A: 'immersiveengineering:stick_steel'
	})

	event.remove({id: 'eidolon:decompress_shadow_gem_block'})
	event.shapeless('4x eidolon:shadow_gem', [
		'eidolon:shadow_gem_block'
	])

	event.shapeless('botania:ender_air_bottle', [
		'minecraft:glass_bottle',
		'ae2:ender_dust'
	])

	event.remove({id: 'thermal:smelting/redstone_from_spores_smelting'})

	event.shapeless('9x minecraft:redstone', [
		'minecraft:redstone_block'
	])

	//Exposure
	event.remove({id: 'exposure:developing_color_film'})
	event.custom({
		"type": "exposure:film_developing",
		"film": {
		  "item": "exposure:color_film"
		},
		"ingredients": [
		  [
    		{
    		  "type": "forge:partial_nbt",
    		  "item": "minecraft:potion",
    		  "nbt": "{Potion:\"minecraft:water\"}"
    		},
    		{
    		  "type": "forge:partial_nbt",
    		  "item": "minecraft:potion",
    		  "nbt": "{Potion:\"water\"}"
    		}
		  ]
		],
		"result": {
		  "item": "exposure:developed_color_film"
		}
	})

	event.remove({output: 'exposure:lightroom'})
  	event.shaped('exposure:lightroom', [
		'BB ', 
		'AA ',
		'   '  
		],{
		A: '#minecraft:planks',
		B: '#minecraft:wooden_slabs'
	})

	event.shapeless('minecraft:black_dye', [
		'kubejs:carpet_dust'
	])
	
	event.remove({output: 'exposure:black_and_white_film'})
	event.shapeless('exposure:black_and_white_film', [
		'minecraft:paper'
	])

	event.remove({output: 'exposure:color_film'})
	event.shapeless('exposure:color_film', [
		'minecraft:paper',
		'minecraft:yellow_dye'
	])

	event.remove({output: 'miners_delight:copper_cup'})
	event.shaped('miners_delight:copper_pot', [
		' B ', 
		'ACA',
		'AAA'  
		],{
		A: 'minecraft:copper_ingot',
		B: 'minecraft:wooden_shovel',
		C: Item.of('ceramicbucket:ceramic_bucket', '{Fluid:{Amount:1000,FluidName:"minecraft:water"}}').strongNBT()
	}).replaceIngredient({item: 'ceramicbucket:ceramic_bucket'}, 'ceramicbucket:ceramic_bucket')

})