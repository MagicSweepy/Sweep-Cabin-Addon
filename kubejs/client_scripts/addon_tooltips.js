ItemEvents.tooltip(tooltip => {
    let by_addon = (id) => tooltip.add(id, Text.translatable("item.kubejs.addon_content"));
    let main_assembly = (id, stage) => tooltip.add(id, Text.translatable("item.kubejs.main_assembly", "Chapter " + stage));
    let bonus_assembly = (id, stage) => tooltip.add(id, Text.translatable("item.kubejs.bonus_assembly", "Chapter " + stage));

    main_assembly("kubejs:plastic_mechanism", "5");

    by_addon("kubejs:aerospace_machine")
    by_addon("kubejs:incomplete_plastic_mechanism")
    by_addon("kubejs:plastic_mechanism")
})