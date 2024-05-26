interface Feature2Props {
    text: string;
    bgColor: string;
    headerColor: string;
    txtColor: string;
}
export default function Feature2(props: Feature2Props) {
  return (
    <div className={`flex flex-row ${props.bgColor}bg-[#252B42] border rounded-3xl md:p-2 md:gap-2`}>
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
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 15v4m6-6v6m6-4v4m6-6v6M3 11l6-5 6 5 5.5-5.5"
          />
        </svg>
      </div>
      <div className="flex flex-col p-4">
        <h2 className={`${props.headerColor} text-base font-extrabold`}>
          {props.text}
        </h2>
        <p className={"text-base font-normal ${props.txtColor} mb-4  tracking-wide"}>
          Things on a very small scale behave like nothing that you have any
          direct experience
        </p>
      </div>
    </div>
  );
}
