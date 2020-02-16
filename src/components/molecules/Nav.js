/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { React, NavLink, PropTypes, useMemo, useState } from 'libraries';

const Nav = ({ navigation }) => {
  const [isActive, showMenu] = useState(false);

  return useMemo(
    () => (
      <React.Fragment>
        <div onClick={() => showMenu(true)} className="Nav__burger">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className={`Nav ${isActive ? 'Nav--active' : ''}`}>
          <div
            onClick={() => showMenu(false)}
            className="Nav__burger Nav__burger--close"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          {navigation &&
            navigation.map((nav, index) => (
              <React.Fragment>
                {/* <NavLink
                  className="Nav__item"
                  to={nav.url}
                  key={index}
                  title={nav.title}
                  activeClassName="Nav__item--active"
                >
                  {nav.title}
                </NavLink> */}
                <a
                  key={index}
                  onClick={() => showMenu(false)}
                  className="Nav__item"
                  href={nav.url}
                >
                  {nav.title}
                </a>
              </React.Fragment>
            ))}
        </nav>
      </React.Fragment>
    ),
    [isActive, navigation]
  );
};

Nav.propTypes = {
  navigation: PropTypes.array
};

Nav.defaultProps = {
  navigation: []
};

export default Nav;
