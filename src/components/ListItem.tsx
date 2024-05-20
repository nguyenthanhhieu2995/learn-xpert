interface ListItemprops {
    text: string;
}
export default function ListItem({text}: ListItemprops) {
  return (
    <li>
      <a
        href="#"
        className="block px-8 py-2.5 text-[#737373] font-bold flex-grow-0 hover:bg-gray-100 hover:bg-transparent hover:text-sky-600"
      >
        {text}
      </a>
    </li>
  );
}
