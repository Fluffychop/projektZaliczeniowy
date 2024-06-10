import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <span>Adopcja</span>
          <ul className="dropdown">
            <li>
              <NavLink to="/warunkiAdopcji">Warunki Adopcji</NavLink>
            </li>
            <li>
              <NavLink to="/formularz">Formularz Adopcyjny</NavLink>
            </li>
            <li>Proces Adopcyjny</li>
            <li>Dom Tymczasowy</li>
            <li>Dom Stały</li>
            <li>Wirtualna Adopcja</li>
            <li>Króliki do Adopcji</li>
          </ul>
        </li>
        <li>
          Pomóź Nam
          <ul className="dropdown">
            <li>Wolontariat</li>
            <li>Darowizna</li>
            <li>Dom Tymczasowy</li>
            <li>Wirtualna Adopcja</li>
            <li>Przekaż 1% Podatku</li>
          </ul>
        </li>
        <li>
          Weterynaria
          <ul className="dropdown">
            <li>Choroby i Leczenie</li>
            <li>Zabiegi i Opieka</li>
            <li>Karmy Ratunkowe</li>
            <li>Polecani Lekarze</li>
          </ul>
        </li>
        <li>Hotel</li>
        <li>Galeria</li>
        <li>Dla Załogi</li>
      </ul>
    </nav>
  );
};

export default Navbar;
