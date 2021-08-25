function generateAttributes() {
    while(sumAttributes() < 56) {
        incrementRandomAttribute();
    }
}

function sumAttributes() {
    let sum = 0;

    for (let i = 1; i <= 6; i++) {
        sum += getAttribute(i);
    }
    return sum;
}

function incrementRandomAttribute() {
    let randomAttr;

    do {
        randomAttr = randomInteger(1, 6);
    } while(!isAttrIncrementable(getAttribute(randomAttr)));
    incrementAttribute(randomAttr);
}

function isAttrIncrementable(value) {
    return value < 12;
}

