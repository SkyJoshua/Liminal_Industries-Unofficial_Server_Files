ServerEvents.recipes(event => {

	event.replaceInput({mod: 'chalk'}, 'minecraft:calcite', 'chalk:white_chalk')

	event.remove({output: 'chalk:white_chalk'})
	event.shapeless('chalk:white_chalk', [
		'minecraft:clay_ball',
		'kubejs:carpet_dust'
	])

	event.remove({output: 'chalk:chalk_box'})
	event.shaped('chalk:chalk_box', [
		'A A', 
		'A A',
		'AAA'  
	],{
		A: 'kubejs:wallpaper'
})

})