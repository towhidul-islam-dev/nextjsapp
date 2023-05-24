import Link from "next/link";
import { useEffect} from "react";
import {useRouter} from "next/router";

const PageNotFound = () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            // router.go(-1); // It will basically move back the page by one page...
            router.push("/");
        }, 4000);
    },[]) 
    return ( 
        <div className="flex items-center justify-center flex-col mt-52">
            <h2>Oooops...</h2>
            <p>That page cannot be found</p>
            <h3>Go back to <Link href="/" legacyBehavior><a className="underline text-blue-300 cursor-pointer capitalize font-bold"
            >Homepage</a></Link></h3>
        </div>
     );
}
 
export default PageNotFound;