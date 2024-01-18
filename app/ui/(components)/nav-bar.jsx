import Link from 'next/link';

const links = [
  { name: 'catalog', href: '/catalog' },
  { name: 'novelty', href: '/novelty' },
  { name: 'discounts', href: '/discounts' },
  { name: 'best sellers', href: '/best-sellers' },
  { name: 'about us', href: '/about-us' },
];

export function NavBar() {
  return (
    <nav>
      <ul className="container flex justify-between bg-orange-200">
        {links.map((link, idx) => (
          <li key={idx}>
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
