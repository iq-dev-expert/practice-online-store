import { Header } from '@/app/ui/(components)/header/header';
import { Footer } from '@/app/ui/(components)/footer/footer';

export default function PagesLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
