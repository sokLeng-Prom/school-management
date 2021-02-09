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
    setOpen(!open);
  };
  return (
    <MediaControlCard title={props.title} image={props.image}>
      {/* <FullScreenDialogue
        name={"Testing"}
        // title={props.title}
        // open={open}
        // handleClick={handleClick}
        // name={props.title}
      ></FullScreenDialogue> */}
    </MediaControlCard>
  );
}
