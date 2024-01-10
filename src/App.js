import React from 'react';
import Card from './Card';

const App = () => {
    return (
        <div className="h-screen flex flex-col items-center">
            <div className="flex flex-col items-center justify-center flex-grow">
                <header className="mb-4 text-center">
                    <h2 className="text-2xl font-bold mb-2">Pricing Plans</h2>
                    <p className="text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </header>
                <nav className="mb-4 flex">
                    <button className="bg-black text-white py-2 px-4 mr-2 hover:bg-gray-800">
                        Button 1
                    </button>
                    <button className="bg-black text-white py-2 px-4 hover:bg-gray-800">
                        Button 2
                    </button>
                </nav>
                <section className="flex flex-wrap justify-center h-full">
                    <Card
                        title="Card 1"
                        text="Lorem ipsum dolor sit amet."
                        number={42}
                        unit="units"
                        buttonText="Click me"
                        moreText="More details below the line."
                    />
                    <Card
                        title="Card 2"
                        text="Lorem ipsum dolor sit amet."
                        number={24}
                        unit="units"
                        buttonText="Click me"
                        moreText="More details below the line."
                    />
                    <Card
                        title="Card 3"
                        text="Lorem ipsum dolor sit amet."
                        number={18}
                        unit="units"
                        buttonText="Click me"
                        moreText="More details below the line."
                    />
                    <Card
                        title="Card 4"
                        text="Lorem ipsum dolor sit amet."
                        number={56}
                        unit="units"
                        buttonText="Click me"
                        moreText="More details below the line."
                    />
                </section>
            </div>
        </div>
    );
};

export default App;
