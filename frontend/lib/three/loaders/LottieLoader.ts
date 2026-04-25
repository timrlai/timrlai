import lottie from "lottie-web";
import type { AnimationConfig, AnimationItem } from "lottie-web";
import type { LottieTexture } from "../../types";
import {
  Loader,
  CanvasTexture,
  NearestFilter,
  FileLoader,
  SRGBColorSpace,
} from "three";

type AnimationItemWithContainer = AnimationItem & {
  container: Element;
};

class LottieLoader extends Loader {
  private _quality: number;
  constructor() {
    super();
    this._quality = 1;
  }
  setQuality(value: number) {
    this._quality = value;
  }
  load(
    url: string,
    onLoad: (data: unknown) => void,
    onProgress: (event: ProgressEvent<EventTarget>) => void,
    onError: (err: unknown) => void,
  ) {
    const quality = this._quality || 1;
    const canvas = document.createElement("canvas");
    const texture: LottieTexture = new CanvasTexture(canvas);
    texture.minFilter = NearestFilter;
    const loader = new FileLoader(this.manager);
    loader.setPath(this.path);
    loader.setWithCredentials(this.withCredentials);
    loader.load(
      url,
      function (text) {
        const data = JSON.parse(text as string);
        const container = document.createElement("div");
        container.style.width = data.w + "px";
        container.style.height = data.h + "px";
        document.body.appendChild(container);
        const animation = lottie.loadAnimation<"canvas">({
          container,
          animType: "canvas",
          loop: true,
          autoplay: true,
          animationData: data,
          rendererSettings: { dpr: quality },
        } as AnimationConfig<"canvas">) as AnimationItemWithContainer;
        texture.animation = animation;
        texture.image = animation.container;
        texture.colorSpace = SRGBColorSpace;
        animation.addEventListener("enterFrame", function () {
          texture.needsUpdate = true;
        });
        container.style.display = "none";
        if (onLoad !== void 0) {
          onLoad(texture);
        }
      },
      onProgress,
      onError,
    );
    return texture;
  }
}
export { LottieLoader };
