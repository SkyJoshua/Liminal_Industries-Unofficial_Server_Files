ServerEvents.recipes(event => {

    event.remove({id: 'minecraft:campfire'})
    event.remove({id: 'minecraft:soul_campfire'})

    event.shaped('minecraft:campfire', [
      ' C ', 
      'CBC',
      'AAA'  
      ],{
        A: '#minecraft:planks', 
        B: 'minecraft:charcoal',
        C: 'minecraft:stick'
    })

    event.remove({output: 'miners_delight:weird_caviar'})
	  event.shapeless('2x miners_delight:weird_caviar', [
		  'minecraft:bowl',
		  'minecraft:bowl',
		  'miners_delight:silverfish_eggs'
	  ])

    event.remove({output: 'brewinandchewin:sweet_berry_jam'})
    event.custom({
      "type": "farmersdelight:cooking",
      "container": {
        "item": "minecraft:glass_bottle"
      },
      "cookingtime": 200,
      "experience": 1.0,
      "ingredients": [
        {
          "item": "minecraft:sweet_berries"
        },
        {
          "item": "minecraft:sweet_berries"
        },
        {
          "item": "minecraft:sugar"
        }
      ],
      "recipe_book_tab": "misc",
      "result": {
        "count": 1,
        "item": "brewinandchewin:sweet_berry_jam"
      }
    })

})