import React, { useContext, useState } from 'react';
import { AuthContex } from '../../UserContex/UserContex';
import { toast } from 'react-toastify';
import { sendEmailVerification } from 'firebase/auth';
import { Link } from 'react-router-dom';

const Register = () => {
    const { emailVerify, auth, userUpdate } = useContext(AuthContex)
    // const [regLoding, setRegLoading] = useState(true)
    // const [loading, setLoading] = useState(true)

    // if (regLoding) {
    //     return setLoading(<p>iam loading</p>)
    // }

    const formHandeler = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
        emailVerify(email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                toast.success('regitraition successfully done')
                // ...Update name -------------------------------------------
                userUpdate(name)
                    .then(() => {
                        toast.success('Name Updated')
                    })
                // emailVerify --------------------------------------------------

                sendEmailVerification(auth.currentUser)
                    .then(() => {
                        toast.warning('Go to mail box and veryfy your email')
                    });

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast.warning(errorMessage)
                // ..
            });
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                {/* <div>
                    {loading}
                </div> */}
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda <br></br> excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. <Link to={'/login'}> <p className=' text-green-500 text-lg'>! Login Now</p> </Link> </p>
                </div>
                <div className="divider divider-horizontal "><p className=' rotate-90 text-blue-300'> NAYEEM </p> </div>

                {/* <form> started----------------------------------------------------------------------------------------------------- */}
                <form onSubmit={formHandeler} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">

                        {/* name input section ----------------------------------------------------------------------------------------------------- */}

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input required placeholder='Enter Your Name Here' type='text'
                                name='name' className="input input-bordered" />
                        </div>

                        {/* email section ----------------------------------------------------------------------------------------------------- */}

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input required name='email' type="email" placeholder="email" className="input input-bordered" />
                        </div>

                        {/* password input section ----------------------------------------------------------------------------------------------------- */}

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input required name='password' type="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Register</button>
                        </div>
                    </div>
                </form>
                {/* </form> end */}

            </div>
        </div>
    );
};

export default Register;