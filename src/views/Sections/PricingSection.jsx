import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Texture from "@material-ui/icons/Texture";
import DoneAll from "@material-ui/icons/DoneAll";
import Gesture from "@material-ui/icons/Gesture";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class Pricing extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={11} md={8}>
            <h2 className={classes.title}>Understanding Our Pricing Model</h2>
            <h5 className={classes.description}>
              Project Icarus is a web development company focusing on a transparent, efficient, and flexible pricing model.
            </h5>
          </GridItem>
        </GridContainer>
        <div>
        <GridContainer justify="center">
          <GridItem xs={11}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Transparency"
                description="Giving you the ability to have a full understanding of how your billing is structured. To help you make the most informed decisions."
                icon={Texture}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Efficiency"
                description="Good quality building and clean code, as well as strong client communication, and as much (or as little) client interaction as you want."
                icon={DoneAll}
                iconColor="success"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Flexibility"
                description="Flexible building to stay in your budget! Building anything from basic Html/Css or Wordpress to MERN web apps within your budget."
                icon={Gesture}
                iconColor="warning"
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

export default withStyles(productStyle)(Pricing);
