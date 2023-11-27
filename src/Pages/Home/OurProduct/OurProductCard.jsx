/* eslint-disable react/prop-types */

const OurProductCard = ({ product }) => {
    const { img, name, price } = product;
    return (
        <div>
            <div className="card">
                <figure><img className="w-2/3 md:w-1/2 h-52 md:h-40" src={img} alt={name} /></figure>
                <div className="card-body text-center">
                    <div className="rating mx-auto">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FF3811]" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FF3811]"  />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FF3811]" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FF3811]" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FF3811]" />
                    </div>
                    <h2 className="text-xl text-[#444] font-bold">{name}</h2>
                    <p className="text-[#FF3811] text-lg font-bold">${price}</p>
                </div>
            </div>
        </div>
    );
};

export default OurProductCard;