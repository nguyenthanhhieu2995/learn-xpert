import Button from "./Button";
import ListItem from "./ListItem";
import learnXpert from "../assets/images/learn-xpert.svg";
export default function Header() {
  return (
    <nav className="mx-auto">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-0 rtl:space-x-reverse">
          <img src={learnXpert} alt="Learnxpert" className="h-8" />
          <span className="self-center text-2xl not-italic font-bold whitespace-nowrap">
            LearnXpert
          </span>
        </a>
        <div className="md:order-2 space-x-3 md:space-x-4 rtl:space-x-reverse">
          <Button text="Sign Up" />
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2  w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4  md:space-x-0 rtl:space-x-reverse md:flex-row md:mt-0 ">
            <ListItem text="Home" />
            <ListItem text="About" />
            <ListItem text="Contact" />
            <ListItem text="Blog" />
          </ul>
        </div>
      </div>
    </nav>
    // <nav>
    //   <div className="flex flex-wrap items-center justify-between mx-auto p-4">
    //     <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
    //       <img src={learnXpert} alt="Learnxpert" />
    //       <span className="not-italic font-bold  self-center">Learnxpert</span>
    //     </a>
    //     <div className="md:order-2 space-x-3 md:space-x-4 rtl:space-x-reverse">
    //       <Button text="Sign Up" />
    //       <button
    //         data-collapse-toggle="navbar-cta"
    //         type="button"
    //         className="inline-flex items-center p-2  w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
    //         aria-controls="navbar-cta"
    //         aria-expanded="false"
    //       >
    //         <span className="sr-only">Open main menu</span>
    //         <svg
    //           className="w-5 h-5"
    //           aria-hidden="true"
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 17 14"
    //         >
    //           <path
    //             stroke="currentColor"
    //             stroke-linecap="round"
    //             stroke-linejoin="round"
    //             stroke-width="2"
    //             d="M1 1h15M1 7h15M1 13h15"
    //           />
    //         </svg>
    //       </button>
    //     </div>

    //     <div
    //       className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
    //       id="navbar-cta"
    //     >
    //       <ul className="flex flex-col font-medium p-4 md:p-0 mt-4  md:space-x-0 rtl:space-x-reverse md:flex-row md:mt-0">
    //         <ListItem text="Home" />
    //         <ListItem text="About" />
    //         <ListItem text="Contact" />
    //         <ListItem text="Blog" />
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
}
