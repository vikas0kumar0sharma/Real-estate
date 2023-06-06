import React, { useState } from 'react'
import {
  Accordion, AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState
} from 'react-accessible-accordion'

import "react-accessible-accordion/dist/fancy-example.css"
import { MdOutlineArrowDropDown } from 'react-icons/md'
import './Value.css'
import accordian from '../../utils/accordion.jsx'
function Value() {
  return (
    <div className="v-wrapper">
      <div className="flexStart v-container">

        {/* left side */}

        <div className="v-left">
          <img src="./value.png" alt="" className="img-container" />
        </div>

        {/* right side */}

        <div className="flexColStart v-right">

          <span className='orangeText'>Our Value</span>
          <span className='primaryText'>Value We Give to You</span>
          <span style={{ color: 'grey' }}>We always ready to help by providijng the best services for you.
            <br />
            We beleive a good blace to live can make your life better
          </span>

          <Accordion
            className='accordion'
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {
              accordian.map((it, index) => {

                const [className, setClassName] = useState(null)

                return (
                  <AccordionItem className={`accordionItem ${className}`} key={index} uuid={index}>

                    <AccordionItemHeading>
 
                      <AccordionItemButton className='flexStart accordionButton'>

                        <AccordionItemState>
                          {({ expanded }) => expanded ? setClassName('expanded') : setClassName('collapsed')}
                        </AccordionItemState>

                        <div className='flexCenter icon'>{it.icon}</div>
                        <span className='primaryText'>{it.heading}</span>
                        <div className="flexCenter icon">
                          <MdOutlineArrowDropDown size={20}></MdOutlineArrowDropDown>
                        </div>
                      </AccordionItemButton>

                    </AccordionItemHeading>

                    <AccordionItemPanel className='secondaryText'>{it.detail}</AccordionItemPanel>


                  </AccordionItem>
                )
              })
            }
          </Accordion>

        </div>

      </div>
    </div>
  )
}

export default Value