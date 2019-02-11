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
                <div className={classes.height}><InfoArea
                  title="Server Hosting"
                  description="We have hosting for all types of servers from basic cpanel and wordpress to more complicated things like web app hosting."
                  icon={Server}
                  iconColor="info"
                /></div>
                <div className={classes.height}><InfoArea
                  title="Security"
                  description="Https security is avalible as well as encryption for all user logins."
                  icon={Https}
                  iconColor="rose"
                /></div>
                <div className={classes.height}><InfoArea
                  title="Database Hosting"
                  description="Want to have users, or host 3rd party content? No problem! We offer hosting for all types of databases."
                  icon={Dns}
                  iconColor="warning"
                /></div>
                <div className={classes.height}><InfoArea
                  title="Git Repositories"
                  description="All sites are created out of repos for an easy and streamlined experience that makes workflow efficient."
                  icon={Bubbles}
                  iconColor="success"
                /></div>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card>
              <CardHeader color="primary">
                <h4>Basic Websites</h4>
              </CardHeader>
                <div className={classes.height}><InfoArea
                  title="HTML/CSS"
                  description="A simple, easy and cost efficient way to get your content out there. Great for simple projects nd things like landing pages."
                  icon={Code}
                  iconColor="success"
                /></div>
                <div className={classes.height}><InfoArea
                  title="Wordpress"
                  description="Perfect for people who want to be able to manage their own content. We offer (but usually don't recommend) building, and managing Wordpress sites."
                  icon={Extension}
                  iconColor="info"
                /></div>
                <div className={classes.height}><InfoArea
                  title="Contact Forms"
                  description="For all your basic back end needs (and contact forms seem to be a what most people need) we have you covered, on any platform; with field sterilization and checks."
                  icon={Announcement}
                  iconColor="rose"
                /></div>
                <div className={classes.height}><InfoArea
                  title="Responsive Design"
                  description="My sites are built to be responsive. So no matter what device view-port you look at it on, its going to look good."
                  icon={ImportantDevices}
                  iconColor="warning"
                /></div>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card>
              <CardHeader color="primary">
                <h4>Web and Mobile Apps</h4>
              </CardHeader>
                <div className={classes.height}><InfoArea
                  title="eCommerce"
                  description="CMS and MERN eCommerce web apps available, as well as WooCommerce, and custom built eCommerce using Shopify or Amazon api."
                  icon={Cart}
                  iconColor="warning"
                /></div>
                <div className={classes.height}><InfoArea
                  title="Login Forms"
                  description="Built and managed log in forms."
                  icon={ExitToApp}
                  iconColor="success"
                /></div>
                <div className={classes.height}><InfoArea
                  title="React/MERN Apps"
                  description="For faster more powerful sites, we offer React UI as well as MERN web apps, a custom look has never loaded faster."
                  icon={Widgets}
                  iconColor="info"
                /></div>
                <div className={classes.height}><InfoArea
                  title="Database and Servers"
                  description="Express and MongoDB are pretty big go too's but we can Manage SQL/MySql as well."
                  icon={SettingsSystemDaydream}
                  iconColor="rose"
                /></div>
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
