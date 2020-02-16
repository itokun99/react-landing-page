import { React, NavLink, PropTypes, useMemo } from 'libraries';

const Nav = ({ navigation }) =>
  useMemo(
    () => (
      <nav className="Nav">
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
              <a key={index} className="Nav__item" href={nav.url}>
                {nav.title}
              </a>
            </React.Fragment>
          ))}
      </nav>
    ),
    [navigation]
  );

Nav.propTypes = {
  navigation: PropTypes.array
};

Nav.defaultProps = {
  navigation: []
};

export default Nav;
