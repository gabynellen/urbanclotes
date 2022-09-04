export const adapterProduct = (doc)=>{
    const data = doc.data()

    const adapterproduct = {
        id: doc.id,
        name: data.name,
        img: data.img,
        price: data.price,
        category: data.category,
        stock: data.stock,
        descripcion: data.descripcion
    }

    return adapterproduct

}