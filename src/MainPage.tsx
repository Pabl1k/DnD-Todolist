import background from "./assets/background/2.jpeg";
import Settings from "./containers/Settings/Settings";
import ListSelector from "./containers/ListSelector/ListSelector";
import "./MainPage.scss";

const MainPage = () => {
  const backgroundImg = {
    backgroundImage: `url(${background})`,
  };

  return (
    <section className="main-page" style={backgroundImg}>
      <ListSelector />
      <div className="main-page__container"></div>
      <Settings />
    </section>
  );
};

export default MainPage;
