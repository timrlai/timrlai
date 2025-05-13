import type { CanvasTexture, Wrapping, Side } from "three";

export type ScrollPosition = {
  el?: string | Element;
  left?: number;
  top?: number;
  behavior?: "auto" | "instant" | "smooth";
};

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

export type EducationSkills = {
  bsd: Skill[];
  it: Skill[];
  web: Skill[];
  ilu: Skill[];
  afd: Skill[];
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

export type GLCloudProps = {
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number] | number;
  args?: [number, number, number];
};

export type VimeoVideoProps = {
  videoId: number;
  badge?: number;
  autoPause?: number;
  playerId?: number;
  appId: number;
  title: string;
  height?: number | `${number}%`;
  width?: number | `${number}%`;
};

export type LottieConstants = {
  readonly CLOUDS_LOTTIE_PATH: string;
  readonly AVATAR_WAVE_LOTTIE_PATH: string;
  readonly AVATAR_SUMMARY_LOTTIE_PATH: string;
  readonly AVATAR_SKILLS_DESK_LOTTIE_PATH: string;
  readonly AVATAR_SKILLS_LEGS_LOTTIE_PATH: string;
  readonly AVATAR_SKILLS_SOFT_LOTTIE_PATH: string;
  readonly AVATAR_VR_LOTTIE_PATH: string;
  readonly AVATAR_TEACHER_DESK_LOTTIE_PATH: string;
  readonly AVATAR_TEACHER_LEGS_LOTTIE_PATH: string;
  readonly AVATAR_DESIGNER_DESK_LOTTIE_PATH: string;
  readonly AVATAR_DESIGNER_NO_DESK_LOTTIE_PATH: string;
  readonly AVATAR_ILLUSTRATOR_LOTTIE_PATH: string;
  readonly AVATAR_EDUCATION_LOTTIE_PATH: string;
  readonly AVATAR_VOLUNTEER_LOTTIE_PATH: string;
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

type CloudCanvasConstants = CanvasConstants & {
  readonly GL_CLOUD_POSITION: [number, number, number];
  readonly GL_CLOUD_ROTATION: [number, number, number];
  readonly GL_CLOUD_SCALE: number;
};

export type LogoCanvasConstants = CloudCanvasConstants & {
  readonly PORTRAIT_LOGO_POSITION: [number, number, number];
  readonly PORTRAIT_LOGO_ROTATION: [number, number, number];
  readonly PORTRAIT_LOGO_SCALE: number;
  readonly PORTRAIT_TAGLINE_POSITION: [number, number, number];
  readonly PORTRAIT_TAGLINE_ROTATION: [number, number, number];
  readonly PORTRAIT_TAGLINE_SCALE: number;
  readonly PORTRAIT_AVATAR_WAVE_POSITION: [number, number, number];
  readonly PORTRAIT_AVATAR_WAVE_ROTATION: [number, number, number];
  readonly PORTRAIT_AVATAR_WAVE_SCALE: number;
  readonly PORTRAIT_AVATAR_SUMMARY_POSITION: [number, number, number];
  readonly PORTRAIT_AVATAR_SUMMARY_ROTATION: [number, number, number];
  readonly PORTRAIT_AVATAR_SUMMARY_SCALE: number;
  readonly PORTRAIT_AVATAR_SKILLS_POSITION: [number, number, number];
  readonly PORTRAIT_AVATAR_SKILLS_ROTATION: [number, number, number];
  readonly PORTRAIT_AVATAR_SKILLS_SCALE: number;
  readonly PORTRAIT_AVATAR_SKILLS_SOFT_POSITION: [number, number, number];
  readonly PORTRAIT_AVATAR_SKILLS_SOFT_ROTATION: [number, number, number];
  readonly PORTRAIT_AVATAR_SKILLS_SOFT_SCALE: number;
  readonly PORTRAIT_DESK_POSITION: [number, number, number];
  readonly PORTRAIT_DESK_ROTATION: [number, number, number];
  readonly PORTRAIT_DESK_SCALE: number;
  readonly LANDSCAPE_LOGO_POSITION: [number, number, number];
  readonly LANDSCAPE_LOGO_SCALE: number;
  readonly LANDSCAPE_TAGLINE_POSITION: [number, number, number];
  readonly LANDSCAPE_TAGLINE_SCALE: number;
  readonly LANDSCAPE_AVATAR_WAVE_POSITION: [number, number, number];
  readonly LANDSCAPE_AVATAR_WAVE_SCALE: number;
  readonly LANDSCAPE_AVATAR_SUMMARY_POSITION: [number, number, number];
  readonly LANDSCAPE_AVATAR_SUMMARY_SCALE: number;
  readonly LANDSCAPE_AVATAR_SKILLS_POSITION: [number, number, number];
  readonly LANDSCAPE_AVATAR_SKILLS_SCALE: number;
  readonly LANDSCAPE_AVATAR_SKILLS_SOFT_POSITION: [number, number, number];
  readonly LANDSCAPE_AVATAR_SKILLS_SOFT_SCALE: number;
  readonly LANDSCAPE_DESK_POSITION: [number, number, number];
  readonly LANDSCAPE_DESK_SCALE: number;
  readonly DESKTOP_LOGO_POSITION: [number, number, number];
  readonly DESKTOP_LOGO_SCALE: number;
  readonly DESKTOP_TAGLINE_POSITION: [number, number, number];
  readonly DESKTOP_TAGLINE_SCALE: number;
  readonly DESKTOP_AVATAR_WAVE_POSITION: [number, number, number];
  readonly DESKTOP_AVATAR_WAVE_SCALE: number;
  readonly DESKTOP_AVATAR_SUMMARY_POSITION: [number, number, number];
  readonly DESKTOP_AVATAR_SUMMARY_SCALE: number;
  readonly DESKTOP_AVATAR_SKILLS_POSITION: [number, number, number];
  readonly DESKTOP_AVATAR_SKILLS_SCALE: number;
  readonly DESKTOP_AVATAR_SKILLS_SOFT_POSITION: [number, number, number];
  readonly DESKTOP_AVATAR_SKILLS_SOFT_SCALE: number;
  readonly DESKTOP_DESK_POSITION: [number, number, number];
  readonly DESKTOP_DESK_SCALE: number;
  readonly WIDE_LOGO_ROTATION: [number, number, number];
  readonly WIDE_TAGLINE_ROTATION: [number, number, number];
  readonly WIDE_AVATAR_WAVE_ROTATION: [number, number, number];
  readonly WIDE_AVATAR_SUMMARY_ROTATION: [number, number, number];
  readonly WIDE_AVATAR_SKILLS_ROTATION: [number, number, number];
  readonly WIDE_AVATAR_SKILLS_SOFT_ROTATION: [number, number, number];
  readonly WIDE_DESK_ROTATION: [number, number, number];
  readonly LOGO_GLTF_PATH: string;
  readonly FONT_SIZE: number;
  readonly AVATAR_WAVE_HEIGHT: number;
  readonly AVATAR_WAVE_RADIUS: number;
  readonly AVATAR_SUMMARY_HEIGHT: number;
  readonly AVATAR_SUMMARY_RADIUS: number;
  readonly AVATAR_SKILLS_HEIGHT: number;
  readonly AVATAR_SKILLS_RADIUS: number;
  readonly AVATAR_SKILLS_SOFT_HEIGHT: number;
  readonly AVATAR_SKILLS_SOFT_RADIUS: number;
};

export type NotFoundCanvasConstants = CloudCanvasConstants & {
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
