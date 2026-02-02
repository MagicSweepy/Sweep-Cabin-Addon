// priority: -1
StartupEvents.registry('item', event => {

    let mechanism = (name, rarity) => {
        let id = name.toLowerCase()
        event.create(id + "_mechanism").texture("cabin:item/" + id + "_mechanism").displayName(name + " Mechanism").rarity(rarity ? rarity : "common")
        event.create("incomplete_" + id + "_mechanism","create:sequenced_assembly").texture("cabin:item/incomplete_" + id + "_mechanism").displayName("Incomplete " + name + " Mechanism")
    }

    mechanism("Plastic", "rare")
})

StartupEvents.registry('block', event => {

    let machine = (name, layer) => {
        let id = name.toLowerCase()
        return event.create(id + "_machine", "cardinal")
            .model("cabin:block/" + id + "_machine")
            .soundType("lantern")
            .hardness(3.0)
            .tagBlock("mineable/pickaxe")
            .requiresTool(true)
            .displayName(name + " Machine")
            .notSolid()
            .renderType(layer)
            .redstoneConductor(false)
            .tagBlock("create:wrench_pickup")
            .defaultState(blockState =>{
                blockState.set(BlockStateProperties.HORIZONTAL_FACING, "south")
            })
    }

    machine("Aerospace", "cutout")
})