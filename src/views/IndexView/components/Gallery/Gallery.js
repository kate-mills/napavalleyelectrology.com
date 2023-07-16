import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';



import HilaryImg from 'images/hilary-molloy.jpg'
import ProductImg from 'images/product.jpg'
import LegsImg from 'images/legs.jpg'
import MakeupImg from 'images/makeup.jpg'


const Gallery = () => {
  const theme = useTheme();

  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const photos = [
    {
      src: ProductImg,
      source: ProductImg,
      rows: 1,
      cols: 2,
    },
    {
      src: HilaryImg, 
      source: HilaryImg,
      rows: 2,
      cols: 1,
    },
    {
      src: MakeupImg,
      source: MakeupImg,
      rows: 1,
      cols: 1,
    },
    {
      src: LegsImg,
      source: LegsImg,
      rows: 1,
      cols: 1,
    },
  ];

  return (
    <Box>
      <ImageList
        variant="quilted"
        cols={3}
        rowHeight={isMd ? 300 : 200}
        gap={isMd ? 16 : 4}
      >
        {photos.map((item, i) => (
          <ImageListItem key={i} cols={item.cols} rows={item.rows}>
            <img
              height={'100%'}
              width={'100%'}
              src={item.src}
              alt="..."
              loading="lazy"
              style={{
                objectFit: 'cover',
                cursor: 'poiner',
                borderRadius: 8,
                filter:
                  theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default Gallery;
