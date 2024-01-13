import { Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import ContactCard from "../components/ContactCard";
import Contact from "../components/Contact";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ImageListComp from "../components/ImageListComp";

export default function AboutPage() {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const theme = useTheme();

  const styles = {
    width: "100vw",
    ".videos": {
      width: "100vw",
      "#trailer": {
        [theme.breakpoints.down("md")]: {
          display: "none",
        },
        width: "100vw",
        height: "100vh",
        objectFit: "contain",
      },
      filter: "brightness(80%)",
    },
    h1: {
      m: "50px 0",
      fontSize: "60px",
      textAlign: "center",
    },
    "div .content": {
      mt: "30px",
      maxWidth: "1000px",
      p: {
        textIndent: "50px",
        textAlign: "justify",
        margin: "30px",
      },
      ".date": {
        display: "block",
        textAlign: "center",
        textIndent: "0",
        margin: "30px 0",
        fontSize: "32px",
      },
    },
    ".contact": {
      width: "100%",
      maxWidth: "1000px",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      mb: "50px",
    },
    ".aboutImpetus, .aboutDept": {
      margin: "70px 0",
    },
  };

  const muteVideo = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition === 0) setMuted(false);
    else setMuted(true);
  };

  const toggleVolume = () => {
    setMuted(!muted);
  };

  const handleSize = (e) => {
    const width = e.target.innerWidth;
    if (width < 900) videoRef.current.pause();
    else {
      setMuted(true);
      videoRef.current.play().catch((e) => console.log(e));
    }
  };

  useEffect(() => {
    if (window.innerWidth > 900)
      videoRef.current?.play().catch((e) => console.log(e));
    else videoRef.current?.pause();
    window.addEventListener("scroll", muteVideo);
    window.addEventListener("resize", handleSize);

    return () => {
      window.removeEventListener("resize", handleSize);
      window.removeEventListener("scroll", muteVideo);
      videoRef.current?.pause();
    };
  }, []);
  
  const person = {
    person1: {
      name: "Ayush Jaiswal",
      phone: "+91 7766962188",
      post: "Main Coordinator",
      imgname: "Ayush_Jaiswal(Main Co ordinator).jpg",
      insta: "https://instagram.com/ayushashokjaiswal?igshid=ZDdkNTZiNTM=",
      link: "https://www.linkedin.com/in/ayush-jaiswal-ab8a491a6",
    },
    person2:
    {
      name: "S.V.S Sai Raghav",
      phone: "+91 9550994950",
      post: "Main Coordinator",
      imgname: "S.V.S_Sai_Raghav.jpg",
      insta: "https://instagram.com/raagu_1237?igshid=ZDdkNTZiNTM=",
      link: "https://www.linkedin.com/in/raghavsingupuram",
    }};
  return (
    

    <Box sx={styles} className="center1">
      <Box className="videos">
        <video
          onClick={toggleVolume}
          ref={videoRef}
          muted={muted}
          id="trailer"
          autoPlay
          loop
        >
          <source src="images/trailer.mp4" type="video/mp4" />
        </video>
      </Box>
      <Box className="aboutImpetus center1">
        <Image
          sx={{ mt: "50px" }}
          src="/images/impetusLogo.png"
          height="300"
          width="300"
          alt="SME"
        />
        <Box className="content">
          <Typography variant="p">
            Theoretical knowledge will serve no purpose until combined with
            skills and real-world knowledge. IMPETUS is an attempt to bring the
            industry closer to the students at IIEST, Shibpur. It is organized
            annually by the Society of Mechanical Engineers (SME) on behalf of
            the department of Mechanical Engineering. This occasion unites
            experts from both industries and education on IIEST&apos;s soil and
            provides opportunity to the students to get the best of both worlds.
            The various events in impetus are designed to enrich one&apos;s
            practical knowledge, while they also give you a chance to interact
            with leading industry professionals in the field of mechanical
            engineering.<br></br>
            <br></br>
            So, no matter where you come from, we will make sure you add a
            feather to your cap on the way back.
          </Typography>
          
          <Typography className="date" variant="p">
            17th Feb - 19th Feb
          </Typography>
        </Box>
      </Box>
      <Box>
        <ImageListComp />
      </Box>
      <Box className="aboutDept center1">
        <Image src="/images/SMEwhite.png" height="300" width="300" alt="SME" />
        <Box className="content">
          <Typography variant="p">
            It was on 4th March, 1921, a diploma course on mechanical
            engineering was started and this was the beginning of the golden
            journey for the department. The first degree level course started on
            17th july 1930 and the post graduate courses began in 1954. Ever
            since it&apos;s inauguration, the department has had a rich legacy
            of producing extremely talented engineers who have been top
            performers in their domain and are still adding feathers to the cap.
            The department has earned its name and fame across the country as
            well as in the world through its methodical approach of teaching and
            research in it&apos;s field. The faculty consists of erudite
            teachers and almost all the faculty members have earned the credit
            of having quite a few praiseworthy research papers published in
            internationally acclaimed research journals. The academic and
            cultural society of department of mechanical engineering is the
            Society of Mechanical Engineers (SME). A number of international
            societies have their student section: Society of Automotive
            Engineers (SAE), American Society of Mechanical Engineers (ASME) and
            Indian Society of Heating, Refrigerating and Air conditioning
            Engineers (ISHRAE). Prominent speakers from the academic world and
            industrial domain are often invited for delivering lectures and
            Industrial visits are also organised by the department for making
            the students aware about the modern developments in the industries.
          </Typography>
          
        </Box>
      </Box>
      <Box className="contact">
        <ContactCard person={person.person1}/>
        <ContactCard person={person.person2}/>
        
      </Box>
      <Contact />
    </Box>
  );
}
