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
    desc: 'Permanently remove unwanted hair of any color from your face, underarms, toes, or any other area! Each person is different, but commitment to the process is key to achieving 100% hair-free results. Each session is priced based on the appointment length. Fifteen minutes of electrolysis is $75. One full hour of electrolysis is $210. You will likely need a series of sessions to reach your goal.'
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
        padding: 1,
        paddingBottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexWrap: {xs: 'wrap', sm: 'wrap', md: 'nowrap'}}}>
        <Typography gutterBottom variant={variant} component={'p'} fontWeight={400}>{item.title}</Typography>
        <Typography gutterBottom ml={1} variant={variant} component={'p'} fontWeight={400}>{' '}{item.price}</Typography>
      </Box>

      {item?.desc && (
        <Box marginBottom={1}>
          <Typography color={'text.secondary'} pl={1} variant={'body2'} fontWeight={400}>
            {item?.desc}
          </Typography>
        </Box>
      )}
    </Box>
  )
}

const Group = ({name, items}) => {
  return (
    <Box marginBottom={2} sx={{paddingX: {xs: 0, sm: 2, md: 2, lg: 0}}}>
      <Header name={name} />
      {items.map((item, i) => (
        <Service key={i} item={item} />
      ))}
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
          <Group name={'Electrolysis'} items={electro} />
          <Box marginY={2}> <Divider/> </Box>

          <Group name={'Information'} items={others}/>
          <Box marginY={2}> <Divider/> </Box>

          <Group name={'Waxing & Tinting'} items={waxing} />
          <Box marginY={2} sx={{display: {sm: 'block', md: 'none'}}}><Divider/></Box>
        </Box>

        <Box>
          <Group name={'Clinical Skin Care'} items={facials} />
        </Box>
      </Box>
    </Container>
  )
}

export default Content
