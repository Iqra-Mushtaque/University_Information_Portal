import React, { useRef } from 'react'
import './Reviews.css'
import Next_icon from '../../assets/next-icon.png'
import Back_icon from '../../assets/back-icon.png'
import user_1_icon from '../../assets/user1.jpg'
import user_2_icon from '../../assets/user2.jpg'
import user_3_icon from '../../assets/user3.jpg'
import user_4_icon from '../../assets/user4.jpg'


const Reviews = () => {

  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
  }
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
  }


  return (
    <div className='Reviews'  name='reviews'>
      <img src={Next_icon} alt="" className='next-btn' onClick={slideForward} />
      <img src={Back_icon} alt="" className='back-btn' onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="userInfo">
                <img src={user_1_icon} alt="" />
                <div>
                  <h3>Noah</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit laboriosam, tempore nulla laudantium deserunt eveniet velit placeat quas quam dignissimos voluptatibus commodi eos reiciendis. Ipsam fugit repudiandae doloribus non. Voluptas.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="userInfo">
                <img src={user_2_icon} alt="" />
                <div>
                  <h3>Noah</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit laboriosam, tempore nulla laudantium deserunt eveniet velit placeat quas quam dignissimos voluptatibus commodi eos reiciendis. Ipsam fugit repudiandae doloribus non. Voluptas.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="userInfo">
                <img src={user_3_icon} alt="" />
                <div>
                  <h3>Noah</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit laboriosam, tempore nulla laudantium deserunt eveniet velit placeat quas quam dignissimos voluptatibus commodi eos reiciendis. Ipsam fugit repudiandae doloribus non. Voluptas.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="userInfo">
                <img src={user_4_icon} alt="" />
                <div>
                  <h3>Noah</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit laboriosam, tempore nulla laudantium deserunt eveniet velit placeat quas quam dignissimos voluptatibus commodi eos reiciendis. Ipsam fugit repudiandae doloribus non. Voluptas.</p>
            </div>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default Reviews