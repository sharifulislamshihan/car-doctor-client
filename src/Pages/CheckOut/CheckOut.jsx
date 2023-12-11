import { useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";

const CheckOut = () => {
    const service = useLoaderData();
    const { title, _id, price, img } = service;
    const { user } = useContext(AuthContext);

    const handleCheckOut = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = user?.email
        const date = form.date.value;
        const message = form.msg.value;
        const booking = {
            customerName : name,
            email : email,
            date : date,
            image : img,
            serviceName : title,
            servicesId: _id,
            message: message
        };
        console.log(booking);

        fetch('http://localhost:5000/bookings', {
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(booking),
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire("Order confirmed");
            }
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="relative w-5/6 mx-auto my-10">
                <img className="w-full rounded-lg" src="https://i.ibb.co/17nK1gh/checkout.png" alt="" />
                <div className="absolute top-0 left-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full w-full">
                    <h3 className="flex ml-8 lg:ml-20 mt-8 md:mt-12 lg:mt-28 text-xl md:text-5xl font-bold text-white">Check Out</h3>
                </div>
            </div>

            {/* Booking form */}

            <div className="p-6 my-16">
                <h2 className=" text-3xl font-bold text-center my-5">Check Out for {title}</h2>
                <form onSubmit={handleCheckOut}>
                    <div className="space-y-5 mx-5 md:mx-32">
                        <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 my-3">
                            {/* name */}

                            <input type="text" defaultValue={user?.name} name="name" placeholder="Name" className="input " required />


                            {/* Email */}

                            <input type="email" defaultValue={user?.email} name="email" placeholder="Email" className="input " required />


                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-3">
                            {/* date */}
                            <input type="date" name="date" className="input " required />

                            {/* price */}
                            <input type="text" defaultValue={'Due: $'+price} placeholder="price" className="input " required />

                        </div>
                        <div>
                            <textarea type="text" name="msg" placeholder="Message..." className="input w-full p-2 rounded" required></textarea>
                        </div>
                        <div>
                            <button type="submit" className="btn btn-active w-full pt-3 pb-3 text-white text-center text-lg font-bold rounded-xl bg-[#FF3811] hover:bg-[#FF3811]">Order Confirm</button>
                        </div>
                    </div>
                </form>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default CheckOut;