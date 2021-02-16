import { useEffect } from "react";
import MediaControlCard from "../components/MediaControlCard";

export default function TempComponent(props) {
  useEffect(() => console.log(props.data), []);
  return (
    <div>
      {/* {props.data.map((student) => (
        <MediaControlCard title={student.personal_info.name} />
      ))} */}
    </div>
  );
}
