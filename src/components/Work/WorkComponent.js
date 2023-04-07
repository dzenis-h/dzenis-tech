import React, { useEffect, Suspense, useContext } from "react";
import Navbar from "../../components/layout/Navbar";
import { LangContext } from "../../assets/locales/LangContext";
import { obj } from "../../assets/locales/words";

// import ModalVideo from "react-modal-video";

import WrokTemplate from "./WrokTemplate";

import HighlightedHeader from "./Highlighted/HighlightedHeader";

import Toggle from "../darkMode/ToggleContainer";
import { useTheme } from "../darkMode/useTheme";
import { Wrapper } from "../darkMode/Wrapper";

// import HighlightedApp from "./Highlighted/HighlightedApp";
// import HighlightedDescription from "./Highlighted/HighlightedDescription";
// import HighlightedList from "./Highlighted/HighlightedList";

import {
  // BiggaFileUploads_2,
  CalorieTracker_3,
  ClientPanel_4,
  // Dev_Spot_5,
  Espro_27,
  evolWe1_7,
  evolWe2_6,
  HotelXO_8,
  HubFinder_22,
  idea_X_9,
  //  ImageSearch_26,
  LoanCalculator2_11,
  // MarsEMS_12,
  miniStories_13,
  NexterWebsite_14,
  NodeBookShop_15,
  //  ReactiveBurger_25,
  ReactiveContacts_24,
  ReactiveMovieDB_16,
  ReactiveRSS_17,
  ReactiveTube_18,
  SpaceXLauncher_19,
  BalkanSportsStore_20,
  TheMERNShop_21,
  ImageSearch_26,
  ReactiveOrders,
  //  =====================
  BalkanRecipes,
  // BiggaFileUploads,
  CalorieTracker,
  ClientPanel,
  // Dev_Spot,
  Espro,
  evolWe1,
  evolWe2,
  HotelXO,
  HubFinder,
  idea_X,
  LoanCalculator2,
  // MarsEMS,
  miniStories,
  NexterWebsite,
  NodeBookShop,
  // ReactiveBurger,
  ReactiveContacts,
  ReactiveMovieDB,
  ReactiveRSS,
  ReactiveTube,
  SpaceXLauncher,
  BalkanSportsStore,
  TheMERNShop,
  iZEN_10,
  iZen,
  ImageSearch,
  PrototypePortfolio_28,
  prototypePortfolio,
  ReactiveOrders_29,
  iBookMark_30,
  iBookMark,
  BiggaPublishing,
  BiggaPublishing_29,
  DataSearch,
  DataSearch_31,
  NoteAPP,
  NoteAPP_32,
} from "../helper/imageIndex";

const ImageComponent = React.lazy(() => import("../helper/ImageComponent"));

const Work = () => {
  // const [videoOpen, setVideoOpen] = useState(false);

  useEffect(() => {
    document.title = "My work"; // making the document title dynamic
  }, []);

  const themeState = useTheme();
  const darkMode = localStorage.getItem("dark");
  const { lang } = useContext(LangContext);
  const {
    miniStories_1,
    TheMERNShop_1,
    idea_X_1,
    NodeBookShop_1,
    ReactiveTube_1,
    BalkanSportsStore_1,
    NotesX_1,
    LoanCalculator_1,
    ImageSearch_1,
    ReactiveOrders_1,
    iBookmark_1,
    iZEN_1,
    Espro_1,
    HubFinder_1,
    DataSearch_1,
    ReactiveRSS_1,
    BalkanRecipes_1,
    ClientPanel_1,
    CalorieTracker_1,
    ReactiveMovies_1,
    Nexter_1,
    evolWe2_1,
    HotelXO_1,
    evolWE1_1,
    BiggaPublishing_1,
    PortfolioPrototype_1,
    ReactiveContacts_1,
    SpaceXLauncher_1,
    work_1,
    work_2,
  } = obj[lang];

  return (
    <div>
      <Wrapper>
        <main
          id="work"
          className={darkMode === "true" ? "dark-theme" : "white-theme"}
        >
          <div style={{ disply: "flex", textAlign: "center" }}>
            <Navbar />
          </div>
          <Toggle toggleTheme={themeState} theme={themeState.dark}></Toggle>{" "}
          <h1 className="lg-heading textShadow">
            <span className={darkMode === "true" ? "white" : "heading-about"}>
              {work_1}
            </span>
            <i
              className={
                darkMode === "true"
                  ? "specialColor custom-text"
                  : "dark-heading gold-headings"
              }
            >
              {" "}
              {work_2}
            </i>
          </h1>
          {/* <ModalVideo
            ratio="21:9"
            channel="youtube"
            isOpen={videoOpen}
            videoId="5pUm2DWUgPM"
            onClose={() => setVideoOpen(false)}
          /> */}
          <HighlightedHeader />
          <b
            className={
              darkMode === true
                ? "diff-projects diff-projects-black"
                : "diff-projects diff-projects-white"
            }
          >
            {" "}
          </b>
          <div className="projects">
            {/* <div className="item">
              <Suspense fallback={<div className="loader"></div>}>
                <ImageComponent
                  webp={Dev_Spot_5}
                  jpg={Dev_Spot}
                  title="It's a full stack app that uses a enormous tech stack -> My little versoion of SO :)"
                />
              </Suspense>

              <WrokTemplate
                mainLink="https://dev--spot.herokuapp.com/"
                github="https://github.com/dzenis-h/devSpot"
                name="Dev_Spot"
                description="It's a social network for developers 💻"
              />
            </div> */}

            <div className="item">
              <Suspense fallback={<div className="loader"></div>}>
                <ImageComponent
                  webp={miniStories_13}
                  jpg={miniStories}
                  title="miniStories"
                />
              </Suspense>

              <WrokTemplate
                mainLink="https://mini-stories.herokuapp.com"
                github="https://github.com/dzenis-h/mini-stories"
                name="miniStories"
                description={miniStories_1}
              />
            </div>

            <div className="item">
              <Suspense fallback={<div className="loader"></div>}>
                <ImageComponent
                  webp={TheMERNShop_21}
                  jpg={TheMERNShop}
                  title="The MERN Shop"
                />
              </Suspense>

              <WrokTemplate
                mainLink="https://mern-shop.herokuapp.com"
                github="https://github.com/dzenis-h/MERN_Shop"
                name="The MERN Shop"
                description={TheMERNShop_1}
              />
            </div>

            <div className="item">
              <Suspense fallback={<div className="loader"></div>}>
                <ImageComponent webp={idea_X_9} jpg={idea_X} title="idea_x" />
              </Suspense>

              <WrokTemplate
                mainLink="https://idea-x.herokuapp.com"
                github="https://github.com/dzenis-h/IDEA_x"
                name="idea_X"
                description={idea_X_1}
              />
            </div>

            <div className="item">
              <Suspense fallback={<div className="loader"></div>}>
                <ImageComponent
                  webp={NodeBookShop_15}
                  jpg={NodeBookShop}
                  title="Node Book Shop"
                />
              </Suspense>

              <WrokTemplate
                mainLink="https://node-books.herokuapp.com"
                github="https://github.com/dzenis-h/node-book-shop-2.0"
                name="Node Book Shop"
                description={NodeBookShop_1}
              />
            </div>

            <div className="item">
              <Suspense fallback={<div className="loader"></div>}>
                <ImageComponent
                  webp={ReactiveTube_18}
                  jpg={ReactiveTube}
                  title="This was the time when I switched from Angular to React"
                />
              </Suspense>
              <WrokTemplate
                mainLink="https://reactive-tube-2.web.app/"
                github="https://github.com/dzenis-h/Reactive-tube"
                name="Reactive Tube"
                description={ReactiveTube_1}
              ></WrokTemplate>
            </div>
            <div className="item">
              <Suspense fallback={<div className="loader"></div>}>
                <ImageComponent
                  webp={BalkanSportsStore_20}
                  jpg={BalkanSportsStore}
                  title="When I first started using Angular 2+"
                />
              </Suspense>

              <WrokTemplate
                mainLink="https://balkan-sport.web.app"
                github="https://github.com/dzenis-h/Balkan-Sports-Store"
                name="Balkan Sports Store"
                description={BalkanSportsStore_1}
              />
            </div>
            <div className="item">
              <Suspense fallback={<div className="loader"></div>}>
                <ImageComponent
                  webp={NoteAPP_32}
                  jpg={NoteAPP}
                  title="I was looking for a good note keeper, so I decided build my own"
                />
              </Suspense>

              <WrokTemplate
                mainLink="https://notes-project-2022.web.app"
                github="https://github.com/dzenis-h/notes-app"
                name="NotesX"
                description={NotesX_1}
              />
            </div>
            <div className="item">
              <Suspense fallback={<div className="loader"></div>}>
                <ImageComponent
                  webp={LoanCalculator2_11}
                  jpg={LoanCalculator2}
                  title="Loan Calculator that will determine your estimated payments for loan amounts, interest rates and terms."
                />
              </Suspense>

              <WrokTemplate
                mainLink="https://web-loan-calculator.web.app"
                github="https://github.com/dzenis-h/Loan-Calculator-2.0"
                name="Loan Calculator 2.0"
                description={LoanCalculator_1}
              />
            </div>
            <div className="item">
              <Suspense fallback={<div className="loader"></div>}>
                <ImageComponent
                  webp={ImageSearch_26}
                  jpg={ImageSearch}
                  title="Image Search App"
                />
              </Suspense>

              <WrokTemplate
                mainLink="https://coding-challenge-2022.web.app"
                github="https://github.com/dzenis-h/coding-challenge"
                name="Image Search App"
                description={ImageSearch_1}
              />
            </div>
            <div className="item">
              <Suspense fallback={<div className="loader"></div>}>
                <ImageComponent
                  webp={ReactiveOrders_29}
                  jpg={ReactiveOrders}
                  title="Reactive Orders"
                />
              </Suspense>

              <WrokTemplate
                mainLink="https://reactive-order.vercel.app/"
                github="https://github.com/dzenis-h/reactive-order"
                name="Reactive Orders"
                description={ReactiveOrders_1}
              />
            </div>
            <div className="item">
              <Suspense fallback={<div className="loader"></div>}>
                <ImageComponent
                  webp={iBookMark_30}
                  jpg={iBookMark}
                  title="iBookMark"
                />
              </Suspense>

              <WrokTemplate
                mainLink="https://ibookmark-app.web.app"
                github="https://github.com/dzenis-h/iBookmark"
                name="iBookmark 2.0"
                description={iBookmark_1}
              />
            </div>
            <div className="item">
              <Suspense fallback={<div className="loader"></div>}>
                <ImageComponent webp={iZEN_10} jpg={iZen} title="iZEN" />
              </Suspense>

              <WrokTemplate
                mainLink="https://dzenis-h.github.io/iZEN"
                github="https://github.com/dzenis-h/iZEN"
                name="iZEN"
                description={iZEN_1}
              />
            </div>
            <div className="item">
              <Suspense fallback={<div className="loader"></div>}>
                <ImageComponent
                  webp={Espro_27}
                  jpg={Espro}
                  title="Espro Coffee Shop"
                />
              </Suspense>

              <WrokTemplate
                mainLink="https://espro-coffee.web.app/"
                github="https://github.com/dzenis-h/espro"
                name="Espro"
                description={Espro_1}
              />
            </div>
            <div className="item">
              <Suspense fallback={<div className="loader"></div>}>
                <ImageComponent
                  webp={HubFinder_22}
                  jpg={HubFinder}
                  title="HubFinder"
                />
              </Suspense>

              <WrokTemplate
                mainLink="https://hub-finder.web.app/"
                github="https://github.com/dzenis-h/Hub_Finder"
                name="HubFinder"
                description={HubFinder_1}
              />
            </div>
            <div className="item">
              <Suspense fallback={<div className="loader"></div>}>
                <ImageComponent
                  webp={DataSearch}
                  jpg={DataSearch_31}
                  title="Data Search Prototype"
                />
              </Suspense>

              <WrokTemplate
                mainLink="https://data-search.vercel.app/"
                github="https://github.com/dzenis-h/dataSearch"
                name="Data Search"
                description={DataSearch_1}
              />
            </div>
            <div className="item">
              <Suspense fallback={<div className="loader"></div>}>
                <ImageComponent
                  webp={ReactiveRSS_17}
                  jpg={ReactiveRSS}
                  title="Reactive RSS"
                />
              </Suspense>

              <WrokTemplate
                mainLink="https://reactive-feeds.web.app"
                github="https://github.com/dzenis-h/Reactive-RSS"
                name="Reactive RSS"
                description={ReactiveRSS_1}
              />
            </div>

            <div className="item">
              <Suspense fallback={<div className="loader"></div>}>
                <ImageComponent
                  webp={BalkanRecipes_1}
                  jpg={BalkanRecipes}
                  title="My sesocnd Angular app that tracks your recipes and shopping list as well"
                />
              </Suspense>

              <WrokTemplate
                mainLink="https://balkan-recipes.firebaseapp.com/"
                github="https://github.com/dzenis-h/Balkan_Recipe_Book"
                name="Balkan Recipes"
                description={BalkanRecipes_1}
              />
            </div>
            <div className="item">
              <Suspense fallback={<div className="loader"></div>}>
                <ImageComponent
                  webp={ClientPanel_4}
                  jpg={ClientPanel}
                  title="client-panel"
                />
              </Suspense>

              <WrokTemplate
                mainLink="https://client-panel-2019.firebaseapp.com/"
                github="https://github.com/dzenis-h/client-panel"
                name="Client Panel"
                description={ClientPanel_1}
              />
            </div>

            <div className="item">
              <Suspense fallback={<div className="loader"></div>}>
                <ImageComponent
                  webp={CalorieTracker_3}
                  jpg={CalorieTracker}
                  title="It's Calorie tracker that saves your data into LS. It's made with pure vanilla JavaScript using the 'Module Pattern', ES6 features, Materialize CSS and Font Awesome for styling."
                />
              </Suspense>

              <WrokTemplate
                mainLink="https://web-calorie-tracker.firebaseapp.com/"
                github="https://github.com/dzenis-h/Calorie_Tracker"
                name="Calorie Tracker"
                description={CalorieTracker_1}
              />
            </div>
            <div className="item">
              <Suspense fallback={<div className="loader"></div>}>
                <ImageComponent
                  webp={ReactiveMovieDB_16}
                  jpg={ReactiveMovieDB}
                  title="reactive_movies"
                />
              </Suspense>

              <WrokTemplate
                mainLink="https://reactive-movies.firebaseapp.com/"
                github="https://github.com/dzenis-h/reactive-movies"
                name="Reactive Movie DB"
                description={ReactiveMovies_1}
              />
            </div>

            <div className="item">
              <Suspense fallback={<div className="loader"></div>}>
                <ImageComponent
                  webp={NexterWebsite_14}
                  jpg={NexterWebsite}
                  title="Nexter website"
                />
              </Suspense>

              <WrokTemplate
                mainLink="https://nexter-homes.web.app"
                github="https://github.com/dzenis-h/nexter"
                name="Nexter website"
                description={Nexter_1}
              />
            </div>

            <div className="item">
              <Suspense fallback={<div className="loader"></div>}>
                <ImageComponent
                  webp={evolWe2_6}
                  jpg={evolWe2}
                  title="Example Website"
                />
              </Suspense>

              <WrokTemplate
                mainLink="https://evolwe-2022.web.app/"
                github="https://github.com/dzenis-h/evolWE"
                name="evolWe 2.0"
                description={evolWE1_1}
              />
            </div>

            <div className="item">
              <Suspense fallback={<div className="loader"></div>}>
                <ImageComponent
                  webp={HotelXO_8}
                  jpg={HotelXO}
                  title="Hotel XO website"
                />
              </Suspense>

              <WrokTemplate
                mainLink="https://hotel-xo.web.app"
                github="https://github.com/dzenis-h/hotel-xo"
                name="Hotel XO"
                description={HotelXO_1}
              />
            </div>

            <div className="item">
              <Suspense fallback={<div className="loader"></div>}>
                <ImageComponent webp={evolWe1_7} jpg={evolWe1} title="evolWE" />
              </Suspense>

              <WrokTemplate
                mainLink="https://evolwe-landing-page.web.app"
                github="https://github.com/dzenis-h/Evolwe-Prototype"
                name="evolWE v1.0"
                description={evolWe2_1}
              />
            </div>

            <div className="item">
              <Suspense fallback={<div className="loader"></div>}>
                <ImageComponent
                  webp={BiggaPublishing_29}
                  jpg={BiggaPublishing}
                  title="Bigga Publishing"
                />
              </Suspense>

              <WrokTemplate
                mainLink="https://bigga-publishing-2.web.app"
                github="https://github.com/dzenis-h/bigga-publishing"
                name="Bigga Publishing"
                description={BiggaPublishing_1}
              />
            </div>

            <div className="item">
              <Suspense fallback={<div className="loader"></div>}>
                <ImageComponent
                  webp={PrototypePortfolio_28}
                  jpg={prototypePortfolio}
                  title="Prototype Portfolio"
                />
              </Suspense>

              <WrokTemplate
                mainLink="https://prototype-portfolio-1.web.app/"
                github="https://github.com/dzenis-h/prototype-portfolio"
                name="Portfolio prototype"
                description={PortfolioPrototype_1}
              />
            </div>

            <div className="item">
              <Suspense fallback={<div className="loader"></div>}>
                <ImageComponent
                  webp={ReactiveContacts_24}
                  jpg={ReactiveContacts}
                  title="Add, remove, manipulate, and filter contacts."
                />
              </Suspense>

              <WrokTemplate
                mainLink="https://contact-reactive.herokuapp.com"
                github="https://github.com/dzenis-h/Reactive-Contacts/tree/master"
                name="Reactive Contacts"
                description={ReactiveContacts_1}
              />
            </div>

            <div className="item">
              <Suspense fallback={<div className="loader"></div>}>
                <ImageComponent
                  webp={SpaceXLauncher_19}
                  jpg={SpaceXLauncher}
                  title="A small move from RESTful to GraphQL world"
                />
              </Suspense>

              <WrokTemplate
                mainLink="https://space-x.herokuapp.com"
                github="https://github.com/dzenis-h/spaceX-launches"
                name="SpaceX Launcher"
                description={SpaceXLauncher_1}
              />
            </div>

            <div />

            <div />
          </div>
        </main>
      </Wrapper>
    </div>
  );
};

export default Work;
