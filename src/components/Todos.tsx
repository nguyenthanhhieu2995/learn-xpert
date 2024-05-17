import { useState } from "react";

export default function Todos() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="h-creen flex flex-col items-center justify-center pt-[37px] border-x-2">
      <div className="relative">
        <svg
          id="select-all"
          className="absolute top-6 left-3 cursor-pointer lucide lucide-chevron-down"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
        <input
          id="input"
          className="w-[549px] h-[65px] pt-[16px] pb-[16px] pr-[16px] pl-[60px] font-semibold text-xl italic active:outline-red-600 focus-visible:outline-red-600"
          type="text"
          placeholder="What needs to be done?"
        />
      </div>
      <ul className="w-[549px] bg-white hidden" id="list"></ul>

      <div
        className="footer relative h-12 w-[549px] bg-white border hidden"
        id="footer"
      >
        <div className="absolute top-0 left-0 z-50 h-full w-full flex justify-between items-center px-3 py-2">
          <span id="count">0 item left!</span>
          <div className="flex gap-3" data-todo="filters">
            <a href="#/" className="hover:border cursor-pointer px-2 py-1">
              All
            </a>
            <a
              href="#/active"
              className="hover:border border-red-300 cursor-pointer px-2 py-1"
            >
              Active
            </a>
            <a
              href="#/complete"
              className="hover:border border-red-300 cursor-pointer px-2 py-1"
            >
              Complete
            </a>
          </div>
          <span
            id="clear-complete"
            className="hover:underline decoration-1 cursor-pointer"
          >
            Clear complete
          </span>
        </div>
      </div>
    </div>
  );
}
