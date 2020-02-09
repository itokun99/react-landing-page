import { React, useMemo } from 'libraries';
import { Container, Section, Image } from 'components/atoms';
import { ImgAboutIllustration } from 'assets';
import { GoCode, GoGitBranch, GoCheck } from 'react-icons/go';

const AboutSection = () =>
  useMemo(
    () => (
      <Section className="AboutSection">
        <Container>
          <div className="AboutSection__wrapper">
            <div className="AboutSection__intro">
              <h5 className="AboutSection__intro-subtitle">About Us</h5>
              <h2 className="AboutSection__intro-title">
                We help drive your Apps publish to Everyone
              </h2>
              <p className="AboutSection__description">
                Proactively syndicate open-source e-markets after low-risk
                high-yield synergy. Professionally simplify visionary technology
                before team driven sources.
              </p>
              <div className="AboutSection__icon-wrapper">
                <div className="AboutSection__icon-column">
                  <div className="AboutSection__icon">
                    <GoCode />
                  </div>
                  <span>Start with High Quality Code</span>
                </div>
                <div className="AboutSection__icon-column">
                  <div className="AboutSection__icon">
                    <GoGitBranch />
                  </div>
                  <span>Consistent Commit and Release</span>
                </div>
                <div className="AboutSection__icon-column">
                  <div className="AboutSection__icon">
                    <GoCheck />
                  </div>
                  <span>Publish to Everyone</span>
                </div>
              </div>
            </div>
            <div className="AboutSection__illustration">
              <Image source={ImgAboutIllustration} />
            </div>
          </div>
        </Container>
      </Section>
    ),
    []
  );

export default AboutSection;
