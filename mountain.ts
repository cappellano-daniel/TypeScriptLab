

interface Mountain {
    name: string;
    height: number
}

var mountains: Mountain[] = [
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
]

function findNameOfTallestMountain(mountains: Mountain[]) {
    
    let tallest = null

    for (let mountain of mountains) {
        if(!tallest) {
            tallest = mountain
        }

        if (mountain.height > tallest.height) {
            tallest = mountain;
        }
    } 
    return tallest?.name;
}

console.log(findNameOfTallestMountain(mountains))








//Products part of the lab
interface Product {
    name: string;
    price: number;
};

var products: Product[] = [
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
]
       

function calcAverageProductPrice(products: Product[]) {
   let sum = 0;
   
   products.forEach(price => {
       console.log(price)
   })
}

calcAverageProductPrice()




//Third part of the lab ***INVENTORY***

interface InventoryItem {
    product: Product[];
    quantity: number;
}

