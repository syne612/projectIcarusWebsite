import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import teamStyle from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx";

import Ellis from "assets/img/Ellis.jpg";
import Icarus from "assets/img/Icarus.png";
import github from "assets/img/github.png";


class TeamSection extends React.Component {
  render() {
    const { classes } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    return (
    <div className={classes.bg}>
      <div className={classes.section}>
        <h2 className={classes.title}>About the Developer.</h2>
        <div>
          <GridContainer justify="center" alignItems="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={6} sm={5} md={6} lg={4} className={classes.itemGrid}>
                  <img src={Ellis} alt="..." className={imageClasses} />
                </GridItem>
                  <h4 className={classes.cardTitle}>
                    Ellis Hogan
                    <br />
                    <small className={classes.smallTitle}>Owner/Creator</small>
                  </h4>
                <CardBody>
                  <p className={classes.description}>
                    My name is Ellis Hogan and I am the creator of Project Icarus (more at <a href="/developer">about</a>). To to see some of my works check out the <a href="/gallery">gallery</a> page or visit the <a href="/projects">projects</a> page.
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                <a href="https://www.linkedin.com/in/ellis-hogan-99a646161/">
                  <Button justIcon link className={classes.margin5}>
                    <i className={"fab fa-linkedin"} />
                  </Button>
                </a>
                <a href="https://github.com/syne612">
                  <Button justIcon link className={classes.margin5}>
                    <i className={"fab fa-github"} />
                  </Button>
                </a>
                <a href="https://bitbucket.org/angel-icaurs/">
                  <Button justIcon link className={classes.margin5}>
                    <i className={"fab fa-bitbucket"} />
                  </Button>
                </a>
                <a href="https://facebook.com/ellis.hogan.1">
                  <Button justIcon link className={classes.margin5}>
                    <i className={"fab fa-facebook"} />
                  </Button>
                </a>
                <a href="https://codepen.io/ellis-hogan/">
                  <Button justIcon link className={classes.margin5}>
                    <i className={"fab fa-codepen"} />
                  </Button>
                </a>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <CardBody className={classes.imgRaised, classes.card}>
                <h3>If your interested in some current projects to collaberate on check out my gitgub. </h3>
                <a href="https://github.com/syne612">
                    <img className={classes.img} src={github}/>
                </a>
              </CardBody>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
    );
  }
}

export default withStyles(teamStyle)(TeamSection);
