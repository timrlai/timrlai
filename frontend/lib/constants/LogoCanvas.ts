type LogoCanvasConstants = {
  readonly WIDTH_BREAKPOINT: number;
  readonly HEIGHT_BREAKPOINT: number;
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
};

const constants: LogoCanvasConstants = {
  WIDTH_BREAKPOINT: 950,
  HEIGHT_BREAKPOINT: 750,
  PORTRAIT_LOGO_POSITION: [-2.3, 6.6, -25],
  PORTRAIT_LOGO_ROTATION: [0.5, 0, 0],
  PORTRAIT_LOGO_SCALE: 25,
  PORTRAIT_TAGLINE_POSITION: [0, 2, -15],
  PORTRAIT_TAGLINE_ROTATION: [-0.5, 0, 0],
  PORTRAIT_TAGLINE_SCALE: 0.7,
  LANDSCAPE_LOGO_POSITION: [-9, 1, -25],
  LANDSCAPE_LOGO_SCALE: 50,
  LANDSCAPE_TAGLINE_POSITION: [3, 2.7, -15],
  LANDSCAPE_TAGLINE_SCALE: 0.8,
  DESKTOP_LOGO_POSITION: [-10.5, 1, -25],
  DESKTOP_LOGO_SCALE: 60,
  DESKTOP_TAGLINE_POSITION: [3.5, 3, -15],
  DESKTOP_TAGLINE_SCALE: 1,
  WIDE_LOGO_ROTATION: [0, 0.2, 0],
  WIDE_TAGLINE_ROTATION: [0, -0.5, 0],
};

export default constants;
