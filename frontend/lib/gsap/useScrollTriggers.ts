import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function useScrollTriggers() {
  gsap.registerPlugin(ScrollTrigger);

  const calculateDynamicEnd = (elementId: string, fallback = 1000): string => {
    const element = document.querySelector(`#${elementId}`);
    const elementHeight: number = element?.clientHeight ?? fallback;
    return "+=" + elementHeight;
  };

  const buildScrollTrigger = (
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

  const addScrollTrigger = (
    timeline: gsap.core.Timeline,
    scrollTriggers: ScrollTrigger[],
  ) => {
    if (timeline.scrollTrigger) scrollTriggers.push(timeline.scrollTrigger);
  };

  const refreshScrollTriggers = () => {
    // Refresh once immediately
    ScrollTrigger.refresh();

    requestIdleCallback(() => {
      // Refresh again after page loads and is idle (for Suspense, Lazy, Lottie and images/icons)
      ScrollTrigger.refresh();
      // Refresh again on after the animation frame progresses to ensure trigger is refreshed
      requestAnimationFrame(() => ScrollTrigger.refresh());
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

  return {
    calculateDynamicEnd,
    buildScrollTrigger,
    addScrollTrigger,
    refreshScrollTriggers,
    refreshScrollTriggersOnInputChange,
    killAllScrollTriggers,
  };
}
