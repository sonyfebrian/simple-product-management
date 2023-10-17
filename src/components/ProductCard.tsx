import React, { useState, useEffect } from 'react';
import { getProducts } from '@/services/api';
import { Product } from '@/services/productTypes';

const ProductCard: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const getProductsData = async () => {
            try {
                const productData = await getProducts();
                setProducts(productData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        getProductsData();
    }, []);


    return (
        <section className="text-gray-600 body-font bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-100 to-teal-100">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {products.map((item) => (
                        <div className="p-4 md:w-1/3" key={item.id}>
                            <div className="h-full border-2 border-gray-800 border-opacity-60 rounded-lg overflow-hidden">
                                <img
                                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                                    src={item.images[0]}
                                    alt="blog"
                                />
                                <div className="p-6">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                                        {item.category}
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                        {item.title}
                                    </h1>
                                    <p className="leading-relaxed mb-3">
                                        {item.description}
                                    </p>

                                </div>
                            </div>
                        </div>
                    ))}


                </div>
            </div>
        </section>
    );
};

export default ProductCard;
