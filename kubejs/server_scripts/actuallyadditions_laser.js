ServerEvents.recipes(event => {
	
	event.remove({ id: 'actuallyadditions:laser/crystalize_void_crystal' })
	event.remove({ id: 'actuallyadditions:laser/crystalize_void_crystal_block' })
	event.remove({ output: 'actuallyadditions:lens_of_the_miner' })

	event.remove({output: 'actuallyadditions:black_quartz_block'})
	event.shaped('actuallyadditions:black_quartz_block', [
		'AAA', 
		'AAA',
		'AAA'  
		],{
		A: 'actuallyadditions:black_quartz'
	})

	let laser = (Output, Input1, Energy) => {
    event.custom({
		"type": "actuallyadditions:laser",
		"energy": Energy,
		"ingredient": {
		  "item": Input1
		},
		"result": {
		  "item": Output
		}
	  })
	}

	laser(
		'actuallyadditions:void_crystal',
		'actuallyadditions:black_quartz',
		60
	)

	laser(
		'actuallyadditions:void_crystal_block',
		'actuallyadditions:black_quartz_block',
		600
	)

})