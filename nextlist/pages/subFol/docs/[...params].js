import {useRouter} from "next/router";
const Docs = () => {
    const router = useRouter();
    const {params = []} = router.query; 

    if(params.length === 2){
        return (
            <h2>you are looking at the {params[0]} and concept {params[1]}</h2>
        )
    }
    else if(params.length === 1){
        return (
            <h2>you are looking at the {params[0]}</h2>
        )
    }
    
    return ( 
        <div>
            <h1>hello</h1>
        </div>
    );
}
 
export default Docs;