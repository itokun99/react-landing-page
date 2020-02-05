import { React, PropTypes, useMemo } from 'libraries';

const Section = ({ id, children, style, className }) =>
  useMemo(
    () => (
      <div id={id} className={`Section ${className}`} style={style}>
        {children}
      </div>
    ),
    [children, className, id, style]
  );

Section.propTypes = {
  id: PropTypes.string,
  children: PropTypes.any,
  style: PropTypes.object,
  className: PropTypes.string
};

Section.defaultProps = {
  id: '',
  children: null,
  style: null,
  className: ''
};

export default Section;
