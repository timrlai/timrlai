type NotFoundCanvasConstants = {
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
};

const constants: NotFoundCanvasConstants = {
  WIDTH_BREAKPOINT: 950,
  HEIGHT_BREAKPOINT: 750,
  PORTRAIT_LOTTIE_POSITION: [0, 3.7, -15],
  PORTRAIT_LOTTIE_ROTATION: [0.5, -0.7, 0],
  PORTRAIT_LOTTIE_SCALE: 0.6,
  PORTRAIT_EXPLANATION_POSITION: [0, -0.3, -15],
  PORTRAIT_EXPLANATION_ROTATION: [-0.5, 0, 0],
  PORTRAIT_EXPLANATION_SCALE: 0.5,
  LANDSCAPE_LOTTIE_POSITION: [-5, 0, -15],
  LANDSCAPE_LOTTIE_SCALE: 0.8,
  LANDSCAPE_EXPLANATION_POSITION: [3, 2, -15],
  LANDSCAPE_EXPLANATION_SCALE: 0.8,
  DESKTOP_LOTTIE_POSITION: [-6, 0, -15],
  DESKTOP_LOTTIE_SCALE: 1,
  DESKTOP_EXPLANATION_POSITION: [5, 3.5, -15],
  DESKTOP_EXPLANATION_SCALE: 1,
  WIDE_LOTTIE_ROTATION: [0, -0.5, 0],
  WIDE_EXPLANATION_ROTATION: [0, -0.5, 0],
};

export default constants;
