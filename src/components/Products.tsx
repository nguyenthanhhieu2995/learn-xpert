import Product from "./Product";

const PRODUCTS = [
  {
    image : "src/assets/images/Product-1.png",
    name: "Figma UI design",
    author: "Esther Howard",
    totalStar: 5,
    totalComment: 1200,
  },
  {
    image : "src/assets/images/Product-2.png",
    name: "Figma UI design",
    author: "Esther Howard",
    totalStar: 5,
    totalComment: 1200,
  },
  {
    image : "src/assets/images/Product-3.png",
    name: "Figma UI design",
    author: "Esther Howard",
    totalStar: 5,
    totalComment: 1200,
  },
  {
    image : "src/assets/images/Product-4.png",
    name: "Figma UI design",
    author: "Esther Howard",
    totalStar: 5,
    totalComment: 1200,
  },
  {
    image : "src/assets/images/Product-1.png",
    name: "Figma UI design",
    author: "Esther Howard",
    totalStar: 5,
    totalComment: 1200,
  },
  {
    image : "src/assets/images/Product-2.png",
    name: "Figma UI design",
    author: "Esther Howard",
    totalStar: 5,
    totalComment: 1200,
  }

]
export default function Products() {
  return (
    <>
      <div className="flex flex-row justify-between items-center  max-w-screen-xl mx-auto p-4"> 
        <h2 className="not-italic font-bold text-5xl text-[#252B42]">Explore Featured <br /> Products</h2>
        <a  href="#" className="text-[#252B42] font-bold order-none flex-grow-0 text-2xl tracking-wide mx-10 hover:bg-gray-100 hover:bg-transparent hover:text-sky-600">View All</a>
      </div>
      <div className="flex flex-row justify-between  items-center flex-wrap max-w-screen-xl mx-auto p-4">
        {PRODUCTS.map((product, idx) => (
          <Product
            key={idx}
            image={product.image}
            name={product.name}
            author={product.author}
            totalStar={product.totalStar}
            totalComment={product.totalComment}
          />
        ))}
      </div>
    </>
  );
}
