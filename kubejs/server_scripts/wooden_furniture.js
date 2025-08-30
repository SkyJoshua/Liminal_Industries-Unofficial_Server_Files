ServerEvents.recipes(event => {

	let breaking = (output, input) => {
		event.shapeless(output, [input])
	}
	breaking('2x minecraft:oak_planks', '#backrooms:oak_furniture')
	breaking('2x minecraft:spruce_planks', '#backrooms:spruce_furniture')
	breaking('2x minecraft:birch_planks', '#backrooms:birch_furniture')
	breaking('2x minecraft:jungle_planks', '#backrooms:jungle_furniture')
	breaking('2x minecraft:acacia_planks', '#backrooms:acacia_furniture')
	breaking('2x minecraft:dark_oak_planks', '#backrooms:dark_oak_furniture')
	breaking('2x minecraft:mangrove_planks', '#backrooms:mangrove_furniture')
	breaking('2x minecraft:cherry_planks', '#backrooms:cherry_furniture')
	breaking('2x minecraft:warped_planks', '#backrooms:warped_furniture')
	breaking('2x minecraft:crimson_planks', '#backrooms:crimson_furniture')



	let chopping = (output, input) => {
		event.recipes.farmersdelight.cutting(
			input,
			"#forge:tools/axes",
			[
				output,
				Item.of("minecraft:stick")
                .withChance(0.5)
			],
			"minecraft:block.wood.break");
	}
	chopping('6x minecraft:oak_planks', '#backrooms:oak_furniture')
	chopping('6x minecraft:spruce_planks', '#backrooms:spruce_furniture')
	chopping('6x minecraft:birch_planks', '#backrooms:birch_furniture')
	chopping('6x minecraft:jungle_planks', '#backrooms:jungle_furniture')
	chopping('6x minecraft:acacia_planks', '#backrooms:acacia_furniture')
	chopping('6x minecraft:dark_oak_planks', '#backrooms:dark_oak_furniture')
	chopping('6x minecraft:mangrove_planks', '#backrooms:mangrove_furniture')
	chopping('6x minecraft:cherry_planks', '#backrooms:cherry_furniture')
	chopping('6x minecraft:warped_planks', '#backrooms:warped_furniture')
	chopping('6x minecraft:crimson_planks', '#backrooms:crimson_furniture')

	let cutting = (output, input) => {
		event.recipes.create.cutting(
			[
				output,
				Item.of("mekanism:sawdust")
				.withChance(0.2)
			],
		input
	)}
	cutting('10x minecraft:oak_planks', '#backrooms:oak_furniture')
	cutting('10x minecraft:spruce_planks', '#backrooms:spruce_furniture')
	cutting('10x minecraft:birch_planks', '#backrooms:birch_furniture')
	cutting('10x minecraft:jungle_planks', '#backrooms:jungle_furniture')
	cutting('10x minecraft:acacia_planks', '#backrooms:acacia_furniture')
	cutting('10x minecraft:dark_oak_planks', '#backrooms:dark_oak_furniture')
	cutting('10x minecraft:mangrove_planks', '#backrooms:mangrove_furniture')
	cutting('10x minecraft:cherry_planks', '#backrooms:cherry_furniture')
	cutting('10x minecraft:warped_planks', '#backrooms:warped_furniture')
	cutting('10x minecraft:crimson_planks', '#backrooms:crimson_furniture')

	event.shapeless("minecraft:brown_wool", ["refurbished_furniture:brown_sofa"])
	event.shapeless("minecraft:brown_wool", ["refurbished_furniture:brown_stool"])

	event.recipes.farmersdelight.cutting(
		"refurbished_furniture:brown_sofa",
		"#forge:tools/axes",
		[
			"minecraft:oak_planks",
			"minecraft:brown_wool"
		],
		"minecraft:block.wood.break");

	event.recipes.create.cutting(
		[
			"2x minecraft:oak_planks",
			"minecraft:brown_wool"
		],
		"refurbished_furniture:brown_sofa")

	event.recipes.farmersdelight.cutting(
		"refurbished_furniture:brown_stool",
		"#forge:tools/axes",
		[
			"minecraft:oak_planks",
			"minecraft:brown_wool"
		],
		"minecraft:block.wood.break");

	event.recipes.create.cutting(
		[
			"2x minecraft:oak_planks",
			"minecraft:brown_wool"
		],
		"refurbished_furniture:brown_stool")

	chopping('4x minecraft:bamboo_planks', 'chimes:carved_bamboo_chimes')
	
})