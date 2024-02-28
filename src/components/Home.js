import React from 'react'
import pic1 from '../../src/Assets/pic1.jpg'
import pic2 from '../../src/Assets/pic2.png'
import pic3 from '../../src/Assets/pic3.png'
import pic4 from '../../src/Assets/pic4.png'
import pic5 from '../../src/Assets/pic5.png'

import {useHistory} from 'react-router-dom'

import { Link } from 'react-router-dom'

function Home() {

  return (
    <>
    <div>
        <div className="d-div">
                <h1 className="h1">
                    Manage Your Watchlists and Never Miss a Thing
                </h1>
            </div>

            <div className="d-flex">
                <div>
                    <button className="d-btn">
                        Get Started
                    </button>
                </div> 
                <span className="d-text">Have a question? We're here to help!</span>
            </div>

            <div className='d-img'>
                <img  className='d-img' alt="img" src={pic1}/>
            </div>
           
           <div>
                <h6 className='d2-div'>Stay Informed</h6>
                <h1 className='tagline'>Receive real-time updates in your favorite shows and movies</h1>
           </div>
    </div>

        <div>
            <h1 className="f-header">Features</h1>

            <div className="mainDiv">
                <div className="leftDiv">
                    <img src={pic2} alt="" />
                </div>
                <div className='rightDiv'>
                    <h1>Create and Manage Watchlists</h1>
                    <p>
                        Easily create and manage watchlists for movies, TV shows,
                        books, and more. Keep track of what you want to watch and get personalized recommendations 
                        based on your interests.
                    </p>
                    <button>Get Started</button>
                </div>
            </div>

            <div className="main2Div">
                <div className="leftDiv2">
                    <h1>Discover New</h1>
                    <h2 className='h2'>Content</h2>
                    <p>
                        Explore a wide range of movies, TV shows, books, and more. Find new content to
                        add to your watchlists and get personalized recommendations based 
                        on your preferences.
                    </p>
                    <button>Explore Now</button>    
                </div>
                <div className='rightDiv2'>
                    <img src={pic3} alt="" />
                </div>
            </div>

            <div className='main3Div'>
            <div className="left3Div">
                    <img src={pic4} alt="" />
                </div>
                <div className='right3Div'>
                    <h1>Organize Your Watchlists </h1>
                    <p>
                    UseWatchlist allows you to easily organize your watchlists and keep track of all your 
                    favorite movies and TV shows. With a simple and intuitive interface, you can quickly
                     add items to your watchlists, create custom categories, and manage your entertainment in one place. 
                    </p>
                </div>
            </div>

            <div className="main4Div">
                <div className="left4Div">
                    <h1>Discover Personalized Recommendations</h1>
                    {/* <h2 className='h2'>Content</h2> */}
                    <p>
                    UseWatchlist provides personalized recommendations based on your watchlists and viewing history.
                     Discover new movies and TV shows that you'll love, and take your entertainment 
                     experience to the next level. 
                    </p>
                    <button>Get Started</button>    
                </div>
                <div className='right4Div'>
                    <img src={pic5} alt="" />
                </div>
            </div>
        </div>

    </>
  )
}


export default Home
