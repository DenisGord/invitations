import React, { useState } from "react";
import { DearGuest } from "./components/DearGuest";
import { ImgLoader } from "./components/ImgLoader";
import { Program } from "./components/Program";

export const App = () => {

  return (
    <div className="app">
      <ImgLoader
        uri="https://sun9-54.userapi.com/impg/bW0wF_CUoP4_iY-UpWMgmkZjTO9TG2iXUfrrhQ/SmfSb2nXqRM.jpg?size=1440x2160&quality=95&sign=d9ba9efecb574348f22965990bb85d93&type=album"
        title="Екатерина"
        subtitle="Денис"
        id="first"
        white
      />
      <ImgLoader
        uri="https://sun9-13.userapi.com/impg/6njUuDPoWBfOLA2Sfc44ena6CPk0CD9lhNF9aA/-oAeGCqGWXw.jpg?size=1440x2160&quality=95&sign=9d94b09bcb3aee41d198034735f5da82&type=album"
        title={"15.08"}
        subtitle={"2024"}
        size={"120px"}
        id="second"
      />
      <DearGuest name="Светлана" secondName="Виталий" />
      <ImgLoader
        rectangle
        uri={
          "https://lh3.googleusercontent.com/fUS3B9Wsk4c2obt4fB4gJrg9AyKgfHPmxyYcBktT-jbIEFzoDtQqG-m4p_KJx-WxBLLEs7w71QI-n7zCSpdu7FgncZTLhI6PQawrrw=w1500-h1000-l95-e31"
        }
        id="third"
      />
      <Program />
      <ImgLoader
        id="fourth"
        uri="https://sun9-40.userapi.com/impg/qJ7NxEPDqTuA2imYaIkTJtw-DA_c5jHT49rs6g/VgDAXh9WIkk.jpg?size=1649x2160&quality=95&sign=9bda9837af97187ff700890dd7360a86&type=album"
      />
    </div>
  );
};
