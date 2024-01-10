import React from 'react';

const Card = ({ title, text, number, unit, buttonText, moreText }) => {
    return (
        <div className="w-full md:w-1/2 lg:w-1/4 p-4">
            <section className="bg-white border rounded-lg p-6 h-full text-center">
                <h2 className="text-xl font-bold mb-2">{title}</h2>
                <p className="text-gray-600 mb-2">{text}</p>
                <div className="flex items-center mb-4">
                    <span className="text-4xl font-bold text-black mr-2">{number}</span>
                    <span className="text-gray-500">{unit}</span>
                </div>
                <button className="bg-black text-white py-2 px-8 mb-2 hover:bg-blue-600 inline-block w-full max-w-full">
                    {buttonText}
                </button>
                <hr className="my-4 border-t" />
                <p className="text-sm text-gray-500">{moreText}</p>
            </section>
        </div>
    );
};

export default Card;
