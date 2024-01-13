import { Header } from "@/app/ui/(components)/header/header";
import { Footer } from "@/app/ui/(components)/footer/footer";
import "@/app/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
