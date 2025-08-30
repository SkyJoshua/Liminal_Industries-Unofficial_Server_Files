ServerEvents.recipes(event => {

	event.remove({output: 'minecraft:book'})
	event.shapeless('minecraft:book', [
		'3x minecraft:paper',
		'minecraft:leather'
	])

	event.recipes.farmersdelight.cutting(
        "minecraft:book",
        "#minecraft:axes", // tool
        [ // results
			'3x minecraft:paper',
			'minecraft:leather'
        ],
        // "" // sound
	);

	event.shapeless(Item.of('eccentrictome:tome', '{"eccentrictome:mods":{actuallyadditions:{0:{Count:1b,id:"actuallyadditions:booklet"}},ae2:{0:{Count:1b,id:"ae2:guide",tag:{Enchantments:[]}}},botania:{0:{Count:1b,id:"botania:lexicon"}},eidolon:{0:{Count:1b,id:"eidolon:codex",tag:{Enchantments:[]}}},ftbquests:{0:{Count:1b,id:"ftbquests:book",tag:{Enchantments:[]}}},immersiveengineering:{0:{Count:1b,id:"immersiveengineering:manual"}},patchouli:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"patchouli:summoning"}},1:{Count:1b,id:"patchouli:guide_book",tag:{Enchantments:[],"patchouli:book":"patchouli:reality_frame"}}},tconstruct:{0:{Count:1b,id:"tconstruct:materials_and_you"}}},"eccentrictome:version":1}'), [
		'3x kubejs:wallpaper'
	])

	event.shapeless('ftbquests:book', [
		'kubejs:wallpaper'
	])

	let books = (input, output) => {
		event.shapeless(output, [
			input
		])
	}

	books('eccentrictome:tome', 'botania:lexicon')
	books('botania:lexicon', 'immersiveengineering:manual')
	books('immersiveengineering:manual', 'eidolon:codex')
	books('eidolon:codex', 'ae2:guide')
	books('ae2:guide', 'actuallyadditions:booklet')
	books('actuallyadditions:booklet', Item.of('patchouli:guide_book', '{"patchouli:book":"enderio:guide"}'))
	books(Item.of('patchouli:guide_book', '{"patchouli:book":"enderio:guide"}').strongNBT(), Item.of('patchouli:guide_book', '{"patchouli:book":"patchouli:summoning"}'))
	books(Item.of('patchouli:guide_book', '{"patchouli:book":"patchouli:summoning"}').strongNBT(), Item.of('patchouli:guide_book', '{"patchouli:book":"patchouli:reality_frame"}'))

	books(Item.of('patchouli:guide_book', '{"patchouli:book":"patchouli:reality_frame"}').strongNBT(), 'tconstruct:materials_and_you')
	books('tconstruct:materials_and_you', 'tconstruct:tinkers_gadgetry')
	books('tconstruct:tinkers_gadgetry', 'tconstruct:puny_smelting')
	books('tconstruct:puny_smelting', 'tconstruct:mighty_smelting')
	books('tconstruct:mighty_smelting', 'tconstruct:fantastic_foundry')
	books('tconstruct:fantastic_foundry', 'tconstruct:encyclopedia')
	books('tconstruct:encyclopedia', Item.of('eccentrictome:tome', '{"eccentrictome:mods":{actuallyadditions:{0:{Count:1b,id:"actuallyadditions:booklet"}},ae2:{0:{Count:1b,id:"ae2:guide",tag:{Enchantments:[]}}},botania:{0:{Count:1b,id:"botania:lexicon"}},eidolon:{0:{Count:1b,id:"eidolon:codex",tag:{Enchantments:[]}}},ftbquests:{0:{Count:1b,id:"ftbquests:book",tag:{Enchantments:[]}}},immersiveengineering:{0:{Count:1b,id:"immersiveengineering:manual"}},patchouli:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"patchouli:summoning"}},1:{Count:1b,id:"patchouli:guide_book",tag:{Enchantments:[],"patchouli:book":"patchouli:reality_frame"}}},tconstruct:{0:{Count:1b,id:"tconstruct:materials_and_you"}}},"eccentrictome:version":1}'))

	

})