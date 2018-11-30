import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Devices from "@material-ui/icons/Devices";
import Server from "@material-ui/icons/Storage";
import Https from "@material-ui/icons/Https";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class ProductSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={11} md={8}>
            <h2 className={classes.title}>How I Design</h2>
            <h5 className={classes.description}>
              This new site is build compleatly in JavaScript and JS librarys (react.js, node.js), and JavaScript (node.js react.js redux, epress, mongoDB, mongoose) is what I currently am spending the most time in, but I have plenty experiance working with HTML, CSS, PHP, and WordPress as well.
            </h5>
          </GridItem>
        </GridContainer>
        <div>
        <GridContainer justify="center">
          <GridItem xs={11}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Responsive Design"
                description="My sites are built to be responsive. So no matter what device view-port you look at it on, its going to look good."
                icon={Devices}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Servers and Hosting"
                description="From server side coding to all your hosting needs we've got you covered. We also provide base SEO suport and will help you find the best SEO person for the job."
                icon={Server}
                iconColor="success"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Security"
                description="Security of both your and others information is very important. Proper coding techniques and library (bcrypt) can help keep you and your users safe."
                icon={Https}
                iconColor="danger"
                vertical
              />
            </GridItem>
          </GridContainer>
          </GridItem>
        </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(ProductSection);
