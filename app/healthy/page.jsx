"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import healthyLogo from "../../public/healthy.png";

const healthyDelightsItems = [
    { name: "Fresh Orange", price: 200 }, { name: "Fresh Mango", price: 300 }, { name: "Fresh Pineapple", price: 180 }, { name: "Fresh Grapes", price: 280 }, { name: "Fresh Watermelon", price: 50 }, { name: "Fresh Strawberry", price: 500 }, { name: "Fresh Blueberry", price: 300 }, { name: "Fresh Raspberry", price: 450 }, { name: "Fresh Blackberry", price: 400 }, { name: "Fresh Kiwi", price: 80 }, { name: "Fresh Guava", price: 100 }, { name: "Fresh Peach", price: 180 }, { name: "Fresh Potato", price: 80 }, { name: "Fresh Tomato", price: 100 }, { name: "Fresh Onion", price: 90 }, { name: "Fresh Carrot", price: 120 }, { name: "Fresh Cabbage", price: 100 }, { name: "Fresh Cauliflower", price: 120 }, { name: "Fresh Spinach", price: 80 }, { name: "Fresh Lettuce", price: 200 }, { name: "Fresh Kale", price: 300 }, { name: "Fresh Broccoli", price: 250 }, { name: "Fresh Bell Pepper", price: 300 }, { name: "Fresh Green Chili", price: 180 }, { name: "Fresh Zucchini", price: 160 }, { name: "Fresh Eggplant", price: 100 }, { name: "Fresh Okra", price: 120 }, { name: "Fresh Bitter Gourd", price: 140 }, { name: "Fresh Bottle Gourd", price: 100 }, { name: "Fresh Ridge Gourd", price: 120 }, { name: "Fresh Tinda", price: 90 }, { name: "Fresh Turnip", price: 100 }, { name: "Fresh Radish", price: 100 }, { name: "Fresh Beetroot", price: 150 }, { name: "Fresh Pumpkin", price: 80 }, { name: "Fresh Ash Gourd", price: 120 }, { name: "Fresh Snake Gourd", price: 130 }, { name: "Fresh Ivy Gourd", price: 150 }, { name: "Fresh French Beans", price: 200 }, { name: "Fresh Green Beans", price: 180 }, { name: "Fresh Cluster Beans", price: 170 }, { name: "Fresh Drumstick", price: 200 }, { name: "Fresh Corn", price: 100 }, { name: "Fresh Sweet Corn", price: 150 }, { name: "Fresh Green Peas", price: 220 }, { name: "Fresh Spring Onion", price: 100 }, { name: "Fresh Garlic", price: 450 }, { name: "Fresh Ginger", price: 400 }, { name: "Fresh Curry Leaves", price: 150 }, { name: "Fresh Mint Leaves", price: 100 }, { name: "Fresh Coriander", price: 80 }, { name: "Fresh Basil", price: 200 }, { name: "Fresh Lemongrass", price: 300 }, { name: "Fresh Celery", price: 250 }, { name: "Fresh Leeks", price: 180 }, { name: "Fresh Arugula", price: 350 }, { name: "Fresh Watercress", price: 300 }, { name: "Fresh Artichoke", price: 500 }, { name: "Fresh Asparagus", price: 400 }, { name: "Fresh Brussel Sprouts", price: 500 }, { name: "Fresh Chayote", price: 250 }, { name: "Fresh Edamame", price: 400 }, { name: "Fresh Parsnip", price: 300 }, { name: "Fresh Kohlrabi", price: 250 }, { name: "Fresh Mustard Greens", price: 180 }, { name: "Fresh Amaranth", price: 200 }, { name: "Fresh Swiss Chard", price: 220 }, { name: "Fresh Yam", price: 180 }, { name: "Fresh Sweet Potato", price: 150 }, { name: "Fresh Tapioca", price: 140 }, { name: "Fresh Lotus Root", price: 300 }, { name: "Fresh Bamboo Shoots", price: 400 }, { name: "Fresh Fennel", price: 250 }, { name: "Fresh Sorrel", price: 180 }, { name: "Fresh Purslane", price: 150 }, { name: "Fresh Nopal", price: 300 }, { name: "Fresh Seaweed", price: 300 }, { name: "Fresh Radicchio", price: 350 }, { name: "Fresh Endive", price: 320 }, { name: "Fresh Romanesco", price: 500 }, { name: "Fresh Pak Choi", price: 300 }, { name: "Fresh Chinese Cabbage", price: 250 }, { name: "Fresh Yardlong Bean", price: 200 }, { name: "Fresh Snow Peas", price: 300 }, { name: "Fresh Taro", price: 220 }, { name: "Fresh Daikon", price: 180 }, { name: "Fresh Cassava", price: 200 }, { name: "Fresh Sunchoke", price: 400 }, { name: "Fresh Jicama", price: 300 }, { name: "Fresh Malabar Spinach", price: 200 }, { name: "Fresh Mizuna", price: 350 }, { name: "Fresh Tatsoi", price: 300 }, { name: "Fresh Wasabi Root", price: 400 }, { name: "Fresh Horseradish", price: 350 }, { name: "Fresh Chicory", price: 250 }, { name: "Fresh Dandelion Greens", price: 220 }, { name: "Fresh Celery Root", price: 280 }, { name: "Fresh Pepper Leaves", price: 180 }, { name: "Fresh Banana Flower", price: 200 }, { name: "Fresh Lotus Stem", price: 280 }, { name: "Fresh Pea Shoots", price: 300 }, { name: "Fresh Fenugreek Leaves", price: 150 }, { name: "Fresh Colocasia Leaves", price: 200 }, { name: "Fresh Cress", price: 250 }, { name: "Fresh Snow Fungus", price: 400 }, { name: "Fresh Mushrooms", price: 350 }, { name: "Fresh Button Mushroom", price: 320 }, { name: "Fresh Shiitake Mushroom", price: 400 }, { name: "Fresh Oyster Mushroom", price: 500 }
];

const TAX_RATE = 0.05;

export default function HealthyDelightsReceipt() {
    const [receiptNo, setReceiptNo] = useState(20061534);
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [terminal] = useState("01");
    const [items, setItems] = useState([]);
    const [randomCount, setRandomCount] = useState("");
    const [receiptCount, setReceiptCount] = useState(1);
    const [printReceipts, setPrintReceipts] = useState([]);

    useEffect(() => {
        const saved = localStorage.getItem("healthy_receipt_no");
        if (saved) setReceiptNo(Number(saved));
    }, []);

    useEffect(() => {
        localStorage.setItem("healthy_receipt_no", receiptNo);
    }, [receiptNo]);

    const addRandomItems = () => {
        const count = parseInt(randomCount);
        if (!count || count <= 0) return alert("Enter valid items count");

        const shuffled = [...healthyDelightsItems].sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, count).map((item, idx) => ({
            id: Date.now() + idx,
            name: item.name,
            qty: Math.floor(Math.random() * 3) + 1,
            price: item.price,
        }));
        setItems(selected);
    };

    const handlePrint = () => {
        const num = parseInt(receiptCount);
        const count = parseInt(randomCount);

        if (!num || num < 1) return alert("Enter valid receipt count");
        if (!count || count < 1) return alert("Enter valid item count");

        const [baseHour, baseMinute] = time
            ? time.split(":").map(Number)
            : [0, 0];

        const receipts = [];

        for (let i = 0; i < num; i++) {
            const now = new Date();
            now.setHours(baseHour);
            now.setMinutes(baseMinute + i * 2); // ✅ time increases
            now.setSeconds(0);

            const fakeTime = now.toTimeString().slice(0, 8);

            const shuffled = [...healthyDelightsItems].sort(() => 0.5 - Math.random());
            const selected = shuffled.slice(0, count).map((item, idx) => ({
                id: Date.now() + idx,
                name: item.name,
                qty: Math.floor(Math.random() * 3) + 1,
                price: item.price,
            }));

            receipts.push({
                receiptNo: receiptNo + i, // ✅ receipt increases
                time: fakeTime,
                items: selected,
            });
        }

        setPrintReceipts(receipts);

        setTimeout(() => {
            window.print();
            setPrintReceipts([]);

            const finalNo = receiptNo + num;
            setReceiptNo(finalNo);
            localStorage.setItem("healthy_receipt_no", finalNo);
        }, 500);
    };


    const formatDate = (d) => {
        if (!d) return "";
        const [y, m, da] = d.split("-");
        return `${da}/${m}/${y}`;
    };

    const formatTime = (t) => {
        if (!t) return "";
        const [h, m, s] = t.split(":");
        let hour = parseInt(h);
        const ampm = hour >= 12 ? "PM" : "AM";
        hour = hour % 12 || 12;
        return `${hour}:${m}:${s} ${ampm}`;
    };

    const calcTotals = (items) => {
        const subtotal = items.reduce((a, i) => a + i.qty * i.price, 0);
        const tax = +(subtotal * TAX_RATE).toFixed(2);
        const total = +(subtotal + tax).toFixed(2);
        return { subtotal, tax, total };
    };

    const fmt = (v) => `Rs ${v.toFixed(2)}`;

    const renderReceipts = printReceipts.length
        ? printReceipts
        : [{ receiptNo, time, items }];

    return (
        <main className="flex flex-col items-center p-4 min-h-screen bg-white">
            {/* CONTROLS */}
            <section className="mb-4 w-[80mm] print:hidden">
                <div className="flex flex-wrap gap-2">
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="border px-2 py-1 rounded" />
                    <input type="time" value={time} onChange={(e) => setTime(e.target.value)} className="border px-2 py-1 rounded" />
                    <input type="number" placeholder="No. of items" value={randomCount} onChange={(e) => setRandomCount(e.target.value)} className="border px-2 py-1 rounded w-28" />
                    <button onClick={addRandomItems} className="bg-yellow-500 text-white px-3 rounded">🎲</button>
                    <input type="number" placeholder="No. of receipts" value={receiptCount} onChange={(e) => setReceiptCount(e.target.value)} className="border px-2 py-1 rounded w-28" />
                    <button onClick={handlePrint} className="bg-blue-600 text-white px-4 rounded">🖨</button>
                </div>
            </section>

            {renderReceipts.map((r, i) => {
                const { subtotal, tax, total } = calcTotals(r.items);
                return (
                    <article key={i} className="bg-white w-[80mm] p-4 font-mono text-md leading-relaxed print-page">
                        <header className="flex flex-col items-center text-center mb-1">
                            <Image src={healthyLogo} alt="logo" width={120} height={120} />
                            <div className="text-[12px] whitespace-pre-line mt-1"> Shop #12, Civic Center, Satellite Town, Bahawalpur{"\n"}Tel: (062) 288-4521 </div>                        </header>

                        <section className="border-t border-b border-dotted text-sm py-2">
                            <div className="flex justify-between"><span>Receipt</span><span>{r.receiptNo}</span></div>
                            <div className="flex justify-between"><span>Date</span><span>{formatDate(date)}</span></div>
                            <div className="flex justify-between"><span>Time</span><span>{formatTime(r.time)}</span></div>
                            <div className="flex justify-between"><span>Terminal</span><span>{terminal}</span></div>
                        </section>

                        <section className="mt-2">
                            {r.items.map((it) => (
                                <div key={it.id} className="flex">
                                    <div className="w-8 text-center">{it.qty}</div>
                                    <div className="flex-1">{it.name}</div>
                                    <div className="w-20 text-right">{fmt(it.qty * it.price)}</div>
                                </div>
                            ))}
                        </section>

                        <section className="border-t mt-2 text-sm">
                            <div className="flex justify-between"><span>Subtotal</span><span>{fmt(subtotal)}</span></div>
                            <div className="flex justify-between"><span>Tax</span><span>{fmt(tax)}</span></div>
                            <div className="flex justify-between font-bold"><span>TOTAL</span><span>{fmt(total)}</span></div>
                        </section>

                        <div className="text-center text-sm mt-2">Thank you for visiting!</div>
                    </article>
                );
            })}

            <style jsx>{`
                @media print {
                    .print-page {
                        page-break-after: always;
                    }
                    .print\\:hidden {
                        display: none;
                    }
                    @page {
                        size: 80mm auto;
                        margin: 3mm;
                    }
                }
            `}</style>
        </main>
    );
}
