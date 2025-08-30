ServerEvents.recipes(event => {

    event.replaceInput(
        { output: 'brewinandchewin:keg' },
        'minecraft:honeycomb',
        'thermal:rubber'
    )

    event.replaceInput(
        { output: 'brewinandchewin:keg' },
        '#minecraft:planks',
        'immersiveengineering:treated_wood_horizontal'
    )

  event.remove({output: 'brewinandchewin:heating_cask'})
	event.shaped('brewinandchewin:heating_cask', [
		'ABA', 
		'ACA',
		'AAA'  
		],{
		A: 'immersiveengineering:treated_wood_horizontal',
		B: '#minecraft:wooden_trapdoors',
        C: 'thermal:charcoal_block'
	})

  event.remove({output: 'brewinandchewin:ice_crate'})
	event.shaped('brewinandchewin:ice_crate', [
		'ABA', 
		'ACA',
		'AAA'  
		],{
		A: 'immersiveengineering:treated_wood_horizontal',
		B: '#minecraft:wooden_trapdoors',
        C: 'minecraft:ice'
	})

    event.custom({
        "type": "brewinandchewin:fermenting",
        "basefluid": {
            "count": 1000,
            "fluid": "minecraft:water"
        },
        "experience": 1.0,
        "fermentingtime": 9600,
        "ingredients": [
                {
                    "item": "kubejs:cut_carpet"
                },
                {
                    "item": "kubejs:cut_carpet"
                },
                {
                    "item": "minecraft:sugar"
                }
        ],
        "recipe_book_tab": "meals",
        "result": {
        "count": 8,
        "item": "minecraft:dirt"
        },
        "temperature": 4
    })

    event.remove({id: 'brewinandchewin:fermenting/beer_from_water'})
    event.custom({
        "type": "brewinandchewin:fermenting",
        "basefluid": {
          "count": 1000,
          "fluid": "minecraft:water"
        },
        "experience": 1.0,
        "fermentingtime": 9600,
        "ingredients": [
          {
            "item": "minecraft:wheat"
          },
          {
            "item": "minecraft:wheat_seeds"
          }
        ],
        "recipe_book_tab": "drinks",
        "result": {
          "count": 1000,
          "fluid": "brewinandchewin:beer"
        },
        "temperature": 3
    })

    event.remove({id: 'brewinandchewin:fermenting/strongroot_ale_from_beer'})
    event.custom({
        "type": "brewinandchewin:fermenting",
        "basefluid": {
          "count": 1000,
          "fluid": "brewinandchewin:beer"
        },
        "experience": 1.0,
        "fermentingtime": 4800,
        "ingredients": [
          {
            "tag": "forge:vegetables/beetroot"
          },
          {
            "tag": "forge:vegetables/potato"
          }
        ],
        "recipe_book_tab": "drinks",
        "result": {
          "count": 1000,
          "fluid": "brewinandchewin:strongroot_ale"
        },
        "temperature": 3
    })

    event.remove({id: 'brewinandchewin:fermenting/steel_toe_stout_from_strongroot_ale'})
    event.custom({
        "type": "brewinandchewin:fermenting",
        "basefluid": {
          "count": 1000,
          "fluid": "brewinandchewin:strongroot_ale"
        },
        "experience": 1.0,
        "fermentingtime": 4800,
        "ingredients": [
          {
            "item": "minecraft:iron_ingot"
          },
          {
            "item": "minecraft:wheat"
          }
        ],
        "recipe_book_tab": "drinks",
        "result": {
          "count": 1000,
          "fluid": "brewinandchewin:steel_toe_stout"
        },
        "temperature": 1
    })

    event.custom({
      "type": "brewinandchewin:fermenting",
      "basefluid": {
        "count": 1000,
        "fluid": "minecraft:water"
      },
      "experience": 1.0,
      "fermentingtime": 9600,
      "ingredients": [
        {
          "item": "minecraft:redstone"
        },
        {
          "item": "minecraft:blaze_powder"
        },
        {
          "item": "minecraft:bucket"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 1,
        "item": "enderio:fire_water_bucket"
      },
      "temperature": 4
    })

    event.remove({output: 'farmersdelight:organic_compost'})
    event.custom({
      "type": "brewinandchewin:fermenting",
      "basefluid": {
        "count": 1000,
        "fluid": "minecraft:water"
      },
      "experience": 1.0,
      "fermentingtime": 9600,
      "ingredients": [
        {
          "item": "minecraft:dirt"
        },
        {
          "item": "kubejs:cut_carpet"
        },
        {
          "item": "kubejs:cut_carpet"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "count": 2,
        "item": "farmersdelight:organic_compost"
      },
      "temperature": 4
    })
})