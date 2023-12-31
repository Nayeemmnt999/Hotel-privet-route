import React, { useContext } from 'react';
import { AuthContex } from '../../UserContex/UserContex';
import { toast } from 'react-toastify';
import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';


const Login = () => {

    const { login, users } = useContext(AuthContex)
    const navigate = useNavigate()
    let location = useLocation();


    let from = location.state?.from?.pathname || "/";

    const loginFormHandle = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, email, password);
        login(email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                form.reset()
                console.log(user);
                toast.success('log in sucess')
                if (user.emailVerified) {
                    return toast.success('Email Verified')
                }
                else {
                    return toast.error('email Unverified')
                }


                navigate(from, { replace: true })
                // Navigate('/')
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast.error(errorMessage)
            });
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda <br></br> excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. <Link to={'/register'}> <p className=' text-rose-500 text-lg'> ! Register Now</p></Link></p>
                </div>
                <div className="divider divider-horizontal "><p className=' rotate-90 text-blue-300'> NAYEEM </p> </div>

                {/* <form> started */}

                <form onSubmit={loginFormHandle} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input required name='email' type="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input required name='password' type="password" placeholder="*******" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Login</button>
                        </div>
                    </div>
                </form>
                {/* </form> end */}

            </div>
        </div>
    );
};

export default Login;