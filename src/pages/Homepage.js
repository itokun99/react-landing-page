import { React } from 'libraries';
import {
  Container,
  Section,
  HeroBanner,
  AboutSection,
  FeaturedSection,
  ProjectSection
} from 'components';

const Homepage = () => (
  <React.Fragment>
    <HeroBanner />
    <FeaturedSection />
    <ProjectSection />
    <AboutSection />
  </React.Fragment>
);

export default Homepage;
