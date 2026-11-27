
function printPascalsTriangle(n) {

    for (let i = 0; i < n; i++) {

        let line = "";
        let num = 1;

        // Print spaces
        for (let j = 0; j < n - i - 1; j++) {
            line += " ";
        }

        // Print numbers
        for (let k = 0; k <= i; k++) {

            line += num + " ";

            num = num * (i - k) / (k + 1);
        }

        console.log(line);
    }
}

printPascalsTriangle(5);
