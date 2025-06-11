'use client';
import React from "react";
import { useState } from "react";
import Image from 'next/image';
// import RandomItemsTable from "../components/RandomItemsTable";

const items = [
    { name: "Fresh Tomatoes", price: 120 },
    { name: "Fresh Potatoes", price: 90 },
    { name: "Fresh Onions", price: 110 },
    { name: "Fresh Garlic", price: 350 },
    { name: "Fresh Ginger", price: 400 },
    { name: "Fresh Carrots", price: 130 },
    { name: "Fresh Cucumbers", price: 100 },
    { name: "Fresh Bell Peppers", price: 180 },
    { name: "Fresh Green Chilies", price: 160 },
    { name: "Fresh Lemons", price: 200 },
    { name: "Fresh Spinach", price: 60 },
    { name: "Fresh Coriander", price: 30 },
    { name: "Fresh Mint Leaves", price: 40 },
    { name: "Fresh Cabbage", price: 90 },
    { name: "Fresh Cauliflower", price: 150 },
    { name: "Fresh Eggplant", price: 130 },
    { name: "Fresh Okra", price: 170 },
    { name: "Fresh Zucchini", price: 140 },
    { name: "Fresh Pumpkin", price: 110 },
    { name: "Fresh Lettuce", price: 90 },
    { name: "Fresh Peas", price: 190 },
    { name: "Fresh Corn", price: 100 },
    { name: "Fresh Mushrooms", price: 300 },
    { name: "Fresh Apples", price: 250 },
    { name: "Fresh Bananas", price: 80 },
    { name: "Fresh Oranges", price: 200 },
    { name: "Fresh Mangoes", price: 300 },
    { name: "Fresh Grapes", price: 220 },
    { name: "Fresh Pomegranates", price: 280 },
    { name: "Fresh Papaya", price: 170 },
    { name: "Fresh Pineapple", price: 260 },
    { name: "Fresh Watermelon", price: 150 },
    { name: "Fresh Cantaloupe", price: 130 },
    { name: "Fresh Pears", price: 240 },
    { name: "Fresh Plums", price: 210 },
    { name: "Fresh Apricots", price: 230 },
    { name: "Fresh Kiwi", price: 300 },
    { name: "Fresh Avocados", price: 350 },
    { name: "Fresh Strawberries", price: 320 },
    { name: "Fresh Blueberries", price: 400 },
    { name: "Fresh Cherries", price: 420 },
    { name: "Fresh Dates", price: 280 },
    { name: "Fresh Almonds", price: 900 },
    { name: "Fresh Walnuts", price: 850 },
    { name: "Fresh Cashews", price: 950 },
    { name: "Fresh Pistachios", price: 980 },
    { name: "Fresh Raisins", price: 600 },
    { name: "Fresh Coconut", price: 180 },
    { name: "Fresh Milk", price: 180 },
    { name: "Fresh Yogurt", price: 160 },
    { name: "Fresh Butter", price: 450 },
    { name: "Fresh Cheese", price: 520 },
    { name: "Fresh Eggs", price: 240 },
    { name: "Fresh Bread", price: 120 },
    { name: "Fresh Naan", price: 30 },
    { name: "Fresh Roti", price: 25 },
    { name: "Fresh Wheat Flour", price: 120 },
    { name: "Fresh Basmati Rice", price: 280 },
    { name: "Fresh Brown Rice", price: 300 },
    { name: "Fresh Sugar", price: 120 },
    { name: "Fresh Salt", price: 60 },
    { name: "Fresh Tea", price: 450 },
    { name: "Fresh Coffee", price: 750 },
    { name: "Fresh Cooking Oil", price: 680 },
    { name: "Fresh Ghee", price: 900 },
    { name: "Fresh Red Chili Powder", price: 220 },
    { name: "Fresh Turmeric Powder", price: 200 },
    { name: "Fresh Coriander Powder", price: 210 },
    { name: "Fresh Cumin Seeds", price: 240 },
    { name: "Fresh Mustard Seeds", price: 200 },
    { name: "Fresh Curry Leaves", price: 80 },
    { name: "Fresh Vinegar", price: 150 },
    { name: "Fresh Soya Sauce", price: 160 },
    { name: "Fresh Ketchup", price: 170 },
    { name: "Fresh Mayonnaise", price: 200 },
    { name: "Fresh Pickles", price: 180 },
    { name: "Fresh Jam", price: 190 },
    { name: "Fresh Honey", price: 650 },
    { name: "Fresh Peanut Butter", price: 350 },
    { name: "Fresh Cornflakes", price: 250 },
    { name: "Fresh Oats", price: 300 },
    { name: "Fresh Pasta", price: 220 },
    { name: "Fresh Macaroni", price: 210 },
    { name: "Fresh Noodles", price: 200 },
    { name: "Fresh Biscuits", price: 120 },
    { name: "Fresh Cookies", price: 180 },
    { name: "Fresh Wafers", price: 150 },
    { name: "Fresh Chips", price: 100 },
    { name: "Fresh Soft Drinks", price: 90 },
    { name: "Fresh Mineral Water", price: 70 },
    { name: "Fresh Juices", price: 150 },
    { name: "Fresh Ice Cream", price: 200 },
    { name: "Fresh Chocolates", price: 250 },
    { name: "Fresh Candies", price: 90 },
    { name: "Fresh Detergent", price: 280 },
    { name: "Fresh Dish Soap", price: 170 },
    { name: "Fresh Hand Wash", price: 160 },
    { name: "Fresh Shampoo", price: 450 },
    { name: "Fresh Soap", price: 90 },
    { name: "Fresh Toothpaste", price: 120 },
    { name: "Fresh Toothbrush", price: 80 },
    { name: "Fresh Tissues", price: 100 },
    { name: "Fresh Toilet Paper", price: 150 },
    { name: "Fresh Floor Cleaner", price: 300 },
    { name: "Fresh Phenyl", price: 250 },
    { name: "Fresh Insect Spray", price: 400 },
    { name: "Fresh Matchsticks", price: 30 },
    { name: "Fresh Lighter", price: 60 },
    { name: "Fresh Foil Paper", price: 70 },
    { name: "Fresh Cling Film", price: 100 },
    { name: "Fresh Trash Bags", price: 130 },
    { name: "Fresh Laundry Basket", price: 450 },
    { name: "Fresh Mop", price: 300 },
    { name: "Fresh Broom", price: 150 },
    { name: "Fresh Duster", price: 100 },
    { name: "Fresh Plastic Bags", price: 50 },
    { name: "Fresh Paper Bags", price: 70 },
    { name: "Fresh Shopping Bags", price: 80 },
    { name: "Fresh Hand Sanitizer", price: 250 },
    { name: "Fresh Face Mask", price: 100 },
    { name: "Fresh Gloves", price: 120 },
    { name: "Fresh First Aid Kit", price: 600 },
    { name: "Fresh Thermometer", price: 300 },
    { name: "Fresh Pain Reliever", price: 200 },
    { name: "Fresh Bandages", price: 90 },
    { name: "Fresh Cotton", price: 80 },
    { name: "Fresh Multivitamins", price: 350 },
    { name: "Fresh Baby Diapers", price: 1200 },
    { name: "Fresh Baby Wipes", price: 400 },
    { name: "Fresh Baby Soap", price: 150 },
    { name: "Fresh Baby Oil", price: 200 },
    { name: "Fresh Baby Shampoo", price: 180 },
    { name: "Fresh Baby Food", price: 300 },
    { name: "Fresh Moong Dal", price: 240 },
    { name: "Fresh Masoor Dal", price: 220 },
    { name: "Fresh Chana Dal", price: 230 },
    { name: "Fresh Urad Dal", price: 250 },
    { name: "Fresh Toor Dal", price: 260 },
    { name: "Fresh Black Beans", price: 280 },
    { name: "Fresh Red Kidney Beans", price: 270 },
    { name: "Fresh White Beans", price: 260 },
    { name: "Fresh Chickpeas", price: 240 },
    { name: "Fresh Green Lentils", price: 230 },
    { name: "Fresh Black Lentils", price: 250 },
    { name: "Fresh Yellow Split Peas", price: 200 },
    { name: "Fresh Brown Chickpeas", price: 210 },
    { name: "Fresh Basmati Rice (5kg)", price: 1200 },
    { name: "Fresh Sella Rice", price: 1050 },
    { name: "Fresh Short Grain Rice", price: 900 },
    { name: "Fresh Jasmine Rice", price: 950 },
    { name: "Fresh Parboiled Rice", price: 850 },
    { name: "Fresh Rice Flour", price: 180 },
    { name: "Fresh Gram Flour (Besan)", price: 200 },
    { name: "Fresh Maida (White Flour)", price: 140 },
    { name: "Fresh Corn Flour", price: 150 },
    { name: "Fresh Semolina (Sooji)", price: 130 },
    { name: "Fresh Baking Powder", price: 100 },
    { name: "Fresh Baking Soda", price: 90 },
    { name: "Fresh Yeast", price: 110 },
    { name: "Fresh Vanilla Essence", price: 160 },
    { name: "Fresh Cocoa Powder", price: 300 },
    { name: "Fresh Dark Chocolate Chips", price: 350 },
    { name: "Fresh Milk Powder", price: 400 },
    { name: "Fresh Custard Powder", price: 150 },
    { name: "Fresh Jelly Crystals", price: 100 },
    { name: "Fresh Corn Starch", price: 120 },
    { name: "Fresh Food Coloring", price: 130 },
    { name: "Fresh Icing Sugar", price: 140 },
    { name: "Fresh Brown Sugar", price: 160 },
    { name: "Fresh Powdered Sugar", price: 150 },
    { name: "Fresh Caster Sugar", price: 160 },
    { name: "Fresh Whole Wheat Flour", price: 140 },
    { name: "Fresh Oat Flour", price: 170 },
    { name: "Fresh Barley Flour", price: 180 },
    { name: "Fresh Quinoa", price: 350 },
    { name: "Fresh Millet", price: 250 },
    { name: "Fresh Buckwheat", price: 280 },
    { name: "Fresh Couscous", price: 260 },
    { name: "Fresh Bulgar Wheat", price: 240 },
    { name: "Fresh Muesli", price: 300 },
    { name: "Fresh Granola", price: 320 },
    { name: "Fresh Wheat Bran", price: 130 },
    { name: "Fresh Flax Seeds", price: 280 },
    { name: "Fresh Chia Seeds", price: 300 },
    { name: "Fresh Sunflower Seeds", price: 270 },
    { name: "Fresh Pumpkin Seeds", price: 260 },
    { name: "Fresh Sesame Seeds", price: 220 },
    { name: "Fresh Poppy Seeds", price: 210 },
    { name: "Fresh Fennel Seeds", price: 190 },
    { name: "Fresh Ajwain", price: 180 },
    { name: "Fresh Cardamom", price: 600 },
    { name: "Fresh Cinnamon Sticks", price: 380 },
    { name: "Fresh Cloves", price: 400 },
    { name: "Fresh Black Pepper", price: 350 },
    { name: "Fresh White Pepper", price: 360 },
    { name: "Fresh Nutmeg", price: 300 },
    { name: "Fresh Star Anise", price: 290 },
    { name: "Fresh Bay Leaves", price: 150 },
    { name: "Fresh Dry Fenugreek (Kasuri Methi)", price: 200 },
    { name: "Fresh Mixed Spice", price: 250 },
    { name: "Fresh Garam Masala", price: 280 },
    { name: "Fresh Chaat Masala", price: 200 },
    { name: "Fresh Curry Powder", price: 220 },
    { name: "Fresh Tandoori Masala", price: 240 },
    { name: "Fresh Biryani Masala", price: 260 },
    { name: "Fresh Nihari Masala", price: 230 },
    { name: "Fresh Haleem Masala", price: 210 },
    { name: "Fresh Karahi Masala", price: 250 },
    { name: "Fresh BBQ Masala", price: 230 },
    { name: "Fresh Pasta Sauce", price: 200 },
    { name: "Fresh Pizza Sauce", price: 190 },
    { name: "Fresh Tomato Paste", price: 180 },
    { name: "Fresh Canned Tomatoes", price: 170 },
    { name: "Fresh Coconut Milk", price: 250 },
    { name: "Fresh Evaporated Milk", price: 220 },
    { name: "Fresh Condensed Milk", price: 240 },
    { name: "Fresh Pickled Olives", price: 260 },
    { name: "Fresh Jalapeños", price: 270 },
    { name: "Fresh Green Chutney", price: 180 },
    { name: "Fresh Tamarind Paste", price: 150 },
    { name: "Fresh Mint Chutney", price: 160 },
    { name: "Fresh Garlic Paste", price: 140 },
    { name: "Fresh Ginger Paste", price: 140 },
    { name: "Fresh Onion Paste", price: 130 },
    { name: "Fresh Mango Chutney", price: 200 },
    { name: "Fresh Apple Cider Vinegar", price: 300 },
    { name: "Fresh Soybean Oil", price: 650 },
    { name: "Fresh Olive Oil", price: 750 },
    { name: "Fresh Sesame Oil", price: 700 },
    { name: "Fresh Canola Oil", price: 680 },
    { name: "Fresh Mustard Oil", price: 640 },
    { name: "Fresh Grape Seed Oil", price: 770 },
];


const Page = () => {

    const [count, setCount] = useState("");
    const [selectedItems, setSelectedItems] = useState([]);
    const [orderId, setOrderId] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");


    const formatDate = (inputDate) => {
        if (!inputDate) return "N/A";
        const [year, month, day] = inputDate.split("-");
        return `${day}/${month}/${year}`;
    };

    const handleAddItem = () => {
        const number = parseInt(count);
        if (!number || number <= 0 || number > items.length) {
            setSelectedItems([]);
            return;
        }

        const shuffled = [...items].sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, number).map(item => ({
            ...item,
            quantity: 1
        }));

        setSelectedItems(selected);
        setOrderId(generateOrderId());
    };

    const calculateTotal = () =>
        selectedItems.reduce((total, item) => total + item.quantity * item.price, 0);

    const total = calculateTotal();
    const totalItemsCount = selectedItems.reduce((acc, item) => acc + item.quantity, 0);

    const generateOrderId = () => Date.now().toString();


    return (
        <div className="min-h-screen bg-white p-6 text-black font-mono">
            <h1 className="text-3xl font-bold text-center mb-8 no-print">
                AL-JANNAT Receipt Generator
            </h1>



            {/* Item Input Section */}
            <div className="flex flex-wrap gap-4 mb-6 justify-center no-print">

                <input
                    type="number"
                    value={count}
                    onChange={(e) => setCount(e.target.value)}
                    placeholder="Enter number of items"
                    className="border border-gray-300 p-2 rounded"
                />

                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="border border-gray-300 p-2 rounded"
                />

                <input
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="border border-gray-300 p-2 rounded"
                />


                <button
                    onClick={handleAddItem}
                    className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
                >
                    Add Item
                </button>
            </div>

            {/* Receipt Section */}
            <div
                id="receipt"
                className="receipt-container max-w-sm mx-auto bg-white border border-black p-4 text-sm print:w-[300px]"
            >
                <div className="w-[90%] flex justify-center">
                    <Image
                        src='/trolly.png'
                        alt="Trolley Logo"
                        width={50} // adjust for your printer
                        height={50}
                        priority />
                </div>
                <div className="text-center mb-4 leading-tight">
                    <h2 className="text-[30px] font-sans font-bold tracking-wide text-center">Al Jannat Green Mart</h2>
                    <p className="text-[14px] font-mono mt-5">DHA Phase 8 at 13/L ,air avenue  Lahore, Pakistan </p>

                    <div className="text-left font-mono mt-4 border-b border-dotted">
                        <p>Date: {formatDate(date)}</p>
                        <p>Time: {time || "N/A"}</p>

                    </div>
                </div>

                <div>
                    <p className="flex font-mono gap-2 pb-2 border-b border-dotted">
                        <span>RECEIPT:</span>
                        <span>{orderId}</span>
                    </p>
                </div>

                {selectedItems.length > 0 && (
                    <div className="mt-6">
                        {selectedItems.map((item, index) => (
                            <div key={index} className="flex justify-between text-[14px] font-bold font-mono py-2">
                                <span>{item.name}</span>
                                <span className="text-right">Rs {item.price}</span>
                            </div>
                        ))}
                    </div>
                )}


                <div className="pt-2 mt-4 text-sm font-mono border-t border-dotted pb-5">
                    {/* Total */}
                    <div className="flex justify-end font-bold tracking-widest">
                        <span className="">Total:</span>
                        <span>RS {total.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-end font-bold tracking-widest">
                        <span className="">Cash:</span>
                        <span>RS {total.toFixed(2)}</span>
                    </div>
                </div>

                <div className=" flex gap-5 font-mono tracking-widest border-b border-dotted pb-2">
                    <span> Items Sold:</span>
                    <span>{totalItemsCount}</span>
                </div>

                <div className=" flex justify-between font-mono tracking-widest border-b border-dotted pt-2 pb-2">
                    <div>
                        <span> Payment Method:</span>
                        <span>Cash</span>
                    </div>
                    <div className="mt-5 font-bold">
                        <span>Amount:</span>
                        <span>RS {total.toFixed(2)}</span>
                    </div>
                </div>

                <div className="w-full mx-auto px-4 flex flex-col items-center mt-4 text-center text-xs border-b border-dotted">
                    <p className="text-[12px] text-center mt-6 leading-tight">
                        Thank you for shopping at <span className="font-semibold">Al Jannat Green Mart</span>!<br />
                        Your trusted destination for fresh fruits, vegetables, and daily groceries.<br />
                        We truly value your business and hope to see you again soon.<br /><br />
                    </p>
                </div>
                <div>
                    <p className="text-[12px] text-center mt-2">
                        Please keep this receipt for your records.</p>
                </div>
            </div>

            {/* Print Button */}
            <div className="mt-6 flex justify-center no-print">
                <button
                    onClick={() => {
                        setOrderId(generateOrderId());
                        setTimeout(() => window.print(), 100);
                    }}
                    className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                >
                    Print Receipt
                </button>
            </div>
        </div>
    );
}

export default Page;