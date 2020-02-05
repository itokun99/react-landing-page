import { React, PropTypes } from 'libraries';
import { Section, Container } from 'components/atoms';

const HeroBanner = () => (
  <Section className="HeroBanner">
    <Container>
      <div className="HeroBanner__wrapper">
        <div className="HeroBanner__content">
          <h1 className="HeroBanner__headline">Coding House for Everyone</h1>
          <p className="HeroBanner__subheadline">
            Bootcamp berbasis Komunitas, rumah para developer lokal dan berbakat
          </p>
        </div>
      </div>
    </Container>
  </Section>
);

export default HeroBanner;
