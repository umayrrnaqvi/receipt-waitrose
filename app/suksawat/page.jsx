"use client";
import React, { useState, useEffect } from "react";
import { QRCodeCanvas } from "qrcode.react"; // ⬅️ import this


const SuksawatReceipt = () => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [numItems, setNumItems] = useState(0);
    const [items, setItems] = useState([]);
    const [receiptId, setReceiptId] = useState("");

    // Payment states
    const [totalAmount, setTotalAmount] = useState(0);
    const [cashPaid, setCashPaid] = useState(0);
    const [change, setChange] = useState(0);
    const [beforeVat, setBeforeVat] = useState(0);
    const [vatAmount, setVatAmount] = useState(0);

    // Item list (expanded)
    const itemList = [
        { name: "ส้ม", price: 30 },
        { name: "เส้นหมี่", price: 25 },
        { name: "ไก่พะโล้", price: 60 },
        { name: "ผักบุ้ง", price: 15 },
        { name: "กล้วย", price: 20 },
        { name: "แอปเปิ้ล", price: 35 },
        { name: "แตงกวา", price: 12 },
        { name: "มะเขือเทศ", price: 18 },
        { name: "สับปะรด", price: 40 },
        { name: "มะม่วง", price: 50 },
        { name: "กะหล่ำปลี", price: 22 },
        { name: "แครอท", price: 28 },
        { name: "มันฝรั่ง", price: 25 },
        { name: "หอมใหญ่", price: 18 },
        { name: "พริกหยวก", price: 30 },
    ];

    // Load receipt number from localStorage
    useEffect(() => {
        const savedNumber = localStorage.getItem("receiptNumber");
        if (savedNumber) {
            setReceiptId(`LDP-${savedNumber}`);
        } else {
            localStorage.setItem("receiptNumber", "1180");
            setReceiptId("LDP-1180");
        }
    }, []);

    const generateReceiptId = () => {
        let currentNumber = parseInt(localStorage.getItem("receiptNumber") || "1180");
        currentNumber += 2;
        localStorage.setItem("receiptNumber", currentNumber);
        return `LDP-${currentNumber}`;
    };

    const addItemsToReceipt = () => {
        const selected = [];
        for (let i = 0; i < numItems; i++) {
            const randomItem = itemList[Math.floor(Math.random() * itemList.length)];
            const qty = Math.floor(Math.random() * 5) + 1; // random qty 1-5
            selected.push({ ...randomItem, qty });
        }
        setItems(selected);
    };

    // 🔁 Auto calculation whenever items change
    useEffect(() => {
        if (items.length === 0) return;

        const totalRaw = items.reduce(
            (acc, item) => acc + item.price * item.qty,
            0
        );

        const roundedTotal = totalRaw.toFixed(2);
        const roundedCash = Math.ceil(totalRaw / 10) * 10;
        const cashChange = (roundedCash - totalRaw).toFixed(2);

        const calculatedBeforeVat = (totalRaw / 1.07).toFixed(2);
        const calculatedVatAmount = (totalRaw - totalRaw / 1.07).toFixed(2);

        setTotalAmount(roundedTotal);
        setCashPaid(roundedCash);
        setChange(cashChange);
        setBeforeVat(calculatedBeforeVat);
        setVatAmount(calculatedVatAmount);
    }, [items]);

    const handlePrint = () => {
        const newId = generateReceiptId();
        setReceiptId(newId);
        window.print();
    };

    return (
        <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
            {/* Inputs Section */}
            <div className="mb-6 flex gap-2 flex-wrap">
                <input
                    type="number"
                    placeholder="Number of items"
                    value={numItems}
                    onChange={(e) => setNumItems(Number(e.target.value))}
                    className="border px-2 py-1 rounded w-32"
                />
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="border px-2 py-1 rounded w-40"
                />
                <input
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="border px-2 py-1 rounded w-28"
                />
                <button
                    onClick={addItemsToReceipt}
                    className="bg-black text-white px-4 py-1 rounded"
                >
                    Add
                </button>
            </div>

            {/* Receipt */}
            <div className="bg-white text-black w-[320px] mx-auto p-4 font-mono text-sm shadow-lg">
                {/* Header */}
                <div className="text-center mb-4">
                    <h1 className="font-bold text-2xl">ตลาดสดสุขสวัสดิ์</h1>
                    <p>ตลาดสดใส่ใจคุณทุกวัน</p>
                    <p>456/7 ถนนตลาดพร้าว</p>
                    <p>แขวงจอมพล เขตจตุจักร</p>
                    <p>กรุงเทพมหานคร 10900</p>
                    <p>โทรศัพท์: 02-555-6798</p>
                    <p>เลขประจำตัวผู้เสียภาษี: 0105566020516</p>
                </div>

                {/* Transaction details */}
                <div className="mb-2 text-xs">
                    <p>สาขา: ลาพพร้าว 101 เครื่องหมาย: KIOSK-05</p>
                    <p>พนักงาน: EMP002 (น.ส.สมพร)</p>
                    <p>เลขที่บิล: {receiptId}</p>
                    <p>
                        วันที่: {date || "--/--/----"} เวลา: {time || "--:--"}
                    </p>
                </div>

                {/* Items Section */}
                <div className="mb-2">
                    {/* Header */}
                    <div className="grid grid-cols-4 font-bold text-md pb-1">
                        <span>สินค้า</span>
                        <span className="text-center">จำนวน</span>
                        <span className="text-center">ราคา</span>
                        <span className="text-right">รวม</span>
                    </div>

                    {items.length === 0 ? (
                        <p className="text-center text-gray-500 py-2">ยังไม่มีสินค้า</p>
                    ) : (
                        items.map((item, i) => (
                            <div key={i} className="grid grid-cols-4 text-sm py-0.5">
                                <span>{item.name}</span>
                                <div className="text-center">{item.qty.toFixed(2)}</div>
                                <span className="text-center">{item.price.toFixed(2)}</span>
                                <span className="text-right font-bold">
                                    {(item.qty * item.price).toFixed(2)}
                                </span>
                            </div>
                        ))
                    )}
                </div>

                {/* Totals */}
                <div className="space-y-1">
                    <div className="flex justify-between">
                        <span>ยอดรวมก่อน VAT:</span>
                        <span>{beforeVat}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>ภาษีมูลค่าเพิ่ม 7%:</span>
                        <span>{vatAmount}</span>
                    </div>
                    <div className="flex justify-between font-bold text-md pt-1">
                        <span>รวมทั้งหมด:</span>
                        <span>{totalAmount}</span>
                    </div>
                </div>

                {/* Payment */}
                <div className="space-y-1 mt-3">
                    <div className="flex gap-2">
                        <span>ชำระด้วย:</span>
                        <span>เงินสด</span>
                    </div>
                    <div className="flex gap-2">
                        <span>รับเงิน:</span>
                        <span>{cashPaid}</span>
                    </div>
                    <div className="flex gap-2">
                        <span>เงินทอน:</span>
                        <span>{change}</span>
                    </div>
                </div>

                {/* Footer */}
                    <div className="w-[90%] flex justify-end mt-3">
                        <QRCodeCanvas
                            value={receiptId}
                            size={100}      
                            includeMargin={true}
                        />
                    </div>
                <div className="text-center my-4">
                    <p className="font-bold text-md">ขอบคุณที่ใช้บริการตลาดสดสุขสวัสดิ์</p>
                    <p className="text-[11px]">
                         : รับคืนสินค้าภายใน 48 ชม. พร้อมใบเสร็จ
                    </p>
                    <p className="font-bold text-[11px]">เว็บไซต์: www.suksawatmarket.com</p>
                    <p className="text-[11px]">อีเมล: info@suksawatmarket.com</p>
                    <p className=" font-bold text-[11px]">Line: @suksawatmarket</p>
                    <p className="text-[11px] mt-2">ใบเสร็จนี้เป็นเอกสารทางการเงิน</p>
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

export default SuksawatReceipt;
