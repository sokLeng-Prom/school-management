import { ReactComponent as AboutUsImg } from "../static/img/aboutUsImg.svg";
import { makeStyles } from "@material-ui/core/styles";
import ImgMediaCard from "../components/ImgMediaCard";
import { useEffect, useState } from "react";
import bunnaroth from "../static/img/bunnaroth.jpg";
import suling from "../static/img/suling.jpg";
import potato from "../static/img/potato.jpg";
import kuyeang from "../static/img/kuyeang.jpg";
import bg5 from "../static/img/bg5.jpg";
import bg2 from "../static/img/bg2.jpg";
import bg3 from "../static/img/bg3.jpg";
import bg4 from "../static/img/bg4.jpg";
import Lottie from "react-lottie";

import animationData from "../static/img/littie.json";
import abstractBg from '../static/img/abstractBg.svg'
import Tooltip from "@material-ui/core/Tooltip";
import "../static/css/aboutUs.css";
const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    scrollbarWidth: 0,
  },
  bigdiv: {
    backgroundColor: "blue",
    width: "30rem"
  },

  cardsWrapper: {
    display: "flex",
    position: "absolute",
    // marginTop: "35vh",
    marginRight: "70%",
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: "30%",
    // width: "700px",
  },

  card: {
    height: "100vh",
    // width: "100vw",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    background: "gray",
    height: "4rem",
    color: "white",
    width: "25rem",
  },
  name: {
    fontSize: "0.5rem",
  },
  coverImg: {
    height: "20rem",
    position: "sticky",

    height: "70vh",
    right: 0,
    marginTop: "30vh",
    // zIndex: -1,
  },
  Img: {
    width: "25rem",
  },
  //slogan
  aboutUsTitle: {
    width: "100vh",
    height: "100vh",
    paddingTop: "12rem",
    paddingRight: "7rem",
    // marginRight: "7rem",
    // position: "fixed",
  },
  wholeCard: {
    right: "30rem",
    width: "100vh",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  userPage: {
    width: "10vh",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "center",
  },

  userDes: {
    color: "red",
  },
  headerBuilding: {
    paddingBottom: "2rem",
    color: "black",
  },
  // Uy Seng's code
  coverPage: {
    height: "100vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  infoPage1: {
    height: "100vh",
    color: "white"
    // backgroundColor: "silver"
  },
  infoPage2: {
    height: "100vh",
    position: "relative"
    // backgroundImage: `url(${abstractBg})`
    // backgroundColor: "yellow",
  },
  infoPage3: {
    height: "100vh",
    // color: "white",
    // backgroundImage: `url(${bg4})`
    // backgroundColor: "pink",
  },
  infoPage4: {
    height: "100vh",
    // backgroundImage: `url(${bg5})`
    // backgroundColor: "gray",
  },
  abstractBg: {
    position: "absolute",
    left: 0,
    zIndex: "0"
  },
 
}));
var personFirst;
var personSecond;
var personThird;
var personFourth;

var bird;

var prev;
var cur;

var coverPage;
var pageOne;
var pageTwo;
var pageThree;
var pageFour;

export default function AboutUs() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const classes = useStyles();
  const [cardIndex, setCardIndex] = useState(0);

  const highlightVectorCharacter = (element) => {
    element.style.stroke = "black";
  };

  useEffect(() => {
    personFirst = document.querySelector("#person-first");
    personSecond = document.querySelector("#person-second");
    personThird = document.querySelector("#person-third");
    personFourth = document.querySelector("#person-fourth");
    pageOne = document.querySelector("#pageOne");
    pageTwo = document.querySelector("#pageTwo");
    pageThree = document.querySelector("#pageThree");
    pageFour = document.querySelector("#pageFour");
    coverPage = document.querySelector("#coverPage");
    bird = document.querySelector("#bird");

    prev = personFirst;
    cur = personFirst;
    bird.addEventListener("click", () => {
      console.log("personFirst Clicked");
      // cardIndex = 0;
      setCardIndex(0);
      prev.style.stroke = "none";
      prev = bird;
      cur = bird;

      highlightVectorCharacter(bird);
      coverPage.scrollIntoView();
      // window.scrollBy(0, window.innerHeight / 2);
    });

    personFirst.addEventListener("click", () => {
      console.log("personFirst Clicked");
      // cardIndex = 0;
      setCardIndex(0);
      prev.style.stroke = "none";
      prev = personFirst;
      cur = personFirst;

      highlightVectorCharacter(personFirst);
      pageOne.scrollIntoView();
      // window.scrollBy(0, window.innerHeight / 2);
    });
    // personSecond.addEventListener("mouseover", () => {
    //   personSecond.setAttribute("data-tip", "testing");
    // });

    personSecond.addEventListener("click", () => {
      console.log("personSecond Clicked");
      // cardIndex = 1;
      setCardIndex(1);

      prev.style.stroke = "none";

      prev = personSecond;
      cur = personSecond;

      highlightVectorCharacter(personSecond);
      pageTwo.scrollIntoView();
    });

    personThird.addEventListener("click", () => {
      console.log("personThird Clicked");
      // cardIndex = 2;
      setCardIndex(2);

      prev.style.stroke = "none";
      prev = personThird;
      cur = personThird;

      highlightVectorCharacter(personThird);
      pageThree.scrollIntoView();
    });

    personFourth.addEventListener("click", () => {
      console.log("personFourth Clicked");
      setCardIndex(3);

      prev.style.stroke = "none";

      prev = personFourth;
      cur = personFourth;

      highlightVectorCharacter(personFourth);
      pageFour.scrollIntoView();
    });
    // default state
    highlightVectorCharacter(bird);
  }, []);

  // const personSecondInfoCard = () => {
  //   return <div className={classes.card}>Card 2</div>;
  // };
  // const personThirdInfoCard = () => {
  //   return <div className={classes.card}>Card 3</div>;
  // };
  // const personFourthInfoCard = () => {
  //   return <div className={classes.card}>Card 4</div>;
  // };

  const infoCard = () => {
    // console.log(document.getElementById("#person-first"));
    switch (cardIndex) {
      case 0:
        return <div className={classes.card}>Seng uy</div>;
      case 1:
        return <div className={classes.card}>Bunnaroth</div>;
      case 2:
        return <div className={classes.card}>Kuyeang</div>;
      case 3:
        return <div className={classes.card}>Suling</div>;
    }
  };

  const infoPage = () => {
    // console.log(document.getElementById("#person-first"));
    switch (cardIndex) {
      case 0:
        return <div className={classes.userPage}>Seng Uy</div>;
      case 1:
        return <div className={classes.userDes}>Bunnaroth</div>;
      case 2:
        return <div className={classes.userDes}>Kuyeang</div>;
      case 3:
        return <div className={classes.userDes}>Suling</div>;
    }
  };

  const imgs = [potato, potato, potato, potato];
  const titles = [
    "Potato Leader",
    "Potato Teammate",
    "Potato Teammate",
    "Potato Teammate",
  ];

  const descriptions = [
    "Having so much fun in coding this website",
    "Chill",
    "Relax",
    "Chill",
  ];
  // const imgs = [potato, potato, potato, potato];
  // const titles = [
  //   "Potato Leader",
  //   "Potato Teammate",
  //   "Potato Teammate",
  //   "Potato Teammate",
  // ];

  // const descriptions = [
  //   "Having so much fun in coding this website",
  //   "Chill",
  //   "Relax",
  //   "Chill",
  // ];

  return (
    // Uy Seng's code

    <div id="container" className={classes.container}>
      <div id="coverPage" className={classes.coverPage}>
        <div className={classes.aboutUsTitle}>
          <h1>" I am not lazy, I am on energy saving mode "</h1>
        </div>
        <AboutUsImg className={classes.fourPeople} width={"30vw"} />
      </div>
      <div className={classes.infoPage1} id="pageOne">
        <div className={classes.card}>
          <div className = {classes.cardsWrapper}>
              <Lottie className={classes.abstractBg}
                  options={defaultOptions}
                  height={"auto"}
                  width={400}
            />
            <div classes = {classes.bigdiv}>

            </div>
          </div>
          <div className={classes.wholeCard} id="hoverCard">
          
            <h2 className={classes.headerBuilding}>“Hehe.” </h2>

            <div>
              <Tooltip title="Uy Seng">
                <img className={classes.Img} src={potato}></img>
              </Tooltip>
              <div className={classes.text}>
                <p>Uy Seng</p>
                <h2>Leader of potato</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className={classes.infoPage2} id="pageTwo">
        <div className={classes.card}>
          <div className = {classes.cardsWrapper}>
              <Lottie className={classes.abstractBg}
                  options={defaultOptions}
                  height={"auto"}
                  width={400}
              />
            <div classes = {classes.bigdiv}></div>
          </div>
          <div className={classes.wholeCard} id="hoverCard">
            <h2 className={classes.headerBuilding}>“When I wrote this code, only God and I understood what I did. Now
              only God knows.”
            </h2>
            <div>
              <Tooltip title="Bunanroth">
                <img className={classes.Img} src={bunnaroth}></img>
              </Tooltip>
              <div className={classes.text}>
                <p>Bunanroth</p>
                <h2>Second boss of potato</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className={classes.infoPage2} id="pageTwo">     
         
        <div className={classes.card}>
          <div className={classes.wholeCard}>
            <h2 className={classes.headerBuilding}>
              “When I wrote this code, only God and I understood what I did. Now
              only God knows.”
            </h2>
            <Tooltip title="Bunnaroth">
              <img className={classes.Img} src={bunnaroth}></img>
            </Tooltip>
            <div className={classes.text}>
              <p>Bunnaroth</p>
              <h2>Second boss of potato</h2>
            </div>
          </div>
        </div>
      </div> */}
      <div className={classes.infoPage3} id="pageThree">
        <div className={classes.card}>
          <div className = {classes.cardsWrapper}>
              <Lottie className={classes.abstractBg}
                  options={defaultOptions}
                  height={"auto"}
                  width={400}
              />
            <div classes = {classes.bigdiv}></div>
          </div>
          <div className={classes.wholeCard} id="hoverCard">
            <h2 className={classes.headerBuilding}> “A son asked his father (a programmer) why the sun rises in the
              east, and sets in the west. His response? It works, don’t touch!”
            </h2>
            <div>
              <Tooltip title="Kuyeang">
                <img className={classes.Img} src={kuyeang}></img>
              </Tooltip>
              <div className={classes.text}>
                <p>Kuyeang</p>
                <h2>Third boss of potato</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className={classes.infoPage3} id="pageThree">
        <div className={classes.card}>
          <div className={classes.wholeCard}>
            <h2 className={classes.headerBuilding}>
              “A son asked his father (a programmer) why the sun rises in the
              east, and sets in the west. His response? It works, don’t touch!”
            </h2>
            <Tooltip title="kuyeang">
              <img className={classes.Img} src={kuyeang}></img>
            </Tooltip>
            <div className={classes.text}>
              <p>Kuyeang</p>
              <h2>Third boss of potato</h2>
            </div>
          </div>
        </div>
      </div> */}


      {/* <div className={classes.infoPage4} id="pageFour">
        <div className={classes.card}>
          <div className={classes.wholeCard}>
            <h2 className={classes.headerBuilding}>
              
            </h2>
            <Tooltip title="Sokleng">
              <img className={classes.Img} src={suling}></img>
            </Tooltip>
            <div className={classes.text}>
              <p>Sokleng</p>
              <h2>Last boss of potato</h2>
            </div>
          </div>
        </div>
      </div> */}
      <div className={classes.infoPage4} id="pageFour">
        <div className={classes.card}>
          <div className = {classes.cardsWrapper}>
              <Lottie className={classes.abstractBg}
                  options={defaultOptions}
                  height={"auto"}
                  width={400}
              />
            <div classes = {classes.bigdiv}></div>
          </div>
          <div className={classes.wholeCard} id="hoverCard">
            <h2 className={classes.headerBuilding}> “If debugging is the process of removing bugs, then programming
              must be the process of putting them in.”
            </h2>
            <div>
              <Tooltip title="Sokleng">
                <img className={classes.Img} src={suling}></img>
              </Tooltip>
              <div className={classes.text}>
                <p>Sokleng</p>
                <h2>Last boss of potato</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
