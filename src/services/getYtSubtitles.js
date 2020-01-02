import axios from 'axios';

export const getSub = async videoID => {
  const { data } = await axios.get(
    `https://youtube.com/get_video_info?video_id=${videoID}`
  );

  const decodedData = decodeURIComponent(data);

  // * ensure we have access to captions data
  if (!decodedData.includes('captionTracks'))
    throw new Error(`Could not find captions for video: ${videoID}`);

  const regex = /({"captionTracks":.*isTranslatable":(true|false)}])/;
  const [match] = regex.exec(decodedData);
  const { captionTracks } = JSON.parse(`${match}}`);
  console.log(captionTracks);
};
