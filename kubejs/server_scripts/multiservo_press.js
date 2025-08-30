ServerEvents.recipes(event => {

	let press = (Output, Catalyst, Input) => {
		event.remove({output: Output})
		event.recipes.thermal.press(Output, [Input, Catalyst])
	}

	press(
		'ae2:printed_calculation_processor',
		'ae2:calculation_processor_press',
		'ae2:certus_quartz_crystal'
	)

	press(
		'ae2:printed_engineering_processor',
		'ae2:engineering_processor_press',
		'minecraft:diamond'
	)

	press(
		'ae2:printed_logic_processor',
		'ae2:logic_processor_press',
		'minecraft:gold_ingot'
	)

	press(
		'ae2:printed_silicon',
		'ae2:silicon_press',
		'#forge:silicon'
	)


})