ServerEvents.recipes(event => {

    event.replaceInput({id: 'simpleradio:receiving_module'}, 'minecraft:amethyst_shard', 'create:copper_nugget')
    event.replaceInput({id: 'simpleradio:transmitting_module'}, 'minecraft:lapis_lazuli', 'minecraft:redstone')

})