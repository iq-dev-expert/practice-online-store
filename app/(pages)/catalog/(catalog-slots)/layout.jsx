import '@/app/globals.css';

export default function CatalogLayout({ children, sidebar, catalog }) {
  return (
    <div className="container bg-purple-500">
      {children}
      <div className="flex">
        {sidebar}
        {catalog}
      </div>
    </div>
  );
}
