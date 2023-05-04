import React, {useState, useEffect} from "https://cdn.skypack.dev/react@17.0.1";
import {chapters} from "./chapters.js";
import {getRandomElement} from "./utils/utils.js";
const targetChapterID = String(window.location.hash).split("#")[1];
const chapterIDs = Object.keys(chapters);
export default function App() {
  const [chapterID, setChapterID] = useState(targetChapterID || getRandomElement(Object.keys(chapters)));
  useEffect(() => {
    window.location.hash = chapterID;
  }, [chapterID]);
  useEffect(() => {
    const handleHashChange = () => {
      setChapterID(String(window.location.hash).split("#")[1]);
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);
  return /* @__PURE__ */ React.createElement("div", {
    className: "page"
  }, chapters[chapterID].html, /* @__PURE__ */ React.createElement("nav", null, chapterIDs.map((chapterKey) => /* @__PURE__ */ React.createElement("button", {
    onClick: () => setChapterID(chapterKey)
  }, chapters[chapterKey].title))));
}
