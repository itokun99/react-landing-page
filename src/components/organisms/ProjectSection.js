import { React, useMemo } from 'libraries';
import { Container, Section, Image } from 'components/atoms';
import {
  ImgCoding,
  ImgLearning,
  ImgProjectBkp,
  ImgProjectLptq,
  ImgProjectAkun,
  ImgProjectPtsp,
  ImgProjectKasihinaja
} from 'assets';

const projects = [
  {
    id: 1,
    title: 'BKP Apps',
    desc: 'Aplikasi report karantina',
    image: ImgProjectBkp
  },
  {
    id: 2,
    title: 'LPTQ Papua',
    desc: 'Website LPTQ Kementrian agama provinsi Papua',
    image: ImgProjectLptq
  },
  {
    id: 3,
    title: 'PTSP',
    desc: 'Pelayanan Terpadu Satu Pintu kemenag provinsi Papua',
    image: ImgProjectPtsp
  },
  {
    id: 4,
    title: 'AKUN',
    desc: 'Aplikasi user auth management',
    image: ImgProjectAkun
  },
  {
    id: 5,
    title: 'Kasihin Aja',
    desc: 'Website online pencarian dan sedekah barang bekas',
    image: ImgProjectKasihinaja
  }
];

const ProjectSection = () =>
  useMemo(
    () => (
      <Section className="ProjectSection">
        <Container>
          <div className="ProjectSection__wrapper">
            <div className="ProjectSection__title">
              <h2>Project Kabayan Coding</h2>
            </div>
            <div className="ProjectSection__content">
              <div className="ProjectSection__row">
                {projects.map(project => (
                  <div key={project.id} className="ProjectSection__column">
                    <div className="ProjectSection__project-item">
                      <Image
                        backgroundImage
                        className="ProjectSection__project-image"
                        source={project.image}
                      />
                      <div className="ProjectSection__project-body">
                        <h4 className="ProjectSection__project-title">
                          {project.title}
                        </h4>
                      </div>
                    </div>
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
