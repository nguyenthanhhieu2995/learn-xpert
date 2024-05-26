import Button from "./Button";
import avatar from "../assets/images/avatar.png";
import Checkbox from "./Checkbox";

export default function Hero() {
  const handleClick = (text : string) => {
    console.log(text);
  }
  return (
    <section className="lg:py-6 grid md:grid-cols-2 gap-8 max-w-screen-xl flex-wrap items-center justify-between mx-auto p-4">
      <div className="box-border py-8 px-2 mx-auto max-w-screen-xl  lg:mr-20">
        <h2 className="mb-4 text-4xl not-italic font-extrabold tracking-tight text-[#252B42]  md:text-5xl lg:text-6xl ">
          Unlock Your Learning Potential with
          <span className="text-[#23856D]">LearnXpert</span>.
        </h2>
        <p className="text-lg font-normal text-gray-500 dark:text-gray-400 my-10 tracking-widest ">
          Embrace life's vastness, venture forth, and discover the wonders
          waiting beyond. The world beckons; seize its grand offerings now!
        </p>
        <div className="py-10 flex justify-between">
          <Button text="Join Class" onClick={handleClick}/>
          <Button text="Get Started" onClick={handleClick} />
        </div>
        <div className="flex flex-row justify-between">
          <Checkbox text="Make Claim" />
          <Checkbox text="Find an Agent"/>
        </div>
      </div>
      <div className="justify-center mt-5 box-border mx-auto">
        <img
          src={avatar}
          alt="student"
          className="box-border w-auto rounded-full "
        />
      </div>
    </section>
  );
}
