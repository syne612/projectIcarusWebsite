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
import PictureMoving1 from "./Sections/PictureMoving1.jsx";
import PictureMoving2 from "./Sections/PictureMoving2.jsx";
import PictureMoving3 from "./Sections/PictureMoving3.jsx";
import PictureMoving4 from "./Sections/PictureMoving4.jsx";
import PictureMoving5 from "./Sections/PictureMoving5.jsx";

import profile from "assets/img/Ellis.jpg";

import Resume from "assets/img/Ellis-Hogan.jpg";
import FCC1 from "assets/img/FCC1.png";
import FCC2 from "assets/img/FCC2.png";
import FCC3 from "assets/img/FCC3.png";
import FCC4 from "assets/img/FCC4.png";
import List from "@material-ui/icons/List";

import profilePageStyle from "assets/jss/material-kit-react/views/clientsPage.jsx";

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
        <div className={classes.mainRaised} >
          <PictureMoving1 />
          <PictureMoving2 />
          <PictureMoving3 />
          <PictureMoving4 />
          <PictureMoving5 />
          <PictureMoving1 />
          <PictureMoving2 />
          <PictureMoving3 />
          <PictureMoving4 />
          <PictureMoving5 />
        </div>
        <GridContainer justify="center">
          <GridItem sx={8} sm={6}>
            <div className={classes.btmFixed} >
              <Footer />
            </div>
          </GridItem>
        </GridContainer>
      </div>

    );
  }
}

export default withStyles(profilePageStyle)(ClientsPage);
