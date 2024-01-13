import { Header } from '@/app/ui/(components)/header/header';
import { Footer } from '@/app/ui/(components)/footer/footer';

export const metadata = {
  title: 'Home Page',
};

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <h1>Home Page</h1>
      </main>
      <Footer />
    </>
  );
}
