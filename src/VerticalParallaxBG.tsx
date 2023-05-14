import React from "react";
import "./VerticalParallaxBG.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const VerticalParallaxBG = () => {
  return (
    <>
      <Parallax
        pages={3}
        style={{ top: "0", left: "0" }}
        className="parallax_container"
      >
        <ParallaxLayer offset={0} speed={0.1}>
          <div className="parallax_layer" id="IslandLayer1"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.2}>
          <div className="parallax_layer" id="IslandLayer2"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.35}>
          <div className="parallax_layer" id="IslandLayer3"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.4}>
          <div className="parallax_layer" id="IslandLayer4"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <div className="parallax_layer" id="IslandLayer5"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.3}>
          <div className="underScroll_Container">
            <div className="text-container">
              <p className="text">
                This is the welcome part of the Parallax Effect.
                <br />
                The images used are from here:
                <br />
                <a
                  className="link"
                  href="https://saurabhkgp.itch.io/the-island-parallax-background-platformer-side-scroller"
                >
                  https://saurabhkgp.itch.io/the-island-parallax-background-platformer-side-scroller
                </a>
              </p>
            </div>
            <div className="text-container">
              <p className="text">
                This was put together by Levente Farkas.
                <br />
                <a className="link" href="https://twitter.com/Flevi_dev">
                  https://twitter.com/Flevi_dev
                </a>
              </p>
            </div>
            <div className="text-container">
              <p className="text">
                And this is the end part of the Parallax Effect.
                <br />
                The images used are from here:
                <br />
                <a
                  className="link"
                  href="https://ansimuz.itch.io/mountain-dusk-parallax-background"
                >
                  https://ansimuz.itch.io/mountain-dusk-parallax-background
                </a>
              </p>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.1}>
          <div
            className="parallax_layer bottom_layer"
            id="mountainLayer1"
          ></div>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.2}>
          <div
            className="parallax_layer bottom_layer"
            id="mountainLayer2"
          ></div>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.35}>
          <div
            className="parallax_layer bottom_layer"
            id="mountainLayer3"
          ></div>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.4}>
          <div
            className="parallax_layer bottom_layer"
            id="mountainLayer4"
          ></div>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.3}>
          <div
            className="parallax_layer bottom_layer"
            id="mountainLayer5"
          ></div>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.25}>
          <div
            className="parallax_layer bottom_layer"
            id="mountainLayer6"
          ></div>
        </ParallaxLayer>
      </Parallax>
    </>
  );
};

export default VerticalParallaxBG;
