import React, { useRef } from 'react'
import './ScrollBar.css'
import BodyPart from '../bodyPart/BodyPart'
import rightarrow from '../../images&icons/icons/right-arrow.png'
import leftarrow from '../../images&icons/icons/left-arrow.png'
import ResultCard from '../resultCard/ResultCard'

const ScrollBar = ({ data, bodyPart, setBodyPart, bodyParts, targetExercise }) => {

  const scrollRef = useRef(null)

  const nextPart = () => {
    let curInd = data.indexOf(bodyPart)
    let nxtInd = (curInd + 1) % data.length
    let tarInd = data[nxtInd]
    setBodyPart(tarInd)
    if (scrollRef.current) {
      const scrInd = scrollRef.current.getElementsByClassName('items')
      if (scrInd[nxtInd]) {
        scrInd[nxtInd].scrollIntoView({ inline: 'center' })
      }
    }
  }

  const prevtPart = () => {
    let curInd = data.indexOf(bodyPart)
    let preInd = (curInd - 1) % data.length
    let tarInd = data[preInd]
    setBodyPart(tarInd)
    if (scrollRef.current) {
      const scrInd = scrollRef.current.getElementsByClassName('items')
      if (scrInd[preInd]) {
        scrInd[preInd].scrollIntoView({ inline: 'center' })
      }
    }
  }
  return (
    <div className='scroll'>
      <div className={bodyPart ? "scroll-div" : "cards"} ref={scrollRef} >
        {data.map((item) => (
          <div
            className='items'
            key={item.id || item}
            itemId={item.id || item}
            title={item.id || item}
          >
            {bodyParts ? <BodyPart item={item} bodyPart={bodyPart}
              setBodyPart={setBodyPart}
            /> : <div className={bodyParts ? "resultcard" : "details-card"} >
              <ResultCard exercise={item} targetExercise={targetExercise} bodyPart={bodyPart} />
            </div>
            }
          </div>
        ))}
      </div>
      {bodyParts &&
        <div className="arrow">
          <img src={leftarrow} alt="" onClick={prevtPart} />
          <img src={rightarrow} alt="" onClick={nextPart} />
        </div>}
    </div>
  )
}

export default ScrollBar
