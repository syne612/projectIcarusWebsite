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

import Resume from "assets/img/Ellis-Hogan.jpg";
import FCC1 from "assets/img/FCC1.png";
import FCC2 from "assets/img/FCC2.png";
import FCC3 from "assets/img/FCC3.png";
import FCC4 from "assets/img/FCC4.png";
import List from "@material-ui/icons/List";

import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";

class ProfilePage extends React.Component {
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
        <Parallax small filter image={require("assets/img/bg8.png")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div>
                      <img src={profile} alt="..." className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}>Ellis Hogan</h3>
                      <h6>PROGRAMMER</h6>
                      <a target="_blank" href="https://www.linkedin.com/in/ellis-hogan-99a646161/">
                        <Button justIcon link className={classes.margin5}>
                          <i className={"fab fa-linkedin"} />
                        </Button>
                      </a>
                      <a target="_blank" href="https://github.com/syne612">
                        <Button justIcon link className={classes.margin5}>
                          <i className={"fab fa-github"} />
                        </Button>
                      </a>
                      <a target="_blank" href="https://bitbucket.org/angel-icaurs/">
                        <Button justIcon link className={classes.margin5}>
                          <i className={"fab fa-bitbucket"} />
                        </Button>
                      </a>
                      <a target="_blank" href="https://facebook.com/ellis.hogan.1">
                        <Button justIcon link className={classes.margin5}>
                          <i className={"fab fa-facebook"} />
                        </Button>
                      </a>
                      <a target="_blank" href="https://codepen.io/ellis-hogan/">
                        <Button justIcon link className={classes.margin5}>
                          <i className={"fab fa-codepen"} />
                        </Button>
                      </a>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              <div className={classes.description}>
                <p>
                  Hello, I'm Ellis. I'm a programmer who specializes in the full-stack javascript development (Node.js, React.js, Express, MongoDB, Mongoose, jQuery), and the front-end development (Wordpress, HTML5, CSS3, Bootstrap).{" "}
                </p>
              </div>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={12} lg={10} className={classes.navWrapper}>
                  <NavPills
                    alignCenter
                    color="primary"
                    tabs={[
                      {
                        tabButton: "Projects",
                        tabIcon: ArtTrack,
                        tabContent: (
                          <div>
                            <h3>This is a list of some of the projects I'm currently working on. For more projects visit the <Link to={"/gallery"} className={classes.link}>
gallery</Link> page.</h3>
                            <SectionCarousel />
                          </div>

                        )
                      },
                      {
                        tabButton: "Resume",
                        tabIcon: Description,
                        tabContent: (
                          <span>
                          <GridContainer justify="center" >
                            <GridItem xs={12} sm={12} md={8}>
                              <img src={Resume} alt="..." className={navImageClasses} />
                            </GridItem>
                          </GridContainer>
                          </span>
                        )
                      },
                      {
                        tabButton: "Certifications",
                        tabIcon: List,
                        tabContent: (
                          <span>
                          <GridContainer justify="center" >
                            <GridItem xs={12} sm={12} md={6}>
                              <a href={FCC1}><img
                                alt="..."
                                src={FCC1}
                                className={navImageClasses}
                              /></a>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6}>
                              <a href={FCC2}><img
                                alt="..."
                                src={FCC2}
                                className={navImageClasses}
                              /></a>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6}>
                              <a href={FCC3}><img
                                alt="..."
                                src={FCC3}
                                className={navImageClasses}
                              /></a>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6}>
                              <a href={FCC4}><img
                                alt="..."
                                src={FCC4}
                                className={navImageClasses}
                              /></a>
                            </GridItem>
                          </GridContainer>
                          </span>
                        )
                      }
                    ]}
                  />
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

export default withStyles(profilePageStyle)(ProfilePage);
