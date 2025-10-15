"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import healthyLogo from "../../public/healthy.png";

// 🍎 Healthy Delights Store — Fresh Produce List
const healthyDelightsItems = [
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

const TAX_RATE = 0.05;

export default function HealthyDelightsReceipt() {
    const [receiptNo, setReceiptNo] = useState(20061534);
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [terminal, setTerminal] = useState("01");
    const [cashier, setCashier] = useState("Cashier 1");
    const [items, setItems] = useState([]);
    const [randomCount, setRandomCount] = useState("");
    const [receiptCount, setReceiptCount] = useState(1);

    // ✅ Load last receipt number
    useEffect(() => {
        const saved = localStorage.getItem("healthy_receipt_no");
        if (saved) setReceiptNo(Number(saved));
    }, []);

    // ✅ Save to local storage when number changes
    useEffect(() => {
        localStorage.setItem("healthy_receipt_no", receiptNo);
    }, [receiptNo]);

    const addRandomItems = () => {
        const count = parseInt(randomCount);
        if (!count || count <= 0) return alert("Enter a valid number of items");

        const shuffled = [...healthyDelightsItems].sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, count).map((item, idx) => ({
            id: Date.now() + idx,
            name: item.name,
            qty: Math.floor(Math.random() * 3) + 1, // 🔥 random qty 1–4
            price: item.price,
        }));
        setItems(selected);
    };

    const subtotal = items.reduce((acc, it) => acc + it.qty * it.price, 0);
    const tax = +(subtotal * TAX_RATE).toFixed(2);
    const total = +(subtotal + tax).toFixed(2);

    const handlePrint = async () => {
        const num = parseInt(receiptCount);
        if (!num || num < 1) return alert("Enter a valid number of receipts");

        // Parse the base time from input (HH:MM)
        const [baseHour, baseMinute] = time ? time.split(":").map(Number) : [0, 0];

        for (let i = 0; i < num; i++) {
            const nextReceipt = receiptNo + i;

            // Start from selected date + time
            const now = new Date();
            now.setHours(baseHour);
            now.setMinutes(baseMinute + i * 2); // add 2 minutes for each print
            now.setSeconds(now.getSeconds()); // keep current seconds

            const hours = now.getHours().toString().padStart(2, "0");
            const minutes = now.getMinutes().toString().padStart(2, "0");
            const seconds = now.getSeconds().toString().padStart(2, "0");
            const fakeTime = `${hours}:${minutes}:${seconds}`;

            setReceiptNo(nextReceipt);
            setTime(fakeTime);

            await new Promise((resolve) => setTimeout(resolve, 300));
            window.print();
            await new Promise((resolve) => setTimeout(resolve, 700));
        }

        const finalReceipt = receiptNo + num;
        localStorage.setItem("healthy_receipt_no", finalReceipt);
        setReceiptNo(finalReceipt);
    };




    const formatDate = (d) => {
        if (!d) return "";
        const [year, month, day] = d.split("-");
        return `${day}/${month}/${year}`;
    };

    const formatTime = (t) => {
        if (!t) return "";
        const [hours, minutes] = t.split(":");
        let h = parseInt(hours);
        const ampm = h >= 12 ? "PM" : "AM";
        h = h % 12 || 12;
        const seconds = new Date().getSeconds().toString().padStart(2, "0");
        return `${h}:${minutes}:${seconds} ${ampm}`;
    };

    const fmt = (v) => `Rs ${v.toFixed(2)}`;

    return (
        <main className="flex flex-col items-center p-4 min-h-screen bg-white">
            {/* ✅ Controls (hidden when printing) */}
            <section className="mb-4 w-[80mm] print:hidden">
                <div className="mb-6 flex gap-2 flex-wrap">
                    <div className="grid grid-cols-2 gap-2">
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="border px-2 py-1 rounded w-36"
                        />
                        <input
                            type="time"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            className="border px-2 py-1 rounded w-28"
                        />
                    </div>

                    <div className="flex gap-2 mt-2">
                        <input
                            type="number"
                            className="w-28 border px-2 py-1 rounded text-sm"
                            placeholder="No. of items"
                            value={randomCount}
                            onChange={(e) => setRandomCount(e.target.value)}
                        />
                        <button
                            onClick={addRandomItems}
                            className="bg-yellow-500 text-white px-3 py-1 rounded text-sm"
                        >
                            🎲 Random Items
                        </button>
                    </div>

                    <div className="flex gap-2 mt-2">
                        <input
                            type="number"
                            className="w-28 border px-2 py-1 rounded text-sm"
                            placeholder="No. of receipts"
                            value={receiptCount}
                            onChange={(e) => setReceiptCount(e.target.value)}
                        />
                        <button
                            onClick={handlePrint}
                            className="bg-blue-600 text-white px-4 py-1 rounded text-sm"
                        >
                            🖨 Print
                        </button>
                    </div>
                </div>
            </section>

            {/* ✅ Receipt Layout */}
            <article className="bg-white w-[80mm] p-4 font-mono text-lg leading-relaxed">
                <header className="flex flex-col items-center text-center mb-1">
                    <Image src={healthyLogo} alt="Healthy Delights" width={120} height={120} />
                    <div className="text-[12px] whitespace-pre-line mt-1">
                        Shop #12, Civic Center, Satellite Town, Bahawalpur{"\n"}Tel: (062) 288-4521
                    </div>
                    <div className="text-sm ">healthydelightscafe.shop</div>
                </header>

                <section className="text-sm border-t border-b border-dotted py-2 ">
                    <div className="flex justify-between">
                        <span className="font-semibold">Receipt</span>
                        <span className="font-semibold">{receiptNo}</span>
                    </div>
                    <div className="flex justify-between mt-1">
                        <span>Date</span>
                        <span>{formatDate(date)}</span>
                    </div>
                    <div className="flex justify-between mt-1">
                        <span>Time</span>
                        <span>{formatTime(time)}</span>
                    </div>
                    <div className="flex justify-between mt-1">
                        <span>Terminal</span>
                        <span>{terminal}</span>
                    </div>
                    <div className="flex justify-between mt-1">
                        <span>Cashier</span>
                        <span>{cashier}</span>
                    </div>
                </section>

                <section className="text-base mb-3">
                    <div className="flex font-semibold border-b pb-1 mt-1">
                        <div className="w-10 text-center">QTY</div>
                        <div className="flex-1">ITEM</div>
                        <div className="w-20 text-right">PRICE</div>
                    </div>
                    <div className="mt-2 space-y-2">
                        {items.length === 0 ? (
                            <div className="text-center text-sm italic">No items added</div>
                        ) : (
                            items.map((it) => (
                                <div key={it.id} className="flex items-start">
                                    <div className="w-10 text-[14px] text-center">{it.qty}</div>
                                    <div className="flex-1 text-[15px]">{it.name}</div>
                                    <div className="w-20 text-[15px] text-right">{fmt(it.qty * it.price)}</div>
                                </div>
                            ))
                        )}
                    </div>
                </section>

                <section className="text-[15px] mb-2">
                    <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>{fmt(subtotal)}</span>
                    </div>
                    <div className="flex justify-between mt-1">
                        <span>Tax (5%)</span>
                        <span>{fmt(tax)}</span>
                    </div>
                    <div className="flex justify-between border-t border-b border-dotted py-1 mt-1 font-bold text-lg">
                        <span>TOTAL</span>
                        <span>{fmt(total)}</span>
                    </div>
                </section>

                <section className="text-sm mt-1 text-center">
                    <div className="italic">Thank you for visiting Healthy Delights!</div>
                    <div>Visit again — Eat fresh, stay healthy.</div>
                </section>
            </article>

            <style jsx>{`
        @media print {
          @page {
            size: 80mm auto;
            margin: 3mm;
          }
          body,
          html {
            background: white !important;
          }
          .print\\:hidden {
            display: none !important;
          }
        }
      `}</style>
        </main>
    );
}
