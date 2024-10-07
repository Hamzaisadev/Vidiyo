import { fetchFromAPI } from "../utils/fetchFromAPI"
import {Stack , Box } from '@mui/material'
import {VideoCard,  ChannelCard, Loader } from "./"
import { useState, useEffect } from "react"
 

const Videos = ({ videos, selectedCategory, direction }) => {
  const [showChannelCard, setShowChannelCard] = useState(false); // Define the state variable and its setter function
  


  useEffect(() => {
    if (selectedCategory === 'GamerBoyHamza' && videos[0].id.channelId) {
      setShowChannelCard(true);
    }
  }, [selectedCategory, videos]);

  if (!videos?.length) return <Loader />


  console.log(videos)
  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent='Start' gap={2.5}>
      {videos.map((item,idx) => (

        <Box key={idx}>
        {item.id.videoId && <VideoCard video={item} />}
        {idx === 0 && selectedCategory === 'GamerBoyHamza' && item.id.channelId &&  (
          <ChannelCard channelDetail={item} />
        )}
        </Box>
      ))}

    </Stack>
    
  )
}

export default Videos