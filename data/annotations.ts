import { Annotation } from "../app/types";

// Rough Annoation Docs
// https://roughnotation.com/
// https://glitch.com/~basic-rough-notation -- sandbox w/code
// https://basic-rough-notation.glitch.me/
// https://github.com/linkstrifer/react-rough-notation

export const annotations: Annotation[] = [
  {
    id: "creating",
    type: "highlight",
    color: "#C1D37F",
    multiline: true,
    animationDuration: 800,
  },
  {
    id: "techstack",
    type: "highlight",
    color: "#7FBEEB",
    multiline: true,
    animationDuration: 1000,
  },
  {
    id: "solving-challenges",
    type: "highlight",
    color: "#FE938C",
    multiline: true,
    animationDuration: 900,
  },
  {
    id: "prof-links",
    type: "box",
    color: "red",
    animationDuration: 1000,
    iterations: 1,
  },
];
