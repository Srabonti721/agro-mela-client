import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import ProductCard from "./ProductCard";

const ProductsPreview = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get("http://localhost:3000/products")
            .then((res) => {
                // শুধু প্রথম 6টি product দেখাবে
                setProducts(res.data.slice(0, 4));
            })
            .catch((error) => {
                console.error("Failed to load products:", error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <section className="py-20">
                <div className="text-center">
                    <span className="loading loading-spinner loading-lg"></span>
                </div>
            </section>
        );
    }

    return (
        <section className="py-16 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                {/* Section Heading */}
                <div className="text-center mb-12">
                    <p className="text-green-600 font-semibold uppercase tracking-wider">
                        Our Products
                    </p>

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
                        Fresh From Our Farm
                    </h2>

                    <p className="text-gray-500 max-w-2xl mx-auto mt-4">
                        Fresh, healthy and quality agricultural products
                        directly from trusted local farmers.
                    </p>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                    {products.map((product) => (
                        <ProductCard
                            key={product._id}
                            product={product}
                        ></ProductCard>
                    ))}
                </div>

                {/* See All Button */}
                <div className="text-center mt-10">
                    <Link
                        to="/products"
                        className="inline-block px-7 py-3 text-black rounded-lg border-2 border-green-600 font-semibold hover:bg-green-600 hover:text-white transition"
                    >
                        View All Products
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ProductsPreview;
