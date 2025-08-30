ServerEvents.recipes(event => {

	  event.remove({ mod: 'endrem' })

    event.custom({
      "type": "eidolon:ritual_brazier_crafting",
      "focusItems": [
        {
          "type": "forge:partial_nbt",
          "item": "minecraft:potion",
          "nbt": "{Potion:\"eidolon:undeath\"}"
        }
      ],
      "healthRequirement": 10.0,
      "keepNbtOfReagent": false,
      "output": {
        "item": "endrem:undead_eye"
      },
      "pedestalItems": [
        {
          "item": "eidolon:death_essence"
        },
        {
          "item": "eidolon:wraith_heart"
        },
        {
          "item": "eidolon:shadow_gem"
        },
        {
          "item": "kubejs:moderate_soul_gem"
        },
        {
          "item": "eidolon:lesser_soul_gem"
        },
        {
          "item": "eidolon:soul_shard"
        }
      ],
      "reagent": [
        {
          "item": "minecraft:fermented_spider_eye"
        }
      ]
    })

    event.custom({
      "type": "botania:elven_trade",
      "ingredients": [
        {
          "item": "brewinandchewin:pizza"
        }
      ],
      "output": [
        {
          "item": "endrem:magical_eye"
        }
      ]
    })

  event.custom({
    "type": "enderio:soul_binding",
    "energy": 76800,
    "entity_type": "minecraft:enderman",
    "exp": 6,
    "input": {
      "item": "minecraft:ender_eye"
    },
    "output": {
      "item": "endrem:rogue_eye"
    }
  })

})