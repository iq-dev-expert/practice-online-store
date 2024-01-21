import Link from 'next/link';
import { SubCategory } from './subcategory';

export function Category() {
  return (
    <ul className="pl-2.5">
      <li>
        <Link href="/catalog/category-1">Category1</Link>
        <SubCategory />
      </li>
      <li>Category2</li>
      <SubCategory />
      <li>Category3</li>
    </ul>
  );
}
