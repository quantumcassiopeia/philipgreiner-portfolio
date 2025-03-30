import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <ul className="flex gap-4 px-3 font-medium place-self-end ">
        <li>
          <Link href="/">Principal</Link>
        </li>
        <li>
          <Link href="/about-me">Sobre mim</Link>
        </li>
      </ul>
    </nav>
  );
}
