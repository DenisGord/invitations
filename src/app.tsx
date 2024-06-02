import React, { useState } from "react";
import { DearGuest } from "./components/DearGuest";
import { ImgLoader } from "./components/ImgLoader";
import { Program } from "./components/Program";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBVTpqgU2IMHqnjxwoMbK7g8sLcg_crewg",
  authDomain: "invitations-5fb22.firebaseapp.com",
  projectId: "invitations-5fb22",
  storageBucket: "invitations-5fb22.appspot.com",
  messagingSenderId: "466327964597",
  appId: "1:466327964597:web:0959420264abb5c2c3a7fc"
};

export const App = () => {
  initializeApp(firebaseConfig);
  const urlParams = new URLSearchParams(window.location.search);
  const name = urlParams.get("name");
  const man = urlParams.get("man");
  const secondName = urlParams.get("secondName");
  const child = urlParams.get("child");

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
        name={name}
        man={man}
        secondName={secondName}
      />
      <DearGuest />
      <ImgLoader
        rectangle
        uri={
          "https://sun9-10.userapi.com/impg/m5vvGuss4D4T8fDhN6R1WQwf9cuC5kXRsYw8nA/IGobRVHUw5k.jpg?size=960x640&quality=95&sign=a036be7e2837dcc31e6a7b7ed9e80b0f&type=album"
        }
        id="third"
      />
      <Program />
      <ImgLoader
        rectangle
        details
        id="fourth"
        child={child}
        name={name}
        secondName={secondName}
        uri="https://sun9-79.userapi.com/impg/byaQdUHH4lLAynPPL6wFkFIER7N1_MD4TJhGpQ/Ny1_2STAvL8.jpg?size=1440x2160&quality=95&sign=84adb348918dc3259149e831a3e31f37&type=album"
      />
        <ImgLoader
        rectangle
        details
        flowers
        id="five"
        uri="https://sun9-10.userapi.com/impg/XZvoqUBpDtUopZlCdJp0an4DFx4aiZhk1e_L8g/MQ5w618Jp2M.jpg?size=810x1080&quality=95&sign=6e981fb6c65da372d23c8b14c58fdc21&type=album"
      />
    </div>

  );
};
