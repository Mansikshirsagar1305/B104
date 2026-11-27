
function printNumberPyramid(n) {

    for (let i = 1; i <= n; i++) {

        let line = "";

        // Spaces
        for (let j = 1; j <= n - i; j++) {
            line += " ";
        }

        // Numbers
        for (let k = 1; k <= i; k++) {
            line += i + " ";
        }

        console.log(line);
    }
}

printNumberPyramid(4);
