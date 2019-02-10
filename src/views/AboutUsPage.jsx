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
import Pricing from "./Sections/PricingSection.jsx";
import TeamSection1 from "./Sections/TeamSection1.jsx";
import TeamSection from "./Sections/TeamSection.jsx";
import WorkSection from "./Sections/WorkSection1.jsx";
import About from "./Sections/AboutSection.jsx";
import Icarus from "assets/img/bg5.jpg";


import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";

class AboutUsPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          brand="Project Icarus"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
        <Parallax small image={Icarus}>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <br />
          <About />
          <TeamSection />
          <Pricing />
          <WorkSection />
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(componentsStyle)(AboutUsPage);
