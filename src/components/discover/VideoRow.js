import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
} from '@material-ui/core';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import React from 'react';
import VideoCard from '../dashboard/VideoCard';

const VideoRow = ({ videos, requestVideos, title }) => (
  <Card>
    <CardHeader
      title={title}
    />
    <Divider />

    <CardContent>
      <PerfectScrollbar
        onXReachEnd={requestVideos}
        style={{
          flexWrap: 'nowrap',
          display: 'flex',
          overflow: 'auto',
          zIndex: 2
        }}
      >
        {videos && videos.map((video) => <VideoCard key={`key-${video.id}`} controls={false} {...video} />)}
      </PerfectScrollbar>
    </CardContent>

    <Divider />
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        p: 2
      }}
    />
  </Card>
);

export default VideoRow;

VideoRow.propTypes = {
  videos: PropTypes.array,
  requestVideos: PropTypes.func,
  title: PropTypes.string,
};
