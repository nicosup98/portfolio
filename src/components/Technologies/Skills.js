import { DiTerminal } from "react-icons/di";
import { SiJava, SiFirebase, SiGit, SiJavascript } from "react-icons/si";
import { RiFlutterFill } from "react-icons/ri";

export const Skills = [
  {
    slug: "flutter",
    Component: RiFlutterFill,
    title: "Flutter",
    Description: () => <>learning Dart & Flutter for mobile development. </>,
  },
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
    title: 'front end',
    Description: ()=> <>my principal framework is angular but i can code with react and vue also i know typescript and a little of express </>
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
    Description: () => <>Git is a tool that I use every day. I use GitHub or bitbucket for pushing my code.</>,
  },
];
