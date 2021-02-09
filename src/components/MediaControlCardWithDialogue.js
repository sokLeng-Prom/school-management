import MediaControlCard from "../components/MediaControlCard";
import FullScreenDialogue from "../components/FullScreenDialogue";
import { useState, useEffect } from "react";

export default function MediaControlCardWithDialogue(props) {
  // for dialogue box
  const [open, setOpen] = useState(false);

  //   const [data, setData] = useState(props.data);
  //   useEffect(() => {
  //     console.log(data);
  //   }, []);

  const handleClick = () => {
    console.log("FUCK THIS SHIT");
    setOpen(!open);
  };
  return (
    <div>
      <MediaControlCard
        handleClick={handleClick}
        title={props.title}
        image={props.image}
      ></MediaControlCard>
      <FullScreenDialogue
        title={props.title}
        open={open}
        handleClick={handleClick}
        name={"SCARY"}
      ></FullScreenDialogue>
    </div>
  );
}
