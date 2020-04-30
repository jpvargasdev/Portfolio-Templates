import React from 'react';
import PropTypes from 'prop-types';

import { StyledContainer, StyledImage } from "./styled";

const Zoom = ({
  width,
  height,
  margin,
  src,
  alt,
  variant,
}) => {
  const  Container = StyledContainer(width, height, margin, src, alt, variant);
  return (
     <Container>
      <StyledImage variant={variant} src={src} alt={alt} >
      </StyledImage>
    </ Container>
  );
};

Zoom.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  margin: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  variant: PropTypes.oneOf(["basic", "brightness", "vertical", "blur", "colors"]),
};

export { Zoom };
