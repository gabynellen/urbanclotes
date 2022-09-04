import { getDocs, collection, query, where, getDoc, doc } from 'firebase/firestore'
import { db } from "."
import { adapterProduct } from '../../Adapter/productsAdapter'

export const getProducts = (categoryId)=>{
    const collectionRef = !categoryId 
    ? collection(db, 'products')
    : query(collection(db, 'products'), where('category', '==', categoryId))
    return getDocs(collectionRef).then(response =>{
        const products = response.docs.map(doc =>{
            return adapterProduct(doc)
        })
        return products
    }).catch(error =>{
        return error
    })

}

export const getProduct = (id) =>{
    return getDoc(doc(db, 'products', id)).then(response => {
        const values = response.data()
        const product = { id: response.id, ...values}
        return  product
    }).catch(error => {
        return error
    })

}



