import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import carouselStyle from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.jsx";
import basg from "assets/img/BASG.jpg";
import treehouseVineyards from "assets/img/treehouseVineyards.jpg";
import sweatlock from "assets/img/sweatlock.jpg";
import lwLand from "assets/img/LWLand.jpg";
import gneiss from "assets/img/gneiss.jpg";

class SectionCarousel extends React.Component {
  render() {
    const { classes } = this.props;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false
    };
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={10}>
              <Card carousel className={classes.boxes}>
                <Carousel {...settings} className={classes.boxes}>
                  <div className={classes.hideMe} >
                    <img
                      src={lwLand}
                      alt="First slide"
                      className={classes.image1}
                    />
                    <div className={classes.getDown}>
                      <h2 className={classes.darker} >
                        LW Land
                      </h2>
                      <Button
                        color="primary"
                        className={classes.margin5}
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                  <div className={classes.hideMe} >
                    <img
                      src={sweatlock}
                      alt="Second slide"
                      className={classes.image2}
                    />
                    <div className={classes.getDown}>
                      <h2 className={classes.darker} >
                        Sweat Lock
                      </h2>
                      <Button
                        color="primary"
                        className={classes.margin5}
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                  <div className={classes.hideMe} >
                    <img
                      src={basg}
                      alt="Third slide"
                      className={classes.image1}
                    />
                    <div className={classes.getDown}>
                      <h2 className={classes.darker} >
                        Business Advisory Solutions Group
                      </h2>
                      <Button
                        color="primary"
                        className={classes.margin5}
                      >
                        Learn More
                      </Button>
                    </div>

                  </div>
                  <div className={classes.hideMe} >
                    <img
                      src={treehouseVineyards}
                      alt="Forth slide"
                      className={classes.image1}
                    />
                    <div className={classes.getDown}>
                      <h2 className={classes.darker} >
                        Treehouse Vineyards
                      </h2>
                      <Button
                        color="primary"
                        className={classes.margin5}
                      >
                        Learn More
                      </Button>
                    </div>

                  </div>
                  <div className={classes.hideMe} >
                    <img
                      src={gneiss}
                      alt="Fifth slide"
                      className={classes.image2}
                    />
                    <div className={classes.getDown}>
                      <h2 className={classes.darker} >
                        Gneiss
                      </h2>
                      <Button
                        color="primary"
                        className={classes.margin5}
                      >
                        Learn More
                      </Button>
                    </div>

                  </div>
                </Carousel>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(carouselStyle)(SectionCarousel);
