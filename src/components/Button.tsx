
const handleClickBtn = (event : string) => {
  alert(event);
};
export default function Button({text}: {text: string}) {
  return (
    <button type="button" className="rounded-[24px] text-white bg-[#23856D] hover:bg-green-800 focus:outline-none focus:ring-3 focus:ring-green-300 font-bold shadow-lg text-sm px-5 py-3  text-center me-2 m-2 transition duration-300"
    onClick={()=>handleClickBtn("Sign Up Clicked!")}>
      {text}
    </button>
    
  );
}
