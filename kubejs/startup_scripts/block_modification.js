BlockEvents.modification(event => {

	event.modify('supplementaries:book_pile', block => {
		block.destroySpeed = 0.0
	})

	event.modify('supplementaries:book_pile_horizontal', block => {
		block.destroySpeed = 0.0
	})

	event.modify('immersiveengineering:fluid_placer', block => {
		block.explosionResistance = 10000.0
		block.destroySpeed = -1.0
	})

	event.modify('antiblocksrechiseled:bright_cyan', block => {
		block.hasCollision = false
	})

})

ItemEvents.modification(event => {
 	event.modify('dustrial_decor:cardboard_box', item => {
   		item.setBurnTime(2000)
  	})

	event.modify('dustrial_decor:folded_cardboard', item => {
   		item.setBurnTime(2000)
  	})

	event.modify('dustrial_decor:smooth_cardboard', item => {
   		item.setBurnTime(2000)
  	})
})

ForgeEvents.onEvent("net.minecraftforge.event.entity.player.PlayerEvent$BreakSpeed", event => global.breakSpeed(event))
/**
 * 
 * @param {Internal.PlayerEvent$BreakSpeed} event 
 */
global.breakSpeed = event => {
    try {
        if (event.entity.level.getBlock(event.getPosition().get()).hasTag('kubejs:unbreakable'))
            event.setNewSpeed(0)
    } catch (error) {
        console.log(error)
    }
}