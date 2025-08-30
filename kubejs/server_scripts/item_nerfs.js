ServerEvents.recipes(event => {

	event.remove({output: 'actuallyadditions:teleport_staff'})
	event.remove({output: 'immersiveengineering:fluid_placer'})
	event.remove({output: 'botania:dirt_rod'})
	event.remove({output: 'botania:skydirt_rod'})
	event.remove({output: 'botania:fire_rod'})

	event.remove({output: '#forge:dusts/ender_pearl'})

	event.remove({id: 'botania:elven_trade/ender_pearl_return'})
	event.remove({id: 'enderio:sag_milling/ender_pearl'})
	event.remove({ input: 'minecraft:ender_eye', type: 'tconstruct:melting' })
	event.remove({ input: 'minecraft:ender_chest', type: 'tconstruct:melting' })
	event.remove({ input: 'minecraft:end_crystal', type: 'tconstruct:melting' })
	event.remove({ input: 'minecraft:chain', type: 'tconstruct:melting' })
	event.remove({ input: 'miners_delight:copper_cup', type: 'create:filling' })

	event.remove({ output: 'minecraft:ender_eye'})
	event.shapeless('minecraft:ender_eye', [
		'minecraft:ender_pearl',
		'minecraft:blaze_powder'
	])

	event.remove({output: 'tempad:tempad'})
	event.shaped('tempad:tempad', [
		'   ', 
		'ABA',
		'CDE'  
		],{
		A: 'enderio:dark_steel_ingot',
		B: 'minecraft:tinted_glass',
		C: 'tiab:time_in_a_bottle',
		D: 'mekanism:teleportation_core',
		E: 'enderio:ender_resonator'
})

	event.remove({mod: 'snad'})
	event.recipes.createPressing('snad:snad', 'minecraft:sand')

	event.replaceInput({input: 'minecraft:ender_pearl'}, 'minecraft:ender_pearl', 'minecraft:echo_shard')
	event.replaceInput({input: 'minecraft:ender_eye'}, 'minecraft:ender_eye', 'minecraft:echo_shard')
	event.replaceInput({id: 'thermal:machines/crucible/crucible_ender_pearl'}, 'minecraft:echo_shard', 'ae2:ender_dust')

	event.replaceInput({output: 'thermal:chiller_ball_cast'}, 'minecraft:magma_cream', 'minecraft:slime_ball')
	event.replaceInput({output: 'thermal:chiller_rod_cast'}, 'minecraft:blaze_rod', 'minecraft:stick')
	event.replaceInput({output: 'thermal:chiller_ingot_cast'}, 'minecraft:nether_brick', 'minecraft:brick')

	event.remove({output: 'mekanism:dust_coal', input: 'minecraft:charcoal'})
	event.remove({id: 'mekanism:processing/coal/to_dust'})
	event.remove({id: 'enderio:sag_milling/coal'})


	event.remove({ output: 'musketmod:cartridge'})
	event.shapeless('8x musketmod:cartridge', [
		'thermal:lead_nugget',
		'minecraft:gunpowder',
		'minecraft:paper'
	])

	event.remove({ id: 'actuallyadditions:tiny_to_charcoal'})
	event.remove({ id: 'actuallyadditions:coal_to_tiny'})
	event.remove({ id: 'immersiveengineering:refinery/acetaldehyde'})

	event.shapeless('minecraft:coal_block', ['9x minecraft:coal'])
	event.shapeless('9x minecraft:coal', ['minecraft:coal_block'])
	event.shapeless('8x actuallyadditions:tiny_coal', ['minecraft:coal'])
	event.shaped('minecraft:charcoal', [
		'AAA', 
		'A A',
		'AAA'  
	],{
		A: 'actuallyadditions:tiny_charcoal'
})

	event.remove({output: 'eidolon:polished_planks', input: 'eidolon:polished_wood_pillar'})
	
	event.remove({output: 'storagedrawers:void_upgrade'})
	event.shapeless('storagedrawers:void_upgrade', ['storagedrawers:upgrade_template'])

})