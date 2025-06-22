'use client';
import { useState } from "react";

const items = {
    Fruits: [
        { name: "Apple", arabic: "تفاحة" , price: Math.random() * (3 - 1) + 1 },
        { name: "Banana", arabic: "موز" , price: Math.random() * (3 - 1) + 1 },
        { name: "Orange", arabic: "برتقال", price: Math.random() * (3 - 1) + 1 },
        { name: "Grapes", arabic: "عنب" , price: Math.random() * (3 - 1) + 1},
        { name: "Mango", arabic: "مانجو" , price: Math.random() * (3 - 1) + 1},
        { name: "Pineapple", arabic: "أناناس" , price: Math.random() * (3 - 1) + 1},
        { name: "Strawberry", arabic: "فراولة" , price: Math.random() * (3 - 1) + 1},
        { name: "Watermelon", arabic: "بطيخ" , price: Math.random() * (3 - 1) + 1},
        { name: "Peach", arabic: "خوخ" , price: Math.random() * (3 - 1) + 1},
        { name: "Pear", arabic: "كمثرى" , price: Math.random() * (3 - 1) + 1},
        { name: "Kiwi", arabic: "كيوي" , price: Math.random() * (3 - 1) + 1},
        { name: "Pomegranate", arabic: "رمان" , price: Math.random() * (3 - 1) + 1},
        { name: "Lemon", arabic: "ليمون" , price: Math.random() * (3 - 1) + 1},
        { name: "Lime", arabic: "ليم" , price: Math.random() * (3 - 1) + 1},
        { name: "Cherry", arabic: "كرز" , price: Math.random() * (3 - 1) + 1},
        { name: "Blueberry", arabic: "توت أزرق", price: Math.random() * (3 - 1) + 1 },
        { name: "Blackberry", arabic: "توت أسود" , price: Math.random() * (3 - 1) + 1},
        { name: "Raspberry", arabic: "توت العليق" , price: Math.random() * (3 - 1) + 1},
        { name: "Fig", arabic: "تين", price: Math.random() * (3 - 1) + 1 },
        { name: "Guava", arabic: "جوافة" , price: Math.random() * (3 - 1) + 1},
        { name: "Papaya", arabic: "بابايا", price: Math.random() * (3 - 1) + 1 },
        { name: "Coconut", arabic: "جوز الهند", price: Math.random() * (3 - 1) + 1 },
        { name: "Avocado", arabic: "أفوكادو", price: Math.random() * (3 - 1) + 1 },
        { name: "Plum", arabic: "برقوق" , price: Math.random() * (3 - 1) + 1},
        { name: "Apricot", arabic: "مشمش" , price: Math.random() * (3 - 1) + 1},
        { name: "Melon", arabic: "شمام" , price: Math.random() * (3 - 1) + 1},
        { name: "Dates", arabic: "تمر" , price: Math.random() * (3 - 1) + 1},
        { name: "Passion Fruit", arabic: "فاكهة العاطفة", price: Math.random() * (3 - 1) + 1 },
        { name: "Dragon Fruit", arabic: "فاكهة التنين", price: Math.random() * (3 - 1) + 1},
        { name: "Lychee", arabic: "ليتشي" , price: Math.random() * (3 - 1) + 1},
        { name: "Cranberry", arabic: "توت بري", price: Math.random() * (3 - 1) + 1 },
        { name: "Jackfruit", arabic: "كاكايا", price: Math.random() * (3 - 1) + 1 },
        { name: "Tangerine", arabic: "يوسفي" , price: Math.random() * (3 - 1) + 1},
        { name: "Nectarine", arabic: "نكتارين" , price: Math.random() * (3 - 1) + 1},
        { name: "Mulberry", arabic: "توت", price: Math.random() * (3 - 1) + 1 },
        { name: "Gooseberry", arabic: "عنب الثعلب", price: Math.random() * (3 - 1) + 1 },
        { name: "Starfruit", arabic: "فاكهة النجمة" , price: Math.random() * (3 - 1) + 1},
        { name: "Persimmon", arabic: "كاكي", price: Math.random() * (3 - 1) + 1 },
        { name: "Cantaloupe", arabic: "شمام كوز العسل" , price: Math.random() * (3 - 1) + 1},
        { name: "Breadfruit", arabic: "فاكهة الخبز" , price: Math.random() * (3 - 1) + 1},
        { name: "Rambutan", arabic: "رامبوتان" , price: Math.random() * (3 - 1) + 1},
        { name: "Sapodilla", arabic: "سابوديلا" , price: Math.random() * (3 - 1) + 1},
        { name: "Longan", arabic: "لونجان", price: Math.random() * (3 - 1) + 1 },
        { name: "Currant", arabic: "زبيب" , price: Math.random() * (3 - 1) + 1},
        { name: "Olive", arabic: "زيتون" , price: Math.random() * (3 - 1) + 1},
        { name: "Soursop", arabic: "قشطة", price: Math.random() * (3 - 1) + 1 },
        { name: "Quince", arabic: "سفرجل" , price: Math.random() * (3 - 1) + 1},
        { name: "Tamarind", arabic: "تمر هندي" , price: Math.random() * (3 - 1) + 1},
        { name: "Ugli Fruit", arabic: "فاكهة القبيحة" , price: Math.random() * (3 - 1) + 1},
        { name: "Medlar", arabic: "ميدلار" , price: Math.random() * (3 - 1) + 1}
    ],
    Vegetables: [
        { name: "Tomato", arabic: "طماطم", price: Math.random() * (3 - 1) + 1 },
        { name: "Potato", arabic: "بطاطا", price: Math.random() * (3 - 1) + 1 },
        { name: "Carrot", arabic: "جزر", price: Math.random() * (3 - 1) + 1 },
        { name: "Spinach", arabic: "سبانخ", price: Math.random() * (3 - 1) + 1 },
        { name: "Onion", arabic: "بصل", price: Math.random() * (3 - 1) + 1 },
        { name: "Garlic", arabic: "ثوم", price: Math.random() * (3 - 1) + 1 },
        { name: "Cabbage", arabic: "ملفوف", price: Math.random() * (3 - 1) + 1 },
        { name: "Cauliflower", arabic: "قرنبيط", price: Math.random() * (3 - 1) + 1 },
        { name: "Broccoli", arabic: "بروكلي", price: Math.random() * (3 - 1) + 1 },
        { name: "Cucumber", arabic: "خيار", price: Math.random() * (3 - 1) + 1 },
        { name: "Eggplant", arabic: "باذنجان", price: Math.random() * (3 - 1) + 1 },
        { name: "Peas", arabic: "بازلاء", price: Math.random() * (3 - 1) + 1 },
        { name: "Green Beans", arabic: "فاصوليا خضراء", price: Math.random() * (3 - 1) + 1 },
        { name: "Corn", arabic: "ذرة", price: Math.random() * (3 - 1) + 1 },
        { name: "Lettuce", arabic: "خس", price: Math.random() * (3 - 1) + 1 },
        { name: "Bell Pepper", arabic: "فلفل رومي", price: Math.random() * (3 - 1) + 1 },
        { name: "Chili Pepper", arabic: "فلفل حار", price: Math.random() * (3 - 1) + 1 },
        { name: "Zucchini", arabic: "كوسا", price: Math.random() * (3 - 1) + 1 },
        { name: "Pumpkin", arabic: "قرع", price: Math.random() * (3 - 1) + 1 },
        { name: "Sweet Potato", arabic: "بطاطا حلوة", price: Math.random() * (3 - 1) + 1 },
        { name: "Turnip", arabic: "لفت", price: Math.random() * (3 - 1) + 1 },
        { name: "Radish", arabic: "فجل", price: Math.random() * (3 - 1) + 1 },
        { name: "Mushroom", arabic: "فطر", price: Math.random() * (3 - 1) + 1 },
        { name: "Okra", arabic: "بامية", price: Math.random() * (3 - 1) + 1 },
        { name: "Celery", arabic: "كرفس", price: Math.random() * (3 - 1) + 1 },
        { name: "Leek", arabic: "كراث", price: Math.random() * (3 - 1) + 1 },
        { name: "Beetroot", arabic: "شمندر", price: Math.random() * (3 - 1) + 1 },
        { name: "Artichoke", arabic: "خرشوف", price: Math.random() * (3 - 1) + 1 },
        { name: "Asparagus", arabic: "هليون", price: Math.random() * (3 - 1) + 1 },
        { name: "Chard", arabic: "سلق", price: Math.random() * (3 - 1) + 1 },
        { name: "Arugula", arabic: "جرجير", price: Math.random() * (3 - 1) + 1 },
        { name: "Yam", arabic: "يام", price: Math.random() * (3 - 1) + 1 },
        { name: "Coriander", arabic: "كزبرة", price: Math.random() * (3 - 1) + 1 },
        { name: "Parsley", arabic: "بقدونس", price: Math.random() * (3 - 1) + 1 },
        { name: "Mint", arabic: "نعناع", price: Math.random() * (3 - 1) + 1 },
        { name: "Dill", arabic: "شبت", price: Math.random() * (3 - 1) + 1 },
        { name: "Fennel", arabic: "شمر", price: Math.random() * (3 - 1) + 1 },
        { name: "Bok Choy", arabic: "ملفوف صيني", price: Math.random() * (3 - 1) + 1 },
        { name: "Kale", arabic: "كرنب أجعد", price: Math.random() * (3 - 1) + 1 },
        { name: "Mustard Greens", arabic: "خردل أخضر", price: Math.random() * (3 - 1) + 1 },
        { name: "Horseradish", arabic: "فجل حار", price: Math.random() * (3 - 1) + 1 },
        { name: "Rutabaga", arabic: "اللفت الأصفر", price: Math.random() * (3 - 1) + 1 },
        { name: "Endive", arabic: "هندباء", price: Math.random() * (3 - 1) + 1 },
        { name: "Brussels Sprouts", arabic: "كرنب بروكسل", price: Math.random() * (3 - 1) + 1 },
        { name: "Taro", arabic: "قلقاس", price: Math.random() * (3 - 1) + 1 },
        { name: "Cassava", arabic: "كسافا", price: Math.random() * (3 - 1) + 1 },
        { name: "Watercress", arabic: "جرجير مائي", price: Math.random() * (3 - 1) + 1 },
        { name: "Scallion", arabic: "بصل أخضر", price: Math.random() * (3 - 1) + 1 },
        { name: "Spring Onion", arabic: "بصل ربيعي", price: Math.random() * (3 - 1) + 1 },
        { name: "Snake Gourd", arabic: "قرع الأفعى", price: Math.random() * (3 - 1) + 1 },
        { name: "Chili Bean", arabic: "فاصوليا حارة", price: Math.random() * (3 - 1) + 1 },
        { name: "Daikon", arabic: "دايكون", price: Math.random() * (3 - 1) + 1 },
        { name: "Jalapeno", arabic: "هالبينو", price: Math.random() * (3 - 1) + 1 },
        { name: "Pumpkin Squash", arabic: "قرع العسل", price: Math.random() * (3 - 1) + 1 },
        { name: "Shallot", arabic: "شالوت", price: Math.random() * (3 - 1) + 1 },
        { name: "Fiddlehead Fern", arabic: "سرخس الفيدلهيد", price: Math.random() * (3 - 1) + 1 },
        { name: "Ginger", arabic: "زنجبيل", price: Math.random() * (3 - 1) + 1 },
        { name: "Turmeric", arabic: "كركم", price: Math.random() * (3 - 1) + 1 },
        { name: "Sweet Corn", arabic: "ذرة حلوة", price: Math.random() * (3 - 1) + 1 },
        { name: "Chard Swiss", arabic: "سلق سويسري", price: Math.random() * (3 - 1) + 1 },
        { name: "Mache", arabic: "ماشي", price: Math.random() * (3 - 1) + 1 },
        { name: "Kohlrabi", arabic: "كحلربي", price: Math.random() * (3 - 1) + 1 },
        { name: "Pattypan Squash", arabic: "قرع باتي بان", price: Math.random() * (3 - 1) + 1 },
        { name: "Celeriac", arabic: "سيريكا", price: Math.random() * (3 - 1) + 1 },
        { name: "Bamboo Shoots", arabic: "براعم الخيزران", price: Math.random() * (3 - 1) + 1 },
        { name: "Radicchio", arabic: "راديكيو", price: Math.random() * (3 - 1) + 1 },
        { name: "Lemon Grass", arabic: "عشب الليمون", price: Math.random() * (3 - 1) + 1 },
        { name: "Kombu", arabic: "كومبو", price: Math.random() * (3 - 1) + 1 },
        { name: "Napa Cabbage", arabic: "ملفوف نابا", price: Math.random() * (3 - 1) + 1 },
        { name: "Chili Guava", arabic: "جوافة حارة", price: Math.random() * (3 - 1) + 1 },
        { name: "Taro Root", arabic: "جذر القلقاس", price: Math.random() * (3 - 1) + 1 },
        { name: "Bok Choy Sum", arabic: "بوك تشوي سام", price: Math.random() * (3 - 1) + 1 },
        { name: "Rhubarb", arabic: "راوند", price: Math.random() * (3 - 1) + 1 }
    ]
};

  const Page = () => {
    const [count, setCount] = useState("");
    const [selectedItems, setSelectedItems] = useState([]);
    const [orderId, setOrderId] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("Fruits");

    // Calculate the total price of all selected items in the cart
    const calculateTotal = () => {
        return selectedItems.reduce((acc, item) => acc + item.quantity * item.price, 0);
    };

    const formatDate = (inputDate) => {
        if (!inputDate) return "N/A";
        const [year, month, day] = inputDate.split("-");
        return `${day}/${month}/${year}`;
    };

    const handleAddItem = () => {
        const number = parseInt(count);
        if (!number || number <= 0) {
            setSelectedItems([]); // Clear selected items if invalid count
            return;
        }

        // Access the selected category (either 'Fruits' or 'Vegetables')
        const selectedCategoryItems = items[selectedCategory];

        // Shuffle and select the items
        const shuffled = [...selectedCategoryItems].sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, number).map(item => ({
            ...item,
            quantity: 1 // Set quantity to 1 for each item
        }));

        setSelectedItems(selected);
        setOrderId(generateOrderId());
    };

    const generateOrderId = () => Date.now().toString();

    const vatRate = 0.05; // 5%
    const total = calculateTotal();
    const vatAmount = total * vatRate;
    const netTotal = total + vatAmount;

    const totalItemsCount = selectedItems.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <div className="min-h-screen bg-white p-6 text-black font-mono">
            <h1 className="text-3xl font-bold text-center mb-8 no-print">
                Waitrose Receipt Generator
            </h1>

            {/* Category Selection */}
            <div className="mb-6 flex justify-center gap-4">
                <button
                    onClick={() => setSelectedCategory("Fruits")}
                    className={`px-4 py-2 ${selectedCategory === "Fruits" ? 'bg-black text-white' : 'bg-gray-200'}`}
                >
                    Fruits
                </button>
                <button
                    onClick={() => setSelectedCategory("Vegetables")}
                    className={`px-4 py-2 ${selectedCategory === "Vegetables" ? 'bg-black text-white' : 'bg-gray-200'}`}
                >
                    Vegetables
                </button>
            </div>

            {/* Item Input Section */}
            <div className="flex flex-wrap gap-4 mb-6 justify-center no-print">
                <input
                    type="number"
                    value={count}
                    onChange={(e) => setCount(e.target.value)}
                    placeholder="Enter number of items"
                    className="border border-gray-300 p-2 rounded"
                />

                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="border border-gray-300 p-2 rounded"
                />

                <input
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="border border-gray-300 p-2 rounded"
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
                        <p>Date: {formatDate(date)}</p>
                        <p>Time: {time || "N/A"}</p>
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
                    <p className="flex gap-20 text-[15px] mt-2">
                        <span>ORDER ID</span>
                        <span>{orderId}</span>
                    </p>
                </div>

                <table className="w-full text-left text-sm mb-4">
                    <tbody>
                        {selectedItems.length > 0 ? (
                            selectedItems.map((item, index) => (
                                <tr key={index}>
                                    <td className="py-1">
                                        {item.name} {item.arabic}
                                    </td>
                                    <td className="py-1 text-right">
                                        AED {item.price.toFixed(2)}
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

                <div className="flex gap-5 tracking-widest">
                    <span className="uppercase">Items:</span>
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
};

export default Page;