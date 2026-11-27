
function printZigZag(n) {

    for (let i = 0; i < 3; i++) {

        let line = "";

        for (let j = 0; j < n; j++) {

            if (
                (i === 0 && j % 4 === 0) ||
                (i === 1 && j % 2 === 1) ||
                (i === 2 && j % 4 === 2)
            ) {
                line += "* ";
            }
            else {
                line += "  ";
            }
        }

        console.log(line);
    }
}

printZigZag(9);
