import { Header } from '@/app/ui/(components)/header';
import { Footer } from '@/app/ui/(components)/footer';

export const metadata = {
  title: 'Home Page',
};

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <h1 className="text-5xl font-black">Home Page</h1>
      </main>
      <Footer />
    </>
  );
}
