import React, { FC } from "react";
import { ImgLoaderStyle, WhiteBackground, RectangleStyled } from "./ImgLoader.style";
import { AndIcon } from "../IconsComponent";

interface Props {
  uri: string;
  title?: string;
  subtitle?: string;
  white?: boolean;
  size?: string;
  rectangle?: boolean;
  id:string
}

export const ImgLoader: FC<Props> = ({
  uri,
  title,
  subtitle,
  white,
  size,
  rectangle,
  id
}) => {
  const children = () => {
    if (rectangle) {
      return <RectangleStyled>
        <h1>Локация</h1>
       
        <span>
          Наша свадьба пройдет на открытом воздухе, в Шатре "Облака". <br/> По адрессу Омск, ул. Суворова, 110
        </span>
     

        <a href='https://go.2gis.com/fghgv' target="_blank"> Подробнее на карте</a>
      </RectangleStyled>;
    }
    if (white) {
      return (
        <WhiteBackground>
          {title && <h1>{title}</h1>}
          <h2>и</h2>
          {subtitle && <h1> {subtitle}</h1>}
        </WhiteBackground>
      );
    }

    return (
      <>
        {title && <h1>{title}</h1>}
        {subtitle && <h1> {subtitle}</h1>}
      </>
    );
  };

  return (
    <ImgLoaderStyle id={id} justifyContent={rectangle ? 'center' : 'flex-end'} uri={uri} size={size}>
      {children()}
    </ImgLoaderStyle>
  );
};
