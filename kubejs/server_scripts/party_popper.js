ItemEvents.firstRightClicked(event => {
    if(event.item.id == "kubejs:party_popper" && !event.player.isFake()) {
        event.server.runCommandSilent(`execute as ${event.player.username} at ${event.player.username} run particle supplementaries:confetti ~ ~1 ~ 0 0 0 0.5 10000 force`)
        event.server.runCommandSilent(`execute as ${event.player.username} at ${event.player.username} run playsound minecraft:custom.party_horn master @a ~ ~1 ~ 1 0`)
        event.server.runCommandSilent(`execute as ${event.player.username} at ${event.player.username} run playsound minecraft:entity.firework_rocket.blast master @a ~ ~1 ~ 1 0`)
        event.server.runCommandSilent(`execute as ${event.player.username} at ${event.player.username} run playsound minecraft:entity.firework_rocket.twinkle master @a ~ ~1 ~ 1 1`)

        event.item.count--
    }
})