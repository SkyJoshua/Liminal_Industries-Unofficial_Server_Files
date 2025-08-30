ItemEvents.entityInteracted("minecraft:glass_bottle", event=>{
	if (event.target.type == "minecraft:interaction") {
		event.server.runCommandSilent(`execute in ${event.entity.level.dimension} positioned ${event.entity.x} ${event.entity.y} ${event.entity.z} run playsound minecraft:item.bottle.fill_dragonbreath master @a ~ ~ ~ 1 1`)
		event.item.count--
		event.player.give('minecraft:dragon_breath')
    }
})