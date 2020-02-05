import { React, PropTypes, useMemo } from 'libraries';

const Image = ({
  source,
  backgroundImage,
  title,
  alt,
  children,
  className,
  style,
  resizeMode,
  width,
  height
}) =>
  useMemo(() => {
    if (backgroundImage) {
      return (
        <React.Fragment>
          <div
            className={className}
            title={title}
            style={{
              ...(source && { backgroundImage: `url(${source})` }),
              ...(resizeMode && { backgroundSize: `${resizeMode}` }),
              ...(width && { width }),
              ...(height && { height }),
              ...style
            }}
          >
            {children}
          </div>
          ;
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <img
          src={source}
          title={title}
          alt={alt}
          width={width}
          height={height}
          className={className}
          style={{
            ...(resizeMode && { objectFit: `${resizeMode}` }),
            ...style
          }}
        />
      </React.Fragment>
    );
  }, [
    alt,
    backgroundImage,
    children,
    className,
    height,
    resizeMode,
    source,
    style,
    title,
    width
  ]);

Image.propTypes = {
  source: PropTypes.string,
  backgroundImage: PropTypes.bool,
  title: PropTypes.string,
  alt: PropTypes.alt,
  children: PropTypes.any,
  className: PropTypes.string,
  style: PropTypes.object,
  resizeMode: PropTypes.string,
  height: PropTypes.any,
  width: PropTypes.any
};

Image.defaultProps = {
  source: '',
  backgroundImage: false,
  title: '',
  alt: '',
  children: null,
  className: ''
};

export default Image;
