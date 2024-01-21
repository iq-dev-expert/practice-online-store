import Link from 'next/link';
import { SubCategoryComponent } from './subcategory';

export function CategoryComponent() {
  return (
    <ul className="pl-2.5">
      <li>
        <Link href="/catalog/category-1">Category1</Link>
        <SubCategoryComponent />
      </li>
      <li>Category2</li>
      <SubCategoryComponent />
      <li>Category3</li>
    </ul>
  );
}
