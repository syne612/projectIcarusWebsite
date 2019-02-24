import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";
import landingPageTheme from "assets/img/github.png";

// Sections for this page
import Features from "./Sections/Features.jsx";
import OurProjectsSection from "./Sections/OurProjectsSection.jsx";
import WorkSection from "./Sections/WorkSection.jsx";

const dashboardRoutes = [];

class ProjectsPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand="Project Icarus"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
        <Parallax filter image={require("assets/img/bg7.jpg")}>
          <div className={classes.container}>
            <GridContainer justify="center">

              <GridItem xs={12}>
                <h1 className={classes.title}>Our Projects</h1>
                <h2>All of these github links link to project boards with the repositories in the description, and in the cards.</h2>
                <br /> <br />
              </GridItem>
              <br /> <br />

              <GridItem xs={12} md={4}>
                <br />
                <br />
                  <Card className={classes.card2}>
                    <CardHeader
                      className={classes.cardHeader1}
                    >
                      <h4>Landing Page Themes</h4>
                    </CardHeader>
                    <CardBody>
                      <p className={classes.ptag}>
                        This is a project dedicated to all of the landing page themes I have created. From basic html and css landing pages to more robust things created in react to be incorporated into your own project.
                      </p>
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      <a href="https://github.com/users/icarus612/projects/1">
                        <Button
                          simple
                          color="info"
                          size="lg"
                          className={classes.margin5}
                        >
                          <i className={"fab fa-github"} /> Github
                        </Button>
                      </a>
                      <a href={"projects/info"}>
                        <Button simple color="rose" size="lg">
                          More Info
                        </Button>
                      </a>
                    </CardFooter>
                </Card>
              </GridItem>
              <GridItem xs={12} md={4}>
                <br />
                <br />
                <Card className={classes.card2}>
                    <CardHeader
                      className={classes.cardHeader2}
                    >
                      <h4>3D CSS Project</h4>
                    </CardHeader>
                    <CardBody>
                      <p className={classes.ptag}>
                        Started on a whim one day. The idea of basic virtual worlds and what could be created from CSS 3d modeling. Built from basic HTML and CSS. Animated with AnimeJS.
                      </p>
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      <a href="https://github.com/users/icarus612/projects/3">
                        <Button
                          simple
                          color="info"
                          size="lg"
                          className={classes.margin5}
                        >
                          <i className={"fab fa-github"} /> Github
                        </Button>
                      </a>
                      <a href={"projects/info"}>
                        <Button simple color="rose" size="lg">
                          More Info
                        </Button>
                      </a>
                    </CardFooter>
                </Card>
              </GridItem>

              <GridItem xs={12} md={4}>
                <br />
                <br />
                <Card className={classes.card2}>
                    <CardHeader
                      className={classes.cardHeader3}
                    >
                      <h4>Project Daedalus</h4>
                    </CardHeader>
                    <CardBody>
                      <p className={classes.ptag}>
                        This is a place deticated to the great master Daedalus. This project is a set of Smaller Repos, and Gists. A place for all my tinkerings and functions.
                      </p>
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      <a href="https://github.com/users/icarus612/projects/2">
                        <Button
                          simple
                          color="info"
                          size="lg"
                          className={classes.margin5}
                        >
                          <i className={"fab fa-github"} /> Github
                        </Button>
                      </a>
                      <a href={"projects/info"}>
                        <Button simple color="rose" size="lg">
                          More Info
                        </Button>
                      </a>
                    </CardFooter>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classes.main}>
          <div className={classes.container}>
            <WorkSection />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(ProjectsPage);
