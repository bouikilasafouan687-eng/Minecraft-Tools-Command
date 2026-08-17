const items = [
    ["diamond", "💎 Diamond"],
    ["diamond_block", "💎 Diamond Block"],
    ["diamond_sword", "⚔️ Diamond Sword"],
    ["diamond_pickaxe", "⛏️ Diamond Pickaxe"],
    ["diamond_axe", "🪓 Diamond Axe"],
    ["diamond_shovel", "🪣 Diamond Shovel"],
    ["diamond_hoe", "🌱 Diamond Hoe"],
    ["netherite_ingot", "🔥 Netherite Ingot"],
    ["netherite_block", "🔥 Netherite Block"],
    ["netherite_sword", "⚔️ Netherite Sword"],
    ["netherite_pickaxe", "⛏️ Netherite Pickaxe"],
    ["netherite_axe", "🪓 Netherite Axe"],
    ["netherite_shovel", "🪣 Netherite Shovel"],
    ["netherite_hoe", "🌱 Netherite Hoe"],
    ["gold_ingot", "🪙 Gold Ingot"],
    ["iron_ingot", "⚙️ Iron Ingot"],
    ["copper_ingot", "🟠 Copper Ingot"],
    ["emerald", "💚 Emerald"],
    ["redstone", "🔴 Redstone"],
    ["lapis_lazuli", "🔵 Lapis Lazuli"],
    ["coal", "⚫ Coal"],
    ["stone", "🧱 Stone"],
    ["cobblestone", "🧱 Cobblestone"],
    ["dirt", "🟫 Dirt"],
    ["grass_block", "🌱 Grass Block"],
    ["sand", "🟨 Sand"],
    ["gravel", "🪨 Gravel"],
    ["glass", "🪟 Glass"],
    ["obsidian", "⬛ Obsidian"],
    ["bedrock", "🪨 Bedrock"],
    ["oak_log", "🌳 Oak Log"],
    ["oak_planks", "🪵 Oak Planks"],
    ["spruce_log", "🌲 Spruce Log"],
    ["birch_log", "🌳 Birch Log"],
    ["jungle_log", "🌴 Jungle Log"],
    ["acacia_log", "🌳 Acacia Log"],
    ["dark_oak_log", "🌳 Dark Oak Log"],
    ["cherry_log", "🌸 Cherry Log"],
    ["tnt", "💥 TNT"],
    ["ender_pearl", "🟣 Ender Pearl"],
    ["ender_eye", "👁️ Eye of Ender"],
    ["blaze_rod", "🔥 Blaze Rod"],
    ["ghast_tear", "👻 Ghast Tear"],
    ["dragon_breath", "🐉 Dragon's Breath"],
    ["nether_star", "⭐ Nether Star"],
    ["apple", "🍎 Apple"],
    ["golden_apple", "🍏 Golden Apple"],
    ["enchanted_golden_apple", "✨ Enchanted Golden Apple"],
    ["bread", "🍞 Bread"],
    ["cake", "🎂 Cake"],
    ["cookie", "🍪 Cookie"],
    ["carrot", "🥕 Carrot"],
    ["potato", "🥔 Potato"],
    ["baked_potato", "🥔 Baked Potato"],
    ["bow", "🏹 Bow"],
    ["crossbow", "🏹 Crossbow"],
    ["arrow", "➡️ Arrow"],
    ["shield", "🛡️ Shield"],
    ["trident", "🔱 Trident"],
    ["fishing_rod", "🎣 Fishing Rod"],
    ["command_block", "🟧 Command Block"],
    ["chain_command_block", "🔗 Chain Command Block"],
    ["repeating_command_block", "🔁 Repeating Command Block"],
    ["structure_block", "🧩 Structure Block"],
    ["structure_void", "👻 Structure Void"],
    ["barrier", "🚫 Barrier"],
    ["light", "💡 Light"],
    ["jigsaw", "🧩 Jigsaw Block"],
    ["debug_stick", "🪄 Debug Stick"],
    ["knowledge_book", "📖 Knowledge Book"],
    ["spawner", "👾 Spawner"],
    ["skeleton_skull", "💀 Skeleton Skull"],
    ["wither_skeleton_skull", "💀 Wither Skeleton Skull"],
    ["zombie_head", "🧟 Zombie Head"],
    ["creeper_head", "💚 Creeper Head"],
    ["dragon_head", "🐉 Dragon Head"],
    ["player_head", "👤 Player Head"],
    ["experience_bottle", "✨ Experience Bottle"],
    ["enchanted_book", "📕 Enchanted Book"],
    ["name_tag", "🏷️ Name Tag"],
    ["saddle", "🐴 Saddle"],
    ["lead", "🔗 Lead"],
    ["totem_of_undying", "🟡 Totem of Undying"]
];

const mobs = [
    ["zombie", "🧟 Zombie"],
    ["skeleton", "💀 Skeleton"],
    ["creeper", "💚 Creeper"],
    ["spider", "🕷️ Spider"],
    ["cave_spider", "🕸️ Cave Spider"],
    ["enderman", "👾 Enderman"],
    ["witch", "🧙 Witch"],
    ["pillager", "🏹 Pillager"],
    ["vindicator", "🪓 Vindicator"],
    ["ravager", "🐗 Ravager"],
    ["warden", "👹 Warden"],
    ["iron_golem", "🗿 Iron Golem"],
    ["snow_golem", "⛄ Snow Golem"],
    ["villager", "🧑 Villager"],
    ["pig", "🐷 Pig"],
    ["cow", "🐄 Cow"],
    ["sheep", "🐑 Sheep"],
    ["chicken", "🐔 Chicken"],
    ["horse", "🐴 Horse"],
    ["wolf", "🐺 Wolf"],
    ["cat", "🐱 Cat"],
    ["bee", "🐝 Bee"],
    ["slime", "🟢 Slime"],
    ["magma_cube", "🔥 Magma Cube"],
    ["blaze", "🔥 Blaze"],
    ["ghast", "👻 Ghast"],
    ["endermite", "🟣 Endermite"],
    ["shulker", "📦 Shulker"],
    ["phantom", "🦇 Phantom"],
    ["wither", "☠️ Wither"],
    ["ender_dragon", "🐉 Ender Dragon"]
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
    ["strength", "💪 Strength"],
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

const itemSearch = document.getElementById("itemSearch");
const itemList = document.getElementById("itemList");
const itemInput = document.getElementById("item");
const commandType = document.getElementById("commandType");

function createList(data, search, callback) {
    const results = data.filter(x =>
        x[0].includes(search.toLowerCase()) ||
        x[1].toLowerCase().includes(search.toLowerCase())
    );

    itemList.innerHTML = "";

    results.forEach(x => {
        const div = document.createElement("div");

        div.className = "item-option";
        div.textContent = x[1];

        div.onclick = () => {
            itemInput.value = x[0];
            itemSearch.value = x[1];
            callback(x[0]);
        };

        itemList.appendChild(div);
    });
}

function showItems() {
    createList(items, itemSearch.value, () => {});
}

function updateGenerator() {
    const type = commandType.value;

    itemSearch.value = "";
    itemInput.value = "";
    itemList.innerHTML = "";

    if (type === "give") {
        itemSearch.placeholder = "🔎 Search an item...";
        createList(items, "", () => {});
    }

    else if (type === "summon") {
        itemSearch.placeholder = "🔎 Search a mob...";
        createList(mobs, "", () => {});
    }

    else if (type === "effect") {
        itemSearch.placeholder = "🔎 Search an effect...";
        createList(effects, "", () => {});
    }

    else {
        itemSearch.placeholder = "🔎 This command does not need a selection";
    }
}

commandType.addEventListener("change", updateGenerator);

itemSearch.addEventListener("input", () => {
    const type = commandType.value;

    if (type === "give") {
        createList(items, itemSearch.value, () => {});
    }

    else if (type === "summon") {
        createList(mobs, itemSearch.value, () => {});
    }

    else if (type === "effect") {
        createList(effects, itemSearch.value, () => {});
    }
});

updateGenerator();


function generateCommand() {
    const type = commandType.value;
    const player = document.getElementById("player").value || "@s";
    const amount = document.getElementById("amount").value || "1";

    let command = "";

    if (type === "give") {
        const item = itemInput.value;

        if (!item) {
            result.textContent = "❌ Please select an item!";
            return;
        }

        command = `/give ${player} ${item} ${amount}`;
    }

    else if (type === "summon") {
        const mob = itemInput.value || "zombie";

        command = `/summon ${mob} ~ ~ ~`;
    }

    else if (type === "effect") {
        const effect = itemInput.value || "speed";

        command = `/effect give ${player} ${effect} 30 1`;
    }

    else if (type === "tp") {
        command = `/tp ${player} ~ ~ ~`;
    }

    else if (type === "gamemode") {
        command = `/gamemode creative ${player}`;
    }

    else if (type === "time") {
        command = `/time set day`;
    }

    else if (type === "weather") {
        command = `/weather clear`;
    }

    document.getElementById("result").textContent = command;
}


function copyCommand() {
    const command = document.getElementById("result").textContent;

    if (!command || command.startsWith("❌")) {
        return;
    }

    navigator.clipboard.writeText(command);

    document.getElementById("result").textContent =
        "✅ Command copied!";
}