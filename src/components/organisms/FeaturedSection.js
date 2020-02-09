import { React, useMemo } from 'libraries';
import { Container, Section, Image } from 'components/atoms';
import { ImgCoding, ImgLearning } from 'assets';

const FeaturedSection = () =>
  useMemo(
    () => (
      <Section className="FeaturedSection">
        <Container>
          <div className="FeaturedSection__wrapper">
            <div className="FeaturedSection__column">
              <div className="FeaturedSection__item">
                <Image
                  backgroundImage
                  className="FeaturedSection__item-image"
                  source={ImgLearning}
                />
                <div className="FeaturedSection__item-body">
                  <h3 className="FeaturedSection__item-title">Learning</h3>
                  <p className="FeaturedSection__item-desc">
                    Proident pariatur magna esse amet eu dolore duis. Do qui
                    excepteur dolor veniam ut ea velit voluptate officia minim
                    ullamco. Laboris qui nulla ea esse. In aliquip in incididunt
                    nostrud. Minim aute ipsum laborum veniam do Lorem.
                  </p>
                </div>
              </div>
            </div>
            <div className="FeaturedSection__column">
              <div className="FeaturedSection__item">
                <Image
                  backgroundImage
                  className="FeaturedSection__item-image"
                  source={ImgCoding}
                />
                <div className="FeaturedSection__item-body">
                  <h3 className="FeaturedSection__item-title">Coding</h3>
                  <p className="FeaturedSection__item-desc">
                    Proident pariatur magna esse amet eu dolore duis. Do qui
                    excepteur dolor veniam ut ea velit voluptate officia minim
                    ullamco. Laboris qui nulla ea esse. In aliquip in incididunt
                    nostrud. Minim aute ipsum laborum veniam do Lorem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    ),
    []
  );

export default FeaturedSection;
