import { React, PropTypes } from 'libraries';
import { SiteHeader, SiteFooter } from 'components';

const MasterLayout = ({ children }) => (
  <React.Fragment>
    <SiteHeader />
    {children}
    <SiteFooter />
  </React.Fragment>
);

MasterLayout.propTypes = {
  children: PropTypes.any
};

export default MasterLayout;
