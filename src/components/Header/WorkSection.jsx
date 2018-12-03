import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import workStyle from "assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx";
import axios from 'axios';


const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }


class WorkSection extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        name: '',
        email: '',
        message: ''
      };
      

    }
    handleSubmit = e => {
          fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...this.state })
          })
            .then(() => alert("Success!"))
            .catch(error => alert(error));

          e.preventDefault();
        };

        handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
    const { classes } = this.props;
    const { name, email, message } = this.state;

    return (
      <div>
      <div className={classes.centered}> <Button
        justIcon
        color="transparent"
        className={classes.margin5}
      ><i className={classes.socials + " fas fa-envelope"} />
    </Button> <p className={classes.description}> EllisHogan95@gmail.com </p>
      <Button
        justIcon
        color="transparent"
        className={classes.margin5}
      ><i className={classes.socials + " fas fa-phone"} />
    </Button> <p className={classes.description}
> 704-839-1628 </p></div>
            <form onSubmit={this.handleSubmit}>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Your Name"
                    id="name"
                    type="text"
                    name="name"
                    value={name} onChange={this.handleChange}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Your Email"
                    id="email"
                    type="email"
                    name="email"
                    value={email} onChange={this.handleChange}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <CustomInput
                  labelText="Your Message"
                  id="message"
                  type="text"
                  name="message"
                  value={message} onChange={this.handleChange}
                  formControlProps={{
                    fullWidth: true,
                    className: classes.textArea
                  }}
                  inputProps={{
                    multiline: true,
                    rows: 5
                  }}
                />
                <GridContainer justify="center">
                  <GridItem
                    xs={12}
                    sm={12}
                    md={4}
                    className={classes.textCenter}
                  >
                    <Button color="primary" type="submit" >Send Message</Button>
                  </GridItem>
                </GridContainer>
              </GridContainer>
            </form></div>

    );
  }
}

export default withStyles(workStyle)(WorkSection);
