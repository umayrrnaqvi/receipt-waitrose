"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import healthyLogo from "../../public/healthy.png";

// 🍎 Healthy Delights Store — Fresh Produce List
export const healthyDelightsItems = [
    { name: "Organic Apples (Honeycrisp)", price: 3.29 },
    { name: "Bananas (Fair Trade)", price: 1.59 },
    { name: "Mandarins (Seedless)", price: 3.49 },
    { name: "Mango (Kent Variety)", price: 2.99 },
    { name: "Pineapple (Fresh Cut)", price: 4.79 },
    { name: "Green Grapes (Seedless)", price: 3.89 },
    { name: "Strawberries (Organic Box)", price: 5.49 },
    { name: "Blueberries (Wild Harvested)", price: 5.99 },
    { name: "Watermelon Slices", price: 2.49 },
    { name: "Bartlett Pears", price: 2.89 },
    { name: "Kiwi (New Zealand)", price: 0.99 },
    { name: "Papaya (Caribbean)", price: 3.79 },
    { name: "Pomegranate (Premium)", price: 3.99 },
    { name: "Lemon (Unwaxed)", price: 1.19 },
    { name: "Peaches (White Flesh)", price: 3.59 },
    { name: "Avocado (Ripe & Ready)", price: 2.49 },
    { name: "Tomatoes (Vine Ripened)", price: 2.79 },
    { name: "Baby Potatoes (Golden)", price: 2.29 },
    { name: "Onions (Red Organic)", price: 1.99 },
    { name: "Carrots (Organic Bunch)", price: 1.89 },
    { name: "Broccoli (Fresh Cut)", price: 2.99 },
    { name: "Spinach (Washed & Ready)", price: 2.69 },
    { name: "Cucumbers (Mini)", price: 1.79 },
    { name: "Romaine Lettuce", price: 1.99 },
    { name: "Cauliflower (White Head)", price: 3.49 },
    { name: "Bell Peppers (Tri-Color Pack)", price: 4.29 },
    { name: "Zucchini (Organic)", price: 2.49 },
    { name: "Garlic Bulbs", price: 1.59 },
    { name: "Fresh Ginger Root", price: 3.29 },
    { name: "Eggplant (Aubergine)", price: 2.89 },
    { name: "Green Beans (Tender)", price: 3.49 },
    { name: "Kale (Curly)", price: 2.39 },
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

    const fmt = (v) => `$ ${v.toFixed(2)}`;

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
                    <Image src={healthyLogo} alt="Healthy Delights" width={95} height={95} />
                    <div className="text-[12px] whitespace-pre-line mt-1">
                        822 NY-82, Hopewell Junction, NY 12533{"\n"}Tel: (845) 592-2025
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
