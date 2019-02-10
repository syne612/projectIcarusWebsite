import { container } from "assets/jss/material-kit-react.jsx";

const carouselStyle = {
  section: {
    padding: "70px 0",
    height: "60%",
    borderRadius: "6px",

  },
  container,
  image1: {
    margin: "auto",
    display: "center",
    objectFit: "cover",
    width: "400px",
    margin: "20px auto"
  },
  image2: {
    margin: "auto",
    display: "center",
    objectFit: "cover",
    height: "360px",
    margin: "20px auto"
  },
  getDown: {
    textAlign:"center",
    margin: "auto !important",
    display: "center !important",
    height: "400px",
  },

  center:{
    margin: "0px auto",
    align: "center"
  },
  rounded: {
    borderRadius: "6px !important",
  },
  one: {
    marginLeft: "0% !important"
  },
  two: {
    marginLeft: "-20% !important"
  },
  three: {
    marginLeft: "-50% !important"
  },
  four: {
    marginLeft: "-10% !important"
  },
  five: {
    marginLeft: "-40% !important"
  },
  margin5: {
    zIndex: "5",

  },
  hideMe: {
    overflow: "hidden !important",

  },
  darker: {
    color: "rgb(60, 60, 90)",
    fontWeight: "bold"
  },
  boxes: {
    display: "block",
    objectFit: "cover",
    width: "100%",
    height: "75vh",
    overflow: "hidden",
    boxShadow: "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  }
};

export default carouselStyle;
