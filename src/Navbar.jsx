const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <span>Adopcja</span>
          <ul className="dropdown">
            <li>
              <a>Warunki Adopcji</a>
            </li>
            <li>
              <a>Proces Adopcyjny</a>
            </li>
            <li>
              <a>Dom Tymczasowy</a>
            </li>
            <li>
              <a>Dom Stały</a>
            </li>
            <li>
              <a>Wirtualna Adopcja</a>
            </li>
            <li>
              <a>Króliki do Adopcji</a>
            </li>
          </ul>
        </li>
        <li>
          Pomóź Nam
          <ul className="dropdown">
            <li>
              <a>Wolontariat</a>
            </li>
            <li>
              <a>Darowizna</a>
            </li>
            <li>
              <a>Dom Tymczasowy</a>
            </li>
            <li>
              <a>Wirtualna Adopcja</a>
            </li>
            <li>
              <a>Przekaż 1% Podatku</a>
            </li>
          </ul>
        </li>
        <li>
          Weterynaria
          <ul className="dropdown">
            <li>
              <a>Choroby i Leczenie</a>
            </li>
            <li>
              <a>Zabiegi i Opieka</a>
            </li>
            <li>
              <a>Karmy Ratunkowe</a>
            </li>
            <li>
              <a>Polecani Lekarze</a>
            </li>
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
