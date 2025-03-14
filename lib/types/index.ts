import type { CanvasTexture, Side } from "three";

export type ColorKind =
  | "neutral"
  | "primary"
  | "secondary"
  | "accent"
  | "info"
  | "success"
  | "warning"
  | "error";

export type TooltipPosition = "left" | "right" | "top" | "bottom";

export type SubItem = {
  readonly label: string;
  readonly path: string;
};

export type SocialButton = {
  readonly tooltip: string;
  readonly url: string;
  readonly icon: string;
  readonly main: boolean;
};
};

export type Skill = {
  readonly title: string;
  readonly icon: string | null;
};

export type LottieTexture = CanvasTexture & {
  animation?: object;
};

export type LottieSphereProps = {
  src: string;
  repeatX?: number;
  repeatY?: number;
  radius?: number;
  segments?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
  side?: Side;
  transparent?: boolean;
};
