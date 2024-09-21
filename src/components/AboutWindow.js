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

const AboutWindow = () => {
  return (
    <div class="page-content-container">

      <aside class="profile-sidebar">

        <header>
          <h1>Sarah</h1>
        </header>

        <div class="profile-picture-container">
          <img class="profile-pic" src="pictures/sarah-pfp.jpg" alt="Sarah's profile picture." />

          <p class="personal-msg"><b>":D"</b></p>

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
                  <p>Basketball, Weight Lifting, Crosswords, Movies, Cooking, 
                    Travel, Music, Reading, Rock Climbing, Pickleball, History, 

                  </p>
                </td>
              </tr>

              <tr>
                <th class="sidebar-table-header" scope="row">Music</th>
                <td class="sidebar-table-data">
                  Check out my <a href="https://www.last.fm/user/qwert10280" target="_blank" rel="noopener noreferrer">last.fm</a>!
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
                  <p>Full stack software engineering, machine learning, artificial intelligence, 
                    data science, creative coding, computational social science, 
                    programming for social good, product management
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
                    <li><strong>Clubs:</strong> Montage Literary Arts Journal - Creative Director, Illinois Business Consulting, 
                      Data Analyst for Illinois Women’s Basketball, Pickleball Club</li>
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
          <p><b>Sarah's Latest Blog Entry</b> [<a href="#">Subscribe to this Blog</a>]</p>
          <p>i can't believe we won in overtime against nebraska!!! (<a href="#">view more</a>) </p>
          <p>In Stores Today - MySpace Records Vol. 1 ! (<a href="#">view more</a>) </p>
          <p>MySpace Records - get more photos for your profile! (<a href="#">view more</a>) </p>
          <p>sf was super fun but i'm so happy to be home :p (<a href="#">view more</a>) </p>
          <p>just finished my internship demo i'm gonna miss salesforce tower sm (<a href="#">view more</a>)</p>
          {/* <p>[<a href="#">View All Blog Entries</a>]</p> */}
        </section>

        <section class="blurbs">
          <header class="main-section-header">
            <h2 class="main-section-h2">Sarah's Blurbs</h2>
          </header>

          <h3>About me:</h3>
          <p>I'm here to help you with <b>MySpace</b>. Send me a message if you're confused by anything. <span class="info">Before asking me a question, please check the <a href="#">FAQ</a> to see if your question has already been answered.</span></p>

          <p>I may have been on your friend list when you signed up. If you don't want me to be, click "Edit Friends" and remove me!</p>

          <p><strong>Also, feel free to tell me what features you want to see on MySpace and if I think it's cool, we'll do it!</strong></p>

          <p>If you want a tutorial on HTML/designing your page, check this out: <a href="#">Mack</a>!!</p>

          <p>Note: If you try to view my friends list you won't see all 24,000,000 million people. This was bogging down the system, so we made it only show 40 people. So you wont be able to see the friends on my list.</p>

          <h3>Who I'd like to meet:</h3>
          <p>I'd like to meet people who educate, inspire or entertain me... I have a few close friends I've known all my life. I'd like to make more. </p>
        </section>

        <section class="friends">
          <header class="main-section-header">
            <h2 class="main-section-h2">Sarah's Friend Space</h2>
          </header>

          <p><b>Sarah has <span class="focus-highlight">777</span> Friends.</b></p>

          <div class="friend-pic-container">
            <figure>
              <figcaption><a href="#">MySpace<br/>Records</a></figcaption>
              <img src="pictures/myspace-records.jpg" />
            </figure>

            <figure>
              <figcaption><a href="#">Andi</a></figcaption>
              <img src="pictures/andi.jpg" />
            </figure>

            <figure>
              <figcaption><a href="#">abraham</a></figcaption>
              <img src="pictures/abraham.jpg" />
            </figure>

            <figure>
              <figcaption><a href="#">tanner</a></figcaption>
              <img src="pictures/tanner.jpg" />
            </figure>

            <figure>
              <figcaption><a href="#">Tams</a></figcaption>
              <img src="pictures/tams.jpg" />
            </figure>

            <figure>
              <figcaption><a href="#">MySpace<br/>Records</a></figcaption>
              <img src="pictures/myspace-records-2.jpg" />
            </figure>

            <figure>
              <figcaption><a href="#">J-e-n-n-i</a></figcaption>
              <img src="pictures/jenni.jpg" />
            </figure>

            <figure>
              <figcaption><a href="#">MySpace<br/>Records</a></figcaption>
              <img src="pictures/myspace-records-3.jpg" />
            </figure>
          </div>

          <p class="friends-list-link"><a href="#">View All of Sarah's Friends</a></p>
        </section>
      </main>


    </div>
  );
};

export default AboutWindow;
