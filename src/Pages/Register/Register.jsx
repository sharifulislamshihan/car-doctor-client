import loginImg from '../../assets/images/login/login.svg'
import facebook from '../../assets/icons/facebook .png'
import linkedin from '../../assets/icons/linkedin.png'
import google from '../../assets/icons/google.png'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Navbar from '../Shared/Navbar/Navbar';

const Register = () => {

    const {createUser} = useContext(AuthContext);
    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
        .then(res => {
            const user = res.user;
            console.log(user);
        })
        .then(error => {
            console.error(error);
        })
    }


    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row gap-10">
                    <div className="w-1/2 text-center lg:text-left">
                        <img className='w-5/6' src={loginImg} alt="" />
                    </div>
                    <div className="card shrink-0 w-full max-w-sm mx-auto">
                        <h1 className="text-4xl text-[#444] text-center mt-12 font-bold">Sign Up</h1>

                        <form onSubmit={handleRegister} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name" name='name' placeholder="name" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-5">
                                <input className="btn bg-[#FF3811] text-white hover:bg-[#FF3811] " type="submit" value="Sign up" />
                            </div>
                        </form>
                        <h3 className='text-center text-lg font-normal'>Or Sign Up with</h3>

                        <div className='flex justify-center gap-4 mt-5 mb-3'>
                            <img className='w-8 h-8' src={facebook} alt="" />
                            <img className='w-8 h-8' src={linkedin} alt="" />
                            <img className='w-6 h-6 mt-1' src={google} alt="" />
                        </div>

                        <h3 className='text-lg text-center text-[#737373] font-normal'>Already have an account? <Link to='/login'><span className='text-[#FF3811] font-semibold'>Sign In</span></Link> </h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;