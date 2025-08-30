ServerEvents.recipes(event => {

    event.remove({output: 'thermal:press_gear_die'})

    event.replaceInput({output: 'thermal:machine_bottler'}, '#forge:gears', 'immersiveengineering:component_electronic_adv')
	event.replaceInput({input: 'thermal:copper_gear'}, 'thermal:copper_gear', 'immersiveengineering:component_electronic')
    event.replaceInput({output: 'thermal:machine_smelter'}, '#forge:gears', 'immersiveengineering:component_electronic')
    event.replaceInput({output: 'thermal:flux_saw'}, '#forge:gears', 'immersiveengineering:component_electronic')
    event.replaceInput({output: 'thermal:flux_drill'}, '#forge:gears', 'immersiveengineering:component_electronic')
    event.replaceInput({output: 'thermal:machine_pyrolyzer'}, '#forge:gears', 'immersiveengineering:component_electronic')
    event.replaceInput({output: 'thermal:machine_refinery'}, '#forge:gears', 'immersiveengineering:component_electronic')
    event.replaceInput({output: 'thermal:potion_duration_augment'}, 'minecraft:copper_ingot', 'minecraft:iron_ingot')

    event.replaceInput({input: '#forge:gears'}, '#kubejs:ender_gear', 'actuallyadditions:empowered_void_crystal')
    event.replaceInput({input: '#forge:gears'}, '#forge:gears', 'immersiveengineering:component_electronic_adv')

})