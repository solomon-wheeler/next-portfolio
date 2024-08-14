const INITIALDELAY = 2000;
const DELAYCONST = 1000;

export const DelayTimingWithInitial = (index: number) =>
  INITIALDELAY + DelayTiming(index);

export const DelayTiming = (index: number) => INITIALDELAY + index * DELAYCONST;
