import { DearGuest } from "./components/DearGuest";
import { DoublePhoto } from "./components/DoublePhoto";
import { AndIcon } from "./components/IconsComponent";
import { ImgLoader } from "./components/ImgLoader";
const dearGuestText = `   Один день в этом году будет для нас особенным, и мы хотим провести его в
кругу родных и близких друзей. С большим удовольствием приглашаем Вас на
зноменательный праздник - ношу сводобу!`;
export const App = () => {
  return (
    <div className="app">
      <ImgLoader
        uri="https://sun9-54.userapi.com/impg/bW0wF_CUoP4_iY-UpWMgmkZjTO9TG2iXUfrrhQ/SmfSb2nXqRM.jpg?size=1440x2160&quality=95&sign=d9ba9efecb574348f22965990bb85d93&type=album"
        title="Екатерина"
        subtitle="Денис"
        white
      />
      <ImgLoader
        uri="https://sun9-13.userapi.com/impg/6njUuDPoWBfOLA2Sfc44ena6CPk0CD9lhNF9aA/-oAeGCqGWXw.jpg?size=1440x2160&quality=95&sign=9d94b09bcb3aee41d198034735f5da82&type=album"
        title={"15.08"}
        subtitle={"2024"}
        size={"120px"}
      />
      {/* <ImgLoader
        uri="https://sun9-13.userapi.com/impg/6njUuDPoWBfOLA2Sfc44ena6CPk0CD9lhNF9aA/-oAeGCqGWXw.jpg?size=1440x2160&quality=95&sign=9d94b09bcb3aee41d198034735f5da82&type=album"
        title={dearGuestText}
        size={"40px"}
      /> */}

      <DearGuest name="Светлана" secondName="Виталий" />
      {/* <DoublePhoto/> */}
    </div>
  );
};
