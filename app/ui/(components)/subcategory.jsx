import Link from 'next/link';

export function SubCategory() {
  return (
    <ul className="pl-2.5">
      <li>
        <Link href="/catalog/category-1/sub-category-1">SubCategory1</Link>
      </li>
      <li>SubCategory2</li>
    </ul>
  );
}
