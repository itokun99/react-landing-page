import { React, PropTypes } from 'libraries';
import { SiteHeader } from 'components';

const MasterLayout = ({ children }) => (
  <React.Fragment>
    <SiteHeader />
    {children}
  </React.Fragment>
);

MasterLayout.propTypes = {
  children: PropTypes.any
};

export default MasterLayout;
