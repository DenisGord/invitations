import React, { FC } from "react";
import { ImgLoaderStyle, WhiteBackground } from "./ImgLoader.style";
import { AndIcon } from "../IconsComponent";

interface Props {
  uri: string;
  title?: string;
  subtitle?: string;
  white?: boolean;
  size?: string
}

export const ImgLoader: FC<Props> = ({ uri, title, subtitle, white, size}) => {
  return (
    <ImgLoaderStyle uri={uri} size={size}>
      {white ? (
        <WhiteBackground>
          {title && <h1>{title}</h1>}
          <h2>и</h2>
          {subtitle && <h1> {subtitle}</h1>}
        </WhiteBackground>
      ) : (
        <>
          {title && <h1>{title}</h1>}
          {subtitle && <h1> {subtitle}</h1>}
        </>
      )}
    </ImgLoaderStyle>
  );
};
