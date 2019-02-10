import React from "react";
import Slider from "react-slick";
import withStyles from "@material-ui/core/styles/withStyles";
import carouselStyle from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.jsx";
import classNames from "classnames";


class CenterMode extends React.Component {

  render() {
    const { classes, ...rest } = this.props;

    const settings = {
      className: classes.center,
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 4,
      speed: 500
    };
    return (
      <div>
        <Slider {...settings} >
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
export default withStyles(carouselStyle)(CenterMode);
