import React from "react";
import Slider from "react-slick";
import withStyles from "@material-ui/core/styles/withStyles";
import carouselStyle from "assets/jss/material-kit-react/views/componentsSections/carouselStyleM.jsx";
import classNames from "classnames";


class PictureMoving5 extends React.Component {

  render() {
    const { classes, ...rest } = this.props;

    const settings = {
      centerMode: true,
      infinite: true,
      className: classes.center,
      centerPadding: "60px",
      slidesToShow: 4,
      speed: 500
    };
    const cls = {
      className: classNames(classes.boxes, classes.five)
    }
    return (
      <div>
        <Slider {...settings} >
          <div {...cls}>
            <h3 >1</h3>
          </div>
          <div {...cls}>
            <h3>2</h3>
          </div>
          <div {...cls}>
            <h3>3</h3>
          </div>
          <div {...cls}>
            <h3>4</h3>
          </div>
          <div {...cls}>
            <h3>5</h3>
          </div>
          <div {...cls}>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
export default withStyles(carouselStyle)(PictureMoving5);
