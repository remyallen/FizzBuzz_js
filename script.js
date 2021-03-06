for (var i = 1; i <= 100; i++) {
    // For each iteration,
    // initialize an empty string
    var string = '';

    // If `i` is divisible by 3
    // with no remainder, append `Fizz`
    if (i % 3 === 0) {
        string += 'Fizz';
    }

    // If `i` is divisible by 5
    // with no remainder, append `Buzz`
    if (i % 5 === 0) {
        string += (string !== '' ? ' ' : '') + 'Buzz';
    }

    // If `string` is still empty,
    // `i` is not divisible by 3 or 5,
    // so use the number instead.
    if (string === '') {
        string += i;
    }

    // At the end of each iteration,
    // print the string to the screen.
    console.log(string);
}
