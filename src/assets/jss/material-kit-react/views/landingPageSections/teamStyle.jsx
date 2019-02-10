import { cardTitle, title } from "assets/jss/material-kit-react.jsx";
import imagesStyle from "assets/jss/material-kit-react/imagesStyles.jsx";
import image from "assets/img/bg8.png";
const teamStyle = {
  section: {
    padding: "70px 0",
    textAlign: "center"
  },
  bg:{
    backgroundImage: "url(" + image + ")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "contain"
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  img: {
    height: "100px"
  },
  card: {
    backgroundColor: "rgba(139,0,139,.3)",
    color: "rgb(250,250,250)",
    fontWeight: "700",
    width: "400px",
    margin: "auto",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  
  },
  ...imagesStyle,
  itemGrid: {
    marginLeft: "auto",
    marginRight: "auto"
  },
  cardTitle,
  smallTitle: {
    color: "#6c757d"
  },
  letsDoProjects: {
    borderRadius: "30px",
    width: "60px",
    height: "60px"
  },
  description: {
    color: "#999"
  },
  justifyCenter: {
    justifyContent: "center !important"
  },
  socials: {
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
    color: "#999"
  },
  margin5: {
    margin: "5px"
  }
};

export default teamStyle;
