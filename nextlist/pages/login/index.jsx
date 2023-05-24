import {useSession, signIn , signOut} from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Login = () => {
    const {data:session} = useSession();
    const router = useRouter();
    console.log(session);

    useEffect(() => {
        router.push("/");
    },[session])

    useEffect(() => {
    },[])

    return(
        <>
            <div className="flex items-center justify-center">
                <div className="productContainer flex items-center justify-center flex-col">
                    {
                        session ? 
                        <>
                            <div className="auth-container">
                                <h2 className="text-center capitaize text-3xl font-bold">
                                    Signed in
                                </h2>

                                <button className="auth-button" onClick={() => signOut()}>Sign Out</button>
                            </div>
                        </>
                        :
                        <>
                            <div className="auth-container">
                                <h2 className="capitaize text-3xl font-bold text-center">
                                    Not sined in 
                                </h2>
                                <button className="auth-button" onClick={() => signIn()}>Sign In</button>
                            </div>
                        </>
                    }
                </div>
            </div>
        </>
    )
}

export default Login;