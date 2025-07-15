'use client';
import { useEffect, useState } from "react";
import JsBarcode from "jsbarcode";
import Image from "next/image";
import luluname from "../../public/lulu.png";

export default function ReceiptLayout() {
  const gccItems = {
    UAE: [
      { englishName: "Tomato 1 kg", arabicName: "طماطم", price: 3.5, barcode: "971000000001" },
      { englishName: "Cucumber 600 g", arabicName: "خيار", price: 4.0, barcode: "971000000002" },
      { englishName: "Potato 1 kg", arabicName: "بطاطس", price: 2.8, barcode: "971000000003" },
      { englishName: "Onion Loose 1 kg", arabicName: "بصل", price: 2.5, barcode: "971000000004" },
      { englishName: "Apple Royal Gala", arabicName: "تفاح", price: 5.2, barcode: "971000000005" },
      { englishName: "Banana Philippines", arabicName: "موز", price: 4.5, barcode: "971000000006" },
      { englishName: "Carrot Loose 1 kg", arabicName: "جزر", price: 3.9, barcode: "971000000007" },
      { englishName: "Lettuce Iceberg", arabicName: "خس", price: 3.2, barcode: "971000000008" },
      { englishName: "Orange Valencia", arabicName: "برتقال", price: 4.8, barcode: "971000000009" },
      { englishName: "Spinach Leaves", arabicName: "سبانخ", price: 3.0, barcode: "971000000010" },
    ],
    SaudiArabia: [
      { englishName: "Tomato 1 kg", arabicName: "طماطم", price: 3.0, barcode: "966000000001" },
      { englishName: "Khalas Dates 500 g", arabicName: "تمر", price: 6.5, barcode: "966000000002" },
      { englishName: "Grapes Green Seedless", arabicName: "عنب", price: 7.0, barcode: "966000000003" },
      { englishName: "Apple Royal Gala", arabicName: "تفاح", price: 5.0, barcode: "966000000004" },
      { englishName: "Pomegranate India", arabicName: "رمان", price: 5.5, barcode: "966000000005" },
      { englishName: "Cucumber 600 g", arabicName: "خيار", price: 3.5, barcode: "966000000006" },
      { englishName: "Carrot Loose 1 kg", arabicName: "جزر", price: 2.9, barcode: "966000000007" },
      { englishName: "Watermelon Whole", arabicName: "بطيخ", price: 4.0, barcode: "966000000008" },
      { englishName: "Lemon Yellow", arabicName: "ليمون", price: 3.8, barcode: "966000000009" },
      { englishName: "Onion Loose 1 kg", arabicName: "بصل", price: 2.6, barcode: "966000000010" },
    ],
    Qatar: [
      { englishName: "Tomato 1 kg", arabicName: "طماطم", price: 3.2, barcode: "974000000001" },
      { englishName: "Cucumber 600 g", arabicName: "خيار", price: 4.1, barcode: "974000000002" },
      { englishName: "Lettuce Iceberg", arabicName: "خس", price: 3.3, barcode: "974000000003" },
      { englishName: "Banana Philippines", arabicName: "موز", price: 4.7, barcode: "974000000004" },
      { englishName: "Mango Pakistan", arabicName: "مانجو", price: 6.2, barcode: "974000000005" },
      { englishName: "Apple Royal Gala", arabicName: "تفاح", price: 5.3, barcode: "974000000006" },
      { englishName: "Spinach Leaves", arabicName: "سبانخ", price: 2.8, barcode: "974000000007" },
      { englishName: "Onion Loose 1 kg", arabicName: "بصل", price: 2.5, barcode: "974000000008" },
      { englishName: "Orange Valencia", arabicName: "برتقال", price: 4.4, barcode: "974000000009" },
      { englishName: "Pineapple Whole", arabicName: "أناناس", price: 7.0, barcode: "974000000010" },
    ],
    Kuwait: [
      { englishName: "Tomato 1 kg", arabicName: "طماطم", price: 2.9, barcode: "965000000001" },
      { englishName: "Cucumber 600 g", arabicName: "خيار", price: 3.7, barcode: "965000000002" },
      { englishName: "Apple Royal Gala", arabicName: "تفاح", price: 5.1, barcode: "965000000003" },
      { englishName: "Banana Philippines", arabicName: "موز", price: 4.4, barcode: "965000000004" },
      { englishName: "Onion Loose 1 kg", arabicName: "بصل", price: 2.6, barcode: "965000000005" },
      { englishName: "Garlic China", arabicName: "ثوم", price: 5.8, barcode: "965000000006" },
      { englishName: "Orange Valencia", arabicName: "برتقال", price: 4.9, barcode: "965000000007" },
      { englishName: "Khalas Dates 500 g", arabicName: "تمر", price: 6.7, barcode: "965000000008" },
      { englishName: "Pineapple Whole", arabicName: "أناناس", price: 6.9, barcode: "965000000009" },
      { englishName: "Carrot Loose 1 kg", arabicName: "جزر", price: 3.1, barcode: "965000000010" },
    ],
    Bahrain: [
      { englishName: "Tomato 1 kg", arabicName: "طماطم", price: 3.0, barcode: "973000000001" },
      { englishName: "Cucumber 600 g", arabicName: "خيار", price: 3.9, barcode: "973000000002" },
      { englishName: "Banana Philippines", arabicName: "موز", price: 4.3, barcode: "973000000003" },
      { englishName: "Apple Royal Gala", arabicName: "تفاح", price: 5.4, barcode: "973000000004" },
      { englishName: "Grapes Green Seedless", arabicName: "عنب", price: 6.6, barcode: "973000000005" },
      { englishName: "Onion Loose 1 kg", arabicName: "بصل", price: 2.4, barcode: "973000000006" },
      { englishName: "Spinach Leaves", arabicName: "سبانخ", price: 3.0, barcode: "973000000007" },
      { englishName: "Orange Valencia", arabicName: "برتقال", price: 4.6, barcode: "973000000008" },
      { englishName: "Carrot Loose 1 kg", arabicName: "جزر", price: 3.2, barcode: "973000000009" },
      { englishName: "Lemon Yellow", arabicName: "ليمون", price: 3.5, barcode: "973000000010" },
    ],
    Oman: [
      { englishName: "Tomato 1 kg", arabicName: "طماطم", price: 2.7, barcode: "968000000001" },
      { englishName: "Cucumber 600 g", arabicName: "خيار", price: 3.5, barcode: "968000000002" },
      { englishName: "Khalas Dates 500 g", arabicName: "تمر", price: 7.0, barcode: "968000000003" },
      { englishName: "Banana Philippines", arabicName: "موز", price: 4.2, barcode: "968000000004" },
      { englishName: "Apple Royal Gala", arabicName: "تفاح", price: 5.0, barcode: "968000000005" },
      { englishName: "Grapes Green Seedless", arabicName: "عنب", price: 6.8, barcode: "968000000006" },
      { englishName: "Orange Valencia", arabicName: "برتقال", price: 4.5, barcode: "968000000007" },
      { englishName: "Onion Loose 1 kg", arabicName: "بصل", price: 2.3, barcode: "968000000008" },
      { englishName: "Carrot Loose 1 kg", arabicName: "جزر", price: 3.0, barcode: "968000000009" },
      { englishName: "Lemon Yellow", arabicName: "ليمون", price: 3.6, barcode: "968000000010" },
    ],
  };

  const [currentDate, setCurrentDate] = useState("");
  const [manualDate, setManualDate] = useState("");
  const [manualTime, setManualTime] = useState("");
  const [isClient, setIsClient] = useState(false);
  const [itemCount, setItemCount] = useState(1);
  const [items, setItems] = useState([]);
  const [earnedPoints, setEarnedPoints] = useState(0);
  const [cashPaid, setCashPaid] = useState(0);
  const [change, setChange] = useState("0.00");
  const [totalAmount, setTotalAmount] = useState("0.00");
  const [beforeVat, setBeforeVat] = useState("0.00");
  const [vatAmount, setVatAmount] = useState("0.00");
  const [receiptNumber, setReceiptNumber] = useState("");
  const [barcodeNumber, setBarcodeNumber] = useState("662270110028263025070712956");


  const getAllItems = () => {
    return Object.values(gccItems).flat();
  };


  const generateReceiptNumber = () => {
    const last = parseInt(localStorage.getItem("lastReceipt")) || 1000;
    const next = last + 1;
    localStorage.setItem("lastReceipt", next);
    setReceiptNumber(next.toString());
  };


  const generateBarcodeNumber = () => {
    const lastBarcode = localStorage.getItem("lastBarcodeNumber") || "662270110028263025070712956";
    const nextBarcode = BigInt(lastBarcode) + 1n;
    const newBarcode = nextBarcode.toString().padStart(27, "0"); // ensures it's always 27 digits
    localStorage.setItem("lastBarcodeNumber", newBarcode);
    setBarcodeNumber(newBarcode);
  };


  useEffect(() => {
    if (isClient && barcodeNumber) {
      JsBarcode("#barcode", barcodeNumber, {
        format: "CODE128",
        width: 1.8,
        height: 20,
        displayValue: false, // We'll manually show below
      });
    }
  }, [isClient, barcodeNumber]);


  useEffect(() => {
    setIsClient(true);
  }, []);


  const updateDateTime = () => {
    if (manualDate && manualTime) {
      setCurrentDate(`${manualDate} ${manualTime}`);
    }
  };

  const handleAddRandomItems = () => {
    if (!itemCount || itemCount < 1) return;

    const allItems = getAllItems(); // ✅ Use all items
    const shuffled = [...allItems].sort(() => 0.5 - Math.random());
    const selectedItems = shuffled.slice(0, itemCount).map(item => ({
      ...item,
      quantity: 1,
    }));

    setItems(selectedItems);
    updateDateTime();
  };


  useEffect(() => {
    const totalRaw = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const roundedTotal = totalRaw.toFixed(2);
    const roundedCash = Math.ceil(totalRaw / 10) * 10;
    const cashChange = (roundedCash - totalRaw).toFixed(2);
    const calculatedPoints = Math.floor(totalRaw * 400);

    const calculatedBeforeVat = (totalRaw / 1.05).toFixed(2);
    const calculatedVatAmount = (totalRaw - totalRaw / 1.05).toFixed(2);

    // 🔁 Set state
    setTotalAmount(roundedTotal);
    setCashPaid(roundedCash);
    setChange(cashChange);
    setEarnedPoints(calculatedPoints);
    setBeforeVat(calculatedBeforeVat);
    setVatAmount(calculatedVatAmount);

  }, [items]);




  return (
    <div className="min-h-screen bg-white px-6 py-4 text-black font-mono">
      {/* 🎯 Inputs */}
      {isClient && (
        <div className="flex flex-wrap gap-3 items-center justify-center mb-5 no-print text-xs">
        
          <input
            type="number"
            min="1"
            placeholder="Number of items"
            value={itemCount}
            onChange={(e) => setItemCount(parseInt(e.target.value))}
            className="border rounded px-2 py-1 w-[130px]"
          />

          <input
            type="date"
            className="border rounded px-2 py-1"
            value={manualDate}
            onChange={(e) => setManualDate(e.target.value)}
          />
          <input
            type="time"
            className="border rounded px-2 py-1"
            value={manualTime}
            onChange={(e) => setManualTime(e.target.value)}
          />

          <button
            onClick={handleAddRandomItems}
            className="bg-black text-white px-4 py-1 rounded hover:bg-gray-700"
          >
            Add Random
          </button>
        </div>
      )}

      {/* 🧾 Receipt */}
      <div className="flex justify-center">
        <div className="w-[80mm] bg-white px-2 py-3 text-xs shadow text-black print:shadow-none">

          {/* Header */}
          <div className="text-center">
            <Image src={luluname} width={70} alt="Lulu Logo" className="mx-auto" priority />
            <p className="text-[13px]">Lulu Hypermarket LLC, Al Qusais, Dubai</p>
            <p className="text-[13px]">P.O.Box - 60168, TEL - 04 2988880</p>
            <p className="mt-5 text-[14px]">TRN: 100228723100003</p>
            <p className="font-bold border-y border-dashed py-1 my-1">TAX INVOICE <span className="font-arabic"> فاتورة ضريبية</span></p>
          </div>

          {/* Items */}

          <div className="text-[14px] text-center font-semibold mt-2">
            <span>You have earned {earnedPoints} Happiness Points</span>
          </div>
          <div className="text-[14px] pl-3">
            <span>Customer:  ********4043</span>
          </div>

          <div className="mt-3 text-[13px]">
            {items.map((item, index) => (
              <div key={index} className="mb-1">
                <div className="flex justify-between text-[13px]">
                  <div className="flex gap-5">
                    <span>{item.barcode}</span>
                    <span>{item.quantity}</span>
                  </div>
                  <span>S2</span>
                </div>
                <p className="text-[13px] font-arabic font-medium">{item.arabicName}</p>
                <div className="flex justify-between text-[13px]">
                  <span>{item.englishName}</span>
                  <span>{(item.price * item.quantity).toFixed(2)}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-dashed my-1" />

          {/* Totals */}
          <div className="text-[13px]">
            <div className="flex justify-between p-2">
              <div>
                <span>Total</span> <br />
                <span> Items : {items.length}</span>
              </div>
              <div>
                <span>{totalAmount}</span>
              </div>
            </div>

            <div className="flex gap-25">
              <span>CASH</span>
              <div className="flex gap-15">
                <span>AED </span>
                <span>{cashPaid.toFixed(2)}</span>
              </div>
            </div>
            <div className="flex gap-25">
              <span>CASH</span>
              <div className="flex gap-12">
                <span>Change</span>
                <span>{change}</span>
              </div>
            </div>

            <div className="p-2 text-[13px]">
              <p>Tax Inclusive: <span className=" font-arabic font-semibold"> الضريبة الشاملة</span></p>
            </div>
          </div>


          <div className="border-t border-dashed my-1" />

          {/* VAT Breakdown */}
          <div className="text-[13px] mt-1">
            {/* Header row */}
            <div className="flex justify-between">
              <span>Tax#</span>
              <span>VAT%</span>
              <span>Before VAT</span>
              <span>Incl. VAT</span>
              <span>VAT</span>
            </div>
            {/* Values row */}
            <div className="flex justify-between border-b border-dashed pb-1">
              <span>S2</span>
              <span>5</span>
              <span>{beforeVat}</span>
              <span>{totalAmount}</span>
              <span>{vatAmount}</span>
            </div>
          </div>

          <div className="text-[13px] border-b border-dashed p-2">
            <p >Served by: Pragati Gupta</p>
          </div>

          {/* date and time */}
          <div className="text-[13px] mt-1 border-b border-dashed pb-1">
            {/* Header row */}
            <div className="grid grid-cols-6 gap-2 text-left">
              <span className="col-span-2">Date</span>
              <span>Time</span>
              <span>Store</span>
              <span>POS</span>
              <span>Receipt</span>
            </div>

            {/* Values row */}
            <div className="grid grid-cols-6 gap-2 text-left mt-1">
              <span className="col-span-2">{manualDate || currentDate.split(" ")[0]}</span>
              <span>{manualTime || currentDate.split(" ")[1]}</span>
              <span>2270</span>
              <span>11</span>
              <span>{receiptNumber}</span>
            </div>
          </div>



          {/* Footer  */}
          <div className="text-center text-[13px] mt-1 border-b border-dashed pb-2">
            <p>Keep bill for Exchange within 7 Days</p>
            <p>Valid only at issued store. *T&C Apply</p>
            <p>Thank you for shopping</p>
            <p>Shop online at www.luluhypermarket.com</p>
            <p>Please carry useable bags for shopping</p>
            <p>حمل أكياس قابلة لإعادة الاستخدام للتسوق</p>
          </div>

          {/* Barcode */}
          {isClient && (
            <div className="flex flex-col items-center">
              <div>
                <svg id="barcode" className="w-75" />
              </div>
              <div>
                <span className="text-[14px] tracking-widest mt-1">{barcodeNumber}</span>
              </div>
            </div>
          )}

          <button
            className="no-print mt-4 w-full bg-black text-white py-1 rounded text-xs"
            onClick={() => {
              generateReceiptNumber(); // generate new number
              generateBarcodeNumber();  // update barcode number
              setTimeout(() => window.print(), 100); // slight delay to ensure it shows
            }}
          >
            Print Receipt
          </button>


        </div>
      </div>
    </div>
  );
}
