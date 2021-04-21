import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid
} from '@material-ui/core';
import PopularVideos from 'src/components/dashboard/PopularVideos';
import LikedVideos from 'src/components/dashboard/LikedVideos';

import React, { useState } from 'react';

const Dashboard = () => {
  const [likedVideos, setLikedVideos] = useState([]);
  const onLikeVideo = (video) => {
    if (!likedVideos.find((v) => v.id === video.id)) {
      setLikedVideos([...likedVideos, video]);
    }
  };
  return (
    <>
      <Helmet>
        <title>Dashboard | Material Kit</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth={false}>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              lg={6}
              md={12}
              xl={6}
              xs={12}
            >
              <LikedVideos sx={{ height: '100%' }} likedVideos={likedVideos} />
            </Grid>
            <Grid
              item
              lg={6}
              md={12}
              xl={6}
              xs={12}
            >
              <PopularVideos onLikeVideo={onLikeVideo} likedVideos={likedVideos} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Dashboard;
