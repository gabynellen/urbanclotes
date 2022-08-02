const products = [
    {
        id: '1',
        name: 'Remera x',
        price: 4500,
        category: 'remeras',
        img: '../images/remerax.jpg',
        stock: 14,
        descripcion: "Remera de algodón X-MEN, Talle: L, algodón 100%. Cod: 83548, Ind. Arg fabricado en la provincia de Santa Fe."
    },
    {
        id: '2',
        name: 'Pantalon Jogger',
        price: 9750,
        category: 'pantalones',
        img: '../images/jogger.jpg',
        stock: 5,
        descripcion: "Pantalon corte jogger hombre."
    },
    {
        id: '3',
        name: 'Buzo Canguro',
        price: 8000,
        category: 'buzos',
        img: '../images/buzo.jpg',
        stock: 7,
        descripcion: "Buzo canguro negro hombre."
    }
]

export const getProducts = () =>{
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve(products)
        },2000)
    })
}

export const getProduct = () =>{
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve(products[0])
        },2000)
    })
}