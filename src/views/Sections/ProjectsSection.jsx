import React from "react";
import Slider from "react-slick";
import withStyles from "@material-ui/core/styles/withStyles";
import carouselStyle from "assets/jss/material-kit-react/views/componentsSections/carouselStyleM.jsx";
import classNames from "classnames";
import Button from "components/CustomButtons/Button.jsx";


class PictureMoving5 extends React.Component {

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
            <h3 >Sweat Lock</h3>
          </div>
          <div {...cls}>
            <h3>BASG</h3>
          </div>
          <div {...cls}>
            <h3>LW Land</h3>
          </div>
          <div {...cls}>
            <h3>Stratifyd</h3>
          </div>
          <div {...cls}>
            <h3>Treehouse Vineyards</h3>
          </div>

        </Slider>
      </div>
    );
  }
}
export default withStyles(carouselStyle)(PictureMoving5);
