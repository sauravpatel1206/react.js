import { useEffect, useInsertionEffect, useLayoutEffect, useReducer, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { ReducerHook } from "./ReducerHook";
import ImperativeRefHookParent  from "./ImperativeRefHookParent";
import { useDebounce } from "./useDebounce";


const Hoooks = () => {
   
    const [search,setSearch]=useState();


    let api=useDebounce(search,10000);
    console.log("api call",api)
    // const [name, setName] = useState("saurav");
    //useState
    useEffect(() => {

        console.log("useEfeect called")
        // return () => {
        //     console.log("it's called when componet unmount")
        // }

    },[])

    // useLayoutEffect(()=>{
    //     console.log("useLayoutEffect called")
    // })

    // useInsertionEffect(()=>{
    //     console.log("useInsertionEffect Called")
    // })
    

  

    //useParams

    // let paramObject= useParams();
    // let locationObject= useLocation();
                         
    // console.log("params object",paramObject)
    // console.log("uselocation object",locationObject)
    return (
        <>
            <div >Hooks</div>
            <div>useDebounc</div>

            <input onChange={(e)=>{
setSearch(e.target.value)   
            }} ></input>

            {/* <ReducerHook/>
           <ImperativeRefHookParent/> */}
        </>
    )

}

export default Hoooks;