ServerEvents.recipes(event => {
	
	event.remove({output: 'actuallyadditions:empowerer'})
	event.shaped('actuallyadditions:empowerer', [
		'DFD', 
		'CEC',
		'ABA'  
		],{
		A: 'thermal:charge_bench',
		B: 'kubejs:half_frame_bottom',
		C: 'immersiveengineering:component_electronic',
		D: 'kubejs:soul_fuse',
		E: 'immersiveengineering:coil_mv',
		F: 'actuallyadditions:diamatine_crystal'
	})

	event.remove({output: 'actuallyadditions:display_stand'})
	event.shaped('actuallyadditions:display_stand', [
		'DFD', 
		'CEC',
		'ABA'  
		],{
		A: 'actuallyadditions:restonia_crystal',
		B: 'kubejs:half_frame_bottom',
		C: 'immersiveengineering:component_electronic',
		D: 'kubejs:soul_fuse',
		E: 'immersiveengineering:coil_mv',
		F: 'create:display_link'
	})

	let empowering = (output, Input, Input1, Input2, Input3, Input4, time, energy, colour) => {
    event.custom({
		"type": "actuallyadditions:empowering",
		"base": {
		  "item": Input
		},
		"color": colour,
		"energy": energy,
		"modifiers": [
		  {
			"item": Input1
		  },
		  {
			"item": Input2
		  },
		  {
			"item": Input3
		  },
		  {
			"item": Input4
		  }
		],
		"result": {
		  "item": output
		},
		"time": time
	  })
	}

	event.remove({output: 'actuallyadditions:empowered_void_crystal'})
	empowering(
		'actuallyadditions:empowered_void_crystal',
		'actuallyadditions:void_crystal',

		'thermal:tar',
		'thermal:tar',
		'thermal:tar', 
		'thermal:tar',
		50, 5000, 0
	)

	event.remove({output: 'actuallyadditions:empowered_void_crystal_block'})
	event.shapeless('9x actuallyadditions:empowered_void_crystal', ['actuallyadditions:empowered_void_crystal_block'])
	event.shapeless('actuallyadditions:empowered_void_crystal_block', ['9x actuallyadditions:empowered_void_crystal'])
	empowering(
		'actuallyadditions:empowered_void_crystal_block',
		'actuallyadditions:void_crystal_block',

		'thermal:tar_block',
		'thermal:tar_block',
		'thermal:tar_block', 
		'thermal:tar_block',
		500, 50000, 0
	)

	event.remove({output: 'enderio:infinity_rod'})
	empowering(
		'enderio:infinity_rod',
		'minecraft:stick',

		'eidolon:ender_calx',
		'enderio:confusing_powder', 
		'enderio:grains_of_infinity',
		'enderio:confusing_powder',
		2000, 10000, 10365735
	)

	empowering(
		'kubejs:reality_charge',
		'kubejs:reality_charge_empty',

		'enderio:confusing_powder',
		'enderio:confusing_powder', 
		'enderio:confusing_powder',
		'enderio:confusing_powder',
		2000, 100000, 5439613
	)

})