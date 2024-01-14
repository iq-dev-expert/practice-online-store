import { Logo } from '@/app/ui/(components)/logo';
import { Search } from '@/app/ui/(components)/search';
import { ContactInfo } from '@/app/ui/(components)/contact-info';
import { ThemeSwitcher } from '@/app/ui/(components)/theme-switcher';
import { NavBar } from '@/app/ui/(components)/nav-bar';
import { Favorite } from '@/app/ui/(components)/favorite';
import { Basket } from '@/app/ui/(components)/basket';

export function Header() {
  return (
    <header className="bg-green-200">
      <div className="container bg-red-200">
        <Logo />
        <ContactInfo />
        <Search />
        <ThemeSwitcher />
        <Favorite />
        <Basket />
      </div>
      <NavBar />
    </header>
  );
}
