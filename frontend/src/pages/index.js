import React from 'react';
import './App.css';
const Home = () => {
    return (
        <div class="main_body">
        <div>
          <nav class="navbar">
            <ul class="nav_list">
              <li><a href='#'>About</a></li>
              <li><a href='#'>Sign In</a></li>
              <li><a href='/planning'>Start Planning</a></li>
            </ul>
          </nav>
    
          <section class="body">
            <div class="title">
            </div>
              <h1 class="My_Shredule">
                My Shredule
              </h1>
              <p class="paragraph_body">
                Winter only happens once a year. <br/>
                Don't miss out on what the mountains have to offer <br/>
                Make the most of the season by planning and logging your stoke filled trips <br/>
                Get out and ride. <br/>
                Signed, <br/>
                The Shredule Team
              </p>
          </section>
        </div>
        </div>
      )
};
  
export default Home;