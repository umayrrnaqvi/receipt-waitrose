'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import freshlogo from "../../public/fresh.png";

export default function FreshBasketReceipt() {
    const vegetables = [
        { name: "Fresh Cabbage" }, { name: "Fresh Lotus Root" }, { name: "Fresh Avocado" }, { name: "Fresh Mint" },
        { name: "Fresh Coriander" }, { name: "Fresh Beetroot" }, { name: "Fresh Leek" }, { name: "Fresh Dill" },
        { name: "Fresh Spring Onion" }, { name: "Fresh Bottle Gourd" }, { name: "Fresh Cucumber" },
        { name: "Fresh Green Chili" }, { name: "Fresh Raw Banana" }, { name: "Fresh Red Cabbage" },
        { name: "Fresh Lettuce" }, { name: "Fresh Pumpkin" }, { name: "Fresh Sage" }, { name: "Fresh Asparagus" },
        { name: "Fresh Basil" }, { name: "Fresh Drumstick" }, { name: "Fresh Fenugreek" }, { name: "Fresh Broccoli" },
        { name: "Fresh Ginger" }, { name: "Fresh Lady Finger" }, { name: "Fresh Tomato" }, { name: "Fresh Brinjal" },
        { name: "Fresh Radish" }, { name: "Fresh Ridge Gourd" }, { name: "Fresh Capsicum" },
        { name: "Fresh Spinach" }, { name: "Fresh Onion" }, { name: "Fresh Zucchini" },
        { name: "Fresh Turnip" },{ name: "Fresh Celery" },{ name: "Fresh Arugula" },{ name: "Fresh Endive" },
        { name: "Fresh Parsnip" },{ name: "Fresh Swiss Chard" }, { name: "Fresh Kale" },{ name: "Fresh Mustard Greens" },
        { name: "Fresh Taro Root" },{ name: "Fresh Yam" }, { name: "Fresh Sweet Potato" },{ name: "Fresh Artichoke" },
        { name: "Fresh Okra" },{ name: "Fresh Green Beans" },{ name: "Fresh Snow Peas" },{ name: "Fresh Peas" },
        { name: "Fresh White Radish" }, { name: "Fresh Carrot" },{ name: "Fresh Baby Corn" },
    ];

    const [count, setCount] = useState("");
    const [items, setItems] = useState([]);
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [receiptId, setReceiptId] = useState("");
    const [cash, setCash] = useState("");

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.onbeforeprint = () => {
                const last = parseInt(localStorage.getItem("freshBasketLastId") || "215720195");
                const next = last + 5;
                localStorage.setItem("freshBasketLastId", next.toString());
                setReceiptId(next.toString());
            };
        }
    }, []);

    const formatDate = (inputDate) => {
        if (!inputDate) return "--/--/----";
        const [year, month, day] = inputDate.split("-");
        return `${day}/${month}/${year}`;
    };

    const formatTime = (inputTime) => {
        if (!inputTime) return "--:--:-- --";
        const [hour, minute] = inputTime.split(":");
        const dateObj = new Date();
        dateObj.setHours(Number(hour));
        dateObj.setMinutes(Number(minute));
        dateObj.setSeconds(0);
        return dateObj.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true,
        });
    };

    const handleAddItems = () => {
        const number = parseInt(count);
        if (!number || number <= 0 || number > vegetables.length) {
            alert("Please enter a valid number (1 - " + vegetables.length + ")");
            return;
        }

        const shuffled = [...vegetables].sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, number).map(item => ({
            ...item,
            price: Math.floor(50 + Math.random() * 350),
        }));

        const newTotal = selected.reduce((acc, item) => acc + item.price, 0);

        // Round up to nearest 1000 (e.g., 1350 → 2000)
        const roundedCash = Math.ceil(newTotal / 100) * 100;

        setItems(selected);
        setCash(roundedCash); // auto-fill cash
    };


    const totalAmount = items.reduce((acc, item) => acc + item.price, 0);
    const change = cash && totalAmount ? parseInt(cash) - totalAmount : 0;

    return (
        <div className="min-h-screen bg-white px-6 py-4 text-black font-mono">
            <h1 className="text-xl font-bold text-center mb-4 no-print">Fresh Basket Generator</h1>

            {/* Inputs */}
            <div className="w-[80mm] mx-auto flex flex-wrap gap-2 justify-center mb-4 no-print text-sm">
                <input type="number" placeholder="Number of Items" value={count} onChange={(e) => setCount(e.target.value)} className="border p-2 rounded w-[100px]" />
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="border p-2 rounded" />
                <input type="time" value={time} onChange={(e) => setTime(e.target.value)} className="border p-2 rounded" />
                <button onClick={handleAddItems} className="bg-green-600 text-white px-4 rounded">Add Items</button>
            </div>

            {/* Receipt */}
            <div className="p-6 max-w-sm mx-auto text-sm bg-white">
                <div className="w-[80mm] bg-white px-2 text-lg shadow text-black print:shadow-none">
                    <Image src={freshlogo} width={200} alt="Fresh Basket Logo" className="mx-auto mt-2" priority />
                    <h2 className='text-center font-bold text-lg'>FRUITS AND MORE</h2>
                    <p className="w-73 text-center text-[17px] font-bold">Shop #45, Block A, N. Nazimabad<br />Karachi, Pakistan</p>

                    <div className=" font-bold text-[17px] border-b-2 border-dashed border-black py-2">
                        <p>Date: {formatDate(date)}</p>
                        <p>Time: {formatTime(time)}</p>
                        <p>Receipt #: {receiptId || "---------"}</p>
                    </div>

                    <div className="mt-1 border-b-2 border-dashed border-black">
                        {items.map((item, i) => (
                            <div key={i} className="flex justify-between font-bold text-[17px]">
                                <span>{item.name}</span>
                                <span className="min-w-[60px]">Rs {item.price}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-1 text-end font-bold border-b-2 border-dashed border-black text-[17px]">
                        <p>Total: Rs {totalAmount}</p>
                        <p>Cash: Rs {cash || 0}</p>
                        <p>Change: Rs {change < 0 ? 0 : change}</p>
                        <div><p className='text-start'>Items Sold: {items.length}</p></div>
                    </div>

                    <div className='font-bold text-[17px] border-b-2 border-dashed border-black'>
                        <p>Payment Method: Cash</p>
                        <div className='text-end'><p>Amount: {totalAmount}</p></div>
                    </div>

                    <div className="text-center font-bold text-[17px] border-b-2 border-dashed border-black pt-1">
                        <p>Thank you for shopping at Fresh Basket Fresh produce, grains and essentials in one place.</p>
                    </div>

                    <div className='font-bold text-[14px]'><p className="mt-1">Please keep this copy for your record</p></div>
                </div>

                {/* Print Button */}
                <div className="text-center mt-4 no-print">
                    <button
                        onClick={() => {
                            if (parseInt(cash) < totalAmount) {
                                alert("Cash must be greater than or equal to total amount");
                                return;
                            }
                            window.print();
                        }}
                        className="bg-black text-white px-4 py-1 rounded text-sm"
                    >
                        Print Receipt
                    </button>
                </div>
            </div>
        </div>
    );
}
