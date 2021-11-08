import React from 'react'
import { Comments } from '..';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './styles.css'
const Carouseel = () => {

  return (
    <div className="awssld__wrapper">
      <AwesomeSlider className=".awssld__content .awssld__controls__arrow-left"
        bullets={false}
        fillParent={false}
      >
        <div>
          <Comments />
        </div>
        <div>
          <Comments />
        </div>
        <div>
          <Comments />
        </div>

      </AwesomeSlider>

    </div>


  )
}

export default Carouseel
