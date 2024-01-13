import { Logo } from "@/app/ui/(components)/logo";
import { Search } from "@/app/ui/(components)/search";
import { ContactInfo } from "@/app/ui/(components)/contact-info";
import { NavBar } from "@/app/ui/(components)/nav-bar";

export function Header() {
  return (
    <header className="bg-green-200">
      <div className="container bg-red-200">
        {" "}
        <h1>Header Component</h1>
        <Logo />
        <Search />
        <ContactInfo />
        <NavBar />
      </div>
    </header>
  );
}
