import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'

import Container from 'components/Container'

const others = [
  { title: 'Consultation', price: '$30', desc: 'In this 15-minute virtual or in-office meeting, we discuss your desired treatment area, explain the process, and answer all of your questions.' }
]

const electro = [
  {
    title: 'Electrolysis',
    price: '$75-$210',
    desc: 'Permanently remove unwanted hair of any color from your face, underarms, toes, or any other area! Each person is different, but commitment to the process is key to achieving 100% hair-free results. Each session is priced based on the appointment length. You will likely need a series of sessions to reach your goal.'
  },

  {title: '15 minute session', price: '$75'},
  {title: '30 minute session', price: '$150'},
  {title: '1 hour session', price: '$210'},
]


const facials = [
  {
    title: 'Dermaplane Facial',
    price: '$210',
    desc: 'Experience a 55-minute advanced exfoliation with dermaplaning and medical-grade acids, followed by extractions, facial masques, and a relaxing massage. This treatment removes fine facial hair, leaving your skin smooth, radiant, and ready for flawless makeup application.'
  },
  {
    title: 'Custom Facial',
    price: '$210',
    desc: 'Enjoy a 55-minute customized exfoliation with medical-grade acids, along with extractions, facial masques, and a relaxing massage. This treatment leaves your skin refreshed and radiant.'
  },
  {
    title: 'Acne Facial',
    price: '$165',
    desc: 'This 25-minute treatment includes cleansing and steaming of the skin, extractions, and the application of an AHA or BHA to effectively treat acne breakouts and congested pores, calm inflamed skin, reduce hyperpigmentation, and stimulate cellular turnover.'
  },
  {
    title: 'Peels',
    price: '$100-$500',
    desc: 'Target fine lines, uneven pigmentation, age spots, and mild acne scarring with glycolic, salicylic, and lactic acids. These peels provide deep exfoliation and skin correction with minimal downtime.'
  }
]

const waxing = [
  {title: 'Brow Tint', price: '$30'},
  {title: 'Brow Wax', price: '$30'},
  {title: 'Lip Wax', price: '$15'},
  {title: 'Lower Face Wax', price: '$50'}
]

const Service = ({item}) => {
  let variant = item?.desc ? 'h6': 'body2'

  return (
    <Box>
      <Box sx={{
        paddingTop: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexWrap: {xs: 'wrap', sm: 'wrap', md: 'nowrap'}}}>
        <Typography color={'text.secondary'} variant={variant} component={'p'}>{item.title.toUpperCase()}</Typography>
        <Typography color={'text.secondary'} ml={1} variant={variant} component={'p'}>{' '}{item.price}</Typography>
      </Box>

      {item?.desc && (
        <Box marginBottom={1}>
          <Typography variant={'body2'}>
            {item?.desc}
          </Typography>
        </Box>
      )}
    </Box>
  )
}

const Group = ({name, items, divider=false}) => {
  return (
    <Box marginBottom={2} sx={{paddingX: {xs: 0, sm: 1, md: 4, lg: 6}}}>
      <Header name={name} />
      {items.map((item, i) => (
        <Service key={i} item={item} />
      ))}
      {divider && (
        <Box paddingTop={1}>
          <Divider/>
        </Box>
      )}

    </Box>
  )
}

const Header = ({name}) => {
  return (
    <Box display={'flex'} justifyContent={'flex-start'}>
      <Typography
        variant={'h4'}
        color="text.primary"
        gutterBottom
        sx={{fontWeight: 700}}
      >{name}
      </Typography>
    </Box>
  )
}

const Content = () => {
  return (
    <Container>
      <Box display={'flex'} gap={2} sx={{flexWrap:{xs: 'wrap', sm: 'wrap', md: 'nowrap'}}}>
        <Box>
          <Group divider name={'Electrolysis'} items={electro} />

          <Group divider name={'Information'} items={others}/>

          <Group name={'Waxing & Tinting'} items={waxing} />

          <Box paddingTop={1} sx={{display: {sm: 'block', md: 'none'}}}><Divider/></Box>

        </Box>

        <Box>
          <Group name={'Clinical Skin Care'} items={facials} />
        </Box>
      </Box>
    </Container>
  )
}

export default Content
