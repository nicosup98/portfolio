import { DiTerminal } from "react-icons/di";
import { SiJava, SiFirebase, SiGit, SiJavascript,SiGo } from "react-icons/si";

export const Skills = [
  {
    slug: "java",
    Component: SiJava,
    title: "Java",
    Description: () => <>I can code in Java. But I mainly use it for backend with spring.</>,
  },
  {
    slug: "terminal",
    Component: DiTerminal,
    title: "Scripting",
    Description: () => <>I know basic scripting in sh for linux and useful commands for terminal</>,
  },
  {
    slug: 'javascript',
    Component:SiJavascript,
    title: 'javascript',
    Description: ()=> <>my principal framework is angular but i can code with react and svelte also i know typescript and a little of express </>
  },
  {
    slug: "firebase",
    Component: SiFirebase,
    title: "Firebase",
    Description: () => <>I have used Firebase for auth & database in my work</>,
  },
  {
    slug: "git",
    Component: SiGit,
    title: "Git",
    Description: () => <>Git is a tool that I use every day. I use GitHub and/or bitbucket</>,
  },
  {
    slug: "go",
    Component: SiGo,
    title: "Go",
    Description: () => <>i use this languaje for backend apis with fiber and gin</>,
  },
];
