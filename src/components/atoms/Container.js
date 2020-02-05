import { React, PropTypes, useMemo } from 'libraries';

const Container = ({ children, style, className }) =>
  useMemo(
    () => (
      <div className={`Container ${className}`} style={style}>
        {children}
      </div>
    ),
    [children, className, style]
  );

Container.propTypes = {
  children: PropTypes.any,
  style: PropTypes.object,
  className: PropTypes.string
};

Container.defaultProps = {
  children: null,
  style: null,
  className: ''
};

export default Container;
