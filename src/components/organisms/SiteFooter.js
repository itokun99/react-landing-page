import { React, useMemo, moment } from 'libraries';
import { Container, Section, Image } from 'components/atoms';
import { ImgLogo } from 'assets';
import {
  FaGithub,
  FaFacebookSquare,
  FaDiscord,
  FaInstagram,
  FaTwitter
} from 'react-icons/fa';

const socials = [
  {
    id: 1,
    url: 'https://www.facebook.com/kabayancoding2019',
    name: 'Facebook',
    components: FaFacebookSquare
  },
  {
    id: 2,
    url: 'https://github.com/kabayancoding',
    name: 'Github',
    components: FaGithub
  },
  {
    id: 3,
    url: 'https://discord.gg/SNM343j',
    name: 'Discord',
    components: FaDiscord
  },
  {
    id: 4,
    url: 'https://www.instagram.com/kabayancoding/',
    name: 'Instagram',
    components: FaInstagram
  },
  {
    id: 5,
    url: 'https://twitter.com/kabayancoding',
    name: 'Twitter',
    components: FaTwitter
  }
];

const SiteFooter = () =>
  useMemo(
    () => (
      <React.Fragment>
        <Section className="SiteFooter">
          <Container>
            <div className="SiteFooter__wrapper">
              <div className="SiteFooter__content-left">
                <div className="SiteFooter__brand">
                  <Image source={ImgLogo} className="SiteFooter__brand-image" />
                  <h2 className="SiteFooter__brand-title">Kabayan Coding</h2>
                </div>
              </div>

              <div className="SiteFooter__content-right">
                <div className="SiteFooter__social">
                  {socials.map(val => (
                    <a
                      target="blank"
                      href={val.url}
                      className="SiteFooter__social-icon"
                    >
                      <val.components />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </Section>
        <Section className="SiteFooter__copy-right">
          <span>
            Copyright © 2019 - {moment().format('YYYY')} Kabayan Coding All
            Right Reserved
          </span>
        </Section>
      </React.Fragment>
    ),
    []
  );

export default SiteFooter;
