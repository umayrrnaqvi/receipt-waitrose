'use client';
import { useState } from "react";
import Image from 'next/image';

const items = [
    { name: "Fresh Orange", price: 200 },
    { name: "Fresh Mango", price: 300 },
    { name: "Fresh Pineapple", price: 180 },
    { name: "Fresh Grapes", price: 280 },
    { name: "Fresh Watermelon", price: 50 },
    { name: "Fresh Strawberry", price: 500 },
    { name: "Fresh Blueberry", price: 300 },
    { name: "Fresh Raspberry", price: 450 },
    { name: "Fresh Blackberry", price: 400 },
    { name: "Fresh Kiwi", price: 80 },
    { name: "Fresh Guava", price: 100 },
    { name: "Fresh Peach", price: 180 },


    // Vegetables start here
    { name: "Fresh Potato", price: 80 },
    { name: "Fresh Tomato", price: 100 },
    { name: "Fresh Onion", price: 90 },
    { name: "Fresh Carrot", price: 120 },
    { name: "Fresh Cabbage", price: 100 },
    { name: "Fresh Cauliflower", price: 120 },
    { name: "Fresh Spinach", price: 80 },
    { name: "Fresh Lettuce", price: 200 },
    { name: "Fresh Kale", price: 300 },
    { name: "Fresh Broccoli", price: 250 },
    { name: "Fresh Bell Pepper", price: 300 },
    { name: "Fresh Green Chili", price: 180 },
    { name: "Fresh Zucchini", price: 160 },
    { name: "Fresh Eggplant", price: 100 },
    { name: "Fresh Okra", price: 120 },
    { name: "Fresh Bitter Gourd", price: 140 },
    { name: "Fresh Bottle Gourd", price: 100 },
    { name: "Fresh Ridge Gourd", price: 120 },
    { name: "Fresh Tinda", price: 90 },
    { name: "Fresh Turnip", price: 100 },
    { name: "Fresh Radish", price: 100 },
    { name: "Fresh Beetroot", price: 150 },
    { name: "Fresh Pumpkin", price: 80 },
    { name: "Fresh Ash Gourd", price: 120 },
    { name: "Fresh Snake Gourd", price: 130 },
    { name: "Fresh Ivy Gourd", price: 150 },
    { name: "Fresh French Beans", price: 200 },
    { name: "Fresh Green Beans", price: 180 },
    { name: "Fresh Cluster Beans", price: 170 },
    { name: "Fresh Drumstick", price: 200 },
    { name: "Fresh Corn", price: 100 },
    { name: "Fresh Sweet Corn", price: 150 },
    { name: "Fresh Green Peas", price: 220 },
    { name: "Fresh Spring Onion", price: 100 },
    { name: "Fresh Garlic", price: 450 },
    { name: "Fresh Ginger", price: 400 },
    { name: "Fresh Curry Leaves", price: 150 },
    { name: "Fresh Mint Leaves", price: 100 },
    { name: "Fresh Coriander", price: 80 },
    { name: "Fresh Basil", price: 200 },
    { name: "Fresh Lemongrass", price: 300 },
    { name: "Fresh Celery", price: 250 },
    { name: "Fresh Leeks", price: 180 },
    { name: "Fresh Arugula", price: 350 },
    { name: "Fresh Watercress", price: 300 },
    { name: "Fresh Artichoke", price: 500 },
    { name: "Fresh Asparagus", price: 400 },
    { name: "Fresh Brussel Sprouts", price: 500 },
    { name: "Fresh Chayote", price: 250 },
    { name: "Fresh Edamame", price: 400 },
    { name: "Fresh Parsnip", price: 300 },
    { name: "Fresh Kohlrabi", price: 250 },
    { name: "Fresh Mustard Greens", price: 180 },
    { name: "Fresh Amaranth", price: 200 },
    { name: "Fresh Swiss Chard", price: 220 },
    { name: "Fresh Yam", price: 180 },
    { name: "Fresh Sweet Potato", price: 150 },
    { name: "Fresh Tapioca", price: 140 },
    { name: "Fresh Lotus Root", price: 300 },
    { name: "Fresh Bamboo Shoots", price: 400 },
    { name: "Fresh Fennel", price: 250 },
    { name: "Fresh Sorrel", price: 180 },
    { name: "Fresh Purslane", price: 150 },
    { name: "Fresh Nopal", price: 300 },
    { name: "Fresh Seaweed", price: 300 },
    { name: "Fresh Radicchio", price: 350 },
    { name: "Fresh Endive", price: 320 },
    { name: "Fresh Romanesco", price: 500 },
    { name: "Fresh Pak Choi", price: 300 },
    { name: "Fresh Chinese Cabbage", price: 250 },
    { name: "Fresh Yardlong Bean", price: 200 },
    { name: "Fresh Snow Peas", price: 300 },
    { name: "Fresh Taro", price: 220 },
    { name: "Fresh Daikon", price: 180 },
    { name: "Fresh Cassava", price: 200 },
    { name: "Fresh Sunchoke", price: 400 },
    { name: "Fresh Jicama", price: 300 },
    { name: "Fresh Malabar Spinach", price: 200 },
    { name: "Fresh Mizuna", price: 350 },
    { name: "Fresh Tatsoi", price: 300 },
    { name: "Fresh Wasabi Root", price: 400 },
    { name: "Fresh Horseradish", price: 350 },
    { name: "Fresh Chicory", price: 250 },
    { name: "Fresh Dandelion Greens", price: 220 },
    { name: "Fresh Celery Root", price: 280 },
    { name: "Fresh Pepper Leaves", price: 180 },
    { name: "Fresh Banana Flower", price: 200 },
    { name: "Fresh Lotus Stem", price: 280 },
    { name: "Fresh Pea Shoots", price: 300 },
    { name: "Fresh Fenugreek Leaves", price: 150 },
    { name: "Fresh Colocasia Leaves", price: 200 },
    { name: "Fresh Cress", price: 250 },
    { name: "Fresh Snow Fungus", price: 400 },
    { name: "Fresh Mushrooms", price: 350 },
    { name: "Fresh Button Mushroom", price: 320 },
    { name: "Fresh Shiitake Mushroom", price: 400 },
    { name: "Fresh Oyster Mushroom", price: 500 }
];


const Page = () => {

    const [count, setCount] = useState(""); // User input for count
    const [selectedItems, setSelectedItems] = useState([]); // List of selected items
    const [orderId, setOrderId] = useState(""); // Generate order ID
    const [date, setDate] = useState(""); // Date input
    const [time, setTime] = useState(""); // Time input
    const [selectedCategory, setSelectedCategory] = useState("Fruits"); // Default category: Fruits

    // Function to calculate total
    const calculateTotal = () =>
        selectedItems.reduce((total, item) => total + item.quantity * item.price, 0);

    // Format the date
    const formatDate = (inputDate) => {
        if (!inputDate) return "N/A";
        const [year, month, day] = inputDate.split("-");
        return `${day}/${month}/${year}`;
    };

    const handleAddItem = () => {
        const number = parseInt(count);
        if (!number || number <= 0) {
            setSelectedItems([]); // Clear selected items if invalid count
            return;
        }

        // Shuffle and pick the desired number from the items list
        const shuffled = [...items].sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, number).map(item => ({
            ...item,
            quantity: 1 // Set quantity to 1 for each item
        }));

        // Update the selected items list and generate an order ID
        setSelectedItems(selected);
        setOrderId(generateOrderId());
    };

    // Generate order ID based on current time
    const generateOrderId = () => Date.now().toString();

    const total = calculateTotal();
    const totalItemsCount = selectedItems.reduce((acc, item) => acc + item.quantity, 0);
    // Round total to the next 100
    const roundToNextHundred = (amount) => {
        return Math.ceil(amount / 100) * 100;
    };


    return (
        <div className="min-h-screen bg-white text-black font-mono">
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
            <div id="receipt" className="receipt-container max-w-sm mx-auto bg-white border border-black p-4 text-sm print:w-[250px]">
                <div className="w-[90%] flex justify-center">
                    <Image
                        src='/trolly.png'
                        alt="Trolley Logo"
                        width={50} // adjust for your printer
                        height={50}
                        priority />
                </div>

                <div className="text-center mb-4 leading-tight">
                    <h2 className="text-[50px] font-sans font-bold tracking-wide text-center">Al Jannat Green Mart</h2>
                    <p className="text-[18px] font-bold font-mono mt-5">DHA Phase 8 at 13/L ,air avenue  Lahore, Pakistan </p>

                    <div className="text-left text-[18px] font-bold font-mono mt-1 border-b-2 border-dashed">
                        <p>Date: {formatDate(date)}</p>
                        <p>Time: {time || "N/A"}</p>
                    </div>
                </div>

                <div>
                    <p className="flex font-mono font-bold text-[18px] gap-2 pb-2 border-b-2 border-dashed">
                        <span>RECEIPT:</span>
                        <span>{orderId}</span>
                    </p>
                </div>

                {selectedItems.length > 0 && (
                    <div className="mt-2">
                        {selectedItems.map((item, index) => (
                            <div key={index} className="flex justify-between text-[18px] font-bold font-mono">
                                <div>
                                    <span>{item.name}</span>
                                </div>
                                <div>
                                    Rs {item.price}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                <div className="pt-2 mt-4 text-sm font-mono border-t border-dashed pb-5">
                    {/* Total */}
                    <div className="flex text-[17px] justify-end font-bold tracking-widest">
                        <span>Total:</span>
                        <span>RS {total.toFixed(2)}</span>
                    </div>
                    <div className="flex text-[17px] justify-end font-bold tracking-widest">
                        <span>Cash:</span>
                        <span>RS {total.toFixed(2)}</span>
                    </div>
                </div>

                <div className="flex gap-5 font-bold text-[17px] font-mono tracking-widest border-b-2 border-dashed pb-2">
                    <span>Items Sold:</span>
                    <span>{totalItemsCount}</span>
                </div>

                <div className="flex justify-between text-md font-bold font-mono tracking-widest border-b-2 border-dashed pt-1 pb-2">
                    <div>
                        <span>Payment Method: Cash</span>
                    </div>
                    <div className="mt-5">
                        <span className="text-[16px]">Amount:</span>
                        <span>RS {total.toFixed(2)}</span>
                    </div>
                </div>

                <div className="w-full mx-auto px-4 flex flex-col items-center text-center text-lg border-b-2 border-dashed">
                    <p className="text-[17px] text-center font-bold mt-6 leading-tight">
                        Thank you for shopping at <span className="font-semibold">Al Jannat Green Mart</span>!<br />
                        Your trusted destination for fresh fruits, vegetables, and daily groceries.<br />
                        We truly value your business and hope to see you again soon.<br /><br />
                    </p>
                </div>
                <div>
                    <p className="text-[15px] font-bold text-center mt-1">
                        Please keep this receipt for your records.
                    </p>
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
};

export default Page;