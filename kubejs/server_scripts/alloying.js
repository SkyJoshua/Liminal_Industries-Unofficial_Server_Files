ServerEvents.recipes(event => {
	
	let alloying = (output, Input1, Input2, count, time) => {
    event.custom({
		"type": "immersiveengineering:alloy",
		"input0": {
		  "item": Input1
		},
		"input1": {
		  "base_ingredient": {
			"item": Input2
		  },
		  "count": count
		},
		"result": {
		  "item": output
		},
		"time": time
	  })
	}

	alloying(
		'minecraft:lava_bucket', 
		'minecraft:bucket', 
		'minecraft:cobblestone', 5,
		200
	)

	alloying(
		'minecraft:lava_bucket', 
		'minecraft:bucket', 
		'kubejs:concrete_piece', 64,
		2000
	)

	event.remove({output: 'eidolon:pewter_blend'})
	event.remove({output: 'eidolon:pewter_ingot'})
	alloying(
		'eidolon:pewter_ingot', 
		'minecraft:iron_ingot', 
		'thermal:lead_ingot', 2,
		200
	)

	alloying(
		'kubejs:heated_concrete', 
		'ceramicbucket:ceramic_bucket', 
		'kubejs:concrete_piece', 64,
		2000
	)

	alloying(
		'kubejs:heated_concrete', 
		'ceramicbucket:ceramic_bucket', 
		'minecraft:cobblestone', 5,
		200
	)

	event.remove({id: 'tconstruct:compat/create/andesite_alloy_iron'})
	event.remove({id: 'tconstruct:compat/create/andesite_alloy_zinc'})
	event.remove({id: 'create:crafting/materials/andesite_alloy'})
	event.remove({id: 'create:crafting/materials/andesite_alloy_from_zinc'})
	event.remove({id: 'create:mixing/andesite_alloy'})
	event.remove({id: 'create:mixing/andesite_alloy_from_zinc'})
	alloying(
		'create:andesite_alloy', 
		'minecraft:cobblestone', 
		'supplementaries:ash', 1,
		300
	)

	event.recipes.create.mixing('2x create:andesite_alloy', [
		'minecraft:cobblestone',
		'supplementaries:ash'
	]).lowheated()

	event.smelting(Item.of('ceramicbucket:ceramic_bucket', '{Fluid:{Amount:1000,FluidName:"minecraft:lava"}}'), 
		'kubejs:heated_concrete')



})