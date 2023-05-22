const miscFilename = 'global\\excel\\misc.txt';
const misc = D2RMM.readTsv(miscFilename);

misc.rows.forEach((row) => {
    if (row.type.includes("gem") && (row.name.includes("Chipped") || row.name.includes("Flawed"))) {
        row.MalahMin = 1
        row.MalahMax = 1
        row.PermStoreItem = 1
    }
    if (row.type === "rune") {
        if (['El Rune', 'Eld Rune', 'Tir Rune', 'Nef Rune', 'Eth Rune', 'Ith Rune', 'Tal Rune', 'Ral Rune', 'Ort Rune', 'Thul Rune'].indexOf(row.name) !== -1) {
            row.MalahMin = 1
            row.MalahMax = 1
        }
        row.PermStoreItem = 1
    }
})

D2RMM.writeTsv(miscFilename, misc)
