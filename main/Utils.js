function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getAttribute(col) {
    return sheet.getRange(ATTR_ROW, col).getValue();
}

function setAttribute(col, val) {
    sheet.getRange(ATTR_ROW, col).setValue(val);
}

function incrementAttribute(col) {
    setAttribute(col, getAttribute(col) + 1);
}

function getDiscipline(col) {
    return sheet.getRange(DISC_ROW, col).getValue();
}

function setDiscipline(col, val) {
    sheet.getRange(DISC_ROW, col).setValue(val);
}

function incrementDiscipline(col) {
    setDiscipline(col, getDiscipline(col) + 1);
}