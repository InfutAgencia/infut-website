import Instagram from 'instagram-web-api';
export const getInstagramPosts = async () => {
  const client = new Instagram({
    username: process.env.INSTAGRAM_USER,
    password: process.env.INSTAGRAM_PASS
  });

  let posts = [];
  try {
    const data = await client.getPhotosByUsername({
      username: process.env.INSTAGRAM_USER
    });
    if (data.user.edge_owner_to_timeline_media.count > 0) {
      posts = [
        data.user.edge_owner_to_timeline_media.edges[0],
        data.user.edge_owner_to_timeline_media.edges[1],
        data.user.edge_owner_to_timeline_media.edges[2]
      ];
    }
  } catch (error) {
    console.log('login error');
  }

  return {
    posts
  };
};
