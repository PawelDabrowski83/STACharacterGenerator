function checkAttributes() {
    console.log(sumAttributes());
}

function sumAttributes() {
    let sum = 0;

    for (let i = 1; i <= 6; i++) {
        sum += sheet.getRange(ATTR_ROW, i).getValue();
    }
    return sum;
}
