function emptyTable (table) {
    if (!table[0]) {
        return true;
    }

    return false;
}

window.emptyTable = emptyTable;
