BlockEvents.rightClicked('kubejs:floor_tiles', event => {
	if (event.item.id == 'kubejs:concrete_piece') {
		event.item.count--
		event.server.runCommandSilent(`execute in ${event.block.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run playsound minecraft:block.deepslate.place master @a ~ ~ ~ 1 0`)
		event.server.runCommandSilent(`execute in ${event.block.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run execute as @a[distance=..1] at @s run tp @s ~ ~0.1 ~`)
		event.server.runCommandSilent(`execute in ${event.block.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run setblock ~ ~ ~ kubejs:floor_tiles_full`)
	}
})