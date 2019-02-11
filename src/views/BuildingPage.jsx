import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Widgets from "@material-ui/icons/Widgets";
import Code from "@material-ui/icons/Code";
import Web from "@material-ui/icons/Web";
import Bubbles from "@material-ui/icons/BubbleChart";
import Blur from "@material-ui/icons/BlurOn";

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
import InfoArea from "components/InfoArea/InfoArea.jsx";

import profile from "assets/img/Ellis.jpg";

import Resume from "assets/img/Ellis-Hogan.jpg";
import FCC1 from "assets/img/FCC1.png";
import FCC2 from "assets/img/FCC2.png";
import FCC3 from "assets/img/FCC3.png";
import FCC4 from "assets/img/FCC4.png";

import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";

class BuildingPage extends React.Component {
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
        <Parallax small filter image={require("assets/img/bg2.jpg")} />

        <div className={classNames(classes.main, classes.mainRaised, classes.pill)}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={12} lg={10} className={classes.navWrapper}>
                  <NavPills
                    alignCenter
                    horizontal={{
                      tabsGrid: { xs: 12, sm: 3, md: 2},
                      contentGrid: { xs: 12, sm: 8, md: 9}
                    }}
                    color="primary"
                    tabs={[
                      {
                        tabButton: "MERN Web Apps",
                        tabIcon: Widgets,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={8}>
                              <h2>MERN and other Node.js Web Apps</h2>
                              <div className={classes.card}>
                              <InfoArea
                                title="MongoDB"
                                description="Mongo DB is a NoSQL database where all documents are JSON."
                                icon={Blur}
                                iconColor="info"
                              />
                              <InfoArea
                                title="Express"
                                description="Express is a framework used to help easily Route paths. It basically works as a server framework."
                                icon={Blur}
                                iconColor="rose"
                              />
                              <InfoArea
                                title="React"
                                description="React Is a UX/UI library used to create beautiful, reactive, functional web apps"
                                icon={Blur}
                                iconColor="warning"
                              />
                              <InfoArea
                                title="Node"
                                description="Node is a type of base for Javascript based web apps. Its an runtime environment built off google chrome."
                                icon={Blur}
                                iconColor="success"
                              />
                              </div>
                            </GridItem>
                          </GridContainer>

                        )
                      },
                      {
                        tabButton: "Basic Sites",
                        tabIcon: Code,
                        tabContent: (
                          <span>
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={8}>
                              <h2>Basic Code Sites</h2>
                              <h5>Sites coded in basic HTML, CSS, and PHP</h5>
                              <div className={classes.card}>
                              <InfoArea
                                title="HTML"
                                description="HTML is the standard markup language for creating Web pages. It stands for Hypertext Markup Language, and is the baseline for Hypertext transfer protocol (http)."
                                icon={Blur}
                                iconColor="info"
                              />
                              <InfoArea
                                title="CSS"
                                description="CSS is a styling language (cascading style sheets) used for basic page styling. A good way to understand what CSS does is to look at craigslist. It has little to none."
                                icon={Blur}
                                iconColor="rose"
                              />
                              <InfoArea
                                title="PHP"
                                description="PHP is a server side language. We use it for our basic sites contact form and other basic server-side needs."
                                icon={Blur}
                                iconColor="warning"
                              />
                              <InfoArea
                                title="Netlify"
                                description="Netlify has a ton of amazing features. One feature is contact form handling."
                                icon={Blur}
                                iconColor="success"
                              />
                            </div>
                            </GridItem>
                          </GridContainer>
                          </span>
                        )
                      },
                      {
                        tabButton: "Wordpress/CMS",
                        tabIcon: Web,
                        tabContent: (
                          <span>
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={8}>
                              <h2>Wordpress and other CMS</h2>
                              <div>
                                <h3>Wordpress</h3>
                                <h5>Wordpress is a type of CMS for mainstream web development. Although word press is not my favorite CMS, it definitely seems to be the most popular. If you have a wordpress site, and need help we can accommodate, as well as build word press sites for you if you so want (although we do advise against it).</h5>
                                <h3>What is a CMS?</h3>
                                <h5>CMS stands for content management system. CMS's are ways to mainstream building. CMS's like word press are great for small business. CMS's like ghost are great for groups who have content writers and web dev's.</h5>
                              </div>
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

export default withStyles(profilePageStyle)(BuildingPage);
