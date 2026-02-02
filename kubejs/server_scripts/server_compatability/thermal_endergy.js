if (Platform.isLoaded("thermalendergy")) {
    ServerEvents.recipes(event => {
        // Prismalium Upgrade Augment
        event.remove({ id: "thermalendergy:endergy_upgrade_1" })
        createMachine("ae2:controller", event, "thermalendergy:endergy_upgrade_1", "minecraft:redstone")

        // Melodium Upgrade Augment
        event.remove({ id: "thermalendergy:endergy_upgrade_2" })
        createMachine("")
    })
}