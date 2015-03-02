/**
 * JavaScript Closures
 */

function getItem (n) {
    var item = [0xAF01, 0x1011,
        0xAAA1, 0x000C, 0x1234, 0xA1C6];

    return item[n];
}

console.log(getItem(3)); // 0x000C (12)

// Langsam, da bei jedem Aufruf item neu alloziert wird.
// Kann mithilfe von Closures behoben werden.

var getItemClosure = (function () { // Funktion deklariert als Expression
    var item = [0xAF01, 0x1011,
        0xAAA1, 0x000C, 0x1234, 0xA1C6];

    return function (n) {
        return item[n];
    };
}());

console.log(getItemClosure(3)); // 0x000C (12)