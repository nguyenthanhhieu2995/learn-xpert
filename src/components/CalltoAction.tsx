import Button from "./Button";
export default function CallToAction() {
  return (
    <section className="lg:py-20 grid lg:grid-cols-2 gap-8 max-w-screen-xl mx-auto">
      <div className="pl-28 justify-self-end mt-5 box-border ml-auto ">
        <h2 className=" not-italic font-bold text-5xl text-[#252B42] ">
          Start Your Learning Journey Today!
        </h2>
        <p className="text-sm font-normal text-gray-500 dark:text-gray-400 my-10 tracking-widest ">
          Embrace life's vastness, venture forth, and discover the wonders
          waiting beyond. The world beckons; seize its grand offerings now!
        </p>
      </div>
      <div className=" m-auto">
        <Button text="Get Started" />
      </div>
    </section>
  );
}
