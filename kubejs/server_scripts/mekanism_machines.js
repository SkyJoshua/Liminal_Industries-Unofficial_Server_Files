ServerEvents.recipes(event => {

//basic
	event.replaceInput({output: 'mekanism:electrolytic_core'}, 'mekanism:alloy_infused', 'minecraft:iron_ingot')

	event.shaped('mekanism:basic_chemical_tank', [
		'ABA', 
		'B B',
		'ABA'  
		],{
		A: 'immersiveengineering:ingot_steel', 
		B: 'mekanism:ingot_osmium'
	})

	event.remove({output: 'mekanism:precision_sawmill'})
	event.shaped('mekanism:precision_sawmill', [
		'EDE', 
		'BAB',
		'ECE'  
		],{
		A: 'mekanism:steel_casing', 
		B: 'mekanism:basic_control_circuit',
		C: 'thermal:machine_sawmill',
		D: 'thermal:saw_blade',
		E: 'mekanism:ingot_osmium'
	})

	event.remove({output: 'mekanism:energized_smelter'})
	event.shaped('mekanism:energized_smelter', [
		'ECE', 
		'BAB',
		'ECE'  
		],{
		A: 'mekanism:steel_casing', 
		B: 'mekanism:basic_control_circuit',
		C: 'thermal:machine_furnace',
		E: 'mekanism:ingot_osmium'
	})

	event.remove({output: 'mekanism:crusher'})
	event.shaped('mekanism:crusher', [
		'ECE', 
		'BAB',
		'ECE'  
		],{
		A: 'mekanism:steel_casing', 
		B: 'mekanism:basic_control_circuit',
		C: 'create:crushing_wheel',
		E: 'mekanism:ingot_osmium'
	})

	event.remove({output: 'mekanism:purification_chamber'})
	event.shaped('mekanism:purification_chamber', [
		'EDE', 
		'BAB',
		'ECE'  
		],{
		A: 'mekanism:steel_casing', 
		B: 'mekanism:basic_control_circuit',
		C: 'actuallyadditions:empowered_emeradic_crystal',
		D: 'create:propeller',
		E: 'mekanism:ingot_osmium'
	})

	event.remove({output: 'mekanism:electrolytic_separator'})
	event.shaped('mekanism:electrolytic_separator', [
		'ECE', 
		'BAB',
		'ECE'  
		],{
		A: 'mekanism:steel_casing', 
		B: 'mekanism:basic_control_circuit',
		C: 'mekanism:electrolytic_core',
		E: 'mekanism:ingot_osmium'
	})

//advanced

	event.remove({output: 'mekanism:chemical_oxidizer'})
	event.shaped('mekanism:chemical_oxidizer', [
		'ECE', 
		'BAB',
		'EDE'  
		],{
		A: 'mekanism:steel_casing', 
		B: 'mekanism:advanced_control_circuit',
		C: 'thermal:blizz_rod',
		D: 'mekanism:basic_chemical_tank',
		E: 'mekanism:ingot_osmium'
	})

	event.remove({output: 'mekanism:pressurized_reaction_chamber'})
	event.shaped('mekanism:pressurized_reaction_chamber', [
		'ECE', 
		'BAB',
		'EDE'  
		],{
		A: 'mekanism:steel_casing', 
		B: 'mekanism:advanced_control_circuit',
		C: 'mekanism:dynamic_tank',
		D: 'mekanism:basic_chemical_tank',
		E: 'mekanism:ingot_osmium'
	})

	event.remove({output: 'ae2:condenser'})
	event.shaped('ae2:condenser', [
		'ECE', 
		'BAB',
		'EDE'  
		],{
		A: 'mekanism:steel_casing', 
		B: 'mekanism:advanced_control_circuit',
		C: 'enderio:ender_resonator',
		D: 'mekanism:pressure_disperser',
		E: 'kubejs:reality_alloy'
	})

//elite

	event.remove({output: 'mekanism:chemical_injection_chamber'})
	event.shaped('mekanism:chemical_injection_chamber', [
		'ECE', 
		'BAB',
		'EDE'  
		],{
		A: 'mekanism:steel_casing', 
		B: 'mekanism:elite_control_circuit',
		C: 'enderio:ender_resonator',
		D: 'enderio:impulse_hopper',
		E: 'mekanism:ingot_osmium'
	})

	event.remove({output: 'mekanism:antiprotonic_nucleosynthesizer'})
	event.shaped('mekanism:antiprotonic_nucleosynthesizer', [
		'ECE', 
		'BAB',
		'EDE'  
		],{
		A: 'mekanism:steel_casing', 
		B: 'mekanism:elite_control_circuit',
		C: 'mekanism:pellet_antimatter',
		D: 'kubejs:overclocked_clock',
		E: 'mekanism:ingot_osmium'
	})

//ultimate

	event.remove({output: 'mekanism:combiner'})
	event.shaped('mekanism:combiner', [
		'ECE', 
		'BAB',
		'EDE'  
		],{
		A: 'mekanism:steel_casing', 
		B: 'mekanism:ultimate_control_circuit',
		C: 'mekanism:pellet_antimatter',
		D: 'thermal:machine_crafter',
		E: 'mekanism:ingot_osmium'
	})

//other
	event.replaceInput({type: 'enderio:slicing'}, 'enderio:energetic_alloy_ingot', 'enderio:soularium_ingot')
	event.remove({id: 'tconstruct:smeltery/casting/ender/pearl'})
	event.remove({id: 'enderio:alloy_smelting/ender_pearl'})

})