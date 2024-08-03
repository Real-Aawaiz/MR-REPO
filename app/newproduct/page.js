"use client"
import useSWR from "swr";
import axios from "axios";
const fetcher = (...args)=>{
    return axios.get(...args).then(resp=>resp.data)
}
export default ()=>{
 
const {data,error,isLoading} = useSWR('https://fakestoreapi.com/products/1',fetcher)

    return <div>

    {isLoading ? <h1>loading</h1> :null}
    
    {error ? <h1>Oops, some error occurred</h1> :null}

    {data ? <div>
        <h1>{data.title}</h1>
        <h1>{data.price}</h1>
    </div> : null}

</div>

}