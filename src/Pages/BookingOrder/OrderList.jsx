/* eslint-disable react/prop-types */

const OrderList = ({ order, handleDelete }) => {
    const { _id, customerName, email, date, serviceName, image, price } = order;

    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-outline hover:bg-slate-600 hover:text-white btn-sm md:btn-md" >X</button>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="w-12 md:w-24 rounded">
                            <img src={image} />
                        </div>
                    </div>
                </div>
            </td>
            <td className="font-semibold text-sm md:text-lg">
                {customerName}
            </td>
            <td className="font-semibold text-sm md:text-base">{email}</td>
            <td className="font-semibold text-sm md:text-base">{date}</td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default OrderList;