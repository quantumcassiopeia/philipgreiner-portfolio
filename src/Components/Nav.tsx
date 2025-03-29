import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <ul className="flex place-self-end gap-4 font-medium px-3 ">
        <li>
          <Link href={"./"}>Principal</Link>
        </li>
        <li>
          <Link href={"./about-me"}>Sobre mim</Link>
        </li>
      </ul>
    </nav>
  );
}
