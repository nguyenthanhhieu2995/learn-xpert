interface FooterItemProps {
    text: string;
    key: string;
}
export default function FooterItem(props: FooterItemProps) {
    return (
        <li key={props.key}  className="mb-4">
            <a
                href="#"
                className="hover:underline"
            >
                {props.text}
            </a>
        </li>
    );
}