import type { ProjectProps } from "../types";
import { xrProjectSkills, chexrmateProjectSkills } from "./skills";

const vrVotingProject: ProjectProps = {
  slug: "vr_voting",
  icon: "fluent-emoji:ballot-box-with-ballot",
  title: "VR Voting",
  videoId: 1196836626,
  description:
    "This is a VR experience which emulates the voting process of Canadian federal elections to familiarize children and new voters with it. This was inspired by my experience working as a Deputy Returning Officer for Elections Canada. The Canadian federal voting process is spatially driven and requires physical interaction with the ballot, voting screen and ballot box. This makes VR the ideal medium to demonstrate this process as it can replicate it more accurately than anything other than a physical recreation of the process.",
  process:
    "I modelled and animated the ballot, tables and voting screen. I programmed user interactions such as grabbing the ballot with the controller, moving behind the screen with locomotion, marking the ballot using an HTML Canvas which is placed on the ballot model as a texture and placing it in the box by checking for an intersection between the ballot model and the box geometry.",
  outcome:
    "The user gains confidence with completing the steps required to vote and is prepared to complete them in real life. A potential extension is handing the ballot to the Deputy Returning Officer to remove the stub before placing it in the box.",
  demoLink: "https://vr-voting.pages.dev",
  githubLink: "https://github.com/timrlai/vr-voting",
  lottieType: "vr",
  skills: xrProjectSkills,
};

const chexrmateProject: ProjectProps = {
  slug: "chexrmate",
  icon: "fa6-regular:chess-knight",
  title: "CheXRmate",
  videoId: 1196836625,
  description:
    "This is an AR experience which teaches beginner chess players how to play. Chess is a spatial game which benefits from viewing the board from different angles. AR allows a chess board to be placed in any real environment and can improve on a physical chess board by visually highlighting potential moves, making it an ideal format.",
  process:
    "I modelled and animated the six chess pieces and programmatically built the board. I programmed the user interactions to select a piece, highlight valid moves and select a square to move to. I displayed the valid moves and whether the game is in check, checkmate or stalemate on the screen. When a pawn reaches the end of the board, I allow the user to choose a piece to promote it to. I integrated the pieces and board with the rules of chess, the state of the board and an automated opponent using the chess.js library.",
  outcome:
    "The user becomes familiar with the rules of chess, the movement of the pieces and the flow of a real game resulting in checkmate or stalemate. The opponent's moves are random, but a potential extension could add the Stockfish.js chess engine to increase the difficulty.",
  demoLink: "https://chexrmate.pages.dev",
  githubLink: "https://github.com/timrlai/chexrmate",
  lottieType: "vr",
  skills: chexrmateProjectSkills,
};

export const projects: ProjectProps[] = [vrVotingProject, chexrmateProject];

export default projects;
