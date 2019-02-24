import React from "react";
import Slider from "react-slick";
import withStyles from "@material-ui/core/styles/withStyles";
import workWithSectionStyle from "assets/jss/material-kit-react/views/componentsSections/carouselStyleP.jsx";
import classNames from "classnames";
import Icon from "@material-ui/core/Icon";

import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import github from "assets/img/github.png";


class WorkWithSection extends React.Component {

  render() {
    const { classes, ...rest } = this.props;

    const settings = {
      centerMode: true,
      infinite: true,
      dots: true,
      arrows: true,
      className: classes.centerLining,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
      responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    };
    const cls = {
      className: classes.projects
    }
    return (
      <div>
        <br />
        <Slider {...settings} >
          <div {...cls}>
            <br />
            <h3>Sweat Lock</h3>
            <br />
            <a href="https://www.wearsweatlock.com">
              <Button
                color="primary"
                className={classes.margin5}
              >
                View
              </Button>
            </a>
          </div>
          <div {...cls}>
          <CardBody className={classes.imgRaised, classes.card}>
            <a href="https://github.com/syne612">
                <img className={classes.img} src={github} />
            </a>
          </CardBody>
          </div>
          <div {...cls}>
            <br />
            <Card className={classes.card}>
              <form className={classes.form}>
                <CardHeader color="primary" className={classes.cardHeader}>
                  <h4>Login</h4>

                </CardHeader>
                <p className={classes.divider}>Or Be Classical</p>
                <CardBody>

                </CardBody>
                <CardFooter className={classes.cardFooter}>
                  <Button simple color="primary" size="lg">
                    Get started
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </div>
          <div {...cls}>
            <br />
            <h3 >Wilderness Tabernacle</h3>
            <br />
            <a href="https://www.thewildernesstabernacleofwitness.com">
              <Button
                color="primary"
                className={classes.margin5}
              >
                View
              </Button>
            </a>
          </div>
          <div {...cls}>
            <br />
            <h3>Treehouse Vineyards</h3>
            <br />
            <a href="https://www.treehousevineyards.com">
              <Button
                color="primary"
                className={classes.margin5}
              >
                View
              </Button>
            </a>
          </div>
          <div {...cls}>
            <br />
            <h3 >Gneiss</h3>
            <br />
            <a href="https://www.Gneiss.io">
              <Button
                color="primary"
                className={classes.margin5}
              >
                View
              </Button>
            </a>
          </div>
          <div {...cls}>
            <br />
            <h3 >LW Land</h3>
            <br />
            <a href="http://www.buylandnc.com">
              <Button
                color="primary"
                className={classes.margin5}
              >
                View
              </Button>
            </a>
          </div>
        </Slider>
      </div>
    );
  }
}
export default withStyles(workWithSectionStyle)(WorkWithSection);
