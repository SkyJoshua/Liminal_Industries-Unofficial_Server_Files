ServerEvents.recipes(event => {

	event.remove({input: 'immersiveengineering:wirecutter', output: '#forge:wires'})
    event.remove({input: 'immersiveengineering:hammer', output: '#forge:plates'})
    event.remove({input: 'immersiveengineering:hammer', input: '#forge:ores'})

    event.remove({type: 'minecraft:crafting_shapeless', input:  'minecraft:fire_charge'})
    event.replaceInput({input: 'minecraft:leather'}, 'minecraft:leather', '#forge:leather')
    event.remove({type: 'minecraft:crafting_shapeless', output: '#forge:dusts'})

    event.remove({type: 'immersiveengineering:alloy_smelter', output: '#forge:ingots'})

    event.replaceInput({mod: 'create', input: 'minecraft:kelp'}, 'minecraft:kelp', 'thermal:cured_rubber')

	event.shaped('create:water_wheel', [
		' B ', 
		'BAB',
		' B '  
		],{
		A: 'immersiveengineering:ingot_steel',
		B: 'immersiveengineering:waterwheel_segment'
	})

	event.shaped('create:large_water_wheel', [
		'BBB', 
		'BAB',
		'BBB'  
		],{
		A: 'immersiveengineering:ingot_steel',
		B: 'immersiveengineering:waterwheel_segment'
	})

})