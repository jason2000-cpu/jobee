import NavBar from "../../components/NavBar";
import LoginForm from '../../components/forms/LoginForm.js'

function Login() {

    return (
        <div>
            <NavBar />
            <div className="px-2 md:px-10 pt-1 md:mx-36">
                <div className="flex flex-col">
                    <span className="text-3xl font-bold">Login In To Your Account</span>
                    <span>Welcome back! Select the below login methods.</span>
                </div>
                <div className="border-t shadow-lg  mt-4 ">
                    <div className="flex flex-row justify-between">
                        <LoginForm />
                        <div className="hidden md:flex basis-1/2 h-full py-3 justify-center">
                            <img src="/static/images/login.png" className="h-[32rem]"   alt="Login" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;