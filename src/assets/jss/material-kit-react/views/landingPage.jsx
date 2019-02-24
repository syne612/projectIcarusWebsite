import { container, title } from "assets/jss/material-kit-react.jsx";

const landingPageStyle = {
  container: {
    zIndex: "12",
    color: "#FFFFFF",
    ...container
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    color: "#FFFFFF",
    textDecoration: "none"
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px auto 0"
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  img: {
    height: "100px",
    margin: "auto"
  },
  card: {
    backgroundColor: "rgba(139,0,139,.3)",
    color: "rgb(250,250,250)",
    fontWeight: "700",
    margin: "auto !important",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  cardHeader2: {
    color: "rgb(147, 112, 119)",
    backgroundColor: "#4ddb93",
    textAlign: "center"
  },
  cardHeader3: {
    color: "rgb(147, 112, 119)",
    backgroundColor: "#db934d",
    textAlign: "center"
  },
  cardHeader1: {
    color: "rgb(147, 112, 119)",
    backgroundColor: "#93d4db",
    textAlign: "center"
  },
  card2: {
    backgroundColor: "rgba(147, 112, 219, 0.4)",
    color: "rgb(250,250,250)",
    fontWeight: "700",
    margin: "auto !important",
    height: "600px",
    boxShadow:
      "0 16px 24px 2px rgba(255, 255, 255, 0.14), 0 6px 30px 5px rgba(255, 255, 255, 0.12), 0 8px 10px -5px rgba(255, 255, 255, 0.2)"
  },
  cardFooter: {
    margin: "auto !important",
    textAlign: "center"
  }
};

export default landingPageStyle;
