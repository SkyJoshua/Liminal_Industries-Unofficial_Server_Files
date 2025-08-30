ServerEvents.recipes(event => {

	event.remove({output: 'tconstruct:crafting_station'})
	event.shapeless('tconstruct:crafting_station', ['minecraft:crafting_table'])
	event.shapeless('minecraft:crafting_table', ['tconstruct:crafting_station'])

	event.recipes.farmersdelight.cutting(
        "kubejs:cut_carpet",
        "#forge:tools/knives", // tool
        [ // results
            Item.of("minecraft:string")
                .withChance(0.5)
        ],
        // "" // sound
	);

	event.recipes.farmersdelight.cutting(
        "minecraft:cobblestone",
        "#minecraft:pickaxes", // tool
        [ // results
            Item.of("minecraft:gravel")
                .withChance(0.5),
			Item.of("minecraft:flint")
                .withChance(0.1),
        ],
        // "" // sound
	);

	//Early-game Changes
	event.remove({output: 'create:encased_fan'})
	event.custom({"type": "create:item_application",
		"ingredients":[
			{"item": "minecraft:barrel"},
			{"item": "create:propeller"}],
		"results": [
			{"item": "create:encased_fan"}]
		})

	event.remove({id: 'create:splashing/sand'})
	event.recipes.create.splashing([
        Item.of('minecraft:clay_ball').withChance(0.5)
    ],
        'minecraft:sand')
	
	event.remove({output: 'create:andesite_casing'})
	event.custom({"type": "create:item_application",
		"ingredients":[
			{"tag": "minecraft:planks"},
			{"item": "create:andesite_alloy"}],
		"results": [
			{"item": "create:andesite_casing"}]
		})

	event.remove({output: 'immersiveengineering:alloybrick'})
	event.shaped(
		'4x immersiveengineering:alloybrick',
		[ 
		'AAA', 
		'AAA',
		'AAA'  
		],{
		  A: 'minecraft:brick'
	})

	
	event.shaped(
		Item.of('ceramicbucket:ceramic_bucket', '{Fluid:{Amount:1000,FluidName:"minecraft:water"}}'),
		[ 
		' A ', 
		' B ',
		'   '  
		],{
		  A: 'minecraft:wet_sponge', 
		  B: 'ceramicbucket:ceramic_bucket'
	})
	.replaceIngredient({item: 'minecraft:wet_sponge'}, 'minecraft:sponge')
	.replaceIngredient({item: 'ceramicbucket:ceramic_bucket'}, 'minecraft:air')

	event.shaped(
		'minecraft:wet_sponge',
		[ 
		' B ', 
		' A ',
		'   '  
		],{
		  A: Item.of('ceramicbucket:ceramic_bucket', '{Fluid:{Amount:1000,FluidName:"minecraft:water"}}').weakNBT(), 
		  B: 'minecraft:sponge'
	}).replaceIngredient({item: 'ceramicbucket:ceramic_bucket'}, 'ceramicbucket:ceramic_bucket')

	event.shaped(
		'minecraft:wet_sponge',
		[ 
		' B ', 
		' A ',
		'   '  
		],{
		  A: 'minecraft:water_bucket', 
		  B: 'minecraft:sponge'
	}).replaceIngredient({item: 'minecraft:water_bucket'}, 'minecraft:bucket')

	event.shaped(
		'minecraft:water_bucket',
		[ 
		' A ', 
		' B ',
		'   '  
		],{
		  A: 'minecraft:wet_sponge', 
		  B: 'minecraft:bucket'
	}).replaceIngredient({item: 'minecraft:wet_sponge'}, 'minecraft:sponge')

	event.shaped('minecraft:sponge', [
		'BAB', 
		'ACA',
		'BAB'  
		],{
		  A: 'minecraft:string', 
		  B: 'kubejs:cut_carpet',
		  C: 'minecraft:white_wool'
	})

	event.shaped('minecraft:furnace', [
		'AAA', 
		'A A',
		'AAA'  
		],{
		A: 'kubejs:concrete_piece'
  })

  	event.shaped('immersiveengineering:hammer', [
		' BC', 
		' AB',
		'A  '  
		],{
		A: '#forge:rods/wooden',
		B: 'kubejs:concrete_piece',
		C: 'minecraft:string'
  })
  
  event.remove({output: 'farmersdelight:flint_knife'})
  event.shaped('farmersdelight:flint_knife', [
		' B ', 
		' A ',
		'   '  
		],{
		A: '#forge:rods/wooden',
		B: '#minecraft:planks'
})

  event.remove({output: 'minecraft:brush'})
  event.shaped('minecraft:brush', [
		'  B', 
		' A ',
		'   '  
		],{
		A: '#forge:rods/wooden',
		B: 'minecraft:string'
})

	event.shapeless('actuallyadditions:water_bowl', [
		'minecraft:water_bucket',
		'minecraft:bowl'
	]).replaceIngredient({item: 'minecraft:water_bucket'}, 'minecraft:bucket')

	event.remove({id: 'create:crafting/kinetics/belt_connector'})
	event.shaped('create:belt_connector', [
		'   ', 
		'AAA',
		'AAA'  
		],{
		A: 'kubejs:cut_carpet'
})

	event.shaped('6x create:belt_connector', [
		'   ', 
		'AAA',
		'AAA'  
		],{
		A: 'thermal:cured_rubber'
})

	event.remove({output: 'immersiveengineering:cokebrick'})
	event.shaped('4x immersiveengineering:cokebrick', [
		'ABA', 
		'BCB',
		'ABA'  
		],{
		A: 'create:andesite_alloy',
		B: 'supplementaries:ash_brick',
		C: 'minecraft:cobblestone',
})

event.remove({output: 'create:hand_crank'})
event.shaped('create:hand_crank', [
	'  B', 
	'AAA',
	'   '  
	],{
	A: '#minecraft:planks',
	B: 'minecraft:stick'
})

	event.replaceInput({id: 'createaddition:crafting/rolling_mill'}, 'create:iron_sheet', 'create:andesite_alloy')
	event.replaceInput({output: 'supplementaries:sack'}, '#forge:crops/flax', 'kubejs:wallpaper')
	event.replaceInput({output: 'minecraft:lead'}, 'minecraft:slime_ball', 'minecraft:string')

	event.replaceInput({id: 'create:crafting/kinetics/steam_engine'}, 'create:golden_sheet', 'create:shaft')
	event.replaceInput({id: 'create:crafting/kinetics/brass_hand'}, 'create:golden_sheet', '#minecraft:planks')
	event.remove({output: 'immersiveengineering:electron_tube'})
	event.remove({output: 'minecraft:coal_block'})

	event.replaceInput({input: 'minecraft:coal'}, 'minecraft:coal', 'minecraft:charcoal')
	event.replaceInput({output: 'thermal:machine_crucible'}, '#forge:glass', 'eidolon:crucible')


})