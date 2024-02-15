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
        <Typography fontWeight={700} variant={'h5'}>
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
            sx={{
              '&::before': {
                display: 'none'
              }
            }}
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
              <Typography color="text.secondary">{item.subtitle}</Typography>
              {item.answerContainsList ? (
                <List sx={{listStyle: 'decimal', pl: 4}}>
                  {item.list
                    ? item.list.map((txt, i) => {
                        return (
                          <ListItem sx={{color: 'text.secondary', display: 'list-item'}} key={i}>
                            {txt}
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
              answerContainsList: false,
              subtitle:
                'Electrolysis is the only method approved by the FDA for permanent removal of unwanted hair. Regardless of the cause - heredity, metabolic, or hormonal conditions - electrolysis will permanently remove unwanted hair.'
            },
            {
              title: 'Can you remove any hair on the body?',
              answerContainsList: false,
              subtitle:
                'Electrolysis will permanently remove any color or thickness of hair from anywhere on the body except in the ears and nose due to the insertion of a probe.'
            },
            {
              title: 'How many treatments do I need?',
              answerContainsList: false,
              subtitle:
                'The number of electrolysis treatments needed to clear an area will vary and depend on many factors that affect each individual differently. Generally, multiple treatments are required to achieve the desired results.'
            },
            {
              title: 'How often do I need treatments?',
              answerContainsList: false,
              subtitle:
                'Consistency is key. We must treat the hairs as they come in to get a higher percentage of decline. Depending on the size of the area and density of the hair, your treatment can be anywhere from 15 minutes to 3 hours a week for the first three months. After that, we can reduce the time and space out the treatments. Eventually, you will come in for a few hairs every few months until we get them all.'
            },
            //{title: '', answerContainsList: false, subtitle: ''}
          ]}
        />
      </Box>

      <Box marginBottom={6}>
        <FaqGroupItem
          title={'Instructions'}
          items={[
            {
              title: 'What should I do before my treatment?',
              answerContainsList: true,
              subtitle:
                'Proper preparation before your treatment can help ensure the procedure is comfortable. Here are some steps you can take to prepare:',
              list: [
                'Do not pluck or wax the area for at least a week before your treatment. The hair must be present in the follicle for the electrolysis to be effective.',
                'Refrain from shaving the area for at least 24 hours before your appointment. Not shaving will ensure the hair is long enough for the electrologist to see and extract.',
                'Avoid skincare products containing alpha-hydroxy acid, salicylic acid, or benzoyl peroxide for at least 24 hours before treatment. These ingredients can irritate the skin and make the treatment uncomfortable.',
                'Eat a light meal before your appointment to avoid feeling lightheaded or faint during the treatment.',
                'Wear loose and comfortable clothing to your appointment to avoid irritating the treated area after the treatment.  Following these steps ensures that your electrolysis treatment is effective, comfortable, and safe.'
              ]
            },
            {
              title: 'What should I do after my treatment?',
              answerContainsList: true,
              subtitle:
                'After electrolysis, you may experience redness, swelling, and tenderness, which should subside within a few hours to a day.  After your treatment it is advisable to:',
              list: [
                'Keep the area clean.',
                'Avoid picking or scratching the treated area.',
                'Avoid direct sun exposure and wear SPF.',
                'Avoid strenuous activities.',
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
              answerContainsList: false,
              subtitle:
                'This is not true.  We provide gender affirming and surgery prep services with compassion and understanding. Electrolysis is a safe and effective hair removal method for both men and women. Additionally, some people believe that electrolysis is only suitable for removing facial hair, but it can be used on any part of the body.'
            },
            {
              title: 'Does electrolysis hurt?',
              answerContainsList: false,
              subtitle:
                'One of the most common myths is that electrolysis is painful and uncomfortable. However, with the latest technological advancements, electrolysis is not as painful as it used to be and is quite tolerable.  '
            },
            {
              title: 'Is electrolysis expensive?',
              answerContainsList: false,
              subtitle:
                'While it may be more expensive than some temporary hair removal methods, in the long run, it can be cost-effective as it offers permanent hair removal results. Additionally, we offer packages to make the treatment more accessible and affordable.'
            }
          ]}
        />
      </Box>
    </Box>
  )
}

export default Content
