import MediaControlCard from "../components/MediaControlCard";
import FormDialogue from "../components/FormDialogue";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../static/const";
export default function AssignCourse() {
  return (
    <div>
      <MediaControlCard title={"Teacher"} />
      <MediaControlCard title={"Student"} />
      <FormDialogue />
    </div>
  );
}
