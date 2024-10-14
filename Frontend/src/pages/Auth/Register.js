import NavBar from "../../components/NavBar";
import RegisterForm from "../../components/forms/RegisterForm";

function Register() {

    return (
        <div>
            <NavBar />
            <div className="px-4 md:px-56  space-y-10">
               <div>
                    <span className="font-bold text-4xl">Register Form</span>
                    <p>Register to apply for jobs of your choice all over the world</p>
               </div>
               <div>
                    <RegisterForm />
               </div>
            </div>
        </div>
    )
}

export default Register;