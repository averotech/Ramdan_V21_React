import React, { useEffect } from "react";
import BounesDev from "../Component.js/BounesDev";
import FinancelGift from "../Component.js/FinancelGift";
import FixedScreen from "../Component.js/FixedScreen";
import MainDev from "../Component.js/MainDev";
import {
  Animator,
  batch,
  Fade,
  FadeIn,
  Move,
  MoveIn,
  MoveOut,
  ScrollContainer,
  ScrollPage,
  Sticky,
  StickyIn,
  ZoomIn,
} from "react-scroll-motion";

import AnimationFade from "../Component.js/AnimationFade";

// const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
// const FadeUp = batch(Fade(), Sticky(), MoveOut(0, 200));

export default function HomePage() {

  return (
    <div>
      <FixedScreen />
      <AnimationFade  />
    </div>
  );
}
