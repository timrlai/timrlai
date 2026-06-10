import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import lottie, { type AnimationItem } from "lottie-web";
import type { LottieScrollTriggerVars } from "../types";

export default function useScrollTriggers() {
  gsap.registerPlugin(ScrollTrigger);

  const belowSmall = window.matchMedia("(width <= 40rem)").matches;
  const motionReduce = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const speeds = { slow: "+=2000", medium: "+=1000", fast: "+=500" };
  const gsapCtx = gsap.context && gsap.context();

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

  const setLottieScrollTriggerTarget = (vars: LottieScrollTriggerVars) => {
    if (!vars || !vars.target) return null;
    const target = document.querySelector(`#${vars.target}`);
    return target;
  };

  const buildLottieScrollTriggerConfig = (
    vars: LottieScrollTriggerVars,
  ): ScrollTrigger.Vars | undefined => {
    const target = setLottieScrollTriggerTarget(vars);
    if (!target) return;
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
    return scrollTrigger;
  };

  const createScrollingLottieAnimation = (vars: LottieScrollTriggerVars) => {
    const target = setLottieScrollTriggerTarget(vars);
    if (!target) return;
    const animation = lottie.loadAnimation({
      container: target,
      renderer: vars.renderer || "svg",
      loop: false,
      autoplay: false,
      path: vars.path,
      rendererSettings: vars.rendererSettings || {
        preserveAspectRatio: "xMidYMid slice",
      },
    });
    return animation;
  };

  const connectLottieToScrollTrigger = (
    animation: AnimationItem | undefined,
    scrollTriggerConfig: ScrollTrigger.Vars,
  ): ScrollTrigger | undefined => {
    if (!animation) return;
    const playhead = { frame: 0 };
    const tween = gsap.to(playhead, {
      frame: animation.totalFrames - 1,
      ease: "none",
      onUpdate: () => animation.goToAndStop(playhead.frame, true),
      scrollTrigger: scrollTriggerConfig,
    });
    return tween.scrollTrigger;
  };

  const cleanupLottieScrollTrigger = (
    animation: AnimationItem | undefined,
    trigger: ScrollTrigger | undefined,
    ctx: gsap.Context | undefined,
  ) => {
    if (animation && animation.destroy) animation.destroy();
    if (trigger) trigger.kill();
    if (ctx) ctx.revert();
  };

  return {
    belowSmall,
    motionReduce,
    speeds,
    gsapCtx,
    calculateDynamicEnd,
    addScrollTrigger,
    refreshScrollTriggers,
    refreshScrollTriggersOnInputChange,
    killAllScrollTriggers,
    dynamicEndScrollTrigger,
    buildLottieScrollTriggerConfig,
    createScrollingLottieAnimation,
    connectLottieToScrollTrigger,
    cleanupLottieScrollTrigger,
  };
}
