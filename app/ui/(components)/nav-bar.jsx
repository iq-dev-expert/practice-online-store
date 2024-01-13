import Link from "next/link";

export function NavBar() {
  return (
    <ul className="container bg-orange-200 flex justify-between">
      <li>
        <Link href="/catalog">catalog</Link>
      </li>
      <li>
        <Link href="/novelty">novelty</Link>
      </li>
      <li>
        <Link href="/discounts">discounts</Link>
      </li>
      <li>
        <Link href="/best-sellers">best sellers</Link>
      </li>
      <li>
        <Link href="/about-us">about us</Link>
      </li>
    </ul>
  );
}
