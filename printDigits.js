numbers = '314';

let printDigits = (num) => {
    digits = num.split('');

    for (let i = 0; i < digits.length; i++) {
        console.log(digits[digits.length - 1 - i]);
    }
}

function lukeLyons(num) {
    while (num !== 0) {
        let digit = num % 10;
        console.log(digit);
        num = Math.floor(num / 10);
    }
}

printDigits(numbers);
lukeLyons(numbers);