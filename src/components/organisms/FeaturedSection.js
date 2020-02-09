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
                    Di Kabayan Coding, banyak hal yang bisa kamu dapat setelah
                    bergabung dengan kami. Kamu akan di arahkan ke Dunia Coding
                    yang produktif dan Menyenangkan
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
                    Tidak hanya belajar secara teori saja. Kabayan Coding juga
                    memfasilitasi kamu yang belajar coding secara intensif dan
                    bisa langsung terjun ke project
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
