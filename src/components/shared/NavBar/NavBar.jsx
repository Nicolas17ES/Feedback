
import {Link, useNavigate} from 'react-router-dom'
import {FaHamburger, FaTimes} from 'react-icons/fa'
import {GiMushroomHouse} from 'react-icons/gi'
import {BiDownArrow} from 'react-icons/bi'
import {useRef} from 'react'
import './NavBar.css'

import { useContext } from 'react'
import FeedbackContext from '../../../context/feedback/FeedbackContext'
import GamesContext from '../../../context/games/GamesContext'
import { isOwner } from '../../../context/feedback/FeedBackActions'



function NavBar() {
const {blurry, dispatch} = useContext(FeedbackContext);
const {dispatchGames} = useContext(GamesContext);



const navRef = useRef();
const dropdown = useRef();
const showNavbar= () => {
  
  navRef.current.classList.toggle("responsive_nav")
  dispatch({
    type: 'BLURRY_BACKGROUND',
    payload: !blurry
  })
  
  
}

//RESTART GAME//

const reStartGame = () => {
    dispatchGames({
        type: 'STATUS_ROCK_GAME',
        payload: 'QUIT',
    })
    dispatchGames({
        type: 'SELECTED_ELEMENT_ROCK_GAME',
        payload: null,
    })
}


//HIDE NAVBAR WHEN CLICKIN LINK//

const hideResponsiveNavBar = () => {
  if(blurry === true){
    navRef.current.classList.remove("responsive_nav")
    dispatch({
      type: 'BLURRY_BACKGROUND',
      payload: false,
    })
  }
}

// ON DROPDOWN CLICK OPEN MINI-MENU

const showDropdown = () => {
  dropdown.current.classList.toggle("showDropdown")
}

// RESTART PLUS HIDENNAVBAR //

const reStartNavBar = () => {
  hideResponsiveNavBar();
  reStartGame()
}

//OWNER//
const handleClick = (e) => {
    if(e.detail === 3){
      let response = prompt('What shines brighter than the sun?');
      if(response === 'myself'){
        const owner = isOwner(response);
        dispatch({
          type: 'IS_OWNER',
          payload: owner
        })
      }
    }

}

//HIDE MODAL//

const hideModal = () => {
  dispatch({
    type: "SHOW_MODAL",
    payload: false,
  })
}

// scroll to home component//
  const redirectToHome = () => {
    hideResponsiveNavBar();
    reStartGame()
      dispatch({
                type: 'SCROLL_VIEW',
                payload: 0
            })
      dispatch({
                type: 'ANIMATION',
                payload: true
            })
  }
// scroll to about component//
  const redirectToAbout = () => {
    hideResponsiveNavBar();
    reStartGame()
    if(window.location.href === 'http://localhost:3000/home' || window.location.href === 'https://www.nicolas-luque.com/home'){
      dispatch({
                type: 'ANIMATION',
                payload: true
            })

               dispatch({
                type: 'SCROLL_VIEW',
                payload: 1
            })

    } else {
      dispatch({
                type: 'ANIMATION',
                payload: true
            })
            setTimeout(function() {
               dispatch({
                type: 'SCROLL_VIEW',
                payload: 1
            })
            }, 520)
    }   
  }

// scroll to skills component//
  const redirectToSkills = () => {
    hideResponsiveNavBar();
    reStartGame()
   
    if(window.location.href === 'http://localhost:3000/home' || window.location.href === 'https://www.nicolas-luque.com/home'){
        dispatch({
                  type: 'SCROLL_VIEW',
                  payload: 2
              })
        dispatch({
                type: 'ANIMATION',
                payload: true
            })
    } else {
        dispatch({
                  type: 'ANIMATION',
                  payload: true
              })
        
        setTimeout(() => {
          dispatch({
                  type: 'SCROLL_VIEW',
                  payload: 2
              })
      }, 570);
    }
  }
// scroll to basement component//
  const redirectToBasement = () => {
    hideResponsiveNavBar();
    reStartGame()
        dispatch({
                  type: 'SCROLL_VIEW',
                  payload: "basement"
              })
        dispatch({
                type: 'ANIMATION',
                payload: true
            })
  }

  // scroll to projects component top//
  const redirectToProjects = () => {
    reStartNavBar();
    dispatch({
                type: 'SCROLL_VIEW',
                payload: "projects"
            })
  }
  // scroll to feedback component top//
  const redirectToFeedback = () => {
    reStartNavBar();
    setTimeout(function() {
               dispatch({
                type: 'SCROLL_VIEW',
                payload: "feedback"
            })
            }, 420)
  }
  // scroll to contact component top//
  const redirectToContact = () => {
    reStartNavBar();
    setTimeout(function() {
               dispatch({
                type: 'SCROLL_VIEW',
                payload: "contact"
            })
            }, 320)
  }
  
    return (
      <>
      <header onClick={hideModal}>
        <div className="left-side flex">

         <Link to="/home"> <h3><GiMushroomHouse onClick={handleClick} className="logo" size={30}/></h3></Link>
        </div>
         
         <nav ref={navRef}>
           <button className="nav-btn close-btn" onClick={showNavbar}>
            <FaTimes className="nav-close-btn" size={24}/>
            </button>
              <div className="nav-links">
                  <div className="link-one">          
                      <Link className="link-nav home-link" to="/home" onClick={redirectToHome}>Home <BiDownArrow className="dropdown-arrow" onClick={showDropdown}/></Link>
                      <ul ref={dropdown} className="dropdown">
                        <li><Link to="/home" className="dropdown-links" onClick={redirectToAbout}>About</Link></li>
                        <li><Link to="/home" className="dropdown-links" onClick={redirectToSkills}>Skills</Link></li>
                        <li><Link to="/home" className="dropdown-links" onClick={redirectToBasement}>Basement</Link></li>
                      </ul>
                  </div>
                  <div className="link-two">
                      <Link className="link-nav" to="/projects" onClick={redirectToProjects}>Projects</Link>
                  </div>
                  <div className="link-three">
                      <Link className="link-nav" to="/games" onClick={reStartNavBar}>Games</Link>
                  </div>
                  <div className="link-four">
                      <Link className="link-nav" to="/feedback" onClick={redirectToFeedback}>Feedback</Link>
                  </div>
                  <div className="link-six">
                      <Link className="link-nav about" to="/contact" onClick={redirectToContact}>Contact</Link>
                  </div>
              </div>
         </nav>
         <button className="nav-btn burger" onClick={showNavbar}>
           <FaHamburger size={24}/>
         </button>
       </header>
       <div className="divisor"></div>
      </>

       
    )
}

export default NavBar
