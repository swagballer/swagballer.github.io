import React from 'react';
import '../styles/AboutWindow.css';
import addFavoritesIcon from '../assets/icons/addFavoritesIcon.gif';
import addFriendIcon from '../assets/icons/addFriendIcon.gif';
import addToGroupIcon from '../assets/icons/addToGroupIcon.gif';
import blockUser from '../assets/icons/blockUser.gif';
import forwardMailIcon from '../assets/icons/forwardMailIcon.gif';
import messageFriend from '../assets/icons/messagefriend.gif';
import rankUser from '../assets/icons/rankUserIcon.gif';
import sendMail from '../assets/icons/sendMailIcon.gif';
import nina from '../assets/images/friends/nina.jpeg';
import quinn from '../assets/images/friends/quinn.JPG';
import fernando from '../assets/images/friends/fernando.JPG';
import alyssa from '../assets/images/friends/alyssa.JPG';
import summer from '../assets/images/friends/summer.png';
import izzy from '../assets/images/friends/izzy.png';
import tessza from '../assets/images/friends/tessza.png';
import deeya from '../assets/images/friends/deeya.png';
import sarahpfp from '../assets/images/friends/sarahpfp.jpeg';


const AboutWindow = () => {
  return (
    <div class="page-content-container">

      <aside class="profile-sidebar">

        <header>
          <h1>Sarah</h1>
        </header>

        <div class="profile-picture-container">
          <img class="profile-pic" src={sarahpfp} alt="Sarah's profile picture." />

          <p class="personal-msg"><b>"Ball is life."</b></p>

          <ul class="gender-age">
            {/* <li>Male</li> */}
            <li>21 years old</li>
            <li>Chicago,</li>
            <li>ILLINOIS</li>
            {/* <li>United States</li> */}
          </ul>

          <ul class="last-login">
            <li>Last Login:</li>
            <li>9/20/2024</li>
          </ul>

          <p class="pics-videos">View My: <a href="#"><b>Pics</b></a> | <a href="#"><b>Videos</b></a></p>
        </div>

        <section class="contact-box">
          <h2>Contacting Sarah</h2>

          <figure class="contact-images">
            <img src={sendMail} alt="Send Message" />
            <img src={forwardMailIcon} alt="Forward to Friend" />
            <img src={addFriendIcon} alt="Add to Friends" />
            <img src={addFavoritesIcon} alt="Add to Favorites" />
            <img src={messageFriend} alt="Instant Message" />
            <img src={blockUser} alt="Block User" />
            <img src={addToGroupIcon} alt="Add to Group" />
            <img src={rankUser} alt="Rank User" />
          </figure>
        </section>

        <section class="myspace-url-box">
          <h3><b>MySpace URL:</b></h3>
          <p>The original code is from: <a href="https://github.com/wittenbrock/toms-myspace-page" target='_blank'>https://github.com/wittenbrock/toms-myspace-page</a>!</p>
        </section>

        <section class="interests">
          <table class="sidebar-table">

            <caption>
              <h2 class="sidebar-table-h2">Sarah's Interests</h2>
            </caption>

            <tbody>
              <tr>
                <th class="sidebar-table-header" scope="row">General</th>
                <td class="sidebar-table-data">
                  <p>cooking, movies, crosswords, film photography, music, reading,
                    weight lifting, travel, rock climbing, pickleball
                  </p>
                </td>
              </tr>

              <tr>
                <th class="sidebar-table-header" scope="row">Music</th>
                <td class="sidebar-table-data">
                  check out my <a href="https://www.last.fm/user/qwert10280" target="_blank" rel="noopener noreferrer">last.fm</a>!
                </td>
              </tr>

              <tr>
                <th class="sidebar-table-header" scope="row">Movies</th>
                <td class="sidebar-table-data">
                  <p><b>Films</b>: Moonlight, The Social Network, American Psycho, Chungking Express, Portrait of a Lady on Fire, 
                  Whiplash, Paris is Burning, Beautiful Boy, Ratatouille, Bottoms, Past Lives, 
                  Spiderman - Animated SpiderVerse series, How to Lose a Guy in 10 Days, Cocaine Bear, 
                  eXistenZ, Notting Hill, Love and Basketball, Everything Everywhere All At Once</p>

                  <p><b>Directors</b>: Wong Kar-Wai, Greta Gerwig, Céline Sciamma</p>
                </td>
              </tr>

              <tr>
                <th class="sidebar-table-header" scope="row">Television</th>
                <td class="sidebar-table-data">
                  <p>The Bear, New Girl, Queen's Gambit, Abbott Elementary, High Fidelity, Modern Family</p>
                </td>
              </tr>

              <tr>
                <th class="sidebar-table-header" scope="row">Technology</th>
                <td class="sidebar-table-data">
                  <p>creative coding, computational social science, programming for social good, 
                    image processing, computer vision, natural language processing, 
                    human computer interaction, data science, data visualization
                  </p>
                </td>
              </tr>

              <tr>
                <th class="sidebar-table-header" scope="row">Other Academic Interests</th>
                <td class="sidebar-table-data">
                  <p>History, Urban Planning, Microeconomics and its applications, Inequality and Oppression, 
                    Critical Theory, Art History, Labor, Psychology, Arts and Culture, 
                    Sociology, Pedagogy, Public Policy, Gender and Queer Studies, Cinema 
                    Studies
                  </p>
                </td>
              </tr>

            </tbody>
          </table>
        </section>

        <section class="details">
          <table class="sidebar-table">

            <caption>
              <h2 class="sidebar-table-h2">Sarah's Details</h2>
            </caption>

            <tbody>
              <tr>
                <th class="sidebar-table-header" scope="row">Status:</th>
                <td class="sidebar-table-data">Single</td>
              </tr>

              <tr>
                <th class="sidebar-table-header" scope="row">Here For:</th>
                <td class="sidebar-table-data">Networking, Friends</td>
              </tr>

              <tr>
                <th class="sidebar-table-header" scope="row">Hometown:</th>
                <td class="sidebar-table-data">Chicago</td>
              </tr>

              <tr>
                <th class="sidebar-table-header" scope="row">Ethnicity:</th>
                <td class="sidebar-table-data">Chinese</td>
              </tr>

              <tr>
                <th class="sidebar-table-header" scope="row">Zodiac Sign:</th>
                <td class="sidebar-table-data">Cancer</td>
              </tr>

              <tr>
                <th class="sidebar-table-header" scope="row">Smoke / Drink:</th>
                <td class="sidebar-table-data">No / No</td>
              </tr>

              <tr>
                <th class="sidebar-table-header" scope="row">Occupation:</th>
                <td class="sidebar-table-data"></td>
              </tr>

            </tbody>
          </table>
        </section>

        <section class="schools">
          <table class="sidebar-table">

            <caption>
              <h2 class="sidebar-table-h2">Sarah's Schools</h2>
            </caption>

            <tbody>
              {/* <tr>
                <th class="sidebar-table-header" scope="row">
                  <ul>
                    <li><a href="#">University Of California-Los Angeles</a></li>
                    <li>Los Angeles, CALIFORNIA</li>
                    <li>Graduated: <a href="#">2000</a></li>
                    <li>Degree: Master's Degree</li>
                    <li>Major: Film - Critical Studies</li>
                  </ul>
                </th>
                <td class="sidebar-table-data">1999 to 2000</td>
              </tr> */}

              <tr>
                <th class="sidebar-table-header" scope="row">
                  <ul>
                    <li><a href="https://www.illinois.edu" target="_blank">University Of Illinois at Urbana-Champaign</a></li>
                    <li>Champaign, ILLINOIS</li>
                    <li><strong>Graduated:</strong> 2025</li>
                    <li><strong>Student status:</strong> Student</li>
                    <li><strong>Degree:</strong> Bachelor's Degree</li>
                    <li><strong>Major:</strong> Computer Science + Economics</li>
                    <li><strong>Clubs:</strong> <a href="https://www.montageartsjournal.com/" target="_blank">Montage Literary Arts Journal</a> - Creative Director, 
                    Data Analyst for Illinois Women’s Basketball, Pickleball Club, <a href="https://giesbusiness.illinois.edu/experience/experiential-learning/illinois-business-consulting" target="_blank">Illinois Business Consulting</a></li>
                  </ul>
                </th>
                <td class="sidebar-table-data">2021 to 2025</td>
              </tr>

            </tbody>
          </table>

        </section>
      </aside>

      <main>

        <section class="user-network">
          <header>
            <h2>Sarah is in your extended network</h2>
          </header>
        </section>

        <section class="blog">
          <p><b>Sarah's Latest Blog Entries</b> [<a href="#">Subscribe to this Blog</a>]</p>
          <p>just made delicious galbi for dinner (<a href="#">view more</a>) </p>
          <p>i can't believe we won in overtime against nebraska!!! (<a href="#">view more</a>) </p>
          <p>came home and finally got to meet my newborn nephew :) (<a href="#">view more</a>) </p>
          <p>so grateful to my team for a fun internship at salesforce! (<a href="#">view more</a>)</p>
          <p>baker beach sunset was so pretty tonight (<a href="#">view more</a>) </p>
          {/* <p>[<a href="#">View All Blog Entries</a>]</p> */}
        </section>

        <section class="blurbs">
          <header class="main-section-header">
            <h2 class="main-section-h2">Sarah's Blurbs</h2>
          </header>

          <h3>About me:</h3>
          <p>Hi, I’m Sarah! My parents immigrated from China in the 90s and decided to raise their family in Chicago. Growing up in a city like Chicago meant there was always something new to explore whether it was the diverse neighborhoods, food, or cultures. I love looking the skyline from Prom Point during sunset, eating a single cheeseburger with fries from Small Cheval's and walking to Jeni's for mint chocolate chip ice cream after, and spending an entire day walking around the Art Institute. That early exposure to different perspectives and experiences shaped how I see the world.</p>

          <p>One of my core beliefs is to learn as much as I can about the world and the people in it. Curiosity has always been my north star, guiding me to take on new challenges, question everything, and experience as much as I can. It has led me to pick up a variety of new hobbies and skills such as solving puzzles like Rubik’s cubes and crosswords, capturing moments with my film camera, and experimenting with new recipes in the kitchen. This year, I’d like to learn woodworking, fashion design, and deejaying!</p>

          <p>I’m currently studying computer science and economics at the University of Illinois. My passion for technology is broad and multifaceted. I’m interested in fields like image processing, computer vision, natural language processing, and human-computer interaction, technologies that allow us to engage with the world in new ways. Data science and computational social science excite me because they empower us to make sense of complex information and drive meaningful change. I find creative coding and data visualization to be exciting outlets that allow me to get creative through my code and explore visual expression. At the core of all my tech interests is a desire to program for social good, using technology as a tool for positive impact.</p>

          <p>Beyond that, my academic journey is enriched by my curiosity for the social sciences and humanities. As a woman of color and daughter of immigrants, my lived experiences have deeply shaped my academic pursuits. I’m also interested in history, microeconomics, urban planning, and political science, particularly in how they can be applied to issues like inequality and oppression. Topics like critical theory, gender and queer studies, sociology, and public policy allow me to explore the structural challenges facing society today. I’m also captivated by art history, cultural studies, and cinema studies, as they offer unique lenses through which to understand the human experience.</p>

          <p>Outside of the classroom, I am involved in Montage Literature and Arts Journal as Creative Director, Illinois Business Consulting, the largest student-run, fee-based consulting organization in the US, Fighting Illini Women's Basketball as a data analyst, and Pickleball Club. I have also previously interned at Salesforce, where I enhanced encryption tools and features for customer's data security, and Nationwide, where I developed an internal training tool. Through internships, classes, and hands-on projects, I’ve had the opportunity to work on innovative software products, collaborate with talented teams, and solve real-world problems, all of which fuel my passion for combining technical skills with meaningful impact.</p>

          <p>Above all, I am most passionate about the relationships in my life. Life is lived in the small, everyday moments with my loved ones. I have learned the most from growing alongside the people I care about and finding ways to support, celebrate, and uplift each other. Love and empathy are at the heart of everything I do, and I’m grateful for the people in my life that taught me so.</p>

          <p>At the end of the day, I believe in staying open to new opportunities, new stories, and new relationships. I’m excited to continue learning, growing, and connecting with others along the way in my next chapter.</p>
        </section>

        <section class="friends">
          <header class="main-section-header">
            <h2 class="main-section-h2">Sarah's Friend Space</h2>
          </header>

          <p><b>Sarah has <span class="focus-highlight">777</span> Friends.</b></p>

          <div class="friend-pic-container">
            <figure>
              <figcaption><a href="#">nina</a></figcaption>
              <img src={nina} alt="Nina" />
            </figure>

            <figure>
              <figcaption><a href="#">Fernando</a></figcaption>
              <img src={fernando} alt="Fernando" />
            </figure>

            <figure>
              <figcaption><a href="#">A-L-Y-S-S-A</a></figcaption>
              <img src={alyssa} alt="Alyssa" />
            </figure>

            <figure>
              <figcaption><a href="#">Summer</a></figcaption>
              <img src={summer} alt="Summer" />
            </figure>

            <figure>
              <figcaption><a href="#">tessza!!</a></figcaption>
              <img src={tessza} />
            </figure>

            <figure>
              <figcaption><a href="#">izzy :p</a></figcaption>
              <img src={izzy} />
            </figure>

            <figure>
              <figcaption><a href="#">quinn</a></figcaption>
              <img src={quinn} alt="Quinn" />
            </figure>

            <figure>
              <figcaption><a href="#">deeya :3</a></figcaption>
              <img src={deeya} />
            </figure>
          </div>

          <p class="friends-list-link"><a href="#">View All of Sarah's Friends</a></p>
        </section>
      </main>


    </div>
  );
};

export default AboutWindow;
