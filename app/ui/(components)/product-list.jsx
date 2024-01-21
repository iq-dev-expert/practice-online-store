import Link from 'next/link';

export function ProductList() {
  return (
    <ul>
      <li>
        <Link href="/catalog/category-1/sub-category-1/product-1">
          Product1
        </Link>
      </li>
      <li>
        <Link href="/catalog/category-1/sub-category-1/product-2">
          Product2
        </Link>
      </li>
      <li>
        <Link href="/catalog/category-1/sub-category-1/product-3">
          Product3
        </Link>
      </li>
    </ul>
  );
}
