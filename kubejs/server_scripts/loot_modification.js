LootJS.modifiers((event) => {

event
    .addLootTableModifier("minecraft:entities/husk")
    .randomChance(0.5)
    .addLoot("minecraft:bone");

event
    .addLootTableModifier("minecraft:entities/warden")
    .removeLoot("minecraft:sculk_catalyst");

event
    .addLootTableModifier("minecraft:entities/ravager")
    .removeLoot("minecraft:saddle");

event
    .addEntityLootModifier("eidolon:zombie_brute")
    .addLoot("eidolon:zombie_heart");

event
    .addLootTableModifier("minecraft:entities/zombie")
    .addLoot("minecraft:zombie_head");

event
    .addLootTableModifier("minecraft:entities/skeleton")
    .addLoot("minecraft:skeleton_skull");

event
    .addLootTableModifier("minecraft:entities/wither_skeleton")
    .addLoot("minecraft:wither_skeleton_skull");

event
    .addLootTableModifier("minecraft:entities/enderman")
    .addLoot("enderio:enderman_head");

event
    .addLootTableModifier("minecraft:entities/blaze")
    .addLoot("minecraft:blaze_rod");

event
    .addBlockLootModifier("snad:snad")
    .addLoot("snad:snad");

event
    .addBlockLootModifier("kubejs:reality_controller_running")
    .replaceLoot("kubejs:reality_controller_running", "kubejs:reality_controller");

event
    .addBlockLootModifier("kubejs:error")
    .replaceLoot("kubejs:error", "kubejs:error_item");

event
    .addBlockLootModifier("kubejs:error_carpet")
    .replaceLoot("kubejs:error_carpet", "kubejs:error_item");

event
    .addBlockLootModifier("kubejs:error_wallpaper")
    .replaceLoot("kubejs:error_wallpaper", "kubejs:error_item");

event
    .addBlockLootModifier("kubejs:lost_eye")
    .replaceLoot("kubejs:lost_eye", "endrem:lost_eye");

let traffic_drops = (id) => {
event
    .addBlockLootModifier(id)
    .replaceLoot(id, "kubejs:scrap");
}

traffic_drops("kubejs:traffic_pole")
traffic_drops("kubejs:arrow1_sign")
traffic_drops("kubejs:arrow2_sign")
traffic_drops("kubejs:liminal_warning")
traffic_drops("kubejs:liminal_warning2")
traffic_drops("kubejs:box_sign")
traffic_drops("kubejs:infinity_sign")
traffic_drops("kubejs:skull_sign")
traffic_drops("kubejs:stop_sign")
traffic_drops("kubejs:explantion1_sign")
traffic_drops("kubejs:explantion2_sign")
traffic_drops("kubejs:unknown1")
traffic_drops("kubejs:cross_sign")
traffic_drops("kubejs:exit_sign")
traffic_drops("kubejs:exit_sign2")
traffic_drops("kubejs:left_arrow_sign")
traffic_drops("kubejs:right_arrow_sign")
traffic_drops("kubejs:nowhere_sign")
traffic_drops("kubejs:monolith_sign")
traffic_drops("kubejs:witahdigroi_sign")
traffic_drops("kubejs:tripple_sign")
traffic_drops("kubejs:turn_back_sign")
traffic_drops("kubejs:inkblod_sign")
 
});