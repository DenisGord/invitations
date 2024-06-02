import React from "react";
import { ProgramStyle } from "./Program.style";

export const Program = () => {
  return (
    <ProgramStyle>
      <h1>Программа</h1>
      <div>
        <h2>17.00 </h2>
        <span>
          Встреча гостей <br /> Легкий фуршет <br />
          Знакомство
        </span>
      </div>
      <div>
        <h2>17.30 </h2>
        <span>Свадебная церемония </span>
      </div>
      <div>
        <h2>18.00 </h2>
        <span>
          Банкет <br /> Кокурсы <br /> Танцы
        </span>
      </div>
    </ProgramStyle>
  );
};
