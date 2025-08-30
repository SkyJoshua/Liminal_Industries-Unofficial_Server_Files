ServerEvents.recipes(event => {

    event.custom({
            "type": "immersiveengineering:squeezer",
            "energy": 19200,
            "input": {
              "basePredicate": {
                "tag": "forge:dusts/coal_coke"
              },
              "count": 8
            },
            "result": {
              "tag": "forge:dusts/hop_graphite"
            }
          })

		event.recipes.farmersdelight.cutting(
			"kubejs:carpet_dust",
			"minecraft:brush",
        [
              Item.of("minecraft:wheat_seeds").withChance(0.5),
              Item.of("minecraft:beetroot_seeds").withChance(0.5),
              Item.of("minecraft:melon_seeds").withChance(0.5),
              Item.of("minecraft:pumpkin_seeds").withChance(0.5)
        ],
			"minecraft:item.brush.brushing.generic");

		event.recipes.farmersdelight.cutting(
			"minecraft:dirt",
			"minecraft:brush",
        [
              Item.of("farmersdelight:cabbage_seeds").withChance(0.5),
              Item.of("farmersdelight:tomato_seeds").withChance(0.5),
              Item.of("immersiveengineering:seed").withChance(0.5),
              Item.of("supplementaries:flax_seeds").withChance(0.5)
        ],
			"minecraft:item.brush.brushing.generic");

		event.recipes.farmersdelight.cutting(
			"minecraft:mud",
			"minecraft:brush",
        [

              Item.of("minecraft:potato").withChance(0.5),
              Item.of("farmersdelight:onion").withChance(0.5),
              Item.of("minecraft:carrot").withChance(0.5),
              Item.of("farmersdelight:rice").withChance(0.5)
        ],
			"minecraft:item.brush.brushing.generic");

})