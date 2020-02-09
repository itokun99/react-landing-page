import { React, useMemo } from 'libraries';
import { Container, Section, Image } from 'components/atoms';
import { ImgCoding, ImgLearning } from 'assets';

const ProjectSection = () =>
  useMemo(
    () => (
      <Section className="ProjectSection">
        <Container>
          <div className="ProjectSection__wrapper">
            <div className="ProjectSection__title">
              <h2>Our Project</h2>
            </div>
            <div className="ProjectSection__content">
              <div className="ProjectSection__row">
                {[1, 2, 3, 4, 5, 6].map(val => (
                  <div key={val} className="ProjectSection__column">
                    <div className="ProjectSection__project-item"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>
    ),
    []
  );

export default ProjectSection;
