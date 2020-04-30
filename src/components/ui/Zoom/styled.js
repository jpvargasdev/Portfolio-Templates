import styled, { css } from 'styled-components';


export const StyledContainer = (width, height, margin) => {

  return styled.div`
    width:${width};
    height: ${height};
    margin: ${margin};
    overflow: hidden;
    position: relative;
    float: left;
    display: inline-block;
    cursor: pointer;
  `;
}

export const StyledImage = styled.img`

  //----Basic
    ${props => props.variant === "basic" && css`
      width: 100%;
      height: 100%;
      transition: transform .5s ease;

      :hover{
      transform: scale(1.4);
      }
    `};
   
    
  //----Brightnees
    ${props => props.variant === "brightness" && css`
      width: 100%;
      height: 100%;
      transition: transform 2s, filter 1.5s ease-in-out;
      transform-origin: center;
      filter: brightness(55%);

      :hover{
        filter: brightness(100%);
        transform: scale(1.3);
      }
    `};


  //----VerticalZoom
    ${props => props.variant === "vertical" && css`
      width: 100%;
      height: 100%;
      transition: transform .5s ease-in-out;
      transform: scale(1.4);
      transform-origin: 0 0;

      :hover{
        transform: scale(1.15) translateY(-9%);
      }
    `};


  //----Blur-Zoom
    ${ props => props.variant === "blur" && css`  
      width: 100%;
      height: 100%;
      transition: transform 1s, filter 2s ease-in-out;
      filter: blur(3px);
      transform: scale(1.2);

      :hover{
        filter: blur(0);
        transform: scale(1);
      }
    `};
  
  
  //----Colors
    ${props => props.variant === "colors" && css` 
      width: 100%;
      height: 100%;
      transition: transform .5s, filter 1.5s ease-in-out;
      filter: grayscale(96%);

      :hover{
        filter: grayscale(0);
        transform: scale(1.1);
      }
    `};
`
