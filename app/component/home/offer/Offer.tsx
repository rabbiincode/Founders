import React, { useState } from 'react'
import Image from 'next/image'
import { offers } from './offerData'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import './_offer.scss'

const Offer = () => {
  const [expanded, setExpanded] = useState<string | false>(false)
  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => setExpanded(isExpanded ? panel : false)
  return (
    <div className='offer'>
      <div className='title'>What We Offer</div>
      <div className='accordion'>
        {
          offers.map((offer, i) => (
            <Accordion key={i} expanded={expanded === offer.id} disableGutters={true} onChange={handleChange(offer.id)} className='accordion-item'>
              <AccordionSummary expandIcon={<Image src='/images/utils/add.svg' alt='img' width={30} height={30}/>}>
                <div className='question'>
                  <div className='bold'>
                    <div className='circle'></div>
                    {offer.question}
                  </div>
                  <span>{offer.desc}</span>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <div className='answer'> {offer.answer}</div>
              </AccordionDetails>
            </Accordion>
          ))
        }
      </div>
    </div>
  )
}

export default Offer