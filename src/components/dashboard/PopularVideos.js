import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Card,
  CardHeader,
  Divider
} from '@material-ui/core';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import VideoService from '../../utils/videoService';
import VideoCard from './VideoCard';

const PopularVideos = (props) => {
  const [videos, setVideos] = useState([]);

  useEffect(async () => {
    const response = await VideoService.getPopularVideos();
    setVideos(response.videos);
  }, []);

  const isClickable = (videoId) => props.likedVideos.map(({ id }) => id).includes(videoId);

  return (
    <Card>
      <CardHeader title="Popular Videos" />
      <Divider />
      <PerfectScrollbar>
        <Box sx={{
          flexWrap: 'wrap', display: 'flex', justifyContent: 'space-evenly'
        }}
        >
          {/* eslint-disable-next-line no-unused-vars,react/prop-types */}
          {videos && videos.map((video) => <VideoCard key={`key-${video.id}`} isClickable={isClickable(video.id)} {...video} onLikeVideo={props.onLikeVideo} />)}
        </Box>
      </PerfectScrollbar>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          p: 2
        }}
      />
    </Card>
  );
};

export default PopularVideos;

PopularVideos.propTypes = {
  likedVideos: PropTypes.array,
  requestVideos: PropTypes.func,
};
