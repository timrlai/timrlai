import type { CanvasTexture, Wrapping, Side } from "three";

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

export type LottieShapeProps = {
  src: string;
  repeatX?: number;
  repeatY?: number;
  wrapS?: Wrapping;
  wrapT?: Wrapping;
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
  renderOrder?: number;
  side?: Side;
  material?: "basic" | "standard" | "toon";
  transparent?: boolean;
  depthWrite?: boolean;
};

export type LottieSphereProps = LottieShapeProps & {
  radius?: number;
  segments?: number;
};

export type LottiePlaneProps = LottieShapeProps & {
  width?: number;
  height?: number;
  widthSegments?: number;
  heightSegments?: number;
};

export type LottieRoundedBoxProps = LottieShapeProps & {
  width?: number;
  height?: number;
  depth?: number;
  segments?: number;
  radius?: number;
};

export type LottieCylinderProps = LottieShapeProps & {
  radiusTop?: number;
  radiusBottom?: number;
  height?: number;
  radialSegments?: number;
  heightSegments?: number;
  openEnded?: boolean;
  thetaStart?: number;
  theataEnd?: number;
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
  explanationFontSize?: number;
};
