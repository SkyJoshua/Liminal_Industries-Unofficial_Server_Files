ServerEvents.recipes(event => {


	event.shaped('kubejs:half_frame_top', [
		'ABA', 
		'A A',
		'   '  
		],{
		A: 'immersiveengineering:light_engineering',
		B: 'actuallyadditions:enori_crystal'
	})

	event.shaped('kubejs:half_frame_bottom', [
		'   ', 
		'A A',
		'ABA'  
		],{
		A: 'immersiveengineering:heavy_engineering',
		B: 'actuallyadditions:void_crystal'
	})

	event.remove({output: 'thermal:machine_crystallizer'})
	event.shaped('thermal:machine_crystallizer', [
		'AFA', 
		'CDC',
		'ABA'  
		],{
		A: 'minecraft:iron_ingot',
		B: 'immersiveengineering:furnace_heater',
		C: 'immersiveengineering:coil_lv',
		D: 'immersiveengineering:light_engineering',
		F: 'immersiveengineering:metal_barrel'
	})

	event.remove({output: 'thermal:machine_chiller'})
	event.shaped('thermal:machine_chiller', [
		' C ', 
		'EDE',
		'ABA'  
		],{
		A: 'immersiveengineering:component_electronic',
		B: 'thermal:rf_coil',
		C: 'immersiveengineering:coil_lv',
		D: 'thermal:machine_frame',
		E: 'create:iron_sheet'
	})

	event.remove({output: 'thermal:machine_frame'})
	event.custom({"type": "create:item_application",
		"ingredients":[
			{"item": "kubejs:half_frame_bottom"},
			{"item": "kubejs:half_frame_top"}],
		"results": [
			{"item": "thermal:machine_frame"}]
	})

	event.remove({output: '#forge:gears'})
	event.recipes.createCrushing('thermal:quartz_dust', 'minecraft:quartz')

	event.remove({output: 'ae2:sky_dust'})
	event.recipes.createCrushing([
		'ae2:sky_stone_block',
		Item.of('ae2:sky_dust').withChance(0.5)
	],	'ae2:sky_stone_block')

	event.recipes.createCrushing([
		'moyai:moyai',
		Item.of('minecraft:cobblestone').withChance(0.5),
		Item.of('minecraft:ghast_tear').withChance(0.01)
	],	'moyai:moyai')

	event.recipes.thermal.smelter('kubejs:fluorescent_tube', [ 
		'minecraft:glass',
		'minecraft:copper_ingot',
		'immersiveengineering:wire_copper'
	])

	event.recipes.thermal.smelter('immersiveengineering:electron_tube', [
		'minecraft:glass',
		'thermal:electrum_ingot',
		'immersiveengineering:wire_electrum'
	])

	event.remove({output: 'thermal:rf_coil'})
	event.shaped('thermal:rf_coil', [
		' B ', 
		'BAB',
		' B '  
		],{
		A: 'minecraft:gold_ingot',
		B: 'immersiveengineering:wirecoil_redstone'
	})

	event.remove({id: 'immersiveengineering:bottling/duroplast_plate'})
	event.recipes.thermal.chiller('immersiveengineering:plate_duroplast', [
		Fluid.of('immersiveengineering:phenolic_resin', 250),
		'immersiveengineering:mold_plate'
	])

	event.remove({id: 'tconstruct:smeltery/seared/grout'})
	event.remove({id: 'tconstruct:common/flint'})
	event.remove({output: 'immersiveengineering:grit_sand'})
	event.recipes.createMixing(Fluid.of('immersiveengineering:concrete', 500), [
		'minecraft:sand',
		'minecraft:sand',
		'minecraft:gravel',
		'minecraft:clay_ball'
	])

	event.remove({id: 'immersiveengineering:crafting/redstone_acid'})
	event.remove({id: 'create:crafting/materials/rose_quartz'})
	event.custom({
        "type": "thermal:crystallizer",
        "ingredients": [
          {
            "fluid": "immersiveengineering:redstone_acid",
            "amount": 1000
          },
          {
            "tag": "forge:dusts/quartz"
          }
        ],
        "result": [
          {
            "item": "create:rose_quartz"
          }
        ],
	    "energy": 500
    })

	event.custom({
        "type": "thermal:crystallizer",
        "ingredients": [
          {
            "fluid": "immersiveengineering:redstone_acid",
            "amount": 1000
          },
		  {
            "item": "eidolon:soul_shard"
          },
          {
            "tag": "forge:dusts/quartz"
          }
        ],
        "result": [
          {
            "item": "eidolon:lesser_soul_gem"
          }
        ],
	    "energy": 500
    })

	event.remove({id: 'thermal:dirt_crafting'})
	event.recipes.create.deploying(['kubejs:soul_fuse'], ['kubejs:empty_fuse', 'eidolon:soulfire_wand'])

	event.recipes.createSequencedAssembly([
		Item.of('thermal:lead_dust').withChance(0.2),
		Item.of('create:pulp').withChance(0.8)
		], 'kubejs:wallpaper', [
			event.recipes.createFilling('kubejs:wallpaper', ['kubejs:wallpaper', Fluid.of('immersiveengineering:redstone_acid', 10)])
	]).transitionalItem('kubejs:wallpaper').loops(1)

	event.shaped('kubejs:putty_knife', [
		'  A', 
		' B ',
		'   '  
	],{
		A: 'create:iron_sheet',
		B: 'minecraft:stick'
	})

	event.recipes.create.sequenced_assembly([
		Item.of('immersiveengineering:ingot_steel').withChance(0.9),
		Item.of('kubejs:cracked_steel').withChance(0.1)
	], 'kubejs:hot_steel', [
		event.recipes.createFilling('kubejs:hot_steel', ['kubejs:hot_steel', Fluid.of('minecraft:water', 100)])
	]).transitionalItem('kubejs:hot_steel').loops(1)
	
})