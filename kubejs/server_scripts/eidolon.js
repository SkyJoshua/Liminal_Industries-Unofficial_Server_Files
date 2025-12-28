ServerEvents.recipes(event => {

  /*
  {
    "type": "eidolon:crucible",
    "steps": [
      {
        "items": [
          { "tag": "forge:dusts/sulfur" },
          { "item": "minecraft:bone_meal" }
        ]
      },
      {
        "stirs": 1,
        "items": [
          { "item": "minecraft:charcoal" }
        ]
      }
    ],
    "result": {
      "item": "minecraft:gunpowder",
      "count": 4
    }
  }
  */

  event.remove({output: 'eidolon:soulfire_wand'})
  event.custom({
    "type": "eidolon:worktable",
    "pattern": [
      " gx",
      " sg",
      "i  "
    ],
    "reagents": "lbab",
    "key": {
      "i": {
        "item": "eidolon:gold_inlay"
      },
      "g": {
        "tag": "forge:ingots/arcane_gold"
      },
      "s": {
        "item": "botania:livingwood_twig"
      },
      "x": {
        "item": "eidolon:lesser_soul_gem"
      },
      "b": {
        "item": "eidolon:soul_shard"
      },
      "l": {
        "item": "botania:mana_powder"
      },
      "a": {
        "item": "thermal:sulfur_dust"
      }
    },
    "result": {
      "item": "eidolon:soulfire_wand"
    }
  })

  event.remove({output: 'enderio:skeletal_contractor'})
  event.custom({
    "type": "eidolon:worktable",
    "pattern": [
      "   ",
      " a ",
      "   "
    ],
    "reagents": " c f",
    "key": {
      "a": {
        "item": "minecraft:skeleton_skull"
      },
      "c": {
        "item": "botania:lens_messenger"
      },
      "f": {
        "item": "eidolon:parchment"
      }
    },
    "result": {
      "item": "enderio:skeletal_contractor"
    }
  })

  event.remove({output: 'botania:alfheim_portal'})
  event.custom({
    "type": "eidolon:worktable",
    "pattern": [
      "aea",
      "dcb",
      "afa"
    ],
    "reagents": "rrrr",
    "key": {
      "a": {
        "item": "botania:livingwood"
      },
      "b": {
        "item": "enderio:guardian_diode"
      },
      "c": {
        "item": "mekanism:teleportation_core"
      },
      "d": {
        "item": "enderio:ender_resonator"
      },
      "e": {
        "item": "botania:rune_spring"
      },
      "f": {
        "item": "thermal:upgrade_augment_3"
      },
      "r": {
        "item": "botania:terrasteel_ingot"
      }
    },
    "result": {
      "item": "botania:alfheim_portal"
    }
  })

  event.remove({output: 'eidolon:worktable'})
	event.shaped('eidolon:worktable', [
		' C ', 
		'BBB',
		'AAA'  
		],{
		A: 'eidolon:polished_planks',
		B: 'kubejs:cut_carpet',
    C: 'eidolon:pewter_inlay'
	})

  event.shaped('minecraft:beehive', [
		'AAA', 
		'BBB',
		'AAA'  
		],{
		A: '#minecraft:planks',
		B: 'supplementaries:timber_frame'
	})

  event.remove({output: 'eidolon:crucible'})
	event.shaped('eidolon:crucible', [
		'A A', 
		'A A',
		'ABA'  
		],{
		A: 'eidolon:pewter_ingot',
		B: 'botania:rune_water'
	})

  let brazier_summoning = (Focus, Input1, Input2, Input3, Mob) => {
    event.custom({
      "type": "eidolon:ritual_brazier_summoning",
      "focusItems": [],
      "output": {
        "entity": Mob
      },
      "pedestalItems": [
        {
          "item": Focus
        },
        {
          "item": Input1
        },
        {
          "item": Input2
        },
        {
          "item": Input3
        }
      ],
      "reagent": [
        {
          "item": "minecraft:charcoal"
        }
      ]
    })
  }

  brazier_summoning(
    "eidolon:soul_shard", 
		"minecraft:wheat_seeds", 
		"supplementaries:ash",
    "eidolon:soul_shard",

    "minecraft:chicken"	
)

  brazier_summoning(
    "eidolon:soul_shard", 
		"minecraft:yellow_dye", 
		"minecraft:black_dye",
    "eidolon:soul_shard",

    "minecraft:bee"	
)

  brazier_summoning(
    "eidolon:soul_shard", 
		"minecraft:bone", 
		"minecraft:bone",
    "eidolon:soul_shard",

    "minecraft:skeleton"	
)

  brazier_summoning(
    "eidolon:soul_shard", 
		"minecraft:carrot", 
		"minecraft:golden_carrot",
    "eidolon:soul_shard",

    "minecraft:rabbit"	
)

  brazier_summoning(
    "eidolon:lesser_soul_gem", 
		"minecraft:white_wool", 
		"minecraft:grass",
    "eidolon:lesser_soul_gem",

    "minecraft:sheep"	
)

  brazier_summoning(
    "eidolon:lesser_soul_gem", 
		"minecraft:bone", 
		"minecraft:bone_block",
    "eidolon:lesser_soul_gem",

    "eidolon:giant_skeleton"	
)

  brazier_summoning(
    "eidolon:lesser_soul_gem", 
		"minecraft:potato", 
		"minecraft:beetroot",
    "eidolon:lesser_soul_gem",

    "minecraft:pig"	
)

  brazier_summoning(
    "eidolon:lesser_soul_gem", 
		"minecraft:leather", 
		"minecraft:grass",
    "eidolon:lesser_soul_gem",

    "minecraft:cow"	
)

  brazier_summoning(
    "eidolon:lesser_soul_gem", 
		"eidolon:tattered_cloth", 
		"minecraft:soul_sand",
    "eidolon:lesser_soul_gem",

    "minecraft:ghast"	
)

  brazier_summoning(
    "eidolon:lesser_soul_gem", 
		"minecraft:stick", 
		"minecraft:glowstone_dust",
    "eidolon:lesser_soul_gem",

    "minecraft:witch"	
)

  brazier_summoning(
    "eidolon:soul_shard", 
		"minecraft:rotten_flesh", 
		"minecraft:rotten_flesh", 
		"eidolon:soul_shard", 

    "minecraft:zombie"	
)

  brazier_summoning(
    "eidolon:lesser_soul_gem", 
		"minecraft:rotten_flesh", 
		"minecraft:rotten_flesh", 
		"eidolon:lesser_soul_gem", 

    "eidolon:zombie_brute"	
)

  brazier_summoning(
    "eidolon:soul_shard", 
		"actuallyadditions:water_bowl", 
		"minecraft:bone_meal",
    "eidolon:soul_shard",

    "minecraft:cod"	
)

  brazier_summoning(
    "eidolon:lesser_soul_gem", 
		"kubejs:hot_steel", 
		"immersiveengineering:heavy_engineering",
    "eidolon:lesser_soul_gem",

    "minecraft:blaze"	
)

  brazier_summoning(
    "kubejs:moderate_soul_gem", 
		"minecraft:end_stone", 
		"ae2:ender_dust",
    "kubejs:moderate_soul_gem",

    "minecraft:enderman"	
)

  brazier_summoning(
    "kubejs:moderate_soul_gem", 
		"minecraft:stone_sword", 
		"minecraft:coal",
    "kubejs:moderate_soul_gem",

    "minecraft:wither_skeleton"	
)

  brazier_summoning(
    "kubejs:moderate_soul_gem", 
    "minecraft:slime_ball", 
    "minecraft:mud",
    "kubejs:moderate_soul_gem",

    "minecraft:frog"	
)

  brazier_summoning(
    "eidolon:soul_shard", 
    "minecraft:white_wool", 
    "minecraft:bone",
    "eidolon:soul_shard",

    "eidolon:wraith"	
)

  brazier_summoning(
    "eidolon:lesser_soul_gem", 
    "botania:dragonstone", 
    "minecraft:end_stone",
    "eidolon:lesser_soul_gem",

    "minecraft:interaction"	
)

  event.remove({output: 'eidolon:shadow_gem_block'})
  event.shaped('eidolon:shadow_gem_block', [
    '   ', 
    ' AA',
    ' AA'  
    ],{
    A: 'eidolon:shadow_gem'
  })

  event.replaceInput({output: 'minecraft:fishing_rod'},
    'minecraft:stick',            
    'minecraft:bamboo'
  )

  let crucible = (Input1, Input2, Input3, Output) => {
    event.custom({
      "type": "eidolon:crucible",
      "steps": [
        {
          "items": [
            { "item": Input1 },
            { "item": Input2 }
          ]
        },
        {
          "stirs": 1,
          "items": [
            { "item": Input3 }
          ]
        }
      ],
      "result": {
        "item": Output,
        "count": 1
      }
    })
  }

event.remove({id: 'eidolon:sulfur'})
event.custom({
  "type": "eidolon:crucible",
  "steps": [
    {
      "items": [
        { "item": "minecraft:charcoal" },
        { "item": "eidolon:enchanted_ash" }
      ]
    }
  ],
  "result": {
    "item": "thermal:sulfur_dust",
    "count": 1
  }
})

event.remove({id: 'eidolon:lesser_soul_gem'})
event.custom({
  "type": "eidolon:crucible",
  "steps": [
    {
      "items": [
        { "tag": "forge:dusts/redstone" },
        { "tag": "forge:dusts/redstone" }
      ]
    },
    {
      "stirs": 2,
      "items": [
        { "item": "eidolon:soul_shard" },
        { "item": "eidolon:soul_shard" },
        { "item": "eidolon:soul_shard" },
        { "item": "eidolon:soul_shard" }
      ]
    },
    {
      "items": [
        { "tag": "forge:gems/quartz" }
      ]
    }
  ],
  "result": {
    "item": "eidolon:lesser_soul_gem"
  }
})

event.remove({id: 'eidolon:polished_planks'})
event.custom({
  "type": "eidolon:crucible",
  "steps": [
    {
      "items": [
        { "item": "immersiveengineering:treated_wood_horizontal" },
        { "item": "immersiveengineering:treated_wood_horizontal" },
        { "item": "immersiveengineering:treated_wood_horizontal" },
        { "item": "immersiveengineering:treated_wood_horizontal" },
        { "item": "immersiveengineering:treated_wood_horizontal" },
        { "item": "immersiveengineering:treated_wood_horizontal" },
        { "item": "immersiveengineering:treated_wood_horizontal" },
        { "item": "immersiveengineering:treated_wood_horizontal" }
      ]
    },
    {
      "stirs": 1,
      "items": [
        { "item": "eidolon:enchanted_ash" },
        { "item": "eidolon:soul_shard" }
      ]
    }
  ],
  "result": {
    "item": "eidolon:polished_planks",
    "count": 8
  }
})

event.remove({id: 'eidolon:shadow_gem'})
event.custom({
  "type": "eidolon:crucible",
  "steps": [
    {
      "items": [
        { "item": "minecraft:charcoal" }
      ]
    },
    {
      "stirs": 1,
      "items": [
        { "item": "actuallyadditions:empowered_void_crystal" },
        { "item": "eidolon:death_essence" }
      ]
    },
    {
      "stirs": 1,
      "items": [
        { "item": "eidolon:soul_shard" },
        { "item": "eidolon:soul_shard" },
        { "item": "eidolon:death_essence" }
      ]
    }
  ],
  "result": {
    "item": "eidolon:shadow_gem"
  }
})

event.remove({id: 'eidolon:magicians_wax'})
event.custom({
  "type": "eidolon:crucible",
  "steps": [
    {
      "items": [
        { "tag": "forge:dusts/redstone" },
        { "tag": "forge:dusts/redstone" },
        { "tag": "forge:dusts/redstone" },
        { "tag": "forge:dyes/red" },
        { "tag": "forge:dyes/red" }
      ]
    },
    {
      "stirs": 2,
      "items": [
        { "item": "eidolon:tallow" },
        { "item": "eidolon:tallow" }
      ]
    }
  ],
  "result": {
    "item": "eidolon:magicians_wax",
    "count": 5
  }
})

event.custom({
  "type": "eidolon:crucible",
  "steps": [
    {
      "items": [
        { "item": "thermal:lead_ingot" },
        { "item": "enderio:confusing_powder" }
      ]
    }
  ],
  "result": {
    "item": "minecraft:gold_ingot",
    "count": 1
  }
})


})