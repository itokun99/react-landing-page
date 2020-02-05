import { React, PropTypes, Link, useMemo } from 'libraries';

const Logo = ({ title }) =>
  useMemo(
    () => (
      <div className="Logo">
        <h2 className="Logo__title">
          <Link to="/">{title}</Link>
        </h2>
      </div>
    ),
    [title]
  );

Logo.propTypes = {
  title: PropTypes.string
};

Logo.defaultProps = {
  title: 'Site Logo'
};

export default Logo;
