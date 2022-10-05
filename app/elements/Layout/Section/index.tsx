import React, { useEffect } from "react";
import { initParallax } from "../../../utilities/handle-section";
import Background from "./background";
import { StyledOverlay, StyledSection, Container } from "./styled";

export interface SectionProps {
  container: boolean;
  containerWidth: number;
  parallax: boolean;
  parallaxBg: string;
  parallaxSpeed: number;
  parallaxRev: boolean;
  src: string;
  sectionName: string;
  bgType: string;
  videoBg: string;
  filterColor: string;
  mode?: string;
}

Section.defaultProps = {
  container: true,
  containerWidth: 1170,
  parallax: false,
  parallaxBg: "",
  parallaxSpeed: 4,
  parallaxRev: false,
  src: "",
  videoBg: "",
  bgType: "standard",
  sectionName: "",
  filterColor: "rgba(0,0,0,0)",
  name: "Section",
};

const sectionRef = React.createRef<HTMLElement>();

function Section(props: any) {
  const {
    children,
    store,
    store: { _id },
  } = props;

  const data = store.data || {};
  const {
    container,
    containerWidth,
    bgType,
    parallaxSpeed,
    filterColor,
    videoBg,
    parallaxBg,
  } = data;
  const overlayStyle =
    filterColor && filterColor !== "rgba(0,0,0,0)"
      ? { [`--overlay` as any]: filterColor }
      : undefined;
  const containerStyle = container
    ? {
        [`--cw` as any]: isNaN(containerWidth)
          ? containerWidth
          : containerWidth + "px",
      }
    : undefined;

  useEffect(() => {
    if (sectionRef?.current?.getAttribute("data-parallax")) {
      const asyncInitParallax = async () => {
        await initParallax(sectionRef.current);
      };
      asyncInitParallax()
    }
  }, [sectionRef.current]);

  console.log(sectionRef.current)

  return (
    <StyledSection
      ref={sectionRef}
      data-parallax={bgType === "parallax" || undefined}
      data-parallax-speed={
        bgType === "parallax" && parallaxSpeed ? parallaxSpeed : undefined
      }
      style={{ ...overlayStyle }}
      data-section-id={`pf-${_id.split("-")[1]}`}
    >
      <Background
        bgType={bgType}
        videoBg={videoBg}
        parallaxBg={parallaxBg}
        filterColor={filterColor}
      />
      {overlayStyle && <StyledOverlay />}
      <Container style={containerStyle}>{children}</Container>
    </StyledSection>
  );
}

export default Section;