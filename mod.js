const miscFilename = 'global\\excel\\misc.txt';
const misc = D2RMM.readTsv(miscFilename);

const gem_upgrades = {
    "Chipped ": [ "", "Flawless " ],
    "Flawed ": [ "" , "Perfect " ]
}

const rune_upgrades = {
    "El": [ "Sol", "Mal" ],
    "Eld": [ "Shael", "Ist" ],
    "Tir": [ "Dol", "Gul" ],
    "Nef": [ "Hel", "Vex" ],
    "Eth": [ "Io", "Ohm" ],
    "Ith": [ "Lum", "Lo" ],
    "Tal": [ "Ko", "Sur" ],
    "Ral": [ "Fal", "Ber" ],
    "Ort": [ "Lem", "Jah" ],
    "Thul": [ "Pul", "Cham" ],
    "Amn": [ "Um", "Zod" ]
}

misc.rows.forEach((row) => {
    if (row.type.includes("gem")) {
        if (row.name.includes("Chipped") || row.name.includes("Flawed")) {
            row.MalahMin = 1
            row.MalahMax = 1
            const upgrade_key = row.name.includes("Chipped") && "Chipped " || "Flawed ";
            row.NightmareUpgrade = row.name.replace(upgrade_key, gem_upgrades[upgrade_key][0])
            row.HellUpgrade = row.name.replace(upgrade_key, gem_upgrades[upgrade_key][1])
        }
        row.PermStoreItem = 1
    }
    if (row.type === "rune") {
        const rune_base = row.name.replace(" Rune", "")
        if (rune_base in rune_upgrades) {
            row.MalahMin = 1
            row.MalahMax = 1
            const rune_upgrade = rune_upgrades[rune_base]
            row.NightmareUpgrade = rune_upgrade[0] + " Rune"
            row.HellUpgrade = rune_upgrade[1] + " Rune"
        }
        row.PermStoreItem = 1
    }
})

D2RMM.writeTsv(miscFilename, misc)
