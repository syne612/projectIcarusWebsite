import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import { Link } from "react-router-dom";

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";


import studio1 from "assets/img/project1.png";
import studio2 from "assets/img/project2.png";
import studio3 from "assets/img/project3.png";
import studio4 from "assets/img/project4.png";
import studio5 from "assets/img/project5.png";
import studio6 from "assets/img/project6.png";
import studio7 from "assets/img/project7.png";
import studio8 from "assets/img/project8.png";
import studio9 from "assets/img/project9.png";
import studio10 from "assets/img/project10.png";


import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";

class GalleryPage extends React.Component {
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
        <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
          <br />
          <br />
          <br />

            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={10}>
                  <div className={classes.profile}>

                    <div className={classes.name}>
                      <h3 className={classes.title}>Gallery</h3>
                      <br />
                      <Button justIcon link
                      href="https://www.linkedin.com/in/ellis-hogan-99a646161/"
                      className={classes.margin5}>
                        <i className={"fab fa-linkedin"} />
                      </Button>
                      <Button justIcon link
                      href="https://www.facebook.com/ellis.hogan.1"
                      className={classes.margin5}>
                        <i className={"fab fa-facebook"} />
                      </Button>
                      <Button justIcon link className={classes.margin5}>
                        <i className={"fab fa-instagram"} />
                      </Button>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              <div className={classes.description}>
                <p>
                  Check out this gallery of all my work.
                </p>
              </div>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={11} lg={10} className={classes.navWrapper}>

                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                            <a target="_blank" href="http://www.buylandnc.com">
                            <img
                              alt="..."
                              src={studio3}
                              className={navImageClasses}
                            /></a>
                              <a target="_blank" href="http://www.georgialotliquidation.com" >
                              <img
                                alt="..."
                                src={studio2}
                                className={navImageClasses}
                              /></a>
                              <a target="_blank" href="http://www.rvcoastalmaine.com">
                              <img
                                alt="..."
                                src={studio7}
                                className={navImageClasses}
                              /></a>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                            <a target="_blank" href="http://www.strengthwithfitness.com">
                            <img
                              alt="..."
                              src={studio4}
                              className={navImageClasses}
                            /></a>
                            <a target="_blank" href="http://www.wearsweatlock.com">
                            <img
                              alt="..."
                              src={studio1}
                              className={navImageClasses}
                            /></a>
                            <a target="_blank" href="http://www.nccoastallotliquidation.com">
                              <img
                                alt="..."
                                src={studio9}
                                className={navImageClasses}
                              /></a>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                            <a href="http://www.mainecoastalland.com">
                            <img
                              alt="..."
                              src={studio8}
                              className={navImageClasses}
                            /></a>
                              <a target="_blank" href="http://www.ncmountainlandsale.com">
                              <img
                                alt="..."
                                src={studio5}
                                className={navImageClasses}
                              /></a>
                              <a target="_blank" href="http://www.nclotliquidation.com">
                              <img
                                alt="..."
                                src={studio10}
                                className={navImageClasses}
                              /></a>
                              <a target="_blank" href="http://www.webpro360.com">
                              <img
                                alt="..."
                                src={studio6}
                                className={navImageClasses}
                              /></a>

                            </GridItem>
                          </GridContainer>

                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(profilePageStyle)(GalleryPage);
