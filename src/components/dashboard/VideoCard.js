import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 320,
    marginRight: 10,
    marginBottom: 10,
    minWidth: 250
  },
  media: {
    height: 140,
  },
});

export default function VideoCard({
// eslint-disable-next-line react/prop-types
  id, video, name, picture, onLikeVideo, controls = true, isClickable
}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="video"
          className={classes.media}
          image={video}
          title="Contemplative Reptile"
          controls
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
      {controls
      && (
      <CardActions>
        <Button size="small" color="primary" disabled={isClickable} onClick={() => onLikeVideo({ id, name, picture })}>
          Like
        </Button>
      </CardActions>
      )}
    </Card>
  );
}
