import Button from "./Button";
interface PriceItemProps {
    name: string;
    price: string;
}
export default function PriceItem({name, price}: PriceItemProps) {
  return (
    <div className="flex flex-col p-6 mx-auto max-w-lg text-[#252B42] bg-white rounded-lg border border-gray-100 shadow ">
      <h3 className="mb-4 text-l font-bold leading-6 tracking-wide ">
        {name}
      </h3>
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
        <li className="flex items-center space-x-3">
          <svg
            className="w-[34px] h-[34px] text-green-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z"
              clip-rule="evenodd"
            />
          </svg>
          <span className="font-semibold">Unlimited product updates</span>
        </li>
        <li className="flex items-center space-x-3">
          <svg
            className="w-[34px] h-[34px] text-green-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z"
              clip-rule="evenodd"
            />
          </svg>
          <span className="font-semibold">Unlimited product</span>
        </li>
        <li className="flex items-center space-x-3">
          <svg
            className="w-[34px] h-[34px] text-green-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z"
              clip-rule="evenodd"
            />
          </svg>
          <span className="font-semibold">Unlimited product</span>
        </li>
        <li className="flex items-center space-x-3">
          <svg
            className="w-[34px] h-[34px] text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z"
              clip-rule="evenodd"
            />
          </svg>
          <span className="font-semibold">1GB Cloud storage</span>
        </li>
        <li className="flex items-center space-x-3">
          <svg
            className="w-[34px] h-[34px] text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z"
              clip-rule="evenodd"
            />
          </svg>
          <span className="font-semibold">Email and community support</span>
        </li>
      </ul>
      <Button text="Choose plan" />
    </div>
  );
}
