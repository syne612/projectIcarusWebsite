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
import Input from "@material-ui/core/Input";
import Button from "components/CustomButtons/Button.jsx";
import workStyle from "assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx";
import axios from 'axios';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";


const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }


class WorkSection extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        nameM: '',
        emailM: '',
        messageM: ''

      };

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);


    }
    handleSubmit = e => {
          fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact1", ...this.state })
          })
            .then(() => alert("Success!"))
            .catch(error => alert(error));

          e.preventDefault();
        };

        handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
    const { classes } = this.props;
    const { nameM, emailM, messageM } = this.state;

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
            <input type="hidden" name="form-name" value="contact1" />
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                <Input
                  className={classes.inputClasses}
                  labelText="Name"
                  id="nameM"
                  type="text"
                  name="nameM"
                  placeholder="Name"
                  value={nameM}
                  onChange={this.handleChange}
                  formControlProps={{
                    fullWidth: true
                  }}
                />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                <FormControl className={classes.formControlClasses}>
                  {emailM == undefined ? (
                    <InputLabel
                      className={classes.labelRoot}
                      htmlFor="emailM"

                    >Email
                    </InputLabel>
                  ) : null}
                </FormControl>

                <Input
                  className={classes.underline, classes.input, classes.fullWidth}
                  labelText="Email"
                  id="emailM"
                  type="email"
                  name="emailM"
                  placeholder="Email"
                  value={emailM}
                  onChange={this.handleChange}
                  formControlProps={{
                    fullWidth: true
                  }}
                />
                </GridItem>
                <Input
                  className={classes.textarea}
                  labelText="Message"
                  id="messageM"
                  type="text"
                  name="messageM"
                  placeholder = "Your Message"
                  value={messageM}
                  onChange={this.handleChange}


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
