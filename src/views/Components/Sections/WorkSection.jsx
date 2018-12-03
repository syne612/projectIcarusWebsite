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
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
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
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={11} sm={11} md={8}>
            <h2 className={classes.title}>Get in Contact</h2>
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
          <input type="hidden" name="form-name" value="contact" />

          <form onSubmit={this.handleSubmit}>
        <p>
          <label>
            Your Name: <input type="text" name="name" value={name} onChange={this.handleChange} />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="email" name="email" value={email} onChange={this.handleChange} />
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message" value={message} onChange={this.handleChange} />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
            </form>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(workStyle)(WorkSection);
