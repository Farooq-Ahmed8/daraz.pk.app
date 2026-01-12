const products = [
  {
    id: 1,
    title: "Dell Pro Sleeve 13 (Original)",
    price: "Rs. 2,600",
    discount: "-53%",
    reviews: 17,
    image: "https://img.drz.lazcdn.com/static/pk/p/24b82c3876c311bdf687dcf68dee70ba.jpg_200x200q80.jpg_.avif",
  },
  {
    id: 2,
    title: "M10 and i12 TWS Wireless Bluetooth Earbuds",
    price: "Rs. 548",
    discount: "-73%",
    reviews: 869,
    image: "https://img.drz.lazcdn.com/g/kf/S2dd92dd1db7b46c1bd75950f6ccedd28z.jpg_200x200q80.jpg_.avif",
  },
  {
    id: 3,
    title: "AirPods Pro Wireless Earbuds",
    price: "Rs. 547",
    discount: "-64%",
    reviews: 1938,
    image: "	https://img.drz.lazcdn.com/static/pk/p/0644ef782f501978be71d18a1b9bc39b.jpg_200x200q80.jpg_.avif",
  },
  {
    id: 4,
    title: "Beanie Cap with Neck Warmer",
    price: "Rs. 355",
    discount: "-64%",
    reviews: 657,
    image: "https://img.drz.lazcdn.com/static/pk/p/2b595f665d51f490170e89cdc3729376.jpg_200x200q80.jpg_.avif",
  },
  {
    id: 5,
    title: "Cat Neck Rainbow Ribbon Collar",
    price: "Rs. 239",
    discount: "-68%",
    reviews: 66,
    image: "	https://img.drz.lazcdn.com/static/pk/p/51a53b6289e842c0b8be0b4b27c415de.jpg_200x200q80.jpg_.avif",
  },
  {
    id: 6,
    title: "INZ Premium Panel Style Zipper",
    price: "Rs. 979",
    discount: "-67%",
    reviews: 686,
    image: "	https://img.drz.lazcdn.com/static/pk/p/b1e47ba3cb4fd66d84dc7a01ffd3d5dd.jpg_200x200q80.jpg_.avif",
  },
    {
    id: 1,
    title: "GTA Vice City Game for Android Mobile",
    price: "Rs. 2,600",
    discount: "-53%",
    reviews: 17,
    image: "https://img.drz.lazcdn.com/static/pk/p/24e217d7f4247a04dd792c11a6fa755e.jpg_200x200q80.jpg_.avif",
  },
  {
    id: 2,
    title: "Moon Touch Lip & Cheek Tint - 20ml - Natural",
    price: "Rs. 548",
    discount: "-73%",
    reviews: 869,
    image: "	https://img.drz.lazcdn.com/static/pk/p/b00e39db932875896cba278e424d9c2f.png_200x200q80.png_.avif",
  },
  {
    id: 3,
    title: "AirPods Pro Wireless Earbuds",
    price: "Rs. 547",
    discount: "-64%",
    reviews: 1938,
    image: "	https://img.drz.lazcdn.com/g/kf/Se0c00a54fa99417ebae06b0cf5298122F.jpg_200x200q80.jpg_.avif",
  },
  {
    id: 4,
    title: "Beanie Cap with Neck Warmer",
    price: "Rs. 355",
    discount: "-64%",
    reviews: 657,
    image: "	https://img.drz.lazcdn.com/g/kf/Scf7db64714a14a8e90c115d79023618dM.jpg_200x200q80.jpg_.avif",
  },
  {
    id: 5,
    title: "Cat Neck Rainbow Ribbon Collar",
    price: "Rs. 239",
    discount: "-68%",
    reviews: 66,
    image: "	https://img.drz.lazcdn.com/static/pk/p/4a2dffa4a9285b9a9755759ec6561a0b.jpg_200x200q80.jpg_.avif",
  },
  {
    id: 6,
    title: "INZ Premium Panel Style Zipper",
    price: "Rs. 979",
    discount: "-67%",
    reviews: 686,
    image: "	https://img.drz.lazcdn.com/static/pk/p/59144b7725e8cb7ddc936a8eabb5fb3a.jpg_200x200q80.jpg_.avif",
  },
    {
    id: 1,
    title: "KIDS WINTER TRACKSUIT(HOODIE",
    price: "Rs.512",
    discount: "-53%",
    reviews: 17,
    image: "	https://img.drz.lazcdn.com/g/kf/S92406a40984c440d89d934de4d435ce0e.jpg_200x200q80.jpg_.avif",
  },
  {
    id: 2,
    title: "Umrah Saving Box - Wooden Islamic Money",
    price: "Rs. 548",
    discount: "-73%",
    reviews: 869,
    image: "https://img.drz.lazcdn.com/static/pk/p/10fd23683ef5a28a6002534e302f5d69.jpg_200x200q80.jpg_.avif",
  },
  {
    id: 3,
    title: "WANTER 13 Pcs Makeup Brushes Set Soft hair",
    price: "Rs. 547",
    discount: "-64%",
    reviews: 1938,
    image: "	https://img.drz.lazcdn.com/static/pk/p/89bbc6e33a5e4211a3a26c45e8c26b61.jpg_200x200q80.jpg_.avif",
  },
  {
    id: 4,
    title: "Slippers for men House slipper for man Slippers",
    price: "Rs. 355",
    discount: "-64%",
    reviews: 657,
    image: "	https://img.drz.lazcdn.com/static/pk/p/ccd1cdcc546df7e40212ef05919fd2ef.jpg_200x200q80.jpg_.avif",
  },
  {
    id: 5,
    title: "6/9/12 Pcs/Set Matte Color Lipstick Pencils",
    price: "Rs. 239",
    discount: "-68%",
    reviews: 66,
    image: "		https://img.drz.lazcdn.com/static/pk/p/12def14528b8401ff954fa337ef1afbb.jpg_200x200q80.jpg_.avif",
  },
  {
    id: 6,
    title: "Original Sports Wireless Magnetic Handfree",
    price: "Rs. 979",
    discount: "-67%",
    reviews: 686,
    image: "	https://img.drz.lazcdn.com/static/pk/p/a4b68f65caada3592df60d4e0e1420ce.jpg_200x200q80.jpg_.avif",
  },
    {
    id: 1,
    title: "Moeen Collection Handbag for girls - Bags",
    price: "Rs. 2,600",
    discount: "-53%",
    reviews: 17,
    image: "	https://img.drz.lazcdn.com/static/pk/p/e38aecd94836a3b543ebf7df9971a76b.jpg_200x200q80.jpg_.avif",
  },
  {
    id: 2,
    title: "grey Jacket for men & women",
    price: "Rs. 548",
    discount: "-73%",
    reviews: 869,
    image: "	https://img.drz.lazcdn.com/static/pk/p/f070543c2f434ed1bdb5014afc707c21.jpg_200x200q80.jpg_.avif",
  },
  {
    id: 3,
    title: "High Quality Metal Snap Buttons Press Plier_9.5mm",
    price: "Rs. 547",
    discount: "-64%",
    reviews: 1938,
    image: "		https://img.drz.lazcdn.com/g/kf/Sd4a42d0acab4426d92809bd895da57baN.jpg_200x200q80.jpg_.avif",
  },
  {
    id: 4,
    title: "Xiaomi Redmi 20000mAh Portable Power Bank",
    price: "Rs. 355",
    discount: "-64%",
    reviews: 657,
    image: "	https://img.drz.lazcdn.com/static/pk/p/3a9851f4451614f734b73f788725938f.jpg_200x200q80.jpg_.avif",
  },
  {
    id: 5,
    title: "Cat Neck Rainbow Ribbon Collar",
    price: "Rs. 239",
    discount: "-68%",
    reviews: 66,
    image: "	https://img.drz.lazcdn.com/static/pk/p/51a53b6289e842c0b8be0b4b27c415de.jpg_200x200q80.jpg_.avif",
  },
  {
    id: 6,
    title: "INZ Premium Panel Style Zipper",
    price: "Rs. 979",
    discount: "-67%",
    reviews: 686,
    image: "	https://img.drz.lazcdn.com/static/pk/p/b1e47ba3cb4fd66d84dc7a01ffd3d5dd.jpg_200x200q80.jpg_.avif",
  },

];
export default function Products() {
  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 my-6">
      {/* Section Title */}
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-600 mb-1">
        Just For You
      </h2>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3">
        {products.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-md hover:shadow-lg transition-shadow duration-300"
          >
            {/* Product Image */}
            <div className="w-full aspect-square overflow-hidden rounded-t-xs">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Info */}
            <div className="p-2 sm:p-3">
              {/* Title */}
              <p className="text-xs sm:text-sm text-gray-800 line-clamp-2">
                {item.title}
              </p>

              {/* Reviews */}
              <div className="flex items-center text-[10px] sm:text-xs text-yellow-500 mt-1">
                ★★★★☆
                <span className="text-gray-500 ml-1">({item.reviews})</span>
              </div>

              {/* Price & Discount */}
              <div className="flex flex-wrap items-center gap-1 sm:gap-2 mt-2">
                <span className="text-orange-600 text-sm sm:text-base font-semibold">
                  {item.price}
                </span>
                <span className="text-[10px] sm:text-xs text-gray-500">
                  {item.discount}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}