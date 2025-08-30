ServerEvents.recipes(event => {

	event.recipes.create.mixing(Fluid.of('tconstruct:earth_slime', 250), 'minecraft:slime_ball').heated()

	event.recipes.create.mixing('tconstruct:sky_slime_ball', [Fluid.of('tconstruct:earth_slime', 250), 'botania:mana_powder'])
	event.recipes.create.mixing('tconstruct:ender_slime_ball', [Fluid.of('tconstruct:earth_slime', 250), 'ae2:ender_dust'])
	event.recipes.create.mixing('tconstruct:ichor_slime_ball', [Fluid.of('tconstruct:earth_slime', 250), 'minecraft:blaze_powder'])

	event.recipes.create.mixing(Fluid.of('tconstruct:molten_queens_slime', 1000), ['minecraft:slime_ball', 'tconstruct:sky_slime_ball', 'tconstruct:ichor_slime_ball', 'tconstruct:ender_slime_ball']).heated()

	event.recipes.create.compacting('tconstruct:cinderslime_ingot', ['tconstruct:ichor_slime_ball', 'minecraft:gold_ingot']).heated()
})