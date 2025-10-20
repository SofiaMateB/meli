import "../styles/navbar.css"; // opcional si luego agregamos estilos propios

export default function Navbar() {
  return (
    <header
      role="banner"
      data-siteid="MCO"
      className="nav-header nav-header-pluslite ui-navigation-v2 "
      style={{ backgroundColor: "#ffe600" }}
    >
      <div className="nav-bounds d-flex justify-content-between align-items-center px-4 py-2">
        {/* Logo y accesibilidad */}
        <div className="nav-header-logo">
         <a className="nav-logo" href="//www.mercadolibre.com.co">Mercado Libre Colombia - Donde comprar y vender de todo</a>
        </div>

        {/* Menú de usuario */}
        <div className="nav-header-menu-wrapper">
          <nav id="nav-header-menu" aria-label="Menú de usuario">
            <ul className="nav-header-menu-list list-unstyled d-flex align-items-center gap-4 m-0">
              {/* Usuario */}
              <li className="nav-header-menu-list__item">
                <div className="nav-header-user 
                ">
                  <div className="nav-header-avatar-user">
                  <label><a href="https://myaccount.mercadolibre.com.co/summary" className="nav-header-user-myml" aria-expanded="false" role="button" aria-label="sofia, menú"><span className="nav-header-usermenu-wrapper"><span aria-hidden="true" className="nav-header-avatar-user" data-js="user-menu:nav-header-avatar-user"><div className="nav-header-profile-evolution__container"><div className="nav-header-profile-evolution__user-initials">SM</div></div></span><span className="nav-header-username">sofia</span><span className="nav-header-username-chevron"></span></span></a></label>
                  </div>
                  <div className="nav-header-username">sofia</div>
                </div>
              </li>

              {/* Otras opciones */}
              <li className="nav-header-menu-list__item">
                <a
                  href="#"
                  className="option-help text-dark text-decoration-none small"
                >
                  Ayuda / PQR
                </a>
              </li>

            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
