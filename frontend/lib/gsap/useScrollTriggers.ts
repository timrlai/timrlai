import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import lottie, {
  type AnimationItem,
  type CanvasRendererConfig,
  type HTMLRendererConfig,
  type RendererType,
  type SVGRendererConfig,
} from "lottie-web";

type LottieScrollTriggerVars = {
  target: Element | string;
  start?: string;
  renderer?: RendererType | undefined;
  speed: "slow" | "medium" | "fast";
  path: string;
  rendererSettings?:
    | SVGRendererConfig
    | CanvasRendererConfig
    | HTMLRendererConfig
    | undefined;
};

type AnimationItemWithFrameTween = AnimationItem & {
  frameTween: gsap.core.Tween;
};

export default function useScrollTriggers() {
  gsap.registerPlugin(ScrollTrigger);

  const belowSmall = window.matchMedia("(width <= 40rem)").matches;
  const motionReduce = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  const calculateDynamicEnd = (elementId: string, fallback = 1000): string => {
    const element = document.querySelector(`#${elementId}`);
    const elementHeight: number = element?.clientHeight ?? fallback;
    return "+=" + elementHeight;
  };

  const addScrollTrigger = (
    timeline: gsap.core.Timeline,
    scrollTriggers: ScrollTrigger[],
  ) => {
    if (timeline.scrollTrigger) scrollTriggers.push(timeline.scrollTrigger);
  };

  const refreshScrollTriggers = () => {
    // Refresh once immediately
    ScrollTrigger.sort();
    ScrollTrigger.refresh();

    requestIdleCallback(() => {
      // Refresh again after page loads and is idle (for Suspense, Lazy, Lottie and images/icons)
      ScrollTrigger.sort();
      ScrollTrigger.refresh();
      // Refresh again on after the animation frame progresses to ensure trigger is refreshed
      requestAnimationFrame(() => {
        ScrollTrigger.sort();
        ScrollTrigger.refresh();
      });
    });
  };

  const refreshScrollTriggersOnInputChange = (
    element: HTMLInputElement | null,
  ) => {
    if (!element) return;
    element.addEventListener("change", () => {
      refreshScrollTriggers();
    });

    refreshScrollTriggers();
  };

  const killAllScrollTriggers = (scrollTriggers: ScrollTrigger[]) => {
    scrollTriggers.forEach((trigger) => trigger.kill());
    scrollTriggers = [];
  };

  const dynamicEndScrollTrigger = (
    elementId: string,
    start: string,
    fallbackEnd = 1000,
    scrub = 1,
    pin = true,
    anticipatePin = 1,
  ) => {
    const scrollTrigger = {
      trigger: `#${elementId}`,
      start,
      end: calculateDynamicEnd(elementId, fallbackEnd),
      scrub,
      pin,
      pinSpacing: pin,
      anticipatePin,
      invalidateOnRefresh: true,
    };
    return scrollTrigger;
  };

  const lottieScrollTrigger = (vars: LottieScrollTriggerVars) => {
    const playhead = { frame: 0 };
    const target = document.querySelector(`#${vars.target}`);
    if (!target) return;
    const speeds = { slow: "+=2000", medium: "+=1000", fast: "+=500" };
    const scrollTrigger = {
      trigger: target,
      start: vars.start || "top top",
      end: speeds[vars.speed] || "+=1000",
      scrub: 1,
      pin: true,
      pinSpacing: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    };
    const ctx = gsap.context && gsap.context();
    const animation = lottie.loadAnimation({
      container: target,
      renderer: vars.renderer || "svg",
      loop: false,
      autoplay: false,
      path: vars.path,
      rendererSettings: vars.rendererSettings || {
        preserveAspectRatio: "xMidYMid slice",
      },
    }) as AnimationItemWithFrameTween;
    animation.addEventListener("DOMLoaded", function () {
      const createTween = function () {
        animation.frameTween = gsap.to(playhead, {
          frame: animation.totalFrames - 1,
          ease: "none",
          onUpdate: () => animation.goToAndStop(playhead.frame, true),
          scrollTrigger,
        });
        return () => animation.destroy && animation.destroy();
      };
      if (ctx && ctx.add) ctx.add(createTween);
      else createTween();
      // In case there are any other ScrollTriggers on the page and the loading of this Lottie asset caused layout changes
      refreshScrollTriggers();
    });
    return { scrollTrigger, animation };
  };

  return {
    belowSmall,
    motionReduce,
    calculateDynamicEnd,
    addScrollTrigger,
    refreshScrollTriggers,
    refreshScrollTriggersOnInputChange,
    killAllScrollTriggers,
    dynamicEndScrollTrigger,
    lottieScrollTrigger,
  };
}
