import React, { useEffect } from "react";
import MainDev from "./MainDev";
import StickyNav from "./StickyNaBar";
import BounesDev from "./BounesDev";
import FinancelGift from "./FinancelGift";
import EidGift from "./EidGift";
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
import Footer from "./Footer";
import useWindowSize from "../hooks/useWindowSize";
const AnimationFade = () => {
    const size = useWindowSize()
  useEffect(() => {
    const navLi = document.querySelectorAll("nav .container ul li");
    const sections = document.querySelectorAll("section");
    const infoElement = document.querySelector("#info");
    const navigatorElement = document.querySelector("#navigator");

    window.addEventListener("scroll", () => {
      let current = "";
      let sectionInstance = null;
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute("id");
          sectionInstance = section;
        }
      });

      navLi.forEach((li) => {
        li.classList.remove("active");
        if (li.classList.contains(current)) {
          li.classList.add("active");
        }
      });

      if (
        window.scrollY >
        infoElement.scrollHeight + infoElement.clientHeight * 2
      ) {
        navigatorElement.classList.add("stop");
      } else {
        navigatorElement.classList.remove("stop");
      }
    });
  }, []);

  return (
    <>
      <ScrollContainer>
        <div 
          style={{
            position: "relative",
            maxWidth:828
          }}
        >
          <StickyNav />

          <section id="home">
            <ScrollPage page={0}>
              <Animator animation={batch(Fade(), Sticky(), size.width > 1024 ? MoveOut(0, -900) : MoveOut(0, -900),)}>
                <MainDev />
              </Animator>
            </ScrollPage>
          </section>
          <section id="about">
            <ScrollPage page={1}>
              <Animator
                animation={batch(
                  Fade(),
                  Sticky(),
                  size.width > 1024 ? MoveIn(0, 500) : MoveIn(0, 900),
                  size.width > 1024 ? MoveOut(0, -800) : MoveOut(0, -900)
                )}
              >
                <BounesDev />
              </Animator>
            </ScrollPage>
          </section>
          <section id="contact">
            <ScrollPage page={2}>
              <Animator
                animation={batch(
                  Fade(),
                  Sticky(),
                  size.width > 1024 ? MoveIn(0, 500) : MoveIn(0, 900),
                  size.width > 1024 ? MoveOut(0, -500) : MoveOut(0, -900)
                )}
              >
                <FinancelGift />
              </Animator>
            </ScrollPage>
          </section>
          <section id="info">
            <ScrollPage page={3}>
              <Animator
                animation={batch(
                  Fade(),
                  Sticky(),
                  size.width > 1024 ? MoveIn(0, 500) : MoveIn(0, 900),
                  size.width > 1024 ? MoveOut(0, -500) : MoveOut(0, -900)
                )}
              >
                <EidGift />
              </Animator>
            </ScrollPage>
          </section>
        </div>
      </ScrollContainer>
      <footer>
        <div className="container">
          <Footer />
          </div>
      </footer>
    </>
  );
};

export default AnimationFade;
