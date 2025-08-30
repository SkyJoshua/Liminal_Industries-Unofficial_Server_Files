ServerEvents.recipes(event => {

    event.remove({output: 'tiab:time_in_a_bottle'})
	event.shaped('tiab:time_in_a_bottle', [
		'   ', 
		' A ',
		' B '  
		],{
		  A: 'thermal:sulfur_dust', 
		  B: 'minecraft:glass_bottle'
	})

	event.recipes.createEmptying([
		'minecraft:glass_bottle',
		Fluid.of('kubejs:liquid_time', 250)
	  ], 'tiab:time_in_a_bottle')

	event.recipes.thermal.bottler('kubejs:overclocked_clock', [Fluid.of('kubejs:liquid_time', 1000),'minecraft:clock'])

	event.recipes.create.sequenced_assembly([
        'endrem:old_eye'
     ], 'kubejs:overclocked_clock', [
		event.recipes.createFilling('kubejs:overclocked_clock', ['kubejs:overclocked_clock', Fluid.of('kubejs:liquid_time', 1000)])
    ]).transitionalItem('kubejs:overclocked_clock').loops(100)

})