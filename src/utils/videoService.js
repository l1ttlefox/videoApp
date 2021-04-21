const VideoService = () => {
  const apiKey = '563492ad6f9170000100000127982d4b4b6f4c37b3f1740e0108918c';
  const url = 'https://api.pexels.com';
  const itemsPerPage = 10;
  const popularVideosURL = `${url}/videos/popular`;

  let currentPage = 1;
  const getPopularVideos = async () => {
    const request = await fetch(`${popularVideosURL}?page=${currentPage++}&per_page=${itemsPerPage}`, {
      headers: {
        Authorization: apiKey,
        'Content-Type': 'application/json'
      }
    });

    const data = await request.json();
    return {
      // eslint-disable-next-line camelcase
      videos: data.videos.map(({ video_files, video_pictures }) => ({
        id: video_files[0].id,
        video: video_files[0].link,
        name: `${video_files[0].id}-video`,
        picture: video_pictures[0].picture
      })),
      page: data.page,
      perPage: data.per_page,
      total: data.total_results,
    };
  };

  return {
    getPopularVideos
  };
};
export default VideoService();
