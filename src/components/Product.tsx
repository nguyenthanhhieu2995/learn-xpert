interface ProductsProps {
  image: string;
  name: string;
  author: string;
  totalStar: number;
  totalComment: number;
}
export default function Product({
  image,
  name,
  author,
  totalStar,
  totalComment,
}: ProductsProps) {
  return (
    <div className="flex p-4 rounded-[8px] bg-white shadow-xl md:w-full lg:w-fit mt-6">
      <img src={image} alt="" className="w-36 h-36 mr-2" />
      <div className="flex flex-col justify-center p-6">
        <h3 className=" not-italic font-bold text-xl leading-[34px] order-none flex-grow-0 mb-1 tracking-wide">
          {name}
        </h3>
        <p className="h-[24px] not-italic font-semibold text-lg leading-[24px] tracking-[0.2px] flex-grow-0 mb-3 text-[#737373] ">{author}</p>
        <p>
          {totalStar} Stars {totalComment} Comments
        </p>
      </div>
    </div>
  );
}
