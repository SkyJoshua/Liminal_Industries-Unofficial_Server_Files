ServerEvents.recipes(event => {
	
	event.remove({output: 'enderio:pulsating_alloy_ingot'})
	event.recipes.enderio.alloy_smelting(
		Item.of("enderio:pulsating_alloy_ingot"),
		[Item.of("mekanism:ingot_osmium"), Ingredient.of("ae2:ender_dust")],
		5000,
		5.5
	);

	event.remove({output: 'mekanism:basic_control_circuit'})
	event.custom({
		"type":"mekanism:metallurgic_infusing",
		"chemicalInput":{"amount":100,"tag":"mekanism:redstone"},
		"itemInput":{"ingredient":{"item":"enderio:pulsating_alloy_ingot"}},
		"output":{"item":"mekanism:basic_control_circuit"}
	})

	event.remove({output: 'mekanism:advanced_control_circuit'})
	event.custom({
		"type":"mekanism:metallurgic_infusing",
		"chemicalInput":{"amount":100,"tag":"mekanism:gold"},
		"itemInput":{"ingredient":{"item":"mekanism:alloy_infused"}},
		"output":{"item":"mekanism:advanced_control_circuit"}
	})

	event.remove({output: 'mekanism:elite_control_circuit'})
	event.custom({
		"type":"mekanism:metallurgic_infusing",
		"chemicalInput":{"amount":100,"tag":"mekanism:diamond"},
		"itemInput":{"ingredient":{"item":"mekanism:alloy_reinforced"}},
		"output":{"item":"mekanism:elite_control_circuit"}
	})

	event.remove({output: 'mekanism:alloy_atomic'})
	event.remove({output: 'mekanism:ultimate_control_circuit'})
	event.custom({
		"type":"mekanism:metallurgic_infusing",
		"chemicalInput":{"amount":100,"tag":"mekanism:refined_obsidian"},
		"itemInput":{"ingredient":{"item":"mekanism:alloy_atomic"}},
		"output":{"item":"mekanism:ultimate_control_circuit"}
	})

    event.custom({
		"type": "eidolon:ritual_brazier_crafting",
		"focusItems": [
		  {
			"type": "forge:partial_nbt",
			"item": "minecraft:potion",
			"nbt": "{Potion:\"minecraft:poison\"}"
		  }
		],
		"healthRequirement": 3.0,
		"keepNbtOfReagent": false,
		"output": {
		  "item": "kubejs:moderate_soul_gem"
		},
		"pedestalItems": [
		  {
			"item": "eidolon:soul_shard"
		  },
		  {
			"item": "mekanism:enriched_carbon"
		  },
		  {
			"item": "mekanism:enriched_gold"
		  },
		  {
			"item": "eidolon:soul_shard"
		  }
		],
		"reagent": [
		  {
			"item": "eidolon:lesser_soul_gem"
		  }
		]
	  })

	event.remove({output: 'mekanism:ingot_refined_glowstone'})
	event.custom({"type":"mekanism:reaction",
		"duration":100,
		"fluidInput":{"amount":500,"fluid":"thermal:glowstone"},
		"gasInput":{"amount":100,"gas":"mekanism:oxygen"},
		"gasOutput":{"amount":50,"gas":"mekanism:oxygen"},
		"itemInput":{"ingredient":[{"item":"minecraft:gold_ingot"}]},
		"itemOutput":{"item":"mekanism:ingot_refined_glowstone"}
	})

	event.remove({output: 'enderio:energetic_alloy_ingot'})
	event.custom({"type":"mekanism:reaction",
		"duration":100,
		"fluidInput":{"amount":500,"fluid":"thermal:redstone"},
		"gasInput":{"amount":100,"gas":"mekanism:oxygen"},
		"gasOutput":{"amount":50,"gas":"mekanism:oxygen"},
		"itemInput":{"ingredient":[{"item":"mekanism:ingot_refined_glowstone"}]},
		"itemOutput":{"item":"enderio:energetic_alloy_ingot"}
	})

	event.remove({output: 'thermal:enderium_ingot'})
	event.custom({"type":"mekanism:reaction",
		"duration":200,
		"fluidInput":{"amount":250,"fluid":"thermal:ender"},
		"gasInput":{"amount":200,"gas":"mekanism:osmium"},
		"gasOutput":{"amount":10,"gas":"mekanism:chlorine"},
		"itemInput":{"ingredient":[{"item":"thermal:diamond_dust"}]},
		"itemOutput":{"item":"thermal:enderium_ingot"}
	})

	event.remove({output: 'mekanism:teleportation_core'})
	event.custom({
		"type": "enderio:soul_binding",
		"energy": 76800,
		"entity_type": "minecraft:enderman",
		"exp": 6,
		"input": {
		  "item": "ae2:singularity"
		},
		"output": {
		  "item": "mekanism:teleportation_core"
		}
	})

	event.custom({
		"type": "enderio:soul_binding",
		"energy": 76800,
		"entity_type": "minecraft:snow_golem",
		"exp": 0,
		"input": {
		  "item": "minecraft:ice"
		},
		"output": {
		  "item": "thermal:blizz_rod"
		}
	})

	event.remove({output: 'ae2:quantum_entangled_singularity'})
	event.custom({"type":"mekanism:combining",
		"extraInput":{"ingredient":{"item":"kubejs:quantum_string"}},
		"mainInput":{"amount":2,"ingredient":{"item":"ae2:singularity"}},
		"output":{"item":"ae2:quantum_entangled_singularity"}
	})

	event.recipes.createMixing('create:chromatic_compound', [
		Fluid.of('create_enchantment_industry:experience', 5),
		'mekanism:dye_base',
		'ae2:fluix_dust'
	]).superheated()

	event.remove({id: 'ae2:ender_dust'})
	event.recipes.create.crushing([
		Item.of('ae2:ender_dust').withChance(0.2)
	],
		'minecraft:end_stone'
	)

	event.custom({
		"type": "ae2:transform",
		"circumstance": {
		"type": "explosion"
		},
		"ingredients": [
		{
			"item": "ae2:singularity"
		}
		],
		"result": {
		"count": 1,
		"item": "endrem:black_eye"
		}
	})

	event.custom({
		"type":"mekanism:oxidizing",
		"input":{"ingredient":{"item":"mekanism:ingot_osmium"}},
		"output":{"amount":200,"gas":"mekanism:osmium"}
	})

	event.shaped('kubejs:ai', [
		'AEA', 
		'BCB',
		'ADA'  
		],{
		A: 'enderio:end_steel_ingot',
		B: 'mekanism:basic_control_circuit',
		C: 'refurbished_furniture:television',
		D: 'thermal:blizz_rod',
		E: 'enderio:guardian_diode'
	})

	event.remove({output: 'mekanism:steel_casing'})
	event.shaped('mekanism:steel_casing', [
		'AEA', 
		'BCB',
		'ADA'  
		],{
		A: 'immersiveengineering:ingot_steel',
		B: 'mekanism:basic_control_circuit',
		C: 'enderio:void_chassis',
		D: 'immersiveengineering:component_electronic_adv',
		E: 'kubejs:ai'
	})

	event.remove({id: 'botania:mana_infusion/ender_pearl_from_ghast_tear'})
	event.remove({id: 'thermal:machines/centrifuge/centrifuge_magma_cream'})
	event.remove({output: 'enderio:primitive_alloy_smelter'})
	event.remove({output: 'botania:fel_pumpkin'})
	event.remove({id: 'thermal:rubber_from_vine'})
	event.remove({id: 'thermal:rubber_from_dandelion'})
	event.remove({output: 'mekanism:pellet_antimatter'})

	event.remove({output: 'supplementaries:lumisene_bucket'})
	event.recipes.thermal.crucible(Fluid.of('supplementaries:lumisene', 100), 'botania:bifrost_perm')

	event.replaceInput({id: 'thermal:machines/crucible/crucible_ender_pearl'}, 'minecraft:ender_pearl', 'ae2:ender_dust')
	event.remove({output: 'enderio:infinity_rod'})
	event.recipes.createCutting('2x enderio:infinity_rod', 'enderio:infinity_rod')

	event.remove({output: 'mekanism:alloy_reinforced'})
	event.recipes.botania.terra_plate("mekanism:alloy_reinforced", ["thermal:enderium_ingot", "botania:bifrost_perm",'minecraft:ender_pearl'], 250000)

	event.remove({output: 'mekanism:alloy_infused'})
	event.recipes.mekanismPurifying('mekanism:alloy_infused', 'minecraft:ochre_froglight', {gas: 'mekanism:oxygen', amount: 5})

	event.replaceInput({input: 'minecraft:coal_block'}, 'minecraft:coal_block', 'thermal:charcoal_block')
	event.replaceInput({input: '#forge:dusts/coal'}, '#forge:dusts/coal', 'mekanism:dust_charcoal')
	event.replaceInput({output: 'create:blaze_cake_base'}, '#forge:eggs', 'create:cinder_flour')

	event.replaceInput({output: 'enderio:alloy_smelter'}, 'minecraft:furnace', 'thermal:machine_furnace')
	event.replaceInput({output: 'enderio:sag_mill'}, 'minecraft:piston', 'thermal:machine_pulverizer')
	event.replaceInput({output: 'mekanism:metallurgic_infuser'}, 'minecraft:furnace', 'thermal:machine_furnace')
	event.replaceInput({output: 'mekanism:enrichment_chamber'}, 'mekanism:steel_casing', 'enderio:void_chassis')
	event.replaceInput({output: 'mekanism:enrichment_chamber'}, 'minecraft:iron_ingot', 'mekanism:ingot_osmium')
	event.replaceInput({output: 'minecraft:magma_cream'}, 'minecraft:blaze_powder', 'thermal:sulfur_dust')

	event.remove({id: 'tconstruct:compat/refined_obsidian_ingot'})

})