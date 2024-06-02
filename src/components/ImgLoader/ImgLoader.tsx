import React, { FC } from "react";
import {
  ImgLoaderStyle,
  WhiteBackground,
  RectangleStyled,
  DeatGuestStyled,
  FlexConteiner,
} from "./ImgLoader.style";
import { getDatabase, ref, set } from "firebase/database";

interface Props {
  uri: string;
  title?: string;
  subtitle?: string;
  white?: boolean;
  size?: string;
  rectangle?: boolean;
  id: string;
  name?: string | null;
  secondName?: string | null;
  man?: string | null;
  details?: boolean;
  child?: string | null;
  flowers?: boolean;
}

export const ImgLoader: FC<Props> = ({
  uri,
  title,
  subtitle,
  white,
  size,
  rectangle,
  id,
  name,
  secondName,
  man,
  details,
  child,
  flowers,
}) => {
  const dearGuest = () => {
    if (secondName) {
      return (
        <h2>
          Дорогие
          <br /> {name} и {secondName}
        </h2>
      );
    } else {
      if (man) {
        return <h2>Дорогой {name}</h2>;
      } else {
        return <h2>Дорогая {name}</h2>;
      }
    }
  };

  const onClick = (data: string) => {
    const db = getDatabase();
    set(ref(db, "guest/" + `${name}${secondName ? `+${secondName}` : ""}`), {
      приду: data,
    });

    alert("Спасибо что сообщили нам о своем присутствии");
  };

  const children = () => {
    if (rectangle) {
      if (details) {
        return (
          <RectangleStyled>
            <h1>Детали</h1>

            {flowers ? (
              <span>
                Увы, долго наслаждаться красотой подаренных цветов нам
                не удастся, поэтому, если вместо них вы решите подарить нам
                бутылочку алкоголя, то мы будем очень благодарны.
              </span>
            ) : (
              <>
                {child && (
                  <span className="long-text">
                    К сожалению, наш банкетный зал имеет ограниченную
                    вместимость, поэтому мы вынуждены сократить количество
                    гостей на нашем торжестве. В связи с этим обстоятельством мы
                    приняли решение приглашать только гостей старше 18 лет.
                  </span>
                )}

                <div>
                  <span className="long-text">
                    {child ? "Также мы " : "Мы "}
                    будем благодарны, если вы подтвердите своё присутствие, нажав
                    на кнопку ниже, либо напишете нам
                  </span>
                  <FlexConteiner>
                    <button onClick={() => onClick("да")}>
                      {secondName ? "Будем" : "Буду"}
                    </button>
                    <button onClick={() => onClick("нет")}>
                      {secondName ? "Не сможем прийти" : "Не смогу прийти"}
                    </button>
                  </FlexConteiner>
                </div>

                <FlexConteiner>
                  <a href="https://t.me/KateCactus" target="_blank">
                    Написать Екатерине
                  </a>
                  <a href="https://t.me/DenisGordyushin" target="_blank">
                    Написать Денису
                  </a>
                </FlexConteiner>
              </>
            )}
          </RectangleStyled>
        );
      }
      return (
        <RectangleStyled>
          <h1>Локация</h1>

          <span>
            Наша свадьба пройдет на открытом воздухе, в Шатре "Облака". <br />{" "}
            По адресу: г.Омск, ул. Суворова, 110
          </span>

          <a href="https://go.2gis.com/fghgv" target="_blank">
            Подробнее на карте
          </a>
        </RectangleStyled>
      );
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
      <DeatGuestStyled>
        {name && dearGuest()}
        <div>
          {title && <h1>{title}</h1>}
          {subtitle && <h1> {subtitle}</h1>}
        </div>
      </DeatGuestStyled>
    );
  };

  return (
    <ImgLoaderStyle
      id={id}
      justifyContent={rectangle ? "center" : "flex-end"}
      uri={uri}
      size={size}
    >
      {children()}
    </ImgLoaderStyle>
  );
};
