ServerEvents.recipes(event => {

    event.remove({id: 'create:splashing/gravel'})
    event.remove({id: 'create:splashing/red_sand'})
	event.remove({id: 'createaddition:charging/channeling'})
	event.remove({output: 'supplementaries:slingshot'})

    event.remove({output: 'simpleradio:radiosmither'})
    event.shaped('simpleradio:radiosmither', [
		'   ', 
		'BAB',
		'CCC'  
		],{
		  A: 'minecraft:redstone', 
		  B: 'minecraft:iron_ingot',
		  C: 'minecraft:stone'
	})
    
})