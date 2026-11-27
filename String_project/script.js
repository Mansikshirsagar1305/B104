const inputparaElmt=document.getElementById("inputpara")
const resultElmt=document.getElementById("result")

function toCapitalize()
{
    const str=inputparaElmt.value

    resultElmt.textContent = str.toUpperCase()

}

function toLowerCase()
{
    const str=inputparaElmt.value

    resultElmt.textContent = str.toLowerCase()
}
function toCapitalize()
{
    const str=inputparaElmt.value

    resultElmt.textContent = str.toUpperCase()
}

function countSpaces() {
    const str = inputparaElmt.value;
    let spacesInStr = 0;
    const len = str.length;

    for (let i = 0; i < len; i++) {
        if (str.charAt(i) === " ") {
            spacesInStr++;
        }
    }

    resultElmt.textContent = spacesInStr;
}


function replaceSpacesWithHyphen() {
    const str = inputparaElmt.value;

    const newStrArray = str.split(" ");

    const newStr = newStrArray.join("-");

    resultElmt.textContent = newStr;
}


// 1. Count Lines
function countLines() {
    const str = inputparaElmt.value;

    if (str.trim() === "") {
        resultElmt.textContent = 0;
        return;
    }

    const lines = str.split(/\r\n|\r|\n/);

    resultElmt.textContent = lines.length;
}


// 2. Count Vowels
function countVowels() {
    const str = inputparaElmt.value;
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        const ch = str[i].toLowerCase();

        if ("aeiou".includes(ch)) {
            count++;
        }
    }

    resultElmt.textContent = count;
}


// 3. Count Consonants
function countConsonants() {
    const str = inputparaElmt.value;
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        const ch = str[i].toLowerCase();

        if (ch >= "a" && ch <= "z" && !"aeiou".includes(ch)) {
            count++;
        }
    }

    resultElmt.textContent = count;
}


// 4. Reverse the String
function reverseString() {
    const str = inputparaElmt.value;

    const newStr = str.split("").reverse().join("");

    resultElmt.textContent = newStr;
}


// 5. Check Palindrome
function checkPalindrome() {
    const str = inputparaElmt.value;

    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

    const reverseStr = cleanStr.split("").reverse().join("");

    if (cleanStr === reverseStr) {
        resultElmt.textContent = "It is a Palindrome";
    } else {
        resultElmt.textContent = "It is not a Palindrome";
    }
}


// 6. Sort the String
function sortString() {
    const str = inputparaElmt.value;

    const newStr = str.split("").sort().join("");

    resultElmt.textContent = newStr;
}


// 7. Reverse Sentence (Words remain unchanged)
function reverseSentence() {
    const str = inputparaElmt.value;

    const newStr = str.trim().split(/\s+/).reverse().join(" ");

    resultElmt.textContent = newStr;
}

function titleCase() {
    const str = inputparaElmt.value;

    const words = str.toLowerCase().split(" ");

    const newStr = words.map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");

    resultElmt.textContent = newStr;
}
