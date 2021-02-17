import { ReactComponent as AboutUsImg } from "../static/img/aboutUsImg.svg";
import { makeStyles } from "@material-ui/core/styles";
import ImgMediaCard from "../components/ImgMediaCard";
import { useEffect, useState } from "react";
import bunnaroth from "../static/img/bunnaroth.jpg";
import suling from "../static/img/suling.jpg";
import potato from "../static/img/potato.jpg";
import Kuyeang from "../static/img/kuyeang.jpg";
const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    // overflow: "hidden",
  },
  fourPeople: {
    position: "sticky",
  },
  cardsWrapper: {
    display: "flex",
    position: "absolute",
    marginTop: "35vh",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "700px",
  },

  card: {
    height: "100vh",
    // width: "100vw",
    backgroundColor: "blue",
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
    position: "absolute",

    height: "70vh",
    right: 0,
    marginTop: "30vh",
    zIndex: -1,
  },
  Img: {
    width: "25rem",
  },
  //slogan
  aboutUsTitle: {
    width: "100vh",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "5rem",
    // position: "fixed",
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
  // Uy Seng's code
  coverPage: {
    height: "100vh",
  },
  infoPage1: {
    height: "100vh",
    backgroundColor: "blue",
  },
  infoPage2: {
    height: "100vh",
    backgroundColor: "yellow",
  },
  infoPage3: {
    height: "100vh",
    backgroundColor: "pink",
  },
  infoPage4: {
    height: "100vh",
    backgroundColor: "black",
  },
}));
var personFirst;
var personSecond;
var personThird;
var personFourth;
var prev;
var cur;

var pageOne = document.querySelector("#pageOne");
var pageTwo = document.querySelector("#pageTwo");
var pageThree = document.querySelector("#pageThree");
var pageFour = document.querySelector("#pageFour");

export default function AboutUs() {
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

    prev = personFirst;
    cur = personFirst;

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
    highlightVectorCharacter(personFirst);
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
        return (
          <div className={classes.card}>
            <div className={classes.aboutUsTitle}>
              <img className={classes.Img} src={potato}></img>
              <div className={classes.text}>
                <p>Uy Seng</p>
                <h2>Leader of potato</h2>
              </div>
            </div>
          </div>
        );
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
    // Suling's code
    // <div className={classes.container}>
    //   {/* <img className={classes.coverImg} src={about_us} /> */}
    //   <div>
    //     <AboutUsImg className={classes.fourPeople} height={"70vh"} />
    //     <div>
    //       <div className={classes.aboutUsTitle}>
    //         <h1>" I am not lazy, I am on energy saving mode "</h1>
    //       </div>
    //       {infoCard()}

    //       <div className={classes.aboutUsTitle}>
    //         <img className={classes.Img} src={bunnaroth}></img>
    //         <div className={classes.text}>
    //           <p>Bunnaroth</p>
    //           <h2>Second boss of potato</h2>
    //         </div>
    //       </div>
    //       <div className={classes.aboutUsTitle}>
    //         <img className={classes.Img} src={potato}></img>
    //         <div className={classes.text}>
    //           <p>Kuyeang</p>
    //           <h2>third boss of potato</h2>
    //         </div>
    //       </div>
    //       <div className={classes.aboutUsTitle}>
    //         <img className={classes.Img} src={suling}></img>
    //         <div className={classes.text}>
    //           <p>Sokleng</p>
    //           <h2>Last boss of potato</h2>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    // Uy Seng's code

    <div className={classes.container}>
      <div className={classes.coverPage}>
        <AboutUsImg className={classes.fourPeople} height={"70vh"} />
      </div>
      <div className={classes.infoPage1} id="pageOne"></div>
      <div className={classes.infoPage2} id="pageTwo"></div>
      <div className={classes.infoPage3} id="pageThree"></div>
      <div className={classes.infoPage4} id="pageFour"></div>
    </div>
  );
}
