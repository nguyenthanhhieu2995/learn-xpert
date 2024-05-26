interface ButtonProps {
  text: string;
  onClick: (text : string) => void;
}
export default function Button(props: ButtonProps) {
  return (
    <button
      type="button"
      className="text-white bg-[#23856D] border-[#23856D] hover:bg-white hover:text-[#23856D] focus:ring-[#23856D]  rounded-[24px] focus:outline-none focus:ring-3 border-4 font-bold shadow-lg text-sm px-5 py-3 text-center me-2 m-2 transition duration-300"
      onClick={()=>props.onClick(props.text)}
    >
      {props.text}
    </button>
  );
}
