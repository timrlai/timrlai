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
  readonly to: string;
  readonly hash: string;
  readonly icon: string;
};

export type SocialButton = {
  readonly tooltip: string;
  readonly url: string;
  readonly icon: string;
  readonly main: boolean;
};

export type SocialButtonsProps = {
  buttonColor?: ColorKind;
  tooltipColor?: ColorKind;
  tooltipPosition?: TooltipPosition;
  showAll?: boolean;
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

export type CloudCanvasProps = {
  canvasColor?: string;
  textColor?: string;
  ambientLightColor?: string;
  directionalLightColor?: string;
  verticalRotationLimit?: number;
  horizontalRotationLimit?: number;
  fontPath?: string;
};

export type LogoCanvasProps = CloudCanvasProps & {
  gltfPath?: string;
  fontSize?: number;
};

export type NotFoundCanvasProps = CloudCanvasProps & {
  titleFontSize?: number;
  subtitleFontSize?: number;
  explanationFontSize?: number;
};
