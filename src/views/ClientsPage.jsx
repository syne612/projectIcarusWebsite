import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import ArtTrack from "@material-ui/icons/ViewQuilt";
import Description from "@material-ui/icons/Description";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import SectionCarousel from "./Sections/SectionCarousel.jsx";

import profile from "assets/img/Ellis.jpg";

import background from "assets/img/bg7.jpg";


import clientPageStyle from "assets/jss/material-kit-react/views/clientsPage.jsx";

class ClientsPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    return (
      <div>
        <Header
          color="transparent"
          brand="Project Icarus"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white"
          }}
          {...rest}
        />
        <img className={classes.coolBg} src={background} />
        <div className={classes.main2}>
          <SectionCarousel />
          <Footer />
        </div>
      </div>

    );
  }
}

export default withStyles(clientPageStyle)(ClientsPage);
