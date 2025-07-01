'use client';
import React from "react";
import { useState , useEffect} from "react";

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

export const dynamic = 'force-dynamic';
const AlMayaPage = () => {
    const [items, setItems] = useState([]);
    const [category, setCategory] = useState("Fruits");
    const [selectedItem, setSelectedItem] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState("");
    const [orderId, setOrderId] = useState("");
    // const [currentDateTime, setCurrentDateTime] = useState(new Date());

    const generateBarcodeNumber = () => {
        return Date.now().toString(); // Unique barcode number as string
    };

    const handleAddItem = () => {
        if (!selectedItem || !price || quantity <= 0) return;

        const itemData = data[category].find((i) => i.name === selectedItem);

        const newItem = {
            name: itemData.name,
            arabic: itemData.arabic,
            quantity,
            price,
            id: Date.now(),               // Keep id for React keys or anything else
            barcode: generateBarcodeNumber() // Assign barcode here
        };

        setItems([...items, newItem]);
        setSelectedItem("");
        setQuantity(1);
        setPrice("");
    };



    const calculateTotal = () => {
        const fixedItemPrice = 25; // e.g., for "SHOP BAG PLAIN L"
        return (
            items.reduce((total, item) => total + item.quantity * parseFloat(item.price), 0) +
            fixedItemPrice
        );
    };


    useEffect(() => {
        setOrderId(generateOrderId());
    }, []);

        const generateOrderId = () => Date.now().toString();


    const now = new Date();

    const fixedItem = {
        name: "SHOP BAG PLAIN L",
        arabic: "حقيبة التسوق",
        quantity: 1,
        price: 25,
        barcode: "920112001231",
    };

    // Format date as dd.mm.yy
    const formatDate = (date) => {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = String(date.getFullYear()).slice(2);
        return `${day}/${month}/${year}`;
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
                al maya Receipt Generator
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
                    <div className="text-left">
                        <h2 className="text-[50px] font-sans font-bold tracking-wide pl-5">al maya</h2>
                        <p className="text-[15px] text-center font-mono font-bold pl-25">supermarkets</p>
                        <p className="text-[15px] font-mono font-bold">
                            Al Maya Supermarket LLC-(Br. )<br />
                            Unit No-3 Lower Ground Floor, X Tow <br />
                            C6-C9, Sector RT4, <br />
                            Sulian Bin Zayed First Street,<br />
                            Al Reem Island, Abu Dhabi
                        </p>
                        <p className="text-[15px] font-mono font-bold">
                            TRN: 100065888900003
                        </p>
                    </div>
                    <div className="text-xs flex justify-center gap-5 border-t-2 border-b-2 border-gray-500 border-dashed py-1 mt-2">
                        <p className="font-mono text-sm uppercase tracking-wide flex items-center gap-5">
                            <span>Tax Invoice</span>
                            <span className="font-arabic font-bold">فاتورة ضريبية</span>
                        </p>
                    </div>

                    <div className=" border-b-2 border-gray-500 border-dashed py-2">
                        <p className="text-[15px] flex gap-12 font-mono font-bold">
                            <span>MANAGER:MR.RAM</span>
                            <span> PH 02-6278680</span>
                        </p>
                        <p className="font-mono text-sm uppercase tracking-wide flex items-center gap-5 mt-2">
                            Date: {formatDate(now)} {formatTime(now)}</p>
                        <p className=" flex gap-8 font-mono text-sm uppercase tracking-wide">
                            <span>TILL: 137</span>
                            <span>TRANS: 285</span></p>
                        <p className="flex font-mono text-sm uppercase tracking-wide">
                            Cashier: 114327/TILAK</p>

                        <div>
                            <p className="flex gap-20 mt-2 font-mono text-sm">
                                <span>ORDER ID</span>
                                <span>{orderId}</span>
                            </p>
                        </div>
                        <div className="flex justify-between mt-2">
                            <p className="flex flex-col items-start font-mono text-sm uppercase tracking-wide">
                                <span>BARCODE</span>
                                <span>ITEM NAME</span>
                            </p>
                            <p className="flex flex-col font-mono text-sm uppercase tracking-wide">
                                <span>UNIT PRICE</span>
                                <span>QTY</span>
                            </p>
                            <p className=" mt-5 font-mono text-sm uppercase tracking-wide">
                                AMOUNT
                            </p>

                        </div>
                    </div>
                </div>


                <table className="w-full text-left text-sm mb-4">
                    <tbody>
                        {items.length > 0 ? (
                            items.map((item) => (
                                <tr key={item.id}>
                                    {/* Barcode */}
                                    <td className="py-1 flex flex-col font-mono text-sm uppercase tracking-wide ">{item.barcode}
                                        {/* Item name and Arabic */}
                                        <td className="font-arabic font-bold"> {item.arabic} </td>
                                        <td className="py-1">
                                            {item.name}
                                        </td>
                                    </td>

                                    {/* Unit Price and Quantity stacked vertically and centered */}
                                    <td className="py-1 text-center font-mono text-sm uppercase tracking-wide">
                                        <div>{parseFloat(item.price).toFixed(2)}</div>
                                        <div className="font-mono text-sm uppercase tracking-wide">{item.quantity} PC </div>
                                    </td>

                                    {/* Total Price */}
                                    <td className="py-1 text-right">
                                        {(item.quantity * parseFloat(item.price)).toFixed(2)} A
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="text-center text-gray-400 py-2">
                                    No items added.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>

                <div className="flex justify-between border-b-2 border-gray-500 border-dashed">
                    <div>
                        <p className="font-mono text-sm uppercase tracking-wide">{fixedItem.barcode}</p>
                        <p className="font-arabic font-bold">{fixedItem.arabic}</p>
                        <p>{fixedItem.name}</p>
                    </div>

                    <div className="text-center font-mono text-sm uppercase tracking-wide">
                        <p>{fixedItem.price}</p>
                        <p className="mt-4">{fixedItem.quantity} PC</p>
                    </div>

                    <div className="mt-9">
                        <p>{fixedItem.price} A</p>
                    </div>
                </div>



                <div className="flex justify-between font-mono font-bold tracking-widest mt-2 pb-2 border-b-2 border-gray-500 border-dashed">
                    <span className="uppercase">AED*TOT INCL VAT Items: {totalItemsCount}</span>
                    <span>{netTotal.toFixed(2)}</span>
                </div>


                <div className="mt-2 text-sm font-mono">

                    <div className="flex justify-around font-mono uppercase tracking-widest">
                        <span className="uppercase">AED AGGREGATOR ONLINE</span>
                        <span>{netTotal.toFixed(2)}</span>
                    </div>

                    <div className="flex justify-around items-center border-b-2 border-gray-500 border-dashed ">
                        <div className="flex flex-col">
                            <p className="font-arabic font-bold">الباقي</p>
                            <p className="uppercase">AED CHANGE </p>
                        </div>
                        <p className="mt-5">00</p>
                    </div>


                    <div className="border-b-2 border-gray-500 border-dashed">
                        <p className=" text-[12px] font-mono font-bold text-sm uppercase tracking-wide flex items-center gap-5 mt-2">
                            {formatDate(now)} {formatTime(now)}
                            <span>4136137</span>
                            <span>0285</span>
                            <span>TILAK</span></p>
                    </div>

                    {/* VAT */}
                    <div className="flex justify-between mt-1 text-sm border-b-2 border-gray-500 border-dashed">
                        <p className="flex flex-col">
                            <span className="text-[10px] font-arabic font-bold">ضريبة القيمة</span>
                            <span className="font-mono">VAT%</span> </p>
                        <p className="flex flex-col">
                            <span className="text-[10px] font-arabic font-bold">المبلغ ( ضريبة)</span>
                            <span className="font-mono">AMOUNT(excl VAT)</span> </p>
                        <p className="flex flex-col">
                            <span className=" text-[10px] font-arabic font-bold">قيمة الضريبة</span>
                            <span className="font-mono"> VAT AMOUNT</span> </p>
                    </div>

                    <div className="flex justify-around border-b-2 border-gray-500 border-dashed">
                        <span>5%</span>
                        <span>{netTotal.toFixed(2)}</span>
                        <span>{vatAmount.toFixed(2)}</span>
                    </div>

                    <div>
                        <p className="font-mono font-bold text-sm uppercase tracking-wide flex items-center gap-5 mt-2">
                            ITEM EXCHANGE WITHIN 7 DAYS <br />
                            THANK YOU COME AGAIN
                        </p>
                    </div>
                </div>
            </div>


          `  {/* Print Button */}
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
            </div>`
        </div>
    );
}

export default AlMayaPage