import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import HilaryImg from 'images/gallery/hilary-molloy-napa.webp'
import Apilus from 'images/gallery/apilus-marketing-card.webp'
import TreatmentRoom from 'images/gallery/treatment-room.webp'
import License from 'images/gallery/hilary-molloy-license.webp'


const Gallery = () => {
  const theme = useTheme();

  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const photos = [
    { src: HilaryImg, rows: 1, cols: 1, position: 'center 40%', alt: "Hilary Molloy, Napa Electrologist and Esthetician, is holding her new Electrology license." },
    { src: Apilus, rows: 1, cols: 1, position: 'center 35%', alt: "Apilus Pro Electrology Marketing Card, the standard in 100% permanent hair removal." },
    { src: TreatmentRoom, rows: 2, cols: 1, position: '20% bottom', alt: "Hilary Molloy's treatment room in Napa California" },
    { src: License, rows: 1, cols: 2, position: '50% 70%', alt: "Hilary Molloy Electrologist License" },
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
              alt={item.alt}
              loading="lazy"
              style={{
                objectFit: 'cover',
                cursor: 'poiner',
                borderRadius: 8,
                objectPosition: item.position,
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
