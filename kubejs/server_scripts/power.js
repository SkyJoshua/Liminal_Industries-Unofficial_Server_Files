ServerEvents.recipes(event => {

	event.remove({id: 'immersiveengineering:crafting/dynamo'})
    event.remove({id: 'immersiveengineering:crafting/watermill'})
    event.remove({id: 'create:crafting/kinetics/water_wheel'})
    event.remove({id: 'create:crafting/kinetics/large_water_wheel'})
    event.remove({id: 'create:crafting/kinetics/windmill_bearing'})
    event.remove({input: 'immersiveengineering:hammer'})

})