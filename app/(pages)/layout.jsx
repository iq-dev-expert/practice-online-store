import '@/app/globals.css';

import { Header } from '@/app/ui/(components)/header';
import { Footer } from '@/app/ui/(components)/footer';

export default function HomePageLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
