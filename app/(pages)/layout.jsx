import '@/app/globals.css';

import { Header } from '@/app/ui/(components)/header';
import { Footer } from '@/app/ui/(components)/footer';

export default function HomePageLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body>
          <Header />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </>
  );
}
