import BenefitItem from "./BenefitItem";
import Button from "./Button";
const BENEFIT_ITEMS = [
  { name: "Unlimited product updates", color: "text-green-400" },
  { name: "Unlimited product", color: "text-green-400" },
  { name: "Unlimited product", color: "text-green-400" },
  { name: "1GB Cloud storage", color: "text-gray-400" },
  { name: "Email and community support", color: "text-gray-400" },
];
interface PriceItemProps {
  name: string;
  price: string;
}
export default function PriceItem({ name, price }: PriceItemProps) {
  const handleClick = () => {
    console.log(price);
  };
  return (
    <div className="flex flex-col p-6 mx-auto max-w-lg text-[#252B42] bg-white rounded-lg border border-gray-100 shadow ">
      <h3 className="mb-4 text-l font-bold leading-6 tracking-wide ">{name}</h3>
      <div className="grid grid-cols-4">
        <div className="flex justify-center items-baseline ">
          <span className="mr-3 text-4xl font-bold">{price}</span>
        </div>
        <div className="flex flex-col col-span-3">
          <span className="text-xl font-bold tracking-wide">Per month</span>
          <p className="font-light sm:text-xs text-gray-600">
            10% Off for yearly subscription
          </p>
        </div>
      </div>
      <p className="pt-6 font-light sm:text-xs text-gray-600">
        Slate helps you see how many more days you need...
      </p>
      <ul role="list" className="my-8 space-y-4 text-left">
        {BENEFIT_ITEMS.map((item,idx) => (
          <BenefitItem key={item.name+idx} text={item.name} color={item.color} />
        ))}
      </ul>
      <Button text="Choose plan" onClick={handleClick} />
    </div>
  );
}
