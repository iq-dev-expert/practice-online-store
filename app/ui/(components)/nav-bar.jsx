'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { name: 'catalog', href: '/catalog' },
  { name: 'novelty', href: '/novelty' },
  { name: 'discounts', href: '/discounts' },
  { name: 'best sellers', href: '/best-sellers' },
  { name: 'about us', href: '/about-us' },
];

export function NavBar() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="container flex justify-between bg-orange-200">
        {links.map((link, idx) => {
          const { name, href } = link;
          const isActive = pathname.startsWith(href);

          return (
            <li key={idx}>
              <Link href={href} className={isActive ? 'text-teal-500' : ''}>
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
