import { useState, useEffect } from "react"
import { Box, Stack , Typography} from '@mui/material'
import {Sidebar , Videos} from "."

import { fetchFromAPI } from '../utils/fetchFromAPI'
const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New")
  const [videos, setVideos] = useState([])


  useEffect (() => {
    fetchFromAPI ( `search?part=snippet&q=${selectedCategory}&type=video`)
      .then((data) => setVideos(data.items))


  }, [selectedCategory])
  return (
    <Stack 
    sx={{ flexDirection: {sx : "column", md: "row"}}}>
      <Box sx={{height : { sx: 'auto ' , md: '92vh'}, borderRight : "1px solid #3d3d3d" , px : {sx : 0,  md : 2}}}>
        <Sidebar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        
        />

        <Typography className="copyright" variant="body2"  sx={ { mt : 1.5 , color: '#fff' }}>

          Copyright 2024 HamzaIshaq
        </Typography>
      </Box>

      <Box p={ 2} sx={{overflow : 'auto', height: "90vh" , flex: 2 }}> 
        <Typography variant="
        h1" fontSize='35px' fontWeight="bold " mb={2} sx={{color : 'white'}} >
          {selectedCategory} <span style= { { color: '#f31503' , fontSize: '30px'}}>videos</span>
        </Typography>
 
        <Videos  videos={videos} selectedCategory={selectedCategory}/>



      </Box>
    </Stack>
  )
}

export default Feed