import React from 'react';
import { Zoom } from '.';

export default {
  title:'Components|Zoom',
  component: Zoom,
};

const defaultProps = {
  width: "300px",
  height: "300px",
  margin: "10px",
  src: "https://picsum.photos/300/200?image=244",
  alt: "imagen",
};

export const Basic = () => <Zoom {...defaultProps} variant="basic"/>;
export const Brightness = () => <Zoom {...defaultProps} variant="brightness"/>;
export const VerticalZoom = () => <Zoom {...defaultProps} variant="vertical"/>;
export const BlurZoom = () => <Zoom {...defaultProps} variant="blur"/>;
export const Colors = () => <Zoom {...defaultProps} variant="colors"/>;
