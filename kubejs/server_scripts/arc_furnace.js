ServerEvents.recipes(event => {

    event.remove({type: 'immersiveengineering:arc_furnace'})

    event.remove({id: 'mekanism:processing/steel/enriched_iron_to_dust'})
    event.remove({id: 'enderio:alloy_smelting/dark_steel_ingot'})

    let arc_furnace = (output, Input1, Input2, Input3) => {
        event.custom({
            "type": "immersiveengineering:arc_furnace",
            "additives": [
              {
                "item": Input2
              },
              {
                "item": Input3
              }
            ],
            "energy": 51200,
            "input": {
              "item": Input1
            },
            "results": [
              {
                "base_ingredient": {
                  "item": output
                },
                "count": 1
              }
            ],
            "slag": {
                "item": "immersiveengineering:slag"
            },
            "time": 100
          })
        }

      event.custom({
          "type": "immersiveengineering:arc_furnace",
          "additives": [
            {
              "tag": "forge:coal_coke"
            }
          ],
          "energy": 30000,
          "input": {
            "item": "minecraft:iron_ingot"
          },
          "results": [
            {
              "base_ingredient": {
                "item": "immersiveengineering:ingot_steel"
              },
              "count": 1
            }
          ],
          "slag": {
              "item": "immersiveengineering:slag"
          },
          "time": 50
        })

    arc_furnace(
      'enderio:dark_steel_ingot',
      'immersiveengineering:ingot_steel',
      'create:shadow_steel',
      'create:powdered_obsidian'
    )

  event.remove({output: 'enderio:confusing_powder'})
  event.custom({
    "type": "immersiveengineering:arc_furnace",
    "additives": [
      {
        "item": "actuallyadditions:empowered_enori_crystal"
      },
      {
        "item": "botania:terrasteel_nugget"
      },
      {
        "item": "enderio:confusing_powder"
      }
    ],
    "energy": 51200,
    "input": {
      "item": "thermal:lead_ingot"
    },
    "results": [
      {
        "base_ingredient": {
          "item": "kubejs:reality_alloy"
        },
        "count": 3
      }
    ],
    "slag": {
        "item": "thermal:rich_slag"
    },
    "time": 100
  })

})