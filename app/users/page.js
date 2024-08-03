"use client";
import axios from "axios";

import useSWR from "swr";

const fetcher = (...args)=> axios.get(...args).then(resp=>resp.data)

let Userss = ()=>{

 

    let {data, error, isLoading} = useSWR('/api/signup', fetcher)


    return <div>
        
       {data ? <table>
            {
                data.users.map(function(user){
                    return <tr key = {i}>
                        <td>{user.user_email}</td>
                        <td>{user.user_password}</td>
                        <td>
                            <button onClick={function(){
                             
                                
                            //  since delete aur get wagera m body nahi 
                            // jsakti, so agar hum koi data backend
                            // per send karna chahte to query param
                            // use kar sakte hen
                            // for exmaple
                            // api/signup?a=10?b=10 (yahan humne 2 query params bnye, a aur b)

                             axios.delete('/api/signup?abc='+user._id)

                            }}>Delete</button>
                        </td>
                        <td>
                            <button onClick={function(){
                             
                             user.user_email =  prompt("enter new email");

                             axios.put('/api/signup?a=10', user)

                            }}>Update</button>
                        </td>
                    </tr>
                },i)
            }
 
        </table> : null }
    </div>

}
export default Userss