interface CheckboxProps {
    text: string;
}
export default function Checkbox(props: CheckboxProps) {
  return (
    <div className="items-center flex">
      <input
        id={props.text}
        type="checkbox"
        className="flex-col justify-center items-center p-1 gap-2.5 w-6 h-6 bg-[#252B42] rounded-[25px] order-none flex-grow-0 checked:bg-[#252B42]"
      />
      <label
        htmlFor="default-checkbox"
        className="ms-2 text-sm font-medium text-gray-900 "
      >
        {props.text}
      </label>
    </div>
  );
}
