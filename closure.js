/**
 * JavaScript Closures
 * getItem und getItemClosure gleichen sich im Verhalten. Der Unterschied liegt in der Performance.
 * bei jedem Aufruf von getItem wird Speicher für die Array item alloziert.
 * getItemClosure umgeht dieses Problem durch die Nutzung von Closures.
 * Die Variablen, die von der anonymen Funktion umschlossen werden, sind auch nach dem return noch
 * im Scope von getItemClosure gültig.
 */

function getItem (n) {
    var item = [0xAF01, 0x1011,
        0xAAA1, 0x000C, 0x1234, 0xA1C6];

    return item[n];
}


var getItemClosure = (function () {
    var item = [0xAF01, 0x1011,
        0xAAA1, 0x000C, 0x1234, 0xA1C6];

    return function (n) {
        return item[n];
    };
}());
