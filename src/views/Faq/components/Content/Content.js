import React from 'react'
import PropTypes from 'prop-types'
import {useTheme} from '@mui/material/styles'
import Box from '@mui/material/Box'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'

const FaqGroupItem = ({title, items}) => {
  const theme = useTheme()
  return (
    <Box>
      <Box marginBottom={2}>
        <Typography fontWeight={700} component={'h4'} variant={'h5'}>
          {title}
        </Typography>
      </Box>
      <Box>
        {items.map((item, i) => (
          <Box
            component={Accordion}
            key={i}
            padding={1}
            marginBottom={i === item.length - 1 ? 0 : 2}
            borderRadius={`${theme.spacing(1)} !important`}
            sx={{'&::before': {display: 'none'}}}
          >
            <Box
              component={AccordionSummary}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id={`panel1a-header--${i}`}
            >
              <Typography fontWeight={600}>{item.title}</Typography>
            </Box>
            <AccordionDetails>
              {item.subtitle ? <Typography color="text.secondary">{item.subtitle}</Typography> : <Box mt={-3}></Box>}
              {item.isDecimalList || item.isBulletList ? (
                <List sx={{listStyle: item.isDecimalList ? 'decimal' : 'disc', pl: 4}}>
                  {item.list
                    ? item.list.map((txt, i) => {
                        return (
                          <ListItem sx={{color: 'text.secondary', display: 'list-item'}} key={i}>
                            {txt}
                          </ListItem>
                        )
                      })
                    : null}
                  {item.bulletList
                    ? item.bulletList.map((listItem, i) => {
                        return (
                          <ListItem sx={{color: 'text.secondary', display: 'list-item'}} key={i}>
                            <Typography fontWeight={900} component={'span'} pr={listItem.bold ? 1 : 0}>
                              {listItem.bold}
                            </Typography>
                            <Typography fontWeight={400} component={'span'}>
                              {listItem.text}
                            </Typography>
                          </ListItem>
                        )
                      })
                    : null}
                </List>
              ) : null}
            </AccordionDetails>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

FaqGroupItem.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired
}

const Content = () => {
  return (
    <Box>
      <Box marginBottom={6}>
        <FaqGroupItem
          title={'Basics'}
          items={[
            {
              title: 'What is Electrolysis?',
              isDecimalList: false,
              subtitle:
                'Electrolysis is a permanent hair removal technique that uses a small electric current to damage the hair follicle and prevent future hair growth. Electrolysis is the only FDA-approved method for permanent hair removal and works on all hair types and causes.'
            },
            {
              title: 'How does electrolysis work?',
              isDecimalList: false,
              subtitle:
                "A tiny probe is inserted into the hair follicle, and a low-level electric current is delivered to the follicle's base. This damages the hair follicle and prevents it from producing new hair."
            },
            {
              title: 'What areas of the body can be treated with electrolysis?',
              isDecimalList: false,
              subtitle:
                'Electrolysis can be performed on almost any body part, including the face, arms, legs, back, and bikini area. However, it is not recommended for the ears or nose.'
            },
            {
              title: 'How many treatments do I need?',
              isDecimalList: false,
              subtitle:
                'The number of electrolysis treatments needed to clear an area will vary and depend on many factors that affect each individual differently. Generally, multiple treatments are required to achieve the desired results.'
            },
            {
              title: 'How often do I need treatments?',
              isDecimalList: false,
              subtitle:
                'Consistency is key. We must treat the hairs as they come in to get a higher percentage of decline. Depending on the size of the area and density of the hair, your treatment can be anywhere from 15 minutes to 3 hours a week for the first three months. After that, we can reduce the time and space out the treatments. Eventually, you will come in for a few hairs every few months until we get them all.'
            },
            {
              title: 'Is electrolysis safe?',
              isDecimalList: false,
              subtitle:
                'When performed by a qualified and experienced electrologist, electrolysis is a safe and effective hair removal method. However, as with any procedure, some risks are involved, such as infection or scarring.'
            },

            {
              title: 'Is electrolysis painful?',
              isDecimalList: false,
              subtitle:
                'The level of discomfort varies from person to person, but many people report a slight heat or pricking sensation during the procedure.'
            }
          ]}
        />
      </Box>

      <Box marginBottom={6}>
        <FaqGroupItem
          title={'Instructions'}
          items={[
            {
              title: 'What should I do before my treatment?',
              isDecimalList: true,
              subtitle:
                'Proper preparation before treatment ensures effectiveness, safety, and comfort. Here are the steps to prepare:',
              list: [
                'Do not pluck or wax the area for at least a week before your treatment. For electrolysis to be effective, hair must be present in the follicle.',
                'Please shave the treatment area 2-5 days before your appointment. The hair must be long enough for the electrologist to see and extract.',
                'Avoid skincare products containing alpha-hydroxy acid, salicylic acid, or benzoyl peroxide for at least 24 hours before treatment. These ingredients can irritate the skin, making the treatment uncomfortable.',
                'Eat a light meal before your appointment to avoid feeling lightheaded or faint during the treatment.',
                'Wear loose and comfortable clothing to your appointment to avoid irritating the treated area after the treatment.',
                'Refrain from caffeine on the day of your appointment, as consuming caffeine will make the treatment less easy to tolerate.',
                'Be sure to hydrate your body with lots of water in the days before your appointment.',
                'Some clients apply a thin layer of topical numbing cream, such as lidocaine 4% or (5% by prescription). The cream is generously applied to the skin in the area to be treated 60 minutes before their appointment and covered with Saran wrap. Additionally, the cream is applied generously again 30 minutes before their appointment and covered with Saran wrap until they arrive, ensuring optimum comfort for their treatment.'
              ]
            },
            {
              title: 'What should I do after my treatment?',
              isDecimalList: true,
              subtitle:
                'After electrolysis, you may experience redness, swelling, and tenderness, which should subside within a few hours to a day.  After your treatment it is advisable to:',
              list: [
                'Apply ice packs periodically to the treated area for 24-48 hours post-treatment to help reduce any swelling that might occur.',
                'Keep the area clean.',
                'Avoid picking or scratching the treated area.',
                'Avoid direct sun exposure and wear SPF.',
                'Avoid strenuous activities.'
              ]
            }
          ]}
        />
      </Box>

      <Box marginBottom={6}>
        <FaqGroupItem
          title={'Myths'}
          items={[
            {
              title: 'Is electrolysis only for women?',
              isDecimalList: false,
              subtitle:
                'This is not true.  We provide gender affirming and surgery prep services with compassion and understanding. Electrolysis is a safe and effective hair removal method for all genders. Additionally, some people believe that electrolysis is only suitable for removing facial hair, but it can be used on any part of the body.'
            },
            {
              title: 'Is electrolysis expensive?',
              isDecimalList: false,
              subtitle:
                'While it may be more expensive than some temporary hair removal methods, in the long run, it can be cost-effective as it offers permanent hair removal results.'
            }
          ]}
        />
      </Box>

      <Box>
        <FaqGroupItem
          title={'Pricing'}
          items={[
            {
              title: 'What is the cost of electrolysis?',
              subtitle: 'The regular hourly rate is $210.',
              isDecimalList: false,
              isBulletList: false,
              //bulletList: [ { bold: 'Buy 9, Get 1 FREE.', text: 'Prepay for nine electrolysis treatments and get one free, totaling ten treatments of the same length.' } ]
            }
          ]}
        />
      </Box>
    </Box>
  )
}

export default Content
