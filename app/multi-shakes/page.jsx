"use client";
import React, { useState, useEffect } from "react";

// Store Data
const stores = [
    {
        name: "TastyFruit Sips",
        address: "Street 12, Model Town\nBlock C, Lahore, 54000",
        description: "Refreshing fruity sips, made fresh daily!",
    },
    {
        name: "ShakeFruit Fusion",
        address:
            "Shop 49 LGF, Al Hameed Mall, adjacent to Tehzeeb Bakers, G-11 Markaz, Islamabad.",
        description: "Fusion of taste and health in every sip.",
    },
    {
        name: "FreshFlavor Sips",
        address: "Main Boulevard, Sector B\nJohar Town, Lahore, 54782",
        description: "Fresh flavors squeezed just for you.",
    },
    {
        name: "Blissful Berry Sips",
        address: "Shop #15, Berry Plaza\nSatellite Town, Rawalpindi, 46000",
        description: "Berries that bring bliss in every shake.",
    },
    {
        name: "FruityFuel Shake",
        address: "Fuel Stop Market\nGulshan-e-Iqbal, Karachi, 75300",
        description: "Fuel up your day with fruity shakes.",
    },
    {
        name: "Zestful Sipz",
        address: "Shop 22, Zest Plaza\nCivic Center, Faisalabad, 38000",
        description: "Zesty and fresh, sip by sip.",
    },
    {
        name: "BerryBlast Shake",
        address: "Block C, Juice Market\nUniversity Road, Multan, 60000",
        description: "Blast of berry goodness in every sip.",
    },
    {
        name: "ShakeWave Delight",
        address: "Wave Complex, Suite 7\nClifton Block 2, Karachi, 75600",
        description: "Ride the wave of flavor.",
    },
    {
        name: "CitrusSqueeze Sip",
        address: "Plot 9, Citrus Lane\nCommercial Market, Sialkot, 51310",
        description: "Tangy citrus just right.",
    },
    {
        name: "PureFruit Fusion",
        address: "150 Pure Lane\nGarden Town, Gujranwala, 52250",
        description: "Pure fruit, pure taste, pure you.",
    },
    {
        name: "SipSweet Fruit",
        address: "Shop 10, Sweet Road\nMain Bazar, Bahawalpur, 63100",
        description: "Sweet fruit flavors, sweet moments.",
    },
    {
        name: "ShakeBlissful Mix",
        address: "Bliss Avenue, Tower 5\nCivic Center, Islamabad, 44000",
        description: "A mix of blissful shakes for every mood.",
    },
];

// Items list
const itemsList = [
    "Avocado Milk", "Avocado Banana", "Avocado Mango", "Avocado Papaya", "Banana Milk", "Banana Lemon",
    "Banana Papaya", "Banana Choco", "Banana Peanut", "Banana Vanilla", "Mango Milk", "Mango Lemon",
    "Mango Banana", "Mango Pineapple", "Mango Rhum", "Melon Milk", "Melon Mango", "Melon Banana",
    "Melon Papaya", "Melon Pineapple", "Pineapple Banana", "Pineapple Rhum", "Pineapple Milk",
    "Pineapple Lemon", "Papaya Milk", "Papaya Lemon", "Papaya Mango", "Papaya Pineapple", "Tropical Shake",
    "Lemon Shake", "Coffee Shake", "Iced Tea Shake", "Mocha Shake", "Mocha Rhum", "Milk Shake", "Vanilla Shake",
    "Chocolate Shake", "Strawberry Mango", "Watermelon", "Fresh Strawberry Shake", "Strawberry Banana",
];

const Receipt = () => {
    const [selectedStore, setSelectedStore] = useState(stores[0]);
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [numItems, setNumItems] = useState("");
    const [items, setItems] = useState([]);

    const [invoiceNo, setInvoiceNo] = useState(1000); // Starting invoice
    const [terminalId, setTerminalId] = useState("01");
    const [numReceipts, setNumReceipts] = useState(1);


    // Load saved invoice and terminal ID
    useEffect(() => {
        const savedInvoice = localStorage.getItem("lastInvoice");
        if (savedInvoice) {
            setInvoiceNo(parseInt(savedInvoice) + 2); // auto increment on load
        }

        let lastTerminal = localStorage.getItem("lastTerminal");
        let nextTerminal = lastTerminal ? parseInt(lastTerminal) + 1 : 1;
        if (nextTerminal > 5) nextTerminal = 1; // cycle 1 → 5
        setTerminalId(nextTerminal.toString().padStart(2, "0"));
        localStorage.setItem("lastTerminal", nextTerminal);
    }, []);

    // 🧾 Print a single receipt
    const handlePrint = () => {
        localStorage.setItem("lastInvoice", invoiceNo);
        window.print();

        // Increment invoice by 1 after print
        const nextInvoice = invoiceNo + 1;
        setInvoiceNo(nextInvoice);
        localStorage.setItem("lastInvoice", nextInvoice);

        // Increment terminal by 1 (cycle 1 → 5)
        let currentTerminal = parseInt(terminalId);
        let nextTerminal = currentTerminal + 1;
        if (nextTerminal > 5) nextTerminal = 1;
        setTerminalId(nextTerminal.toString().padStart(2, "0"));
        localStorage.setItem("lastTerminal", nextTerminal);
    };

    // 🧾 Print multiple receipts automatically (each with new random items)
    const printMultipleReceipts = async () => {
        let currentInvoice = invoiceNo;
        let currentTime = time;

        for (let i = 0; i < numReceipts; i++) {
            // 🔹 Generate new random items before each print
            let generated = [];
            for (let j = 0; j < numItems; j++) {
                const randomItem = itemsList[Math.floor(Math.random() * itemsList.length)];
                const randomPrice = Math.floor(Math.random() * 400) + 100; // 100–500
                generated.push({ name: randomItem, price: randomPrice });
            }
            setItems(generated);

            // Wait a short moment to ensure React updates items
            await new Promise((resolve) => setTimeout(resolve, 300));

            // 🔹 Set the updated invoice number before printing
            setInvoiceNo(currentInvoice);

            // 🔹 Update time (+2 minutes for each print)
            if (currentTime) {
                const [hours, minutes] = currentTime.split(":").map(Number);
                const totalMinutes = hours * 60 + minutes + 2; // add 2 minutes
                const newHours = Math.floor(totalMinutes / 60) % 24;
                const newMinutes = totalMinutes % 60;
                const formattedTime = `${newHours.toString().padStart(2, "0")}:${newMinutes
                    .toString()
                    .padStart(2, "0")}`;
                setTime(formattedTime);
                currentTime = formattedTime;
            }

            // 🔹 Print the receipt
            window.print();

            // 🔹 Increment invoice and terminal
            currentInvoice += 1;
            localStorage.setItem("lastInvoice", currentInvoice);

            let currentTerminal = parseInt(localStorage.getItem("lastTerminal")) || 1;
            let nextTerminal = currentTerminal + 1;
            if (nextTerminal > 5) nextTerminal = 1;
            setTerminalId(nextTerminal.toString().padStart(2, "0"));
            localStorage.setItem("lastTerminal", nextTerminal);

            // Wait 1 second before next print
            await new Promise((resolve) => setTimeout(resolve, 1000));
        }

        // Save final invoice number
        setInvoiceNo(currentInvoice);
        localStorage.setItem("lastInvoice", currentInvoice);
    };




    // Generate random items
    const generateItems = () => {
        let generated = [];
        for (let i = 0; i < numItems; i++) {
            const randomItem =
                itemsList[Math.floor(Math.random() * itemsList.length)];
            const randomPrice = Math.floor(Math.random() * 400) + 100; // 100–500
            generated.push({ name: randomItem, price: randomPrice });
        }
        setItems(generated);
    };

    // Totals
    const subtotal = items.reduce((acc, item) => acc + item.price, 0);
    const tax = subtotal * 0.05; // 5% tax
    const total = subtotal + tax;

    // Format date
    const formatDate = (dateStr) => {
        if (!dateStr) return "";
        const [year, month, day] = dateStr.split("-");
        return `${day}/${month}/${year}`;
    };

    // Format time
    const formatTime = (timeStr) => {
        if (!timeStr) return "";
        const [hours, minutes] = timeStr.split(":");
        let h = parseInt(hours);
        const ampm = h >= 12 ? "PM" : "AM";
        h = h % 12 || 12;
        return `${h}:${minutes} ${ampm}`;
    };

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 gap-5 p-5">
            {/* Controls */}
            <div className="mb-6 flex gap-2 flex-wrap no-print">
                <select
                    value={selectedStore.name}
                    onChange={(e) =>
                        setSelectedStore(stores.find((s) => s.name === e.target.value))
                    }
                    className="border px-2 py-1 rounded w-44"
                >
                    {stores.map((store, idx) => (
                        <option key={idx} value={store.name}>
                            {store.name}
                        </option>
                    ))}
                </select>

                <input
                    type="number"
                    placeholder="Items"
                    value={numItems}
                    min="1"
                    onChange={(e) => setNumItems(Number(e.target.value))}
                    className="border px-2 py-1 rounded w-28"
                />

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

                <button
                    onClick={generateItems}
                    className="bg-black text-white px-4 py-1 rounded"
                >
                    Generate
                </button>

                <input
                    type="number"
                    placeholder="Receipts"
                    value={numReceipts}
                    min="1"
                    onChange={(e) => setNumReceipts(Number(e.target.value))}
                    className="border px-2 py-1 rounded w-32"
                />

                <button
                    onClick={printMultipleReceipts}
                    className="bg-green-600 text-white px-4 py-1 rounded"
                >
                    Print Multi
                </button>

            </div>

            {/* Receipt */}
            <div className="w-[320px] bg-white p-5 shadow-lg font-mono text-black leading-tight">
                {/* Header */}
                <div className="text-center font-bold text-[22px] tracking-wide">
                    {selectedStore.name}
                </div>
                <div className="text-center text-sm mt-1 whitespace-pre-line">
                    {selectedStore.address}
                </div>

                {/* Transaction Info */}
                <div className="text-[15px] border-b-2 font-bold border-dotted mt-2 pb-2 whitespace-pre-line">
                    {"\n"}Date:{formatDate(date)}
                    {"\n"}Time:   {formatTime(time)}
                    {"\n"}Invoice #: {invoiceNo}
                    {"\n"}Terminal ID: {terminalId}
                </div>

                {/* Items */}
                <div className="text-sm space-y-1 mt-2">
                    {items.map((item, idx) => (
                        <div key={idx} className="flex items-center">
                            <span className="whitespace-nowrap">{item.name}</span>
                            <span className="flex-1"></span>
                            <span className="text-right w-16">Rs {item.price}</span>
                        </div>
                    ))}
                </div>

                {/* Summary */}
                <div className="mt-5 text-md">
                    <div className="flex justify-between">
                        <span>Sub Total</span>
                        <span>Rs {subtotal}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Sales Tax (5%)</span>
                        <span>Rs {tax.toFixed(2)}</span>
                    </div>
                </div>

                {/* Total */}
                <div className="flex justify-between items-center border-t-2 border-b-2 border-dotted border-black pt-2 pb-2">
                    <span className="font-bold text-lg">TOTAL</span>
                    <span className="font-bold text-lg">Rs {total.toFixed(2)}</span>
                </div>

                {/* Payment Method */}
                <div className="flex justify-between text-sm mt-2 pt-1">
                    <span>Paid By:</span>
                    <span>Credit</span>
                </div>

                {/* Footer */}
                <div className="text-center text-md font-bold mt-3">
                    {selectedStore.description}
                </div>

                {/* Print Button */}
                <div className="mt-6 flex justify-center no-print">
                    <button
                        onClick={handlePrint}
                        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                    >
                        Print Receipt
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Receipt;
