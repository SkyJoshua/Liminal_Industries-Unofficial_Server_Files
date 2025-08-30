// kubejs/server_scripts/fix_lamps.js

ServerEvents.commandRegistry(event => {
    const { commands: Commands } = event;

    event.register(
        Commands.literal("fixlamps")
            .requires(src => src.hasPermission(2))
            .executes(ctx => {
                let player = ctx.source.playerOrException;
                let level = ctx.source.level;
                let pos = player.blockPosition();

                let radius = 100; // small test
                let fixedCount = 0;

                for (let x = -radius; x <= radius; x++) {
                    for (let y = -radius; y <= radius; y++) {
                        for (let z = -radius; z <= radius; z++) {
                            let blockPos = pos.offset(x, y, z);
                            let block = level.getBlock(blockPos);

                            if (block.id === "kubejs:ceilling_lamp_off") {
                                block.set("kubejs:ceilling_lamp");

                                let markerPos = blockPos.below();
                                level.runCommandSilent(
                                    `summon marker ${markerPos.x} ${markerPos.y} ${markerPos.z} {Tags:["light_fix"]}`
                                );

                                level.runCommandSilent(
                                    `playsound immersiveengineering:tesla master @a ${blockPos.x} ${blockPos.y} ${blockPos.z} 1 1.5`
                                );

                                fixedCount++;
                            }
                        }
                    }
                }

                player.tell(`§fFixed §a${fixedCount}§f lamps in a §a${radius} §fblock radius.`);
                return fixedCount;
            })
    );
});
