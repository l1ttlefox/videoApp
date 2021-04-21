import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import PropTypes from 'prop-types';
import * as _ from 'lodash';

const useStyles = makeStyles({
  media: {
    height: '30vh',
  },
  slider: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '30vh'
  },
  rightArrow: {
    position: 'absolute',
    top: '50%',
    right: 32,
    fontSize: '3rem',
    zIndex: 10,
    cursor: 'pointer',
    userSelect: 'none'
  },

  leftArrow: {
    position: 'absolute',
    top: '50%',
    left: 32,
    fontSize: '3rem',
    zIndex: 10,
    cursor: 'pointer',
    userSelect: 'none'
  },

  slidePicture: {
    opacity: 0,
    transitionDuration: '1s ease',
    '&.active': {
      opacity: 1,
      transitionDuration: '1s',
      transform: 'scale(1.08)'
    }
  }
});

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const slidesChunks = _.chunk(slides, 2);
  const { length } = slidesChunks;

  const classes = useStyles();

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slidesChunks) || slidesChunks.length <= 0) {
    return null;
  }

  return (
    <Box className={classes.slider}>
      <ArrowBackIosOutlinedIcon className={classes.leftArrow} onClick={nextSlide} />
      <ArrowForwardIosOutlinedIcon className={classes.rightArrow} onClick={prevSlide} />
      {slidesChunks.map((chunks, index) => chunks.map((slide) => {
        if (index === current) {
          return (
            <Card
              lg={12}
              md={12}
              xl={12}
              xs={12}
              key={slide.id}
              sx={{ mr: 3 }}
              className={index === current ? classes.slidePicture['&.active'] : classes.slidePicture}
            >
              <img
                alt="sdf"
                className={classes.media}
                src={slide.picture}
              />
            </Card>
          );
        }
        return null;
      }))}
    </Box>
  );
};

export default ImageSlider;

ImageSlider.propTypes = {
  slides: PropTypes.array
};
