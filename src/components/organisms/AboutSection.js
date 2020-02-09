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
              <h5 className="AboutSection__intro-subtitle">Tentang Kami</h5>
              <h2 className="AboutSection__intro-title">
                Bootcamp Coding yang menyenangkan dan Gratis
              </h2>
              <p className="AboutSection__description">
                Karena basic-nya komunitas, kita terbuka bagi kamu yang ingin
                belajar seputar dunia coding namun terkendala biaya juga sarana.
                Disini kita mabar, juga bakalan bimbing kamu agar bisa ngoding
                dengan harapan:
              </p>
              <div className="AboutSection__icon-wrapper">
                <div className="AboutSection__icon-column">
                  <div className="AboutSection__icon">
                    <GoCode />
                  </div>
                  <span>Kualitas Code yang bagus</span>
                </div>
                <div className="AboutSection__icon-column">
                  <div className="AboutSection__icon">
                    <GoGitBranch />
                  </div>
                  <span>Aktif dan selalu Commit</span>
                </div>
                <div className="AboutSection__icon-column">
                  <div className="AboutSection__icon">
                    <GoCheck />
                  </div>
                  <span>Pastinya Deliver</span>
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
