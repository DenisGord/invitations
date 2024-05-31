import React, { FC } from "react";
import { DearGuestStyle } from "./DearGuest.style";

interface Props {
  name: string;
  secondName?: string;
  man?: boolean;
}

export const DearGuest: FC<Props> = ({ name, secondName, man }) => {
  const title = () => {
    if (secondName) {
      return <h1>Дорогие<br/> {name} и {secondName}</h1>;
    } else {
      if (man) {
        return name;
      } else {
        return `Дорогая ${name}`;
      }
    }
  };
  return (
    <DearGuestStyle>
      {/* <h1>{title()}</h1> */}
      <span>
        Этот день будет для нас особенным, и мы хотим провести его в
        кругу родных и близких друзей. С большим удовольствием приглашаем Вас на
        зноменательный праздник - ношу сводобу!
      </span>
      {/* <h1>15.08.2024</h1> */}
    </DearGuestStyle>
  );
};
