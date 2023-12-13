import { useContext, useEffect, useState } from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { AuthContext } from '../../Providers/AuthProvider';
import OrderList from './OrderList';

const BookingOrder = () => {

    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/bookings?email=${user?.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setOrders(data);
            })
    }, [])

    return (
        <div>
            <Navbar></Navbar>
            {/* img */}
            <div className="relative w-5/6 mx-auto my-10">
                <img className="w-full rounded-lg" src="https://i.ibb.co/17nK1gh/checkout.png" alt="" />
                <div className="absolute top-0 left-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full w-full">
                    <h3 className="flex ml-8 lg:ml-20 mt-8 md:mt-12 lg:mt-28 text-xl md:text-5xl font-bold text-white">My Order</h3>
                </div>
            </div>


            <div className='overflow-x-auto my-16 mx-7 md:mx-20'>
                <table className="table">
                    <tbody>
                        {/* row 1 */}
                        {
                            orders.map(order => <OrderList
                                key={order._id}
                                order={order}
                            ></OrderList>)
                        }
                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default BookingOrder;