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


var getItemClosure = (function () { // Anonyme Funktion umschließt Variablen
    var item = [0xAF01, 0x1011,
        0xAAA1, 0x000C, 0x1234, 0xA1C6];

    return function (n) { // die eigentliche Funktion, die an getItemClosure returnt wird.
                          // Die Variable item bleibt im Scope von getItemClosure erhalten auch nach dem return.
        return item[n];
    };
}());

console.log(getItemClosure(3)); // 0x000C (12)
