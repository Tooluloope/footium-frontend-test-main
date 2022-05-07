import { ReactNode } from "react";

export type ConditionalClass = [boolean, ...(string | ConditionalClass)[]];
export type SvgComponent = React.FunctionComponent<
  React.SVGProps<SVGSVGElement> & {
    title?: string | undefined;
  }
>;

export type GridSpaceState = "FILLED" | "EMPTY" | "INVALID";

type ForwardPositions = "ST" | "CF" | "RW" | "LW";
type MidFieldPositions = "LM" | "RM" | "CM" | "AM" | "DM";
type DefensivePositions = "CB" | "LB" | "RB" | "WB";
type GoalKeeperPositions = "GK";

export type PlayerPositions =
  | ForwardPositions
  | MidFieldPositions
  | DefensivePositions
  | GoalKeeperPositions;

export interface PlayerPositionStat {
  position: PlayerPositions;
  rating: number;
}

export interface Player {
  name: { firstName: string; surname: string };
  playerPosition: PlayerPositionStat;
  jerseyNumber: number;
  id: string;
  isGk?: boolean;
  isSub?: boolean;
}

export interface GridSpace {
  state: GridSpaceState;
  playerData: Player | null;
}

export type Formations = {
  "4-3-3": GridSpaceState[];
  "4-2-3-1": GridSpaceState[];
};

export type FormationKey = keyof Formations;

export type ContextType = {
  firstElevenPlayers: Player[];
  subs: Player[];
  formation: keyof Formations;
  filledOutFirstEleven: (Player | null)[];
  onDragStart: (id: string, isSub?: boolean) => void;
  onDragEnd: () => void;
  onDragOver: (id: string, isSub?: boolean) => void;
  dragged: { id: string; isSub?: boolean };
  setFormation: (value: keyof Formations) => void;
  gkJerseyUrl: string;
  playerJerseyUrl: string;
  formations: (keyof Formations)[];
};

export interface Team {
  firstEleven: Player[];
  subs: Player[];
}

export interface TacticsContainerProps {
  team: Team;
  formations: FormationKey[];
  playerJerseyUrl: string;
  gkJerseyUrl: string;
}
export interface FunctionalComponentWithChildren {
  children?: ReactNode;
}
