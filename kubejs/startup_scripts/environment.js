BlockEvents.modification(event => {
	event.modify('minecraft:sculk', block => {
		block.explosionResistance = 10000.0
		block.destroySpeed = -1.0
	})

	event.modify('minecraft:spawner', block => {
		block.explosionResistance = 10000.0
		block.destroySpeed = -1.0
	})

  })