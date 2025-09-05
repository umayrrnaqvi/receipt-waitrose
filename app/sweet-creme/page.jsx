"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import sweetCreme from "../../public/sweet.png";

const SweetCremeReceipt = () => {
  const [billNo, setBillNo] = useState(5000);
  const [tokenNo, setTokenNo] = useState(2600);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [items, setItems] = useState([]);
  const [numItems, setNumItems] = useState();

  // ✅ Load saved BillNo and TokenNo from localStorage
  useEffect(() => {
    const savedBillNo = localStorage.getItem("billNo");
    const savedTokenNo = localStorage.getItem("tokenNo");

    if (savedBillNo) setBillNo(Number(savedBillNo));
    if (savedTokenNo) setTokenNo(Number(savedTokenNo));
  }, []);

  // ✅ Save BillNo and TokenNo into localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("billNo", billNo);
  }, [billNo]);

  useEffect(() => { 
    localStorage.setItem("tokenNo", tokenNo);
  }, [tokenNo]);

  // Predefined Sweet Creme menu
  const menuItems = [
    { name: "Leemne Mint", rate: 140, unit: "ltr" },
    { name: "Pineapple Ice Cream", rate: 120, unit: "kg" },
    { name: "Dates Shake", rate: 160, unit: "ltr" },
    { name: "Tuti Frutti", rate: 130, unit: "kg" },
    { name: "Tofu", rate: 70, unit: "kg" },
    { name: "Cotton Candy", rate: 160, unit: "kg" },
    { name: "Apple Juice Premium", rate: 200, unit: "ltr" },
    { name: "Canned Beans", rate: 80, unit: "kg" },
    { name: "Strawberry Ice Cream", rate: 150, unit: "kg" },
    { name: "Banana Shake", rate: 115, unit: "ltr" },
    { name: "Watermelon Juice", rate: 110, unit: "ltr" },
    { name: "Blueberry Burst", rate: 170, unit: "ltr" },
    { name: "Peach Mart", rate: 125, unit: "kg" },
    { name: "Mocha Fudge", rate: 180, unit: "kg" },
    { name: "Pineapple Juice", rate: 90, unit: "ltr" },
  ];

  // Format date
  const formatDate = (inputDate) => {
    if (!inputDate) return "N/A";
    const [year, month, day] = inputDate.split("-");
    return `${day}/${month}/${year}`;
  };

  // Format time with seconds + AM/PM
  const formatTime = (inputTime) => {
    if (!inputTime) return "N/A";
    const [hours, minutes] = inputTime.split(":");
    const date = new Date();
    date.setHours(Number(hours));
    date.setMinutes(Number(minutes));
    date.setSeconds(0);

    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
  };

  // Generate random items
  const generateItems = () => {
    const n = Math.max(0, Math.min(numItems, menuItems.length));
    const shuffled = [...menuItems].sort(() => 0.5 - Math.random());
    setItems(shuffled.slice(0, n).map((item) => ({ ...item, qty: 1 })));
  };

  // Calculate totals
  const grossAmount = items.reduce(
    (total, item) => total + item.rate * item.qty,
    0
  );

  // ✅ Print + Increment + Save
  const handlePrint = () => {
    window.print();
    setBillNo((prev) => prev + 2); // ✅ adds +2 on Bill No
    setTokenNo((prev) => prev + 1); // ✅ adds +1 on Token No
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-4">
      {/* Inputs Section */}
      <div className="mb-6 flex gap-2 flex-wrap">
        <input
          type="number"
          placeholder="Number of items"
          value={numItems}
          min="1"
          max={menuItems.length}
          onChange={(e) => setNumItems(Number(e.target.value))}
          className="border px-2 py-1 rounded w-36"
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
          onClick={generateItems}
          className="bg-black text-white px-4 py-1 rounded"
        >
          Generate
        </button>
      </div>

      {/* Receipt */}
      <div className="bg-white w-[360px] p-4 text-sm font-mono shadow-lg">
        {/* Header */}
        <div className="text-center pb-2">
          <Image
            src={sweetCreme}
            width={150}
            alt="sweet Logo"
            className="mx-auto"
            priority
          />
          <p className="text-md pt-2">Premium Soft Serve</p>
          <p className="text-md pt-2">S3 Tower Shopping Mall, Bahawalpur</p>
          <p className="text-md pt-2">Phone: 061-111-666-666</p>
        </div>

        {/* Bill Info */}
        <div className="mt-2 text-md pb-2">
          <p>
            <span className="font-bold">Bill#:</span> <span>{billNo}</span>
          </p>
          <p>
            <span className="font-bold">Date:</span> {formatDate(date)}
          </p>
          <p>
            <span className="font-bold">Time:</span> {formatTime(time)}
          </p>
        </div>

        {/* Items Table */}
        <table className="w-full mt-2 pb-2">
          <thead>
            <tr className="text-left">
              <th className="w-6">#</th>
              <th>Item Name</th>
              <th className="text-right">Rate</th>
              <th className="text-right">Qty</th>
              <th className="text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td className="w-[150px]">{item.name}</td>
                <td className="text-right w-[50px]">
                  {item.rate}( {item.unit})
                </td>
                <td className="text-right">{item.qty}</td>
                <td className="text-right">{item.rate * item.qty}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Totals */}
        <div className="mt-5 pb-2">
          <p className="flex justify-between">
            <span className="font-bold">Gross Amt : </span>
            <span>{grossAmount}</span>
          </p>
          <p className="flex justify-between">
            <span className="font-bold">Net Total :</span>{" "}
            <span>{grossAmount}</span>
          </p>
          <p className="flex justify-between">
            <span className="font-bold">Total Amount :</span>{" "}
            <span>{grossAmount}</span>
          </p>
        </div>

        {/* Payment Info */}
        <div className="mt-2 pb-2">
          <p className="flex justify-between">
            <span className="font-bold">Credit Card Payment:</span>{" "}
            <span>{grossAmount}</span>
          </p>
        </div>

        {/* Footer */}
        <div className="text-center mt-2">
          <p className="font-bold">Token # {tokenNo}</p>
          <p className="mt-1 text-md">* THANK YOU FOR YOUR VISIT *</p>
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

export default SweetCremeReceipt;
