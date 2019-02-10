import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import CompareArrows from "@material-ui/icons/CompareArrows";
import DoneAll from "@material-ui/icons/DoneAll";
import Gesture from "@material-ui/icons/Gesture";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import Icarus from "assets/img/Icarus.png";
import CardBody from "components/Card/CardBody.jsx";

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class About extends React.Component {
  render() {
    const { classes } = this.props;
    return (

        <GridContainer justify="center">
          <GridItem xs={12} sm={8} md={6} lg={5} xl={4}>
            <br />
            <CardBody className={classes.imgRaised}>
              <img width="100%" className={classes.card} alt="" src={Icarus} />
            </CardBody>
          </GridItem>
          <GridItem xs={11} md={10} lg={5} xl={4}>
            <h2 className={classes.title}>What is Project Icarus?</h2>
            <h5 className={classes.description}>
              Project Icarus is a software development company focusing on web and app development. We are currently working on several larger scale projects, and are looking at collaborating with other developers. For more info on current projects visit our <a href="/projects">Large Scale Projects</a> page or for more on collaboration opportunities visit our <a href="/partnering">Partnering</a> page.
            </h5>
            <h3 className={classes.title}>Web and App Development</h3>
            <h5 className={classes.description}>
              We develop for you. Project Icarus develops basic Html/Css and Wordpress sites as well MERN web apps, for all your web needs. We also build React and Swift mobile apps.
            </h5>
          </GridItem>
          <GridItem xs={11} md={10} lg={10} xl={8}>
            <h3 className={classes.title}>Well thats all fine and dandy but what is an "Icarus"?</h3>
            <h5 className={classes.description}>
              An Icarus is a type of bird in the snipe family. Really? No, but who doesn't love a good UP reference. Icarus is the son of the famous Ancient Greek craftsman Daedalus from Greek mythology. Daedalus, among other crazy inventions created the Labyrinth (a huge maze where the Minotaur lived) for King Minos of Crete. Daedalus was an amazing inventor, and the only thing he was better at than inventing was getting on peoples bad side.  So along with being responsible for inventions like the labyrinth he also managed to get himself and his son icarus imprisoned in that same labyrinth with the Minotaur (yes the maze runner basically stole this).
            </h5>
            <h3 className={classes.title}>Daedalus and Icarus</h3>
            <h5 className={classes.description}>
              Daedalus and Icarus are locked in the maze. They couldn’t leave by sea, as the king controlled all sea routes. Locked in the labyrinth with no way out, Daedalus made wings for himself and Icarus. He tied feathers together,  and secured them with string and wax. When that done, and science on their side, him and Icarus were ready to go. Before the flight, Daedalus warns Icarus not to fly too high, because the heat of the sun would melt the wax, or too low, because the sea could dampen the feathers (it’s a bend but don’t break sort of science ruleset). Icarus, feeling smarter than dad, thinks “Shut up dad I know more than you” and proceeds to not listen at all. The flight was long and eventually Icarus, forgetting himself, began to soar upward toward the sun. The sun softened the wax (just like his dad said) and the wings fell apart. Icarus fell in the sea and drowned. 
            </h5>
            <h3 className={classes.title}>Bringing it Back Full Circle</h3>
            <h5 className={classes.description}>
              There are so many lessons to be learned here, and although we aspire to be more like Daedalus, Icarus is a constant reminder to "mind the sun". Project Icarus embodies the idea of creating something as magical as working wings of wax and feather.
            </h5>
          </GridItem>
        </GridContainer>
    );
  }
}

export default withStyles(productStyle)(About);
