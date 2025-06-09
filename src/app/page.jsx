'use client';
import React from "react";
import { useState, useEffect } from "react";

const data = {
    Fruits: [
        { name: "Apple", arabic: "تفاحة" },
        { name: "Banana", arabic: "موز" },
        { name: "Orange", arabic: "برتقال" },
        { name: "Grapes", arabic: "عنب" },
        { name: "Mango", arabic: "مانجو" },
        { name: "Pineapple", arabic: "أناناس" },
        { name: "Strawberry", arabic: "فراولة" },
        { name: "Watermelon", arabic: "بطيخ" },
        { name: "Peach", arabic: "خوخ" },
        { name: "Pear", arabic: "كمثرى" },
        { name: "Kiwi", arabic: "كيوي" },
        { name: "Pomegranate", arabic: "رمان" },
        { name: "Lemon", arabic: "ليمون" },
        { name: "Lime", arabic: "ليم" },
        { name: "Cherry", arabic: "كرز" },
        { name: "Blueberry", arabic: "توت أزرق" },
        { name: "Blackberry", arabic: "توت أسود" },
        { name: "Raspberry", arabic: "توت العليق" },
        { name: "Fig", arabic: "تين" },
        { name: "Guava", arabic: "جوافة" },
        { name: "Papaya", arabic: "بابايا" },
        { name: "Coconut", arabic: "جوز الهند" },
        { name: "Avocado", arabic: "أفوكادو" },
        { name: "Plum", arabic: "برقوق" },
        { name: "Apricot", arabic: "مشمش" },
        { name: "Melon", arabic: "شمام" },
        { name: "Dates", arabic: "تمر" },
        { name: "Passion Fruit", arabic: "فاكهة العاطفة" },
        { name: "Dragon Fruit", arabic: "فاكهة التنين" },
        { name: "Lychee", arabic: "ليتشي" },
        { name: "Cranberry", arabic: "توت بري" },
        { name: "Jackfruit", arabic: "كاكايا" },
        { name: "Tangerine", arabic: "يوسفي" },
        { name: "Nectarine", arabic: "نكتارين" },
        { name: "Mulberry", arabic: "توت" },
        { name: "Gooseberry", arabic: "عنب الثعلب" },
        { name: "Starfruit", arabic: "فاكهة النجمة" },
        { name: "Persimmon", arabic: "كاكي" },
        { name: "Cantaloupe", arabic: "شمام كوز العسل" },
        { name: "Breadfruit", arabic: "فاكهة الخبز" },
        { name: "Rambutan", arabic: "رامبوتان" },
        { name: "Sapodilla", arabic: "سابوديلا" },
        { name: "Longan", arabic: "لونجان" },
        { name: "Currant", arabic: "زبيب" },
        { name: "Olive", arabic: "زيتون" },
        { name: "Soursop", arabic: "قشطة" },
        { name: "Quince", arabic: "سفرجل" },
        { name: "Tamarind", arabic: "تمر هندي" },
        { name: "Ugli Fruit", arabic: "فاكهة القبيحة" },
        { name: "Medlar", arabic: "ميدلار" }
    ],
    Vegetables: [
        { name: "Tomato", arabic: "طماطم" },
        { name: "Potato", arabic: "بطاطا" },
        { name: "Carrot", arabic: "جزر" },
        { name: "Spinach", arabic: "سبانخ" },
        { name: "Onion", arabic: "بصل" },
        { name: "Garlic", arabic: "ثوم" },
        { name: "Cabbage", arabic: "ملفوف" },
        { name: "Cauliflower", arabic: "قرنبيط" },
        { name: "Broccoli", arabic: "بروكلي" },
        { name: "Cucumber", arabic: "خيار" },
        { name: "Eggplant", arabic: "باذنجان" },
        { name: "Peas", arabic: "بازلاء" },
        { name: "Green Beans", arabic: "فاصوليا خضراء" },
        { name: "Corn", arabic: "ذرة" },
        { name: "Lettuce", arabic: "خس" },
        { name: "Bell Pepper", arabic: "فلفل رومي" },
        { name: "Chili Pepper", arabic: "فلفل حار" },
        { name: "Zucchini", arabic: "كوسا" },
        { name: "Pumpkin", arabic: "قرع" },
        { name: "Sweet Potato", arabic: "بطاطا حلوة" },
        { name: "Turnip", arabic: "لفت" },
        { name: "Radish", arabic: "فجل" },
        { name: "Mushroom", arabic: "فطر" },
        { name: "Okra", arabic: "بامية" },
        { name: "Celery", arabic: "كرفس" },
        { name: "Leek", arabic: "كراث" },
        { name: "Beetroot", arabic: "شمندر" },
        { name: "Artichoke", arabic: "خرشوف" },
        { name: "Asparagus", arabic: "هليون" },
        { name: "Chard", arabic: "سلق" },
        { name: "Arugula", arabic: "جرجير" },
        { name: "Yam", arabic: "يام" },
        { name: "Coriander", arabic: "كزبرة" },
        { name: "Parsley", arabic: "بقدونس" },
        { name: "Mint", arabic: "نعناع" },
        { name: "Dill", arabic: "شبت" },
        { name: "Fennel", arabic: "شمر" },
        { name: "Bok Choy", arabic: "ملفوف صيني" },
        { name: "Kale", arabic: "كرنب أجعد" },
        { name: "Mustard Greens", arabic: "خردل أخضر" },
        { name: "Horseradish", arabic: "فجل حار" },
        { name: "Rutabaga", arabic: "اللفت الأصفر" },
        { name: "Endive", arabic: "هندباء" },
        { name: "Brussels Sprouts", arabic: "كرنب بروكسل" },
        { name: "Taro", arabic: "قلقاس" },
        { name: "Cassava", arabic: "كسافا" },
        { name: "Watercress", arabic: "جرجير مائي" },
        { name: "Scallion", arabic: "بصل أخضر" },
        { name: "Spring Onion", arabic: "بصل ربيعي" },
        { name: "Snake Gourd", arabic: "قرع الأفعى" }
    ]
};

  const Page = () => {
    const [items, setItems] = useState([]);
    const [category, setCategory] = useState("Fruits");
    const [selectedItem, setSelectedItem] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState("");
    const [orderId, setOrderId] = useState("");
    // const [currentDateTime, setCurrentDateTime] = useState(new Date());


    const generateOrderId = () => Date.now().toString();

    const handleAddItem = () => {
        if (!selectedItem || !price || quantity <= 0) return;

        const itemData = data[category].find((i) => i.name === selectedItem);

        const newItem = {
            name: itemData.name,
            arabic: itemData.arabic,
            quantity,
            price,
            id: Date.now()
        };

        setItems([...items, newItem]);
        setSelectedItem("");
        setQuantity(1);
        setPrice("");
    };


    const calculateTotal = () =>
        items.reduce((total, item) => total + item.quantity * parseFloat(item.price), 0);

    useEffect(() => {
        setOrderId(generateOrderId());
    }, []);

    const now = new Date();


    // Format date as dd.mm.yy
    const formatDate = (date) => {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = String(date.getFullYear()).slice(2);
        return `${day}.${month}.${year}`;
    };


    const formatTime = (date) => {
        // getHours() returns hours in 24-hour format (0-23)
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        return `${hours}:${minutes}`;
    };


    console.log(formatTime(new Date())); // e.g. "14:07"



    // Calculate VAT and Net Total
    const total = calculateTotal();
    const vatRate = 0.05; // 5%
    const vatAmount = total * vatRate;
    const netTotal = total + vatAmount;

    const totalItemsCount = items.reduce((acc, item) => acc + item.quantity, 0);



    return (
        <div className="min-h-screen bg-white p-6 text-black font-mono">
            <h1 className="text-3xl font-bold text-center mb-8 no-print">
                Waitrose Receipt Generator
            </h1>

            {/* Item Input Section */}
            <div className="flex flex-wrap gap-4 mb-6 justify-center no-print">
                <select
                    value={category}
                    onChange={(e) => {
                        setCategory(e.target.value);
                        setSelectedItem("");
                    }}
                    className="border rounded px-3 py-2 w-40"
                >
                    <option value="Fruits">Fruits</option>
                    <option value="Vegetables">Vegetables</option>
                </select>

                <select
                    value={selectedItem}
                    onChange={(e) => setSelectedItem(e.target.value)}
                    className="border rounded px-3 py-2 w-40"
                >
                    <option value="">Select item</option>
                    {data[category].map((item) => (
                        <option key={item.name} value={item.name}>
                            {item.name} ({item.arabic})
                        </option>
                    ))}
                </select>


                <input
                    type="number"
                    placeholder="Qty"
                    value={quantity}
                    min="1"
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                    className="border rounded px-3 py-2 w-24"
                />

                <input
                    type="number"
                    placeholder="Price"
                    value={price}
                    min="0"
                    onChange={(e) => setPrice(e.target.value)}
                    className="border rounded px-3 py-2 w-24"
                />

                <button
                    onClick={handleAddItem}
                    className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
                >
                    Add Item
                </button>
            </div>

            {/* Receipt Section */}
            <div
                id="receipt"
                className="receipt-container max-w-sm mx-auto bg-white border border-black p-4 text-sm print:w-[300px]"
            >
                <div className="text-center mb-4 leading-tight">
                    <h2 className="text-xl font-bold tracking-wide">Waitrose ويتروز</h2>
                    <p className="text-xs mt-1">لا تنسى حقيبة التسوق الصديقة للبيئة</p>
                    <p className="text-xs mb-2">Don't forget your reusable bags</p>
                    <div className="text-xs flex justify-center gap-5 border-t border-b border-dotted py-1 mt-2">
                        <div>
                            <p>Waitrose.ae:</p>
                            <p>Address:</p>
                        </div>
                        <div>
                            <p>04-5727484</p>
                            <p>LG – 144, Financial Centre Road, Downtown Dubai</p>
                        </div>
                    </div>

                    <div className="flex justify-between mt-2 border-b border-dotted py-2">
                        <p> Date: {formatDate(now)}</p>
                        <p>Time: {formatTime(now)}</p>
                    </div>

                    <div className="text-xs mt-2 text-left border-b border-dotted py-1">
                        <p className="flex justify-between">
                            <span>Tax Invoice</span>
                            <span>فاتورة ضريبية</span>
                        </p>
                        <p className="flex justify-between">
                            <span>TRN: 100251929000001</span>
                            <span>رقم التسجيل الضريبي</span>
                        </p>
                        <div className="mt-5 flex justify-between">
                            <span>your cashier today was</span>
                            <span>أمين الصندوق</span>
                        </div>
                    </div>
                </div>

                <div>
                    <p>MARILYN</p>
                </div>
                <div>
                    <p className="flex gap-20 mt-2">
                        <span>ORDER ID</span>
                        <span>{orderId}</span>
                    </p>
                </div>

                <table className="w-full text-left text-sm mb-4">
                    <tbody>
                        {items.length > 0 ? (
                            items.map((item) => (
                                <tr key={item.id}>
                                    <td className="py-1">
                                        {item.name} {item.arabic}
                                    </td>
                                    <td className="py-1 text-right">
                                        AED {(item.quantity * parseFloat(item.price)).toFixed(2)}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="2" className="text-center text-gray-400 py-2">
                                    No items added.
                                </td>
                            </tr>
                        )}

                    </tbody>
                </table>

                 <div className=" flex gap-5 tracking-widest">
                        <span className="uppercase"> Items:</span>
                        <span>{totalItemsCount}</span>
                    </div>

                <div className="pt-2 mt-4 text-sm font-mono border-b border-dotted pb-5">
                    {/* Total */}
                    <div className="flex justify-between font-bold uppercase tracking-widest">
                        <span className="uppercase tracking-[0.7em]">Total</span>
                        <span>{total.toFixed(2)}</span>
                    </div>

                    {/* Instashop Label */}
                    <div className="flex justify-between mt-2 tracking-widest">
                        <span>Instashop</span>
                        <span>AED</span>
                        <span>{total.toFixed(2)}</span>
                    </div>

                    {/* Net Total */}
                    <div className="flex justify-between uppercase mt-1 tracking-widest">
                        <span>Net Total</span>
                        <span>VAT V</span>
                        <span>{netTotal.toFixed(2)}</span>
                    </div>

                    {/* VAT */}
                    <div className="flex justify-between mt-1 text-sm">
                        <span>VAT</span>
                        <span>05.0%</span>
                        <span>{vatAmount.toFixed(2)}</span>
                    </div>
                </div>

                {/* <div className="text-[12px] sm:text-xs font-mono text-center mt-2 border-b border-dotted pb-5 tracking-tight">
                     2072&nbsp;0009/006/102&nbsp;{formatDate(now)}&nbsp;{formatTime(now)}&nbsp;AC-00
                </div> */}



                <div className="w-full max-w-xs mx-auto px-4 flex flex-col items-center mt-4 text-center text-xs">
                    <p>شكراً لتسوقك معنا</p>
                    <p>Thank you for shopping with us</p>
                    <p className="mt-2">
                        We are happy to refund or exchange any item that you are not 100% satisfied with
                    </p>
                    <p className="mt-2">Did you enjoy your shopping experience?</p>
                    <p>Do you think we could improve?</p>
                    <p>We would love to hear your feedback.</p>
                </div>
            </div>

            {/* Print Button */}
            <div className="mt-6 flex justify-center no-print">
                <button
                    onClick={() => {
                        setOrderId(generateOrderId());
                        setTimeout(() => window.print(), 100);
                    }}
                    className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                >
                    Print Receipt
                </button>
            </div>
        </div>
    );
}

export default Page
