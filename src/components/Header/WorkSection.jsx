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

class WorkSection extends React.Component {
  constructor(){
    super()
    this.state = {
      name: '',
      email: '',
      message: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
async handleSubmit(e) {
    e.preventDefault()
    const {name, email, message } = this.state

  const form = await axios.post ('/api/form', {
    name,
    email,
    message
  });
}
    render() {
    const { classes } = this.props;
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
              <GridItem xs={12} md={6}>
                <CustomInput
                  labelText="Your Name"
                  id="name"
                  onChange={this.handleChange}
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} md={6}>
                <CustomInput
                  labelText="Your Email"
                  id="email"
                  onChange={this.handleChange}
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <CustomInput
                labelText="Your Message"
                id="message"
                onChange={this.handleChange}
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
                    <Button color="primary" >Send Message</Button>
                  </GridItem>
                </GridContainer>
              </GridContainer>
            </form></div>

    );
  }
}

export default withStyles(workStyle)(WorkSection);
