ServerEvents.recipes(event => {

    event.remove({id: 'ae2:transform/certus_quartz_crystals'})
    event.remove({id: 'ae2:transform/fluix_crystals'})
    event.remove({id: 'ae2:transform/fluix_crystal'})

    event.custom({
        "type": "thermal:crystallizer",
        "ingredients": [
          {
            "fluid": "minecraft:water",
            "amount": 2000
          },
          {
            "item": "ae2:certus_quartz_dust"
          }
        ],
        "result": [
          {
            "item": "ae2:certus_quartz_crystal"
          }
        ],
          "energy": 500
    })

    event.remove({output: 'ae2:fluix_crystal'})
    event.custom({
        "type": "thermal:crystallizer",
        "ingredients": [
          {
            "fluid": "minecraft:water",
            "amount": 2000
          },
          {
            "item": "ae2:charged_certus_quartz_crystal"
          },
          {
            "item": "ae2:sky_dust"
          }
        ],
        "result": [
          {
            "item": "ae2:fluix_crystal"
          }
        ],
        "energy": 500
    })

    event.remove({output: 'ae2:crafting_terminal'})
    event.shaped('ae2:crafting_terminal', [
        ' C ', 
        ' A ',
        ' F '  
        ],{
          A: 'enderio:skeletal_contractor', 
          C: 'ae2:terminal',
          F: 'create:crafting_blueprint'
    })

    event.remove({output: 'ae2:drive'})
    event.shaped('ae2:drive', [
        'CAC', 
        'ABA',
        'CAC'  
        ],{
          A: 'ae2:fluix_glass_cable', 
          B: 'immersiveengineering:heavy_engineering',
          C: 'ae2:chest'
    })

    event.remove({output: 'ae2:storage_bus'})
    event.shaped('ae2:storage_bus', [
        '   ', 
        'BAC',
        ' D '  
        ],{
          A: '#ae2:interface', 
          B: 'ae2:logic_processor',
          C: 'ae2:calculation_processor',
          D: 'ae2:fluix_glass_cable'
    })

	  event.replaceInput({output: 'ae2:annihilation_core'}, 'ae2:logic_processor', 'immersiveengineering:component_electronic')
  	event.replaceInput({output: 'ae2:formation_core'}, 'ae2:logic_processor', 'immersiveengineering:component_electronic')
    event.replaceInput({output: 'ae2:terminal'}, 'ae2:logic_processor', 'immersiveengineering:component_electronic')
  	event.replaceInput({output: 'ae2:cell_component_1k'}, 'ae2:logic_processor', 'immersiveengineering:component_electronic')

  	event.replaceInput({output: 'ae2:cell_component_4k'}, 'ae2:calculation_processor', 'create:electron_tube')
  	event.replaceInput({output: 'ae2:cell_component_16k'}, 'ae2:calculation_processor', 'immersiveengineering:component_electronic_adv')
    event.replaceInput({output: 'ae2:cell_component_256k'}, 'ae2:calculation_processor', 'ae2:engineering_processor')

})