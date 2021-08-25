function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getAttribute(col) {
    return sheet.getRange(ATTR_ROW, col).getValue();
}

function setAttribute(col, val) {
    sheet.getRange(ATTR_ROW, col).setValue(val);
}