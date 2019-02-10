import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Features from "./Sections/Features.jsx";
import Pricing from "./Sections/PricingSection.jsx";
import WorkSection from "./Sections/WorkSection.jsx";
import Style from "@material-ui/icons/Style";


import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";

class PricingPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          brand="Project Icarus"
          rightLinks={<HeaderLinks />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
        <Parallax small filter image={require("assets/img/bg2.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <br />
                  <h1 className={classes.title}>Pricing</h1>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>

        <div className={classNames(classes.main, classes.mainRaised)}>
          <h2></h2>
          <Pricing />
          <Features />
          <WorkSection />
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(componentsStyle)(PricingPage);
