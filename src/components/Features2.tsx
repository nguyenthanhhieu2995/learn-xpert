import avatar from "../assets/images/Rectangle-50.png";

export default function Features2() {
  return (
    <section className="lg:py-20 grid lg:grid-cols-2 gap-8 max-w-screen-xl flex-wrap justify-between mx-auto ">
      <div className="justify-end mt-5 box-border ml-auto ">
        <img src={avatar} alt="student" className="box-border w-auto" />
      </div>
      <div className="flex flex-col max-w-screen-xl justify-between lg:pr-20">
        <div className="text-slate-800 text-4xl font-bold leading-10 tracking-wide pt-3">
          We take the work off
          <br />
          your hands.
        </div>
        <p className="text-sm font-normal text-gray-500  my-10 tracking-widest ">
          Embrace life's vastness, venture forth, and discover the wonders
          waiting beyond. The world beckons; seize its grand offerings now!
        </p>

        <div className="flex flex-row bg-[#252B42] border border-gray-200 rounded-3xl md:p-2 md:gap-2">
          <div className="flex justify-center items-center p-4">
            <svg
              className="w-[48px] h-[48px] text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 15v4m6-6v6m6-4v4m6-6v6M3 11l6-5 6 5 5.5-5.5"
              />
            </svg>
          </div>
          <div className="flex flex-col p-4">
            <h2 className=" text-white text-base font-extrabold ">
              Interactive Courses
            </h2>
            <p className="text-base font-normal text-gray-300   tracking-wide">
              Things on a very small scale behave like nothing that you have any
              direct experience
            </p>
          </div>
        </div>
        <div className="flex flex-row  rounded-lg md:p-2 md:gap-2">
          <div className="flex justify-center items-center p-4">
            <svg
              className="w-[48px] h-[48px] text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0.9"
                d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>
          <div className="flex flex-col p-4">
            <h2 className=" text-[#252B42] text-base font-extrabold ">
              Flexible Learning
            </h2>
            <p className="text-base font-normal text-gray-500  mb-4 tracking-wide">
              Things on a very small scale behave like nothing that you have any
              direct experience
            </p>
          </div>
        </div>
        <div className="flex flex-row  rounded-lg md:p-2 md:gap-2">
          <div className="flex justify-center items-center p-4">
            <svg
              className="w-[48px] h-[48px] text-[#252B42]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0.9"
                d="M11 16v-5.5A3.5 3.5 0 0 0 7.5 7m3.5 9H4v-5.5A3.5 3.5 0 0 1 7.5 7m3.5 9v4M7.5 7H14m0 0V4h2.5M14 7v3m-3.5 6H20v-6a3 3 0 0 0-3-3m-2 9v4m-8-6.5h1"
              />
            </svg>
          </div>
          <div className="flex flex-col p-4">
            <h2 className=" text-[#252B42] text-base font-extrabold ">
              Interactive Courses
            </h2>
            <p className="text-base font-normal text-gray-500  mb-4 tracking-wide">
              Things on a very small scale behave like nothing that you have any
              direct experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
