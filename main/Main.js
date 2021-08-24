const sheet = SpreadsheetApp.getActiveSpreadsheet();
const attributesRange = sheet.getRange("A4:F4");
const disciplinesRange = sheet.getRange("A6:F6");

function randomize() {
    console.log("test");
    clearField();
    generateAttributes();
}

function generateAttributes() {

}