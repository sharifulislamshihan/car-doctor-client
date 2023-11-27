import loginImg from '../../assets/images/login/login.svg'
const Login = () => {

    const handleLogin = e =>{
        e.preventDefault();
        const form = e.target;
    }

    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row gap-10">
                    <div className="w-1/2 text-center lg:text-left">
                        <img className='w-5/6' src={loginImg} alt="" />
                    </div>
                    <div className="card shrink-0 w-full max-w-sm">
                    <h1 className="text-4xl text-[#444] text-center mt-12 font-bold">Login</h1>
                        
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-5">
                                <input className="btn bg-[#FF3811] text-white hover:bg-[#FF3811] " type="submit" value="Sign In" />
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;