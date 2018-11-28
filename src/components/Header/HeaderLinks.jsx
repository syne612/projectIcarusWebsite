/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";
import LibraryBooks from "@material-ui/icons/Chat";
import Close from "@material-ui/icons/Close";
// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Dialog from "@material-ui/core/Dialog";
import Hidden from "@material-ui/core/Hidden";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import Slide from "@material-ui/core/Slide";
import WorkSection from "./WorkSection"
import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function Transition(props) {
  return <Slide direction="down" {...props} />;
}
class HeaderLinks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classicModal: false

    };

  }
  handleClickOpen(modal) {
    var x = [];
    x[modal] = true;
    this.setState(x);
  }
  handleClose(modal) {
    var x = [];
    x[modal] = false;
    this.setState(x);
  }
  render() {
  const { classes } = this.props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Link
        to="/"
          color="transparent"
          className={classes.navLink}
        >
          Home
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link
        to="/gallery"
        color="transparent"
        className={classes.navLink}>
          Gallery
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link
        to="/about-me"
          color="transparent"
          className={classes.navLink}
        >
          About
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-twitter"
          title="Connect with us on LinkedIn"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://www.linkedin.com/in/ellis-hogan-99a646161/"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-linkedin"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Check out our Github repo's"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://github.com/syne612?tab=repositories"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-github"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on Instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/angel.icarus/"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
      <Button
        color="primary"
        block
        onClick={() => this.handleClickOpen("classicModal")}
      >
        <LibraryBooks className={classes.icon} /> Contact
      </Button>
      <Dialog
        classes={{
          root: classes.center,
          paper: classes.modal
        }}
        open={this.state.classicModal}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => this.handleClose("classicModal")}
        aria-labelledby="classic-modal-slide-title"
        aria-describedby="classic-modal-slide-description"
      >
        <DialogTitle
          id="classic-modal-slide-title"
          disableTypography
          className={classes.modalHeader}
        >
          <IconButton
            className={classes.modalCloseButton}
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={() => this.handleClose("classicModal")}
          >
            <Close className={classes.modalClose} />
          </IconButton>
          <br />
          <Hidden only="xs"> <center><h2 className={classes.modalTitle}>Get in Contact</h2></center></Hidden>

        </DialogTitle>
        <DialogContent
          id="classic-modal-slide-description"
          className={classes.modalBody}
        >
            <WorkSection />
        </DialogContent>
        <DialogActions className={classes.modalFooter}>
          <Button
            onClick={() => this.handleClose("classicModal")}
            color="danger"
            simple
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
      </ListItem>
    </List>
  );
  }
}
export default withStyles(headerLinksStyle)(HeaderLinks);
