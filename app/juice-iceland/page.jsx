'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import logo from '/public/iceland.png';

const data = {
  "Natural Juice": ["Watermelon","Grape","Pine Apple","Orange","Carrot","Mosambi","Beetroot","Carrot Beetroot Mix"].map((name,i)=>({name,barcode:`${1000+i}`})),
  "Milk Shake": ["Chocolate Shake","Vanilla","Strawberry","Butter Scotch","Black Currant","Dry Fruit Punch"].map((name,i)=>({name,barcode:`${2000+i}`})),
  "Dry Fruit Milk Shakes": ["Baddam Milk Shake","Kaju Milk Shake","Dry Fruit Mixed","Badam Anjeer Mixed","Kaju Kismiss","Kaju Badam Mixed"].map((name,i)=>({name,barcode:`${3000+i}`})),
  "Lassi": ["Sweet Lassi","Mango Lassi","Banana Lassi","Fruit Lassi","Lassi with Icecream"].map((name,i)=>({name,barcode:`${4000+i}`})),
  "Fruit Milkshake": ["Banana","Pineapple","Apple","Grapes","Muskmelon","Sapota","Papaya","Pomegranate","Strawberry","Anjeer Shake"].map((name,i)=>({name,barcode:`${5000+i}`})),
  "Sagar Cane": ["Sugar Cane Plan","Sugar Cane Ginger","Sugar Cane Lemon","Sugar Cane 1 Lt","Lemon with Soda","Badam Milk","Butter Milk"].map((name,i)=>({name,barcode:`${6000+i}`})),
  "Fruit Salad": ["Fruit Salad","Cut Fruit","Dry Fruit Salad"].map((name,i)=>({name,barcode:`${7000+i}`})),
  "SPL Juices": ["Oreo Milk Shake","Kitkat Milk Shake","Kiwi Milk Shake","Dragon Milk Shake"].map((name,i)=>({name,barcode:`${8000+i}`}))
};

export default function ReceiptPage() {
  const [invoiceNo,setInvoiceNo] = useState(generateOrderId());
  const [items,setItems] = useState([]);
  const [itemName,setItemName] = useState('');
  const [quantity,setQuantity] = useState(1);
  const [price,setPrice] = useState('');
  const [category,setCategory] = useState('Natural Juice');

  function generateOrderId(){ return Math.floor(1000 + Math.random()*9000); }

  const handlePrint = () => { setInvoiceNo(generateOrderId()); setTimeout(()=>window.print(),100); }

  const handleAddItem = () => {
    if(!itemName || !price || quantity<=0) return;
    const selectedItem = data[category].find(item=>item.name===itemName);
    if(!selectedItem) return;
    setItems([...items,{id:Date.now(),itemName,quantity,price:Number(price)}]);
    setItemName(''); setQuantity(1); setPrice('');
  };

  const total = items.reduce((sum,item)=>sum + item.price*item.quantity,0);
  const serviceCharge = total*0.1;
  const netTotal = total+serviceCharge;

  function numberToWords(n){ return n.toFixed(2); }

  return (
    <div className="text-black text-[14px] font-mono bg-white p-4">
      {/* Inputs */}
      <div className="flex gap-2 mb-4 no-print text-[14px]">
        <select value={category} onChange={e=>{setCategory(e.target.value);setItemName('');}} className="border p-2 rounded">
          {Object.keys(data).map(cat=><option key={cat} value={cat}>{cat}</option>)}
        </select>
        <select value={itemName} onChange={e=>setItemName(e.target.value)} disabled={!category} className="border p-2 rounded">
          <option value="">Select Item</option>
          {data[category]?.map(item=><option key={item.name} value={item.name}>{item.name}</option>)}
        </select>
        <input type="number" placeholder="Qty" value={quantity} onChange={e=>setQuantity(Number(e.target.value))} className="border p-2 w-20 rounded" min={1}/>
        <input type="number" placeholder="Rate" value={price} onChange={e=>setPrice(e.target.value)} className="border p-2 w-20 rounded" min={0}/>
        <button onClick={handleAddItem} className="bg-green-600 text-white px-4 rounded hover:bg-green-700">Add</button>
      </div>

      {/* Receipt */}
      <div className="w-[80mm] mx-auto border p-4">
        {/* Header */}
        <div className="text-center mb-3">
          <Image src={logo} alt="Logo" width={100} height={100} className="mx-auto mb-2"/>
          <div className="text-[13px]">Juice Island 12-A, Commercial Area, Phase 3, DHA Lahore, Punjab, Pakistan</div>
          <div className="text-[13px]">Ph:(042) 1234567 | info@juiceisland.pk</div>
        </div>

        {/* Bill Info */}
        <div className="text-[14px] mb-2">
          <div className="flex justify-between"><span>Bill No: {invoiceNo}</span><span>Date: {new Date().toLocaleDateString()}</span></div>
          <div className="flex justify-between"><span>Time: {new Date().toLocaleTimeString()}</span><span>Pax: 1</span></div>
        </div>

        <hr className="border-dashed border-t border-black my-1"/>

        {/* Items */}
        <div className="grid grid-cols-4 text-[13px] font-bold text-center"><span>Item Name</span><span>Qty</span><span>Rate</span><span>Amount</span></div>
        <hr className="border-dashed border-t border-black my-1"/>
        {items.map(item=>(
          <div key={item.id} className="grid grid-cols-4 text-[14px] text-center">
            <span>{item.itemName}</span>
            <span>{item.quantity}</span>
            <span>{item.price.toFixed(2)}</span>
            <span>{(item.price*item.quantity).toFixed(2)}</span>
          </div>
        ))}
        <hr className="border-dashed border-t border-black my-1"/>

        {/* Totals */}
        <div className="text-[14px]">
          <div className="flex justify-between"><span>Sub Total:</span><span>{total.toFixed(2)}</span></div>
          <div className="flex justify-between"><span>Service Charge (10%):</span><span>{serviceCharge.toFixed(2)}</span></div>
          <div className="flex justify-between font-bold"><span>Net Total:</span><span>{netTotal.toFixed(2)}</span></div>
          <div className="mt-1 text-[12px]">Words: {numberToWords(netTotal)}</div>
        </div>

        <hr className="border-dashed border-t border-black my-1"/>
        <div className="text-center text-[13px] mt-2">Thank You, Visit Again</div>
      </div>

      <div className="flex justify-center mt-4 no-print">
        <button onClick={handlePrint} className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 text-[14px]">Print Receipt</button>
      </div>
    </div>
  );
}
