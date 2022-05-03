import { useState, useContext, useEffect, useRef } from 'react'
import FeedbackContext from '../../context/feedback/FeedbackContext'


function RatingSelect({ select }) {
  const [selected, setSelected] = useState(10)
  const {feedbackEdit, scroll, dispatch} = useContext(FeedbackContext);
  const scrollTo = useRef();



  useEffect(() => {
    setSelected(feedbackEdit.item.rating)
  }, [feedbackEdit])

   useEffect(() => {
        if(scroll === "feedback"){
            scrollTo.current.scrollIntoView({ behavior: "smooth", block: "center"})
            dispatch({
                    type: 'SCROLL_VIEW',
                    payload: false
                })
        }

    }, [scroll])


  const handleChange = (e) => {
    setSelected(+e.currentTarget.value)
    select(+e.currentTarget.value)
  }

  return (
    <ul className='rating'>
      <span ref={scrollTo} className="top-absolute"></span>
      <li>
        <input
          type='radio'
          id='num1'
          name='rating'
          value='1'
          onChange={handleChange}
          checked={selected === 1}
          className="input-radio"
        />
        <label htmlFor='num1'>1</label>
      </li>
      <li>
        <input
          type='radio'
          id='num2'
          name='rating'
          value='2'
          onChange={handleChange}
          checked={selected === 2}
          className="input-radio"
        />
        <label htmlFor='num2'>2</label>
      </li>
      <li>
        <input
          type='radio'
          id='num3'
          name='rating'
          value='3'
          onChange={handleChange}
          checked={selected === 3}
          className="input-radio"
        />
        <label htmlFor='num3'>3</label>
      </li>
      <li>
        <input
          type='radio'
          id='num4'
          name='rating'
          value='4'
          onChange={handleChange}
          checked={selected === 4}
          className="input-radio"
        />
        <label htmlFor='num4'>4</label>
      </li>
      <li>
        <input
          type='radio'
          id='num5'
          name='rating'
          value='5'
          onChange={handleChange}
          checked={selected === 5}
          className="input-radio"
        />
        <label htmlFor='num5'>5</label>
      </li>
      <li>
        <input
          type='radio'
          id='num6'
          name='rating'
          value='6'
          onChange={handleChange}
          checked={selected === 6}
          className="input-radio"
        />
        <label htmlFor='num6'>6</label>
      </li>
      <li>
        <input
          type='radio'
          id='num7'
          name='rating'
          value='7'
          onChange={handleChange}
          checked={selected === 7}
          className="input-radio"
        />
        <label htmlFor='num7'>7</label>
      </li>
      <li>
        <input
          type='radio'
          id='num8'
          name='rating'
          value='8'
          onChange={handleChange}
          checked={selected === 8}
          className="input-radio"
        />
        <label htmlFor='num8'>8</label>
      </li>
      <li>
        <input
          type='radio'
          id='num9'
          name='rating'
          value='9'
          onChange={handleChange}
          checked={selected === 9}
          className="input-radio"
        />
        <label htmlFor='num9'>9</label>
      </li>
      <li>
        <input
          type='radio'
          id='num10'
          name='rating'
          value='10'
          onChange={handleChange}
          checked={selected === 10}
          className="input-radio"
        />
        <label htmlFor='num10'>10</label>
      </li>
    </ul>
  )
}

export default RatingSelect
