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
        to="/portfolio"
        color="transparent"
        className={classes.navLink}>
          Portfolio
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
      <CustomDropdown
        noLiPadding
        buttonText="About"
        buttonProps={{
          className: classes.navLink,
          color: "transparent"
        }}

        dropdownList={[
          <Link to="/pricing" className={classes.dropdownLink}>
            Pricing Modal
          </Link>,
          <Link to="/about-us" className={classes.dropdownLink}>
            About Project Icarus
          </Link>,
          <Link to="/building" className={classes.dropdownLink}>
            How We Build
          </Link>
        ]}
      />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="More Info"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}

          dropdownList={[
            <Link to="/partnering" className={classes.dropdownLink}>
              Partner With Us
            </Link>,
            <Link to="/clients" className={classes.dropdownLink}>
              Our Clients
            </Link>,
            <Link to="/projects" className={classes.dropdownLink}>
              Large Scale Projects
            </Link>,
            <Link to="/developer" className={classes.dropdownLink}>
              Meet the Developer
            </Link>,


          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
      <Button
        color="primary"
        block
        onClick={() => this.handleClickOpen("classicModal")}
      >
        <LibraryBooks className={classes.icon} /> Lets Chat!
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
