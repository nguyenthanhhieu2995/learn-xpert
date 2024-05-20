import PriceItem from "./PriceItem";
const PRICE =[
  {
    name: "Basic Plan",
    price: 29,
  },
  {
    name: "Favorite Plan",
    price: 60,
  },
  {
    name: "Standard Plan",
    price: 40,
  },

];
export default function Pricing() {
  return (
    <section className="bg-[#252B42]">
      <div className="py-8 mx-auto max-w-screen-xl lg:py-16 ">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12 px-24">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
            Ready to Join Us?
          </h2>
          <p className="mb-5 font-light sm:text-xl text-white">
            Embrace life's vastness, venture forth, and discover the wonders
            waiting beyond. The world beckons; seize its grand offerings now!
          </p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-3 lg:space-y-0 px-4">
          {
            PRICE.map((price, idx) => (
              <PriceItem
                key={idx}
                name={price.name}
                price={`${price.price.toString()}$`}
              />
            ))
          }
        </div>
      </div>
    </section>
  );
}
