var mountains = [
    {
        name: 'Killimanjaro',
        height: 19341
    },
    {
        name: 'Everest',
        height: 29029
    },
    {
        name: 'Denali',
        height: 20310
    }
];
function findNameOfTallestMountain(mountains) {
    var tallest = null;
    for (var _i = 0, mountains_1 = mountains; _i < mountains_1.length; _i++) {
        var mountain = mountains_1[_i];
        if (!tallest) {
            tallest = mountain;
        }
        if (mountain.height > tallest.height) {
            tallest = mountain;
        }
    }
    return tallest === null || tallest === void 0 ? void 0 : tallest.name;
}
console.log(findNameOfTallestMountain(mountains));
;
var products = [
    {
        name: 'Volvo 240',
        price: 500
    },
    {
        name: 'Volvo 144',
        price: 1000
    },
    {
        name: 'Volvo 850',
        price: 3500
    }
];
function calcAverageProductPrice(products) {
    var sum = 0;
    products.forEach(function (price) {
        console.log(price);
    });
}
calcAverageProductPrice();
