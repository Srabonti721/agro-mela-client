import axios from "axios";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const WhatWeHave = () => {
    const [items, setItems] = useState([]);
    console.log(items);

    useEffect(() => {
        axios
            .get("http://localhost:3000/farmItems")
            .then((res) => {
                setItems(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <section className="py-20 bg-base-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <p className="text-green-600 font-semibold uppercase tracking-widest text-sm mb-3">
                        What We Have
                    </p>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
                        Everything You Need From{" "}
                        <span className="text-green-600">Farm to Market</span>
                    </h2>

                    <p className="mt-5 text-gray-500 leading-7">
                        Discover quality agricultural products and explore
                        better opportunities through Agro Mela.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((item) => {
                        return (
                            <div
                                key={item._id}
                                className="group   bg-white rounded-2xl border border-green-100 
                shadow-sm hover:shadow-xl transition-all duration-300
                hover:-translate-y-2"
                            >
                                <figure>
                                    <img
                                        className="w-[300px] h-[200px] object-cover rounded-t-2xl"
                                        src={item.image}
                                        alt="{item.category}"
                                    />
                                </figure>
                                <div className="card-body">
                                    <h2 className="text-xl font-bold text-gray-800 mb-3">
                                        {item.name}
                                        <div className="badge text-white bg-green-600 ml-2">
                                            {item.category}
                                        </div>
                                    </h2>
                                    <p className="text-gray-500 text-sm leading-6 mb-5">
                                        {item.shortDescription}
                                    </p>
                                    <button
                                        className="flex items-center gap-2 text-green-600
                  font-semibold text-sm group-hover:gap-3 transition-all"
                                    >
                                        Learn More
                                        <ArrowRight size={17} />
                                    </button>
                                </div>
                            </div>
                            //   <div
                            //     key={item._id}
                            //     className="group p-7 bg-white rounded-2xl border border-gray-100
                            //     shadow-sm hover:shadow-xl transition-all duration-300
                            //     hover:-translate-y-2"
                            //   >
                            // <img src={item.image} alt="" />

                            //     {/* Content */}
                            //     <h3 className="text-xl font-bold text-gray-800 mb-3">
                            //       {item.name}
                            //     </h3>

                            //     <p className="text-gray-500 text-sm leading-6 mb-5">
                            //       {item.description}
                            //     </p>

                            //     <button
                            //       className="flex items-center gap-2 text-green-600
                            //       font-semibold text-sm group-hover:gap-3 transition-all"
                            //     >
                            //       Learn More
                            //       <ArrowRight size={17} />
                            //     </button>
                            //   </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WhatWeHave;
