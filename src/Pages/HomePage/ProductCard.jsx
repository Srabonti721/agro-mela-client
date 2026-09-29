import { Link } from "react-router";

const ProductCard = ({ product }) => {
    const {image, name, price, unit} = product;
    console.log(product);
    
    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 border border-gray-100">
       {/* Image */}
                <div className="h-56 overflow-hidden">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    />
                </div>

                {/* Content */}
                <div className="p-5">
                    <h3 className="text-xl font-bold text-gray-800">
                        {name}
                    </h3>

                    <div className="flex items-center justify-between mt-3">
                        <div>
                            <span className="text-2xl font-bold text-green-600">
                                ৳{price}
                            </span>

                            <span className="text-gray-500 ml-1">
                                / {unit}
                            </span>
                        </div>
                        <Link className="px-4 py-2 rounded-lg bg-green-600 text-white font-medium hover:bg-green-700 transition">
                            View Details
                        </Link>
                    </div>
                </div>
            </div>
    );
};

export default ProductCard;
