ServerEvents.recipes(event => {

	event.custom({
		"type":"createaddition:rolling",
		"input": {
	      	"item": "immersiveengineering:stick_steel"
		},
		"result": {
			"item": "kubejs:crowbar",
			"count": 1
		}
	})

	event.shaped(
		'2x kubejs:wall_destroyer',
		[ 
		'SBS', 
		'EPE',
		'SHS'  
		],{
		  S: 'immersiveengineering:plate_steel',
		  B: 'botania:lens_mine',
		  E: 'immersiveengineering:component_electronic',
		  P: 'minecraft:prismarine_crystals',
		  H: 'immersiveengineering:heavy_engineering'
	})

    event.remove({output: 'create:experience_block'})
	event.shaped(
		'create:experience_block',
		[ 
		'SSS', 
		'SQS',
		'SSS'  
		],{
		  S: 'create:experience_nugget',
		  Q: 'ae2:quantum_entangled_singularity'
	})

    event.remove({id: 'create:splashing/soul_sand'})
    event.remove({id: 'create:haunting/lapis_recycling'})
    event.remove({output: 'blockofsky:sky_block'})

  	event.recipes.create.crushing(Item.of('minecraft:quartz').withChance(0.05), 'kubejs:pool_tile')
	event.smelting('minecraft:gold_nugget', 'kubejs:pool_tile_golden')




})