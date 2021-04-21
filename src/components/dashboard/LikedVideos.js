import {
  Card,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText, Typography
} from '@material-ui/core';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
const LikedVideos = ({ likedVideos }) => (
  <Card sx={{ height: '100%' }}>
    <CardHeader
      subtitle={`${likedVideos.length} in total`}
      title="Liked Videos"
    />
    <Divider />
    {!!likedVideos.length
    && (
    <List>
      {likedVideos.map((video, i) => (
        <ListItem
          divider={i < likedVideos.length - 1}
          key={video.id}
        >
          <ListItemAvatar>
            <img
              alt={video.name}
              src={video.picture}
              style={{
                height: 48,
                width: 48
              }}
            />
          </ListItemAvatar>
          <ListItemText
            primary={video.name}
          />
        </ListItem>
      ))}
    </List>
    )}
    {!likedVideos.length && (
    <Typography
      color="textSecondary"
      gutterBottom
      variant="h6"
      align="center"
    >
      NO VIDEO LIKED
    </Typography>
    )}

  </Card>
);

export default LikedVideos;

LikedVideos.propTypes = {
  likedVideos: PropTypes.array,
};
