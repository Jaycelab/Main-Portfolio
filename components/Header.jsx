import Link from "next/link";
import { Button } from "./ui/button";

//components
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white ">
      <div className="container mx-auto flex justify-between items-center">
        {/*logo*/}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Jason<span className="text-accent">.</span>json
          </h1>
        </Link>

        {/*desktop nav & hire btn*/}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Let's Connect</Button>
          </Link>
        </div>

        {/*mobile nav*/}
        <div className="xl:hidden"></div>
      </div>
    </header>
  );
};

export default Header;
