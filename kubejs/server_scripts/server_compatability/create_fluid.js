if (Platform.isLoaded("fluid")) {
    ServerEvents.recipes(event => {
        // Mechanical Pipette
        event.remove({ id: "fluid:mechanical_pipette" })
        brassMachine(event, Item.of('fluid:pipette', 1))

        // Centrifugal Pump
        event.remove({ id: "fluid:centrifugal_pump" })
        copperMachine(event, Item.of("fluid:centrifugal_pump", 1), 'create:propeller')

        // Gutter Outlet
        event.remove({ id: "fluid:gutter_outlet" })
        copperMachine(event, Item.of("fluid:gutter_outlet", 1))

        // Copper Sink
        event.remove({ id: "fluid:copper_sink" })
        copperMachine(event, Item.of("fluid:copper_sink", 1), "minecraft:water_bucket")

        // Fluid Interface
        event.remove({ id: "fluid:fluid_interface" })
        copperMachine(event, Item.of("fluid:fluid_interface", 2))
    })
}
