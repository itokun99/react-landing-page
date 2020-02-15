import { React, useMemo } from 'libraries';
import { Section, Container } from 'components/atoms';
import { Logo, Nav } from 'components/molecules';

const navigation = [
  { title: 'Feature', url: '#feature' },
  { title: 'Project', url: '#project' },
  { title: 'About', url: '#about' }
];

const SiteHeader = () =>
  useMemo(
    () => (
      <Section className="SiteHeader">
        <Container>
          <div className="SiteHeader__wrapper">
            <div className="SiteHeader__left">
              <Logo title="Kabayan Coding" />
            </div>
            <div className="SiteHeader__right">
              <Nav navigation={navigation} />
            </div>
          </div>
        </Container>
      </Section>
    ),
    []
  );

export default SiteHeader;
