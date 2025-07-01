'use client';

import React, { useState } from 'react';

// Add barcode and Arabic label to each item
const data = {
  Fruits: [
    "Apple", "Banana", "Orange", "Grapes", "Mango", "Pineapple", "Strawberry", "Watermelon",
    "Peach", "Pear", "Kiwi", "Pomegranate", "Lemon", "Lime", "Cherry", "Blueberry", "Blackberry",
    "Raspberry", "Fig", "Guava", "Papaya", "Coconut", "Avocado", "Plum", "Apricot", "Melon", "Dates",
    "Passion Fruit", "Dragon Fruit", "Lychee", "Cranberry", "Jackfruit", "Tangerine", "Nectarine",
    "Mulberry", "Gooseberry", "Starfruit", "Persimmon", "Cantaloupe", "Breadfruit", "Rambutan",
    "Sapodilla", "Longan", "Currant", "Olive", "Soursop", "Quince", "Tamarind", "Ugli Fruit", "Medlar"
  ].map((name, i) => ({ name, barcode: `${13000 + i}` })),

  Vegetables: [
    "Tomato", "Potato", "Carrot", "Spinach", "Onion", "Garlic", "Cabbage", "Cauliflower", "Broccoli",
    "Cucumber", "Eggplant", "Peas", "Green Beans", "Corn", "Lettuce", "Bell Pepper", "Chili Pepper",
    "Zucchini", "Pumpkin", "Sweet Potato", "Turnip", "Radish", "Mushroom", "Okra", "Celery", "Leek",
    "Beetroot", "Artichoke", "Asparagus", "Chard", "Arugula", "Yam", "Coriander", "Parsley", "Mint",
    "Dill", "Fennel", "Bok Choy", "Kale", "Mustard Greens", "Horseradish", "Rutabaga", "Endive",
    "Brussels Sprouts", "Taro", "Cassava", "Watercress", "Scallion", "Spring Onion", "Snake Gourd"
  ].map((name, i) => ({ name, barcode: `${120000 + i}` }))
};

export default function ReceiptPage() {
  const [invoiceNo, setInvoiceNo] = useState(generateOrderId());
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('Vegetables');

  function generateOrderId() {
    return Date.now().toString().slice(-8);
  }

  const handlePrint = () => {
    setInvoiceNo(generateOrderId());
    setTimeout(() => window.print(), 100);
  };

  const handleAddItem = () => {
    if (!itemName || !price || quantity <= 0) return;
    const selectedItem = data[category].find((item) => item.name === itemName);
    if (!selectedItem) return;

    setItems([
      ...items,
      {
        id: Date.now(),
        itemName,
        barcode: selectedItem.barcode,
        quantity: parseInt(quantity),
        price: parseFloat(price),
      },
    ]);

    setItemName('');
    setQuantity(1);
    setPrice('');
  };

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const vatRate = 0.05;
  const vatAmount = total * vatRate;
  const netTotal = total + vatAmount;

  return (
    <div className="bg-white text-black text-[12px] font-mono">
      {/* Input Fields */}
      <div className="flex flex-wrap gap-2 justify-center mb-6 no-print">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border px-2 py-1 rounded"
        >
          <option value="Fruits">Fruits</option>
          <option value="Vegetables">Vegetables</option>
        </select>

        <select
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          className="border px-2 py-1 rounded"
        >
          <option value="">Select Item</option>
          {data[category].map((item) => (
            <option key={item.name} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>

        <input
          type="number"
          placeholder="Qty"
          className="border px-2 py-1 rounded w-20"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
        <input
          type="number"
          placeholder="Price"
          className="border px-2 py-1 rounded w-20"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button
          className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
          onClick={handleAddItem}
        >
          Add Item
        </button>
      </div>

      {/* Receipt */}
      <div className="w-[80mm] mx-auto p-2 border border-gray-300">
        <div className="text-center mb-3">
          <div className="text-3xl font-bold leading-tight">Madinath <br /> Market</div>
          <p className="mt-1 leading-snug">
            JARS AL MADINA SUPERMARKET<br />
            AL QUOZ<br />
            DUBAI - UAE<br />
            TEL: 04 3384 142, MOB: +971 56 503 1171
          </p>
        </div>

        <div className="text-center mb-2">
          TRN.# 100506031200003<br />
          <div className="font-bold">TAX INVOICE</div>
        </div>

        <div className="space-y-[3px] font-bold my-2">
          {[
            ['Invoice No', invoiceNo, 'رقم الفاتورة'],
            ['Date', new Date().toLocaleDateString(), 'تاريخ'],
            ['Time', new Date().toLocaleTimeString(), 'الوقت'],
            ['Terminal', '3', 'نقطة البيع'],
            ['Cashier', 'JARS-CASHIER3', 'الكاشير'],
            ['Shift No', '1', 'الوردية'],
            ['Location', 'JARS AL MADINA', 'موقع'],
          ].map(([label, value, arabic], i) => (
            <div
              key={i}
              className="grid grid-cols-[100px_10px_120px_10px_auto] gap-x-1 items-center"
            >
              <span>{label}</span>
              <span>:</span>
              <span>{value}</span>
              <span>:</span>
              <span className="font-sans text-right">{arabic}</span>
            </div>
          ))}
        </div>

        <div className="border-t border-dashed border-black my-2" />

        <div className="grid grid-cols-4 text-center font-bold text-xs">
          {['Barcode', 'Qty', 'RSP', 'Amount'].map((eng, i) => (
            <div key={i}>
              {eng}
              <br />
              <span className="text-[10px] font-sans">
                {['الرمز', 'الكمية', 'السعر', 'المبلغ'][i]}
              </span>
            </div>
          ))}
        </div>

        <div className="border-t border-dashed border-black my-2" />

        {/* Dynamic Item List */}
        {items.map((item, i) => (
          <div key={item.id}>
            <div className="text-[13px] font-semibold mt-2">
              {item.itemName}
            </div>
            <div className="grid grid-cols-4 font-semibold text-center text-[11px]">
              <span>{item.barcode}</span>
              <span>{item.quantity}</span>
              <span>{item.price.toFixed(2)}</span>
              <span>TS</span>
            </div>
          </div>
        ))}

        <div className="border-t border-dashed border-black my-2" />

        <div className="mt-3">
          <div className="flex justify-end font-bold text-[12px]">
            <span className="mr-2">Net Amount:</span>
            <span>{netTotal.toFixed(2)}</span>
          </div>
          <div className="text-[10px] text-right font-sans">صافي الإجمالي</div>
        </div>

        <div className="border-t border-dashed border-black my-2" />

        <div className="grid grid-cols-4 text-center font-bold text-xs">
          {['Tax Code', 'Taxable Amount', 'VAT Amount', 'Net Amount'].map((label, i) => (
            <div key={i}>
              {label}
              <br />
              <span className="text-[10px] font-sans">
                {['نسبة', 'المبلغ الخاضع', 'مبلغ الضريبة', 'صافي الإجمالي'][i]}
              </span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-4 text-center text-[11px] mt-1">
          <span>T5</span>
          <span>{total.toFixed(2)}</span>
          <span>{vatAmount.toFixed(2)}</span>
          <span>{netTotal.toFixed(2)}</span>
        </div>

        <div className="border-t border-dashed border-black my-2" />

        <div className="text-center text-[11px] leading-4 mt-2">
          <div>THANK YOU FOR SHOPPING</div>
          <div>KEEP RECEIPT FOR EXCHANGE</div>
          <div>NO CASH REFUND. T&C APPLY</div>
        </div>
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
  );
}
