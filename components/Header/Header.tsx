
import { ShoppingCart, User } from "lucide-react";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        Asri Collection
      </div>

      <div className="header__actions">
        <button type="button" aria-label="Cart">
          <ShoppingCart />
        </button>

        <button type="button" aria-label="Profile">
          <User />
        </button>
      </div>
    </header>
  );
}

export default Header;
