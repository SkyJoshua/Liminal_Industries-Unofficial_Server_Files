// priority: 0


StartupEvents.registry('block', event => {

	event.create('pool_tiles_sky').displayName('Pool Tiles')
		.fullBlock(true)
		.material("stone")
		.soundType("deepslate")
		.unbreakable()
		.transparent(true)
		.defaultCutout()
		.model('kubejs:block/pool_tiles')

	event.create('pool_tiles_wet').displayName('Wet Pool Tiles')
		.fullBlock(true)
		.material("stone")
		.soundType("deepslate")
		.unbreakable()
		.slipperiness(0.99)

	event.create('pool_tiles_golden').displayName('Golden Pool Tiles')
		.fullBlock(true)
		.material("stone")
		.soundType("metal")
		.unbreakable()

	event.create('pool_tiles_golden_half').displayName('Golden Pool Tiles')
		.fullBlock(true)
		.material("stone")
		.soundType("metal")
		.unbreakable()

	event.create('missing_tiles_empty').displayName('Missing Pool Tiles')
		.fullBlock(true)
		.material("stone")
		.soundType("deepslate")
		.unbreakable()
		.property(BlockProperties.AGE_3)
		.randomTick(tick => {
    const block = tick.block
	const properties = block.properties
	const age = Number(properties.age)
	    if (age == 3) {
      		block.set('kubejs:missing_tiles_half')
		} else {
        	block.set(block.getId(), {
          	age: `${age+1}`
        })
	}})

	event.create('missing_tiles_half').displayName('Missing Pool Tiles')
		.fullBlock(true)
		.material("stone")
		.soundType("deepslate")
		.unbreakable()
		.property(BlockProperties.AGE_3)
		.randomTick(tick => {
    const block = tick.block
	const properties = block.properties
	const age = Number(properties.age)
	    if (age == 3) {
      		block.set('kubejs:pool_tiles')
		} else {
        	block.set(block.getId(), {
          	age: `${age+1}`
        })
	}})
})

StartupEvents.registry('item', event => {

	event.create('pool_tile').displayName('Pool Tile')
	event.create('pool_tile_golden').displayName('Golden Pool Tile')

})
