import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import ImportantDevices from "@material-ui/icons/ImportantDevices";
import Dns from "@material-ui/icons/Dns";
import Server from "@material-ui/icons/Storage";
import Https from "@material-ui/icons/Https";
import Cart from "@material-ui/icons/ShoppingCart";
import Code from "@material-ui/icons/Code";
import Announcement from "@material-ui/icons/Announcement";
import Bubbles from "@material-ui/icons/BubbleChart";
import Extension from "@material-ui/icons/Extension";
import ExitToApp from "@material-ui/icons/ExitToApp";
import SettingsSystemDaydream from "@material-ui/icons/SettingsSystemDaydream";
import Widgets from "@material-ui/icons/Widgets";


// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import Card from "components/Card/Card.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CardBody from "components/Card/CardBody.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class Features extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={11} md={8}>
            <h2 className={classes.title}>Brief Services Overview</h2>
            <h5 className={classes.description}>
              This is comprehensive list of all the things we currently offer. Its here to serve as a quick guide and easy reference point.
            </h5>
            <br />
          </GridItem>
        </GridContainer>
        <div>
        <GridContainer justify="center">
          <GridItem xs={11}>
          <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card>
              <CardHeader color="primary">
                <h4>Hosting</h4>
              </CardHeader>
                <InfoArea
                  title="Server Hosting"
                  description="We have hosting for all types of servers from basic cpanel and wordpress to more complicated things like web app hosting."
                  icon={Server}
                  iconColor="info"
                />
                <InfoArea
                  title="Security"
                  description="Https security is avalible as well as encryption for all user logins."
                  icon={Https}
                  iconColor="rose"
                />
                <InfoArea
                  title="Database Hosting"
                  description="Want to have users, or host 3rd party content? No problem! We offer hosting for all types of databases."
                  icon={Dns}
                  iconColor="warning"
                />
                <InfoArea
                  title="Git Repositories"
                  description="All sites are created out of repos for an easy and streamlined experience that makes workflow efficient."
                  icon={Bubbles}
                  iconColor="success"
                />
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card>
              <CardHeader color="primary">
                <h4>Basic Websites</h4>
              </CardHeader>
                <InfoArea
                  title="HTML/CSS"
                  description="A simple, easy and cost efficient way to get your content out there. Great for simple projects nd things like landing pages."
                  icon={Code}
                  iconColor="success"
                />
                <InfoArea
                  title="Wordpress"
                  description="Perfect for people who want to be able to manage their own content. We offer (but usually don't recommend) Wordpress sites."
                  icon={Extension}
                  iconColor="info"
                />
                <InfoArea
                  title="Contact Forms"
                  description="My sites are built to be responsive. So no matter what device view-port you look at it on, its going to look good."
                  icon={Announcement}
                  iconColor="rose"
                />
                <InfoArea
                  title="Responsive Design"
                  description="My sites are built to be responsive. So no matter what device view-port you look at it on, its going to look good."
                  icon={ImportantDevices}
                  iconColor="warning"
                />
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card>
              <CardHeader color="primary">
                <h4>Web and Mobile Apps</h4>
              </CardHeader>
                <InfoArea
                  title="eCommerce"
                  description="CMS and MERN eCommerce web apps available."
                  icon={Cart}
                  iconColor="warning"
                />
                <InfoArea
                  title="Login Forms"
                  description="Built and managed log in forms."
                  icon={ExitToApp}
                  iconColor="success"
                />
                <InfoArea
                  title="React/MERN Apps"
                  description="My sites are built to be responsive. So no matter what device view-port you look at it on, its going to look good."
                  icon={Widgets}
                  iconColor="info"
                />
                <InfoArea
                  title="Database and Servers"
                  description="My sites are built to be responsive. So no matter what device view-port you look at it on, its going to look good."
                  icon={SettingsSystemDaydream}
                  iconColor="rose"
                />
            </Card>
          </GridItem>

          </GridContainer>
          </GridItem>
        </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(Features);
