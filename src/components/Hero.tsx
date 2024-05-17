import Button from "./Button"
import FeaturesCenter from "./FeaturesCenter"
export default function Hero() {
    return (

        <section className="bg-[#E9FFFA]">
            <div className="px-4 mx-auto max-w-screen-xl lg:py-6">
                <div className="grid md:grid-cols-2 gap-8">
                    <div className=" p-8 md:p-20 box-border">
                        <h2 className="m-4 text-4xl not-italic font-extrabold tracking-tight text-[#252B42]  md:text-5xl lg:text-6xl ">Unlock Your Learning Potential with <span className="text-[#23856D]">LearnXpert</span>.</h2>
                        <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mx-4 my-10">Embrace life's vastness, venture forth, and discover the wonders waiting beyond. The world beckons; seize its grand offerings now!</p>
                        <div className="py-10 flex justify-between">
                            <Button text={"Join Class"} />
                            <Button text={"Get Started"} />
                        </div>
                        <div className="flex flex-row justify-between">
                            <div className="items-center flex mx-6  ">
                                <input id="default-checkbox" type="checkbox" value="" className="flex-col justify-center items-center p-1 gap-2.5 w-6 h-6 bg-[#252B42] rounded-[25px] order-none flex-grow-0 checked:bg-[#252B42]" />
                                <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium text-gray-900 ">Make a Claim</label>
                            </div>
                            <div className="items-center flex mx-6 ">
                                <input id="default-checkbox" type="checkbox" value="" className="flex-col justify-center items-center p-1 gap-2.5 w-6 h-6 bg-[#252B42] rounded-[25px] order-none flex-grow-0 checked:bg-[#252B42]" />
                                <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium text-gray-900 ">Find an Agent</label>
                            </div>
                        </div>

                    </div>
                    <div className=" p-8 md:p-20 box-border">
                        <img src="./public/avatar.png" alt="student" className=" w-auto rounded-full" />
                    </div>
                </div>
                <div className="grid md:grid-cols-3 gap-8 p-8 md:p-20">
                    <FeaturesCenter
                        text1={"Learn More Skills"}
                        text2={"The gradual accumulation of information about atomic."}
                        svg={
                            <svg className="w-[48px] h-[48px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4.5V19a1 1 0 0 0 1 1h15M7 14l4-4 4 4 5-5m0 0h-3.207M20 9v3.207" />
                            </svg>
                        }
                    />
                    <FeaturesCenter
                        text1={"Choose Courses"}
                        text2={"The gradual accumulation of information about atomic."}
                        svg={<svg className="w-[48px] h-[48px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z" />
                        </svg>
                        } />
                    <FeaturesCenter
                        text1={"Learn At Your Own Place"}
                        text2={"The gradual accumulation of information about atomic."}
                        svg={<svg className="w-[48px] h-[48px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M12 20a7.966 7.966 0 0 1-5.002-1.756l.002.001v-.683c0-1.794 1.492-3.25 3.333-3.25h3.334c1.84 0 3.333 1.456 3.333 3.25v.683A7.966 7.966 0 0 1 12 20ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.5-4.44 9.963-9.932 10h-.138C6.438 21.962 2 17.5 2 12Zm10-5c-1.84 0-3.333 1.455-3.333 3.25S10.159 13.5 12 13.5c1.84 0 3.333-1.455 3.333-3.25S13.841 7 12 7Z" clip-rule="evenodd" />
                        </svg>
                        } />
                </div>
            </div>
        </section>

    )
}



{/* <section className="bg-[#E9FFFA] columns-2">
<div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
    <h2 className="mb-4 text-4xl not-italic font-extrabold tracking-tight leading-[64px] text-[#252B42]  md:text-5xl lg:text-6xl ">Unlock Your Learning Potential with LearnXpert.</h2>
    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
        <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
            Get started
            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
        </a>
        <a href="#" className="py-3 px-5 sm:ms-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-70">
            Learn more
        </a>
    </div>
</div>
</section> */}