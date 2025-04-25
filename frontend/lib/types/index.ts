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
  scale?: [number, number, number] | number;
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

export type SvgConstants = {
  readonly LOGO_DARK_SVG_PATH: string;
  readonly LOGO_LIGHT_SVG_PATH: string;
};

export type LottieConstants = {
  readonly CLOUDS_LOTTIE_PATH: string;
  readonly NOT_FOUND_LOTTIE_FOLDER: string;
  readonly NOT_FOUND_LOTTIES: string[];
};

type CanvasConstants = {
  readonly WIDTH_BREAKPOINT: number;
  readonly HEIGHT_BREAKPOINT: number;
  readonly CANVAS_COLOR: string;
  readonly TEXT_COLOR: string;
  readonly AMBIENT_LIGHT_COLOR: string;
  readonly DIRECTIONAL_LIGHT_COLOR: string;
  readonly VERTICAL_ROTATION_LIMIT: number;
  readonly HORIZONTAL_ROTATION_LIMIT: number;
  readonly FONT_PATH: string;
};

export type LogoCanvasConstants = CanvasConstants & {
  readonly PORTRAIT_LOGO_POSITION: [number, number, number];
  readonly PORTRAIT_LOGO_ROTATION: [number, number, number];
  readonly PORTRAIT_LOGO_SCALE: number;
  readonly PORTRAIT_TAGLINE_POSITION: [number, number, number];
  readonly PORTRAIT_TAGLINE_ROTATION: [number, number, number];
  readonly PORTRAIT_TAGLINE_SCALE: number;
  readonly LANDSCAPE_LOGO_POSITION: [number, number, number];
  readonly LANDSCAPE_LOGO_SCALE: number;
  readonly LANDSCAPE_TAGLINE_POSITION: [number, number, number];
  readonly LANDSCAPE_TAGLINE_SCALE: number;
  readonly DESKTOP_LOGO_POSITION: [number, number, number];
  readonly DESKTOP_LOGO_SCALE: number;
  readonly DESKTOP_TAGLINE_POSITION: [number, number, number];
  readonly DESKTOP_TAGLINE_SCALE: number;
  readonly WIDE_LOGO_ROTATION: [number, number, number];
  readonly WIDE_TAGLINE_ROTATION: [number, number, number];
  readonly LOGO_GLTF_PATH: string;
  readonly FONT_SIZE: number;
};

export type NotFoundCanvasConstants = CanvasConstants & {
  readonly WIDTH_BREAKPOINT: number;
  readonly HEIGHT_BREAKPOINT: number;
  readonly PORTRAIT_LOTTIE_POSITION: [number, number, number];
  readonly PORTRAIT_LOTTIE_ROTATION: [number, number, number];
  readonly PORTRAIT_LOTTIE_SCALE: number;
  readonly PORTRAIT_EXPLANATION_POSITION: [number, number, number];
  readonly PORTRAIT_EXPLANATION_ROTATION: [number, number, number];
  readonly PORTRAIT_EXPLANATION_SCALE: number;
  readonly LANDSCAPE_LOTTIE_POSITION: [number, number, number];
  readonly LANDSCAPE_LOTTIE_SCALE: number;
  readonly LANDSCAPE_EXPLANATION_POSITION: [number, number, number];
  readonly LANDSCAPE_EXPLANATION_SCALE: number;
  readonly DESKTOP_LOTTIE_POSITION: [number, number, number];
  readonly DESKTOP_LOTTIE_SCALE: number;
  readonly DESKTOP_EXPLANATION_POSITION: [number, number, number];
  readonly DESKTOP_EXPLANATION_SCALE: number;
  readonly WIDE_LOTTIE_ROTATION: [number, number, number];
  readonly WIDE_EXPLANATION_ROTATION: [number, number, number];
  readonly TITLE_FONT_SIZE: number;
  readonly EXPLANATION_FONT_SIZE: number;
};
