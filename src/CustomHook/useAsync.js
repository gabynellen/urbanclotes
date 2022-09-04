import { useEffect, useState } from "react"

export const useAsync = (asyncFuntion, dependencies = []) =>{

    const [products, setProducts] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()

    useEffect(()=>{
        setLoading(true)

        asyncFuntion().then(response =>{
            setProducts(response)
        }).catch(error =>{
            setError(error)
        }).finally(()=>{
            setLoading(false)
        })

    }, dependencies)

    return {
        products,
        loading,
        error
    }
}