import { useEffect,useState } from "react"

const useFetch = (url)=>{
    const [data,setData] = useState("")
    //const baseURL = "https://fakestoreapi.com"
    
    useEffect(()=>{
        fetch(url).then(res=>{
            res.json().then(result=>{
                setData(result.products)
            })
        })
    },[url])
    
    return data
}

export default useFetch 