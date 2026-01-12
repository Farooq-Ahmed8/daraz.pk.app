const categories = [
  { id: 1, title: "3D Printers", image: "https://img.drz.lazcdn.com/static/pk/p/b5d5993d063803b9dcf91f407071fd46.jpg_170x170q80.jpg_.avif" },
  { id: 2, title: "Pasta, Noodle & Pizza Tools", image: "	https://img.drz.lazcdn.com/static/pk/p/c972ac027ec676f062e5d1bca430f620.jpg_170x170q80.jpg_.avif" },
  { id: 3, title: "Protective gear", image: "	https://img.drz.lazcdn.com/static/pk/p/a94fd83ef0cc96fe225d9353ef36f813.png_170x170q80.png_.avif" },
  { id: 4, title: "Screen Protectors", image: "https://img.drz.lazcdn.com/static/pk/p/8055e52d759558e50c236ffc2419d57c.jpg_170x170q80.jpg_.avif" },
  { id: 5, title: "Casserole Pots", image: "https://img.drz.lazcdn.com/collect/sg/p/4748de9926dac545002fa52c5983d118.jpg_170x170q80.jpg_.avif" },
  { id: 6, title: "Hoodies & Sweatshirts", image: "	https://img.drz.lazcdn.com/static/pk/p/930953581302938c6ef0237add57192a.jpg_170x170q80.jpg_.avif" },
  { id: 7, title: "Toy Boxes & Organisers", image: "	https://img.drz.lazcdn.com/static/pk/p/08412fbfb24c7f5d8d46a5464b21aee4.jpg_170x170q80.jpg_.avif" },
  { id: 8, title: "Pendants", image: "https://img.drz.lazcdn.com/static/pk/p/864c2fed3a4dd2e73abeba154854d740.jpg_170x170q80.jpg_.avif" },
  { id: 9, title: "Dining Sets", image: "	https://img.drz.lazcdn.com/static/pk/p/355b3a30b8f281eec935910ecbbff5cf.jpg_170x170q80.jpg_.avif" },
  { id: 10, title: "Leashes & Harnesses", image: "	https://img.drz.lazcdn.com/static/pk/p/0f51b6844cb322ee00991eeb22352a86.jpg_170x170q80.jpg_.avif" },
  { id: 11, title: "Donate to Educate", image: "	https://img.drz.lazcdn.com/static/pk/p/1135256713bf7f606708d69030b6802c.jpg_170x170q80.jpg_.avif" },
  { id: 12, title: "Coloring & Drawing", image: "https://img.drz.lazcdn.com/g/kf/S18cba0c868b94d9ba7d1b2d2ff2b188bB.jpg_170x170q80.jpg_.avif" },
  { id: 13, title: "Others", image: "https://img.drz.lazcdn.com/static/pk/p/7a4a13acf5fbe96957ecb7fd1b8b25ec.jpg_170x170q80.jpg_.avif" },
  { id: 14, title: "Eyeliners", image: "	https://img.drz.lazcdn.com/static/pk/p/ceb60752186000e7251442312d7b08a0.jpg_170x170q80.jpg_.avif" },
  { id: 15, title: "Everyday Glassware", image: "	https://img.drz.lazcdn.com/collect/sg/p/c065f4f9b015f2e0a73e90c3a93793f4.jpg_170x170q80.jpg_.avif" },
  { id: 16, title: "Kids Food", image: "https://img.drz.lazcdn.com/static/pk/p/d2800b0539c3980c53d8a752c84be520.jpg_170x170q80.jpg_.avif" },
];
const Categories = () => {
  return (
    <div className="mb-5 sm:px-8 mt-1">
 <h2 className=" text-xl sm:text-2xl font-semibold text-gray-600 mt-4 mb-2">Categories</h2>
      <div className="
        grid
        grid-cols-3
        sm:grid-cols-4
        md:grid-cols-6
        lg:grid-cols-8
      ">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="
              flex flex-col items-center justify-center
              p-3
              border border-gray-200
              hover:shadow-lg
              hover:z-10
              transition
              cursor-pointer
              bg-white
            "
          >
            <img
              src={cat.image}
              alt={cat.title}
              className="
                w-14 h-14
                sm:w-16 sm:h-16
                md:w-18 md:h-18
                object-contain
                mb-2
              "
            />
            <p className="
              text-xs sm:text-sm
              text-center
              line-clamp-2
            ">
              {cat.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;