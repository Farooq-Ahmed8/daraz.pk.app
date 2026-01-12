let products = [
  {
    id: 1,
    title: "M10, A6s, F2 earbuds Headphones",
    price: 286,
    oldPrice: 999,
    discount: "-71%",
    image: "https://img.drz.lazcdn.com/static/pk/p/74717672e8fefbd7750f183762f5b710.jpg_400x400q80.jpg_.avif",
  },
  {
    id: 2,
    title: "Air buds / Bluetooth Earphones",
    price: 525,
    oldPrice: 1599,
    discount: "-67%",
    image: "https://img.drz.lazcdn.com/static/pk/p/921bb7829d5e5578f9bee09980e3cf64.png_400x400q80.png_.avif",
  },
  {
    id: 3,
    title: "Moeen Collection Handbag for girls",
    price: 496,
    oldPrice: 1999,
    discount: "-75%",
    image: "https://img.drz.lazcdn.com/static/pk/p/e38aecd94836a3b543ebf7df9971a76b.jpg_400x400q80.jpg_.avif",
  },
  {
    id: 4,
    title: "YM Traders Pack of 12 Wall Stickers",
    price: 91,
    oldPrice: 199,
    discount: "-54%",
    image: "https://img.drz.lazcdn.com/static/pk/p/01fbb0806fd32488e9a2c3144d96c7cc.jpg_400x400q80.jpg_.avif",
  },
  {
    id: 5,
    title: "Meclay London Thick Shampoo 660ml",
    price: 1572,
    oldPrice: 1820,
    discount: "-14%",
    image: "https://img.drz.lazcdn.com/static/pk/p/2c17eec5e10abcde953cd4ca4b58f7d1.jpg_400x400q80.jpg_.avif",
  },
  {
    id: 6,
    title: "Storage Bag 6 pockets Washable",
    price: 199,
    oldPrice: 299,
    discount: "-33%",
    image: "https://img.drz.lazcdn.com/static/pk/p/963cc6da441d752c274e93b6fbca1667.png_400x400q80.png_.avif",
  },
];

let FlashSale = () => {
  return (
    <div className="mb-1 sm:px-8">
<h1 className=" text-xl sm:text-2xl font-semibold text-gray-600 mt-8 mb-2">Flash Sale</h1>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-amber-50 p-3 gap-3">
        <p className="text-orange-500 text-sm font-medium">
          On Sale Now
        </p>

        <button className="border border-orange-500 cursor-pointer rounded-sm text-orange-500 px-4 py-2 text-sm hover:bg-orange-500 hover:text-white transition">
          SHOP ALL PRODUCTS
        </button>
      </div>

      <hr className="border-gray-300" />

      <div className="bg-amber-50 py-5 px-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
        {products.map((item) => (
          <div key={item.id} className="bg-white rounded hover:shadow-lg transition overflow-hidden">
            <img src={item.image} alt={item.title} className="w-full h-36 sm:h-40 md:h-44 object-cover"/>

            <div className="p-2">
              <p className="text-sm line-clamp-2">
                {item.title}
              </p>

              <p className="text-orange-500 font-semibold mt-1">
                Rs. {item.price}
              </p>

              <div className="text-xs text-gray-400 flex gap-2">
                <span className="line-through">
                  Rs.{item.oldPrice}
                </span>
                <span className="text-black">
                  {item.discount}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlashSale;
