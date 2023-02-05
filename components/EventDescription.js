import { Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useRef } from "react";
import LearnMore from "./LearnMore";
import { useInViewport } from "react-in-viewport";

export default function EventDescription({ index, setCurrIdx, currIdx }) {
  const theme = useTheme();
  const ref = useRef(null);
  const headingRef = useRef(null);
  const { inViewport } = useInViewport(headingRef);

  const styles = {
    "div h2": {
      fontSize: "40px",
      fontWeight: "700",
      marginBottom: "30px",
    },
    "div span": {
      fontSize: "18px",
      lineHeight: "0.5",
    },
    maxWidth: "500px",
    textAlign: "justify",
    height: "100vh",
    position: "relative",
    left: "50vw",
    div: {
      position: "relative",
      top: "35vh",
    },
    [theme.breakpoints.down("lg")]: {
      left: "10vw",
      div: {
        top: "50vh",
        marginBottom: "300px",
      },
    },
    scrollSnapAlign: "center",
    // margin: "200px 0",
  };

  const handleScroll = () => {
    // ref.current.scrollIntoView(true);
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (index === currIdx) handleScroll();
  }, [currIdx, index]);
  const heading=["CADathon","Yantra Search","Heatovation","Scrapyard","Quizzical","Death Race","Valorant","Fun"];
  const link=["cadathon", "yantrasearch","heatovation","scrapyard","quizzical","deathrace","valorant","fun"];
  return (
    <Box ref={ref} sx={styles}>
      <Box>
        <Typography ref={headingRef} variant="h2">
          {heading[currIdx%8]}
        </Typography>
        <Typography variant="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae commodi
          accusamus dolor laborum, sed molestiae. Culpa debitis corrupti ipsam
          eligendi natus reiciendis iusto, nesciunt voluptatibus corporis nulla
          praesentium iste amet?
        </Typography>
        <LearnMore link={`/events/${link[currIdx%8]}`} />

        {/* `url(/images/${images[currIdx%8]}) */}
      </Box>
    </Box>
  );
}
