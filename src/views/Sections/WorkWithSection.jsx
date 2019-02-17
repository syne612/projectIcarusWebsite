import React from "react";
import Slider from "react-slick";
import withStyles from "@material-ui/core/styles/withStyles";
import workWithSectionStyle from "assets/jss/material-kit-react/views/componentsSections/carouselStyleM.jsx";
import classNames from "classnames";
import Button from "components/CustomButtons/Button.jsx";

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
      speed: 500
    };
    const cls = {
      className: classes.projects
    }
    return (
      <div>
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
            <br />
            <h3>BASG</h3>
            <br />
            <a href="https://www.basgllc.com">
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
          <div {...cls}>
            <br />
            <h3 >Stratifyd</h3>
            <br />
            <a href="https://www.stratifyd.com">
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
            <h3 >Treehouse Vineyards</h3>
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

        </Slider>
      </div>
    );
  }
}
export default withStyles(workWithSectionStyle)(WorkWithSection);
