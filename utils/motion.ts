import { easeInOut } from "framer-motion";

export function fadeInAndScale(delay: number) {
  return {
    initial: { opacity: 0, scale: 0.5 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: delay,
        duration: 0.3,
      },
    },
  };
}

// video
export function videoscale(delay: number) {
  return {
    initial: { opacity: 0, scale: 1 },
    animate: {
      opacity: 1,
      scale: 2,
      transition: {
        ease: 'easeInOut',
        duration: 2,
        delay: delay,
      },
    },
  };
}

export function portals(delay: number) {
  return {
    initial: { scale: 0.9 },
    animate: {
    scale:1,
      transition: {
        ease: 'easeInOut',
        duration: 0.5,
        delay: delay,
      },
    },
  };
}

