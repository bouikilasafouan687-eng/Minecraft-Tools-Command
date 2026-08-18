const items = [
    // Ores & Materials
    ["coal","⚫ Coal"],
    ["charcoal","⚫ Charcoal"],
    ["iron_ingot","⚙️ Iron Ingot"],
    ["iron_nugget","🔩 Iron Nugget"],
    ["gold_ingot","🪙 Gold Ingot"],
    ["gold_nugget","🪙 Gold Nugget"],
    ["copper_ingot","🟠 Copper Ingot"],
    ["copper_nugget","🟠 Copper Nugget"],
    ["netherite_ingot","🔥 Netherite Ingot"],
    ["netherite_scrap","🔥 Netherite Scrap"],
    ["diamond","💎 Diamond"],
    ["emerald","💚 Emerald"],
    ["redstone","🔴 Redstone Dust"],
    ["lapis_lazuli","🔵 Lapis Lazuli"],
    ["quartz","⬜ Nether Quartz"],
    ["amethyst_shard","💜 Amethyst Shard"],
    ["prismarine_shard","🔷 Prismarine Shard"],
    ["prismarine_crystals","💠 Prismarine Crystals"],
    ["echo_shard","🔊 Echo Shard"],
    ["flint","🪨 Flint"],
    ["stick","🪵 Stick"],
    ["string","🧵 String"],
    ["leather","🟫 Leather"],
    ["feather","🪶 Feather"],
    ["bone","🦴 Bone"],
    ["bone_meal","🌱 Bone Meal"],
    ["gunpowder","💨 Gunpowder"],
    ["slime_ball","🟢 Slimeball"],
    ["magma_cream","🔥 Magma Cream"],
    ["ender_pearl","🟣 Ender Pearl"],
    ["ender_eye","👁️ Eye of Ender"],
    ["blaze_rod","🔥 Blaze Rod"],
    ["blaze_powder","🔥 Blaze Powder"],
    ["ghast_tear","👻 Ghast Tear"],
    ["phantom_membrane","🪽 Phantom Membrane"],
    ["shulker_shell","📦 Shulker Shell"],
    ["dragon_breath","🐉 Dragon's Breath"],
    ["nether_star","⭐ Nether Star"],
    ["nautilus_shell","🐚 Nautilus Shell"],
    ["heart_of_the_sea","💙 Heart of the Sea"],
    ["honeycomb","🍯 Honeycomb"],
    ["honey_bottle","🍯 Honey Bottle"],
    ["scute","🐢 Scute"],
    ["turtle_scute","🐢 Turtle Scute"],

    // Iron Tools
    ["iron_sword","⚔️ Iron Sword"],
    ["iron_pickaxe","⛏️ Iron Pickaxe"],
    ["iron_axe","🪓 Iron Axe"],
    ["iron_shovel","🪣 Iron Shovel"],
    ["iron_hoe","🌱 Iron Hoe"],

    // Gold Tools
    ["golden_sword","⚔️ Golden Sword"],
    ["golden_pickaxe","⛏️ Golden Pickaxe"],
    ["golden_axe","🪓 Golden Axe"],
    ["golden_shovel","🪣 Golden Shovel"],
    ["golden_hoe","🌱 Golden Hoe"],

    // Diamond Tools
    ["diamond_sword","⚔️ Diamond Sword"],
    ["diamond_pickaxe","⛏️ Diamond Pickaxe"],
    ["diamond_axe","🪓 Diamond Axe"],
    ["diamond_shovel","🪣 Diamond Shovel"],
    ["diamond_hoe","🌱 Diamond Hoe"],

    // Netherite Tools
    ["netherite_sword","⚔️ Netherite Sword"],
    ["netherite_pickaxe","⛏️ Netherite Pickaxe"],
    ["netherite_axe","🪓 Netherite Axe"],
    ["netherite_shovel","🪣 Netherite Shovel"],
    ["netherite_hoe","🌱 Netherite Hoe"],

    // Stone Tools
    ["stone_sword","⚔️ Stone Sword"],
    ["stone_pickaxe","⛏️ Stone Pickaxe"],
    ["stone_axe","🪓 Stone Axe"],
    ["stone_shovel","🪣 Stone Shovel"],
    ["stone_hoe","🌱 Stone Hoe"],

    // Wooden Tools
    ["wooden_sword","⚔️ Wooden Sword"],
    ["wooden_pickaxe","⛏️ Wooden Pickaxe"],
    ["wooden_axe","🪓 Wooden Axe"],
    ["wooden_shovel","🪣 Wooden Shovel"],
    ["wooden_hoe","🌱 Wooden Hoe"],

    // Leather Armor
    ["leather_helmet","🪖 Leather Helmet"],
    ["leather_chestplate","🛡️ Leather Chestplate"],
    ["leather_leggings","👖 Leather Leggings"],
    ["leather_boots","🥾 Leather Boots"],

    // Iron Armor
    ["iron_helmet","🪖 Iron Helmet"],
    ["iron_chestplate","🛡️ Iron Chestplate"],
    ["iron_leggings","👖 Iron Leggings"],
    ["iron_boots","🥾 Iron Boots"],

    // Gold Armor
    ["golden_helmet","🪖 Golden Helmet"],
    ["golden_chestplate","🛡️ Golden Chestplate"],
    ["golden_leggings","👖 Golden Leggings"],
    ["golden_boots","🥾 Golden Boots"],

    // Diamond Armor
    ["diamond_helmet","🪖 Diamond Helmet"],
    ["diamond_chestplate","🛡️ Diamond Chestplate"],
    ["diamond_leggings","👖 Diamond Leggings"],
    ["diamond_boots","🥾 Diamond Boots"],

    // Netherite Armor
    ["netherite_helmet","🪖 Netherite Helmet"],
    ["netherite_chestplate","🛡️ Netherite Chestplate"],
    ["netherite_leggings","👖 Netherite Leggings"],
    ["netherite_boots","🥾 Netherite Boots"],

    // Other Equipment
    ["bow","🏹 Bow"],
    ["crossbow","🏹 Crossbow"],
    ["arrow","➡️ Arrow"],
    ["spectral_arrow","✨ Spectral Arrow"],
    ["shield","🛡️ Shield"],
    ["trident","🔱 Trident"],
    ["fishing_rod","🎣 Fishing Rod"],
    ["flint_and_steel","🔥 Flint and Steel"],
    ["shears","✂️ Shears"],
    ["brush","🧹 Brush"],
    ["spyglass","🔭 Spyglass"],
    ["compass","🧭 Compass"],
    ["recovery_compass","🧭 Recovery Compass"],
    ["clock","🕐 Clock"],
    ["map","🗺️ Map"],
    ["filled_map","🗺️ Filled Map"],
    ["lead","🔗 Lead"],
    ["name_tag","🏷️ Name Tag"],
    ["saddle","🐴 Saddle"],
    ["carrot_on_a_stick","🥕 Carrot on a Stick"],
    ["warped_fungus_on_a_stick","🍄 Warped Fungus on a Stick"],
    ["totem_of_undying","🟡 Totem of Undying"],

    // Food
    ["apple","🍎 Apple"],
    ["golden_apple","🍏 Golden Apple"],
    ["enchanted_golden_apple","✨ Enchanted Golden Apple"],
    ["bread","🍞 Bread"],
    ["cake","🎂 Cake"],
    ["cookie","🍪 Cookie"],
    ["carrot","🥕 Carrot"],
    ["golden_carrot","🥕 Golden Carrot"],
    ["potato","🥔 Potato"],
    ["baked_potato","🥔 Baked Potato"],
    ["poisonous_potato","☠️ Poisonous Potato"],
    ["beetroot","🟥 Beetroot"],
    ["beetroot_soup","🍲 Beetroot Soup"],
    ["mushroom_stew","🍲 Mushroom Stew"],
    ["rabbit_stew","🍲 Rabbit Stew"],
    ["suspicious_stew","🍲 Suspicious Stew"],
    ["pumpkin_pie","🥧 Pumpkin Pie"],
    ["melon_slice","🍉 Melon Slice"],
    ["sweet_berries","🫐 Sweet Berries"],
    ["glow_berries","✨ Glow Berries"],
    ["chorus_fruit","🟣 Chorus Fruit"],
    ["dried_kelp","🌿 Dried Kelp"],
    ["cooked_beef","🥩 Steak"],
    ["beef","🥩 Raw Beef"],
    ["cooked_porkchop","🥓 Cooked Porkchop"],
    ["porkchop","🥓 Raw Porkchop"],
    ["cooked_chicken","🍗 Cooked Chicken"],
    ["chicken","🍗 Raw Chicken"],
    ["cooked_mutton","🍖 Cooked Mutton"],
    ["mutton","🍖 Raw Mutton"],
    ["cooked_rabbit","🍖 Cooked Rabbit"],
    ["rabbit","🐇 Raw Rabbit"],
    ["cooked_cod","🐟 Cooked Cod"],
    ["cod","🐟 Raw Cod"],
    ["cooked_salmon","🐟 Cooked Salmon"],
    ["salmon","🐟 Raw Salmon"],
    ["tropical_fish","🐠 Tropical Fish"],
    ["pufferfish","🐡 Pufferfish"],

    // Building Blocks
    ["stone","🪨 Stone"],
    ["cobblestone","🪨 Cobblestone"],
    ["mossy_cobblestone","🌿 Mossy Cobblestone"],
    ["stone_bricks","🧱 Stone Bricks"],
    ["mossy_stone_bricks","🌿 Mossy Stone Bricks"],
    ["dirt","🟫 Dirt"],
    ["coarse_dirt","🟫 Coarse Dirt"],
    ["rooted_dirt","🌱 Rooted Dirt"],
    ["grass_block","🌱 Grass Block"],
    ["podzol","🌲 Podzol"],
    ["mycelium","🍄 Mycelium"],
    ["sand","🏖️ Sand"],
    ["red_sand","🟥 Red Sand"],
    ["gravel","🪨 Gravel"],
    ["clay","🟫 Clay"],
    ["glass","🪟 Glass"],
    ["glass_pane","🪟 Glass Pane"],
    ["ice","🧊 Ice"],
    ["packed_ice","🧊 Packed Ice"],
    ["blue_ice","🧊 Blue Ice"],
    ["snow_block","❄️ Snow Block"],
    ["obsidian","⬛ Obsidian"],
    ["crying_obsidian","💜 Crying Obsidian"],
    ["bedrock","🪨 Bedrock"],
    ["netherrack","🟥 Netherrack"],
    ["soul_sand","💀 Soul Sand"],
    ["soul_soil","💀 Soul Soil"],
    ["basalt","⬛ Basalt"],
    ["blackstone","⬛ Blackstone"],
    ["end_stone","🟡 End Stone"],
    ["end_stone_bricks","🧱 End Stone Bricks"],

    // Logs & Planks
    ["oak_log","🪵 Oak Log"],
    ["oak_wood","🪵 Oak Wood"],
    ["oak_planks","🪵 Oak Planks"],
    ["spruce_log","🌲 Spruce Log"],
    ["spruce_wood","🌲 Spruce Wood"],
    ["spruce_planks","🌲 Spruce Planks"],
    ["birch_log","🌳 Birch Log"],
    ["birch_wood","🌳 Birch Wood"],
    ["birch_planks","🌳 Birch Planks"],
    ["jungle_log","🌴 Jungle Log"],
    ["jungle_wood","🌴 Jungle Wood"],
    ["jungle_planks","🌴 Jungle Planks"],
    ["acacia_log","🌳 Acacia Log"],
    ["acacia_wood","🌳 Acacia Wood"],
    ["acacia_planks","🌳 Acacia Planks"],
    ["dark_oak_log","🌳 Dark Oak Log"],
    ["dark_oak_wood","🌳 Dark Oak Wood"],
    ["dark_oak_planks","🌳 Dark Oak Planks"],
    ["mangrove_log","🌳 Mangrove Log"],
    ["mangrove_wood","🌳 Mangrove Wood"],
    ["mangrove_planks","🌳 Mangrove Planks"],
    ["cherry_log","🌸 Cherry Log"],
    ["cherry_wood","🌸 Cherry Wood"],
    ["cherry_planks","🌸 Cherry Planks"],
    ["bamboo_block","🎋 Bamboo Block"],
    ["bamboo_planks","🎋 Bamboo Planks"],

    // Special
    ["tnt","💥 TNT"],
    ["torch","🔥 Torch"],
    ["soul_torch","💀 Soul Torch"],
    ["lantern","🏮 Lantern"],
    ["soul_lantern","💀 Soul Lantern"],
    ["campfire","🔥 Campfire"],
    ["soul_campfire","💀 Soul Campfire"],
    ["ladder","🪜 Ladder"],
    ["bucket","🪣 Bucket"],
    ["water_bucket","💧 Water Bucket"],
    ["lava_bucket","🌋 Lava Bucket"],
    ["powder_snow_bucket","❄️ Powder Snow Bucket"],
    ["milk_bucket","🥛 Milk Bucket"],

    // Redstone
    ["redstone_torch","🔴 Redstone Torch"],
    ["redstone_block","🔴 Redstone Block"],
    ["piston","⬅️ Piston"],
    ["sticky_piston","🟢 Sticky Piston"],
    ["observer","👁️ Observer"],
    ["dispenser","📦 Dispenser"],
    ["dropper","📦 Dropper"],
    ["hopper","🔽 Hopper"],
    ["lever","🔀 Lever"],
    ["stone_button","🔘 Stone Button"],
    ["oak_button","🔘 Oak Button"],
    ["oak_pressure_plate","⬜ Oak Pressure Plate"],
    ["redstone_lamp","💡 Redstone Lamp"],

    // Minecraft Special Items
    ["command_block","🟧 Command Block"],
    ["chain_command_block","🔗 Chain Command Block"],
    ["repeating_command_block","🔁 Repeating Command Block"],
    ["structure_block","🧩 Structure Block"],
    ["structure_void","👻 Structure Void"],
    ["jigsaw","🧩 Jigsaw Block"],
    ["barrier","🚫 Barrier"],
    ["light","💡 Light"],
    ["debug_stick","🪄 Debug Stick"],
    ["knowledge_book","📖 Knowledge Book"],
    ["enchanted_book","📕 Enchanted Book"],
    ["experience_bottle","✨ Experience Bottle"],
    ["firework_rocket","🎆 Firework Rocket"],
    ["firework_star","⭐ Firework Star"],
    ["painting","🖼️ Painting"],
    ["item_frame","🖼️ Item Frame"],
    ["glow_item_frame","✨ Glow Item Frame"],
    ["armor_stand","🧍 Armor Stand"],
    ["flower_pot","🪴 Flower Pot"],
    ["spawner","👾 Spawner"]
];


const effects = [
    ["speed", "⚡ Speed"],
    ["slowness", "🐌 Slowness"],
    ["haste", "⛏️ Haste"],
    ["mining_fatigue", "⛏️ Mining Fatigue"],
    ["strength", "💪 Strength"],
    ["instant_health", "❤️ Instant Health"],
    ["instant_damage", "💥 Instant Damage"],
    ["jump_boost", "🦘 Jump Boost"],
    ["nausea", "😵 Nausea"],
    ["regeneration", "❤️ Regeneration"],
    ["resistance", "🛡️ Resistance"],
    ["fire_resistance", "🔥 Fire Resistance"],
    ["water_breathing", "🌊 Water Breathing"],
    ["invisibility", "👻 Invisibility"],
    ["night_vision", "🌙 Night Vision"],
    ["hunger", "🍖 Hunger"],
    ["weakness", "😵 Weakness"],
    ["poison", "☠️ Poison"],
    ["wither", "☠️ Wither"],
    ["health_boost", "❤️ Health Boost"],
    ["absorption", "💛 Absorption"],
    ["saturation", "🍎 Saturation"],
    ["glowing", "✨ Glowing"],
    ["levitation", "⬆️ Levitation"],
    ["slow_falling", "🪶 Slow Falling"],
    ["conduit_power", "🌊 Conduit Power"],
    ["dolphins_grace", "🐬 Dolphin's Grace"],
    ["bad_omen", "⚠️ Bad Omen"],
    ["hero_of_the_village", "🏆 Hero of the Village"]
];


// ========================================
// ELEMENTS
// ========================================

const edition = document.getElementById("edition");
const commandType = document.getElementById("commandType");

const player = document.getElementById("player");
const amount = document.getElementById("amount");

const itemSearch = document.getElementById("itemSearch");
const itemList = document.getElementById("itemList");
const itemInput = document.getElementById("item");

const searchLabel = document.getElementById("searchLabel");

const amountOption = document.getElementById("amountOption");
const searchOption = document.getElementById("searchOption");

const effectOptions = document.getElementById("effectOptions");
const tpOptions = document.getElementById("tpOptions");
const gamemodeOptions = document.getElementById("gamemodeOptions");
const timeOptions = document.getElementById("timeOptions");
const weatherOptions = document.getElementById("weatherOptions");


// ========================================
// LIST SYSTEM
// ========================================

function showList(data, search = "") {

    itemList.innerHTML = "";

    const text = search.toLowerCase();

    const results = data.filter(item =>
        item[0].toLowerCase().includes(text) ||
        item[1].toLowerCase().includes(text)
    );

    results.forEach(item => {

        const div = document.createElement("div");

        div.className = "item-option";

        div.textContent = item[1];

        div.onclick = function () {

            itemInput.value = item[0];

            itemSearch.value = item[1];

            document
                .querySelectorAll(".item-option")
                .forEach(element =>
                    element.classList.remove("selected")
                );

            div.classList.add("selected");
        };

        itemList.appendChild(div);
    });
}


// ========================================
// UPDATE INTERFACE
// ========================================

function updateInterface() {

    const type = commandType.value;

    // Hide everything first

    searchOption.style.display = "none";
    amountOption.style.display = "none";

    effectOptions.style.display = "none";
    tpOptions.style.display = "none";
    gamemodeOptions.style.display = "none";
    timeOptions.style.display = "none";
    weatherOptions.style.display = "none";

    itemInput.value = "";
    itemSearch.value = "";
    itemList.innerHTML = "";


    // GIVE

    if (type === "give") {

        searchOption.style.display = "block";
        amountOption.style.display = "block";

        searchLabel.textContent = "Item";

        itemSearch.placeholder =
            "🔎 Search an item...";

        showList(items);
    }


    // SUMMON

    else if (type === "summon") {

        searchOption.style.display = "block";

        searchLabel.textContent = "Mob";

        itemSearch.placeholder =
            "🔎 Search a mob...";

        showList(mobs);
    }


    // EFFECT

    else if (type === "effect") {

        searchOption.style.display = "block";

        effectOptions.style.display = "block";

        searchLabel.textContent = "Effect";

        itemSearch.placeholder =
            "🔎 Search an effect...";

        showList(effects);
    }


    // TELEPORT

    else if (type === "tp") {

        tpOptions.style.display = "block";
    }


    // GAMEMODE

    else if (type === "gamemode") {

        gamemodeOptions.style.display = "block";
    }


    // TIME

    else if (type === "time") {

        timeOptions.style.display = "block";
    }


    // WEATHER

    else if (type === "weather") {

        weatherOptions.style.display = "block";
    }
}


// ========================================
// SEARCH
// ========================================

itemSearch.addEventListener("input", function () {

    const type = commandType.value;

    if (type === "give") {
        showList(items, itemSearch.value);
    }

    else if (type === "summon") {
        showList(mobs, itemSearch.value);
    }

    else if (type === "effect") {
        showList(effects, itemSearch.value);
    }
});


// ========================================
// COMMAND GENERATOR
// ========================================

function generateCommand() {

    const type = commandType.value;

    const target =
        player.value || "@s";

    const amountValue =
        amount.value || "1";

    const selected =
        itemInput.value;

    let command = "";


    // GIVE

    if (type === "give") {

        if (!selected) {

            document.getElementById("result").textContent =
                "❌ Please select an item!";

            return;
        }

        command =
            `/give ${target} ${selected} ${amountValue}`;
    }


    // SUMMON

    else if (type === "summon") {

        const x =
            document.getElementById("summonX")?.value || "~";

        const y =
            document.getElementById("summonY")?.value || "~";

        const z =
            document.getElementById("summonZ")?.value || "~";

        const mob =
            selected || "zombie";

        command =
            `/summon ${mob} ${x} ${y} ${z}`;
    }


    // EFFECT

    else if (type === "effect") {

        const effect =
            selected || "speed";

        const duration =
            document.getElementById("effectDuration").value || "30";

        const level =
            document.getElementById("effectLevel").value || "1";

        const hide =
            document.getElementById("hideParticles").value;

        const amplifier =
            Math.max(0, Number(level) - 1);


        if (edition.value === "java") {

            command =
                `/effect give ${target} ${effect} ${duration} ${amplifier} ${hide}`;

        } else {

            command =
                `/effect ${target} ${effect} ${duration} ${amplifier} ${hide}`;
        }
    }


    // TELEPORT

    else if (type === "tp") {

        const tpTarget =
            document.getElementById("tpTarget").value || "@s";

        const x =
            document.getElementById("tpX").value || "~";

        const y =
            document.getElementById("tpY").value || "~";

        const z =
            document.getElementById("tpZ").value || "~";

        command =
            `/tp ${tpTarget} ${x} ${y} ${z}`;
    }


    // GAMEMODE

    else if (type === "gamemode") {

        const mode =
            document.getElementById("gamemode").value;

        const gameTarget =
            document.getElementById("gamemodeTarget").value || "@s";

        command =
            `/gamemode ${mode} ${gameTarget}`;
    }


    // TIME

    else if (type === "time") {

        const time =
            document.getElementById("timeValue").value;

        command =
            `/time set ${time}`;
    }


    // WEATHER

    else if (type === "weather") {

        const weather =
            document.getElementById("weatherValue").value;

        command =
            `/weather ${weather}`;
    }


    // RESULT

    document.getElementById("result").textContent =
        command;
}


// ========================================
// COPY
// ========================================

function copyCommand() {

    const result =
        document.getElementById("result");

    const command =
        result.textContent;

    if (
        !command ||
        command.includes("Your command") ||
        command.startsWith("❌")
    ) {
        return;
    }

    navigator.clipboard.writeText(command);

    result.textContent =
        "✅ Command copied!";
}


// ========================================
// EVENTS
// ========================================

commandType.addEventListener(
    "change",
    updateInterface
);

edition.addEventListener(
    "change",
    updateInterface
);


// ========================================
// START
// ========================================

updateInterface();
