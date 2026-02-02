ServerEvents.recipes(event => {
    let transitional

    // Plastic Mechanism
    transitional = "kubejs:incomplete_plastic_mechanism"
    event.recipes.create.sequenced_assembly([ "kubejs:plastic_mechanism" ], "kubejs:reinforced_mechanism", [
        event.recipes.create.deploying(transitional, [transitional, "kubejs:matter_plastic"]),
        event.recipes.create.deploying(transitional, [transitional, "thermalendergy:stellarium_plate"]),
        event.recipes.create.deploying(transitional, [transitional, "tinkers_advanced:activated_chromatic_steel"])
    ])
        .transitionalItem(transitional)
        .id("kubejs:plastic_mechanism")
})