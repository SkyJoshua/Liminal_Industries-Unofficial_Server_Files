ServerEvents.recipes(event => {
	
	event.remove({id: 'immersiveengineering:refinery/resin'})
	event.custom({
		"type":"immersiveengineering:refinery",
		"catalyst":{"tag":"forge:plates/silver"},
		"energy":240,
		"input0":{"amount":8,"tag":"forge:ethanol"},
		"input1":{"amount":8,"tag":"forge:creosote"},
		"result":{"amount":8,"fluid":"immersiveengineering:phenolic_resin"}
	})

	event.remove({output: 'create:sturdy_sheet'})
	event.recipes.create.compacting('create:sturdy_sheet', ['immersiveengineering:plate_steel', 'thermal:lead_plate']).heated()

	event.remove({output: 'create:empty_blaze_burner'})
	event.shaped(
		'create:empty_blaze_burner',
		[ 
		'   ', 
		' A ',
		' B '  
		],{
		  A: 'supplementaries:cage',
		  B: 'immersiveengineering:ingot_steel'
	})

	event.remove({output: 'actuallyadditions:atomic_reconstructor'})
	event.shaped(
		'actuallyadditions:atomic_reconstructor',
		[ 
		'ABA', 
		'CDC',
		'AEA'  
		],{
		  A: 'minecraft:iron_ingot',
		  B: 'immersiveengineering:heavy_engineering',
		  C: 'thermal:rf_coil',
		  D: 'create:railway_casing',
		  E: 'botania:lens_speed'
	})


})