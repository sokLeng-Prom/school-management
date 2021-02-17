import { ReactComponent as AboutUsImg } from "../static/img/aboutUsImg.svg";
import { makeStyles } from "@material-ui/core/styles";
import ImgMediaCard from "../components/ImgMediaCard";

import { useEffect, useState } from "react";

import potato from "../static/img/potato.jpg";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    // overflow: "hidden",
  },
  cardsWrapper: {
    display: "flex",
    position: "absolute",
    marginTop: "35vh",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "700px",
  },
  // cardsWrapper: {
  //   div: {
  //     margin: "1px",
  //   },
  // },
  card: {
    height: "400px",
    width: "800px",
    backgroundColor: "blue",
  },
  coverImg: {
    position: "absolute",
    height: "70vh",
    right: 0,
    marginTop: "30vh",
    zIndex: -1,
  },
}));
var personFirst;
var personSecond;
var personThird;
var personFourth;
var prev;
var cur;

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
    });

    personThird.addEventListener("click", () => {
      console.log("personThird Clicked");
      // cardIndex = 2;
      setCardIndex(2);

      prev.style.stroke = "none";
      prev = personThird;
      cur = personThird;

      highlightVectorCharacter(personThird);
    });

    personFourth.addEventListener("click", () => {
      console.log("personFourth Clicked");
      setCardIndex(3);

      prev.style.stroke = "none";

      prev = personFourth;
      cur = personFourth;

      highlightVectorCharacter(personFourth);
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

  const infoCards = () => {
    // console.log(document.getElementById("#person-first"));
    switch (cardIndex) {
      case 0:
        return <div className={classes.card}>Bunnaroath</div>;
      case 1:
        return <div className={classes.card}>Seng Uy</div>;
      case 2:
        return <div className={classes.card}>Kuyeang</div>;
      case 3:
        return <div className={classes.card}>Suling</div>;
    }
  };

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
    <div className={classes.container}>
      {/* <img className={classes.coverImg} src={about_us} /> */}
      <AboutUsImg height={"70vh"} />
      {/* {personFirstInfoCard()} */}
      {infoCards()}
      {/* {injectJS()} */}
      {/* info card */}
      {/* <div className={classes.cardsWrapper}>
        {titles.map((name, index) => (
          <ImgMediaCard
            className={classes.cards}
            titl      <ReactTooltip place={"top"} />
{imgs[index]}
            description={descriptions[index]}
          />
        ))}
      </div> */}
    </div>
  );
}
