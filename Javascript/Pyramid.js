let rows = 5;

for (let i = 1; i <= rows; i++) {

    let line = "";

    // Increasing numbers
    for (let j = 1; j <= i; j++) {
        line = line + j;
    }

    // Decreasing numbers
    for (let j = i - 1; j >= 1; j--) {
        line = line + j;
    }

    console.log(line);
}