function generateDisciplines() {
    while(sumDisciplines() < CHECKSUM_DISC) {
        incrementRandomDiscipline();
    }
}

function sumDisciplines() {
    let sum = 0;

    for (let i = 1; i <= 6; i++) {
        sum += getDiscipline(i);
    }
    return sum;
}

function incrementRandomDiscipline() {
    let randomDisc;

    do {
        randomDisc = randomInteger(1, 6);
    } while(!isDiscIncrementable(getDiscipline(randomDisc)));
    incrementDiscipline(randomDisc);
}

function isDiscIncrementable(value) {
    return value < HIGHEST_DISC;
}

