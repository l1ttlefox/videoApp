import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import VideoRow from 'src/components/discover/VideoRow';
import { useEffect, useState } from 'react';
import VideoService from '../utils/videoService';
import ImageSlider from '../components/discover/ImageSlider';

const DiscoverView = () => {
  const [videos, setVideos] = useState([]);

  const requestVideos = async () => {
    const response = await VideoService.getPopularVideos();
    setVideos((prevVideos) => [...prevVideos, ...response.videos]);
  };

  useEffect(async () => {
    await requestVideos();
  }, []);

  return (
    <>
      <Helmet>
        <title>Settings | Material Kit</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ pt: 3 }}>
            <ImageSlider slides={videos} />
          </Box>

          <Box sx={{ pt: 3 }}>
            <VideoRow videos={videos} requestVideos={requestVideos} title="Scroll videos" />
          </Box>

          <Box sx={{ pt: 3 }}>
            <VideoRow videos={videos} requestVideos={requestVideos} title="Latest videos" />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default DiscoverView;
