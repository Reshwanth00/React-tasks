import { useState } from 'react';
import classes from './Hello.module.css';
function HelloWorld() {
  const [isVisible, setIsVisible] = useState(true);

  const buttonHandler = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className={classes.app}>
      <div class={classes.headerContainer}>
      <div class={classes.headerOuter}>
        <div class={classes.headerFirst}>
          <img
            src="helloTopper.png"
            alt="helloToppers"
            height="50px"
            width="130px"
          />
        </div>
        <div class={classes.headerSecond}>
          <div class={classes.headerInsideLevel}>
            <div class={classes.socialContact}>
              <button class={classes.facebookButton}>
                <img
                  src="facebook.jpg"
                  alt="facebook"
                  width="20px"
                  height="18px"
                />
              </button>
              <button class={classes.twitterButton}>
                <img
                  src="twitter.png"
                  alt="twitter"
                  width="20px"
                  height="18px"
                />
              </button>
              <button class={classes.linkedinButton}>
                <img
                  src="linkedin.webp"
                  alt="linkedin"
                  width="20px"
                  height="18px"
                />
              </button>
              <button class={classes.youtubeButton}>
                <img
                  src="youtube.png"
                  alt="youtube"
                  width="20px"
                  height="18px"
                />
              </button>
            </div>
            <button type="button" class={classes.headerButtonRegister}>
              Register
            </button>
            <button type="button" class={classes.headerButtonLogin}>Login</button>
            <button type="button" class={classes.headerButtonMenu} onClick={buttonHandler}>Menu</button>
            {isVisible}
          </div>
        </div>
      </div>
    </div>
      <div class={classes.bodyContainer}>
      <div class={classes.bodyHeaderContainer} id="header"  style={{ display: isVisible ? 'block' : 'none' }}>
        <div class={classes.heightLevel}>
          <div class={classes.home}>
            <button type="button" class={classes.homeButton}>
              <div class={classes.homeText}>HOME</div>
            </button>
          </div>
          <div class={classes.findToppers}>
            <button type="button" class={classes.FindTopperButton}>
              <div class={classes.FindTopperText}>FIND TOPPERS</div>
            </button>
          </div>
          <div class={classes.joinAsATopper}>
            <button type="button" class={classes.JoinAsATopperButton}>
              <div class={classes.JoinAsATopperText}>JOIN AS A TOPPER</div>
            </button>
          </div>
          <div class={classes.successStory}>
            <button type="button" class={classes.SuccessStoryButton}>
              <div class={classes.SuccessStoryText}>SUCCESS STORY</div>
            </button>
          </div>
          <div class={classes.contactUs}>
            <button type="button" class={classes.ContactUsButton}>
              <div class={classes.ContactUsText}>CONTACT US</div>
            </button>
          </div>
        </div>
      </div>
      <div class={classes.main}>
        <div class={classes.bodyBodyContainer}>
          <div class={classes.bodyBodySelector}>
            <div class={classes.container}>
              <div class={classes.text1}>
                <div>Talk To Toppers &</div>
                <div>Get 1 to 1 Guidance</div>
              </div>
              <div class={classes.text2}>
                Streamline your exam preparation for a better result
              </div>
              <div class={classes.selector}>
                <select name="classname" type="text" class="Options">
                  <option value="categoryDefault" disabled="" selected="">
                    Select Exam
                  </option>
                  <option value="IIT JEE">
                    Online IIT JEE Mentoring
                  </option>
                  <option value="UPSC" >
                    Online UPSC Mentoring
                  </option>
                  <option value="CAT" >
                    Online CAT Mentoring
                  </option>
                  <option value="NEET" >
                    Online NEET Mentoring
                  </option>
                  <option value="GATE" >
                    Online GATE Mentoring
                  </option>
                </select>
              </div>
              <button class={classes.search} type="button">Find Topper mentors</button>
            </div>
          </div>
          <div class={classes.bodyBodyImage}>
            <div class={classes.imageLeft}>
              <div class={classes.image}>
                <img src="white.png" alt="white" height="100%" width="200px" />
              </div>
            </div>
            <div class={classes.imageRight}>
              <img src="orange.png" alt="orange" height="450px" width="250px" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class={classes.bottomContainer}>
        <div class={classes.holder}>
            <div class={classes.text}>
                Connect With Toppers Who Knows The Journey
            </div>
            <div class={classes.sliderContainer}>
                <div class={classes.singleCard}>
                    <div class={classes.image1}>
                        <img src="random.jpg" alt="" height="100%" width="100%" />
                    </div>
                    <div class={classes.studentName}>
                        Teena Dhabi
                    </div>
                    <div class={classes.studentAchievement}>
                        UPSC - 2020, AIR-1
                    </div>
                    <div class={classes.text}>
                        <div class={classes.inner}>
                            view profile
                        </div>
                    </div>
                </div>
                <div class={classes.singleCard}>
                    <div class={classes.image1}>
                        <img src="random.jpg" alt="" height="100%" width="100%" />
                    </div>
                    <div class={classes.studentName}>
                        Teena Dhabi
                    </div>
                    <div class={classes.studentAchievement}>
                        UPSC - 2020, AIR-2
                    </div>
                    <div class={classes.text}>
                        <div class={classes.inner}>
                            view profile
                        </div>
                    </div>
                </div>
                <div class={classes.singleCard}>
                    <div class={classes.image1}>
                        <img src="random.jpg" alt="" height="100%" width="100%" />
                    </div>
                    <div class={classes.studentName}>
                        Teena Dhabi
                    </div>
                    <div class={classes.studentAchievement}>
                        UPSC - 2020, AIR-3
                    </div>
                    <div class={classes.text}>
                        <div class={classes.inner}>
                            view profile
                        </div>
                    </div>
                </div>
                <div class={classes.singleCard}>
                    <div class={classes.image1}>
                        <img src="random.jpg" alt="" height="100%" width="100%"/>
                    </div>
                    <div class={classes.studentName}>
                        Teena Dhabi
                    </div>
                    <div class={classes.studentAchievement}>
                        UPSC - 2020, AIR-4
                    </div>
                    <div class={classes.text}>
                        <div class={classes.inner}>
                            view profile
                        </div>
                    </div>
                </div>
                <div class={classes.singleCard}>
                    <div class={classes.image1}>
                        <img src="random.jpg" alt="" height="100%" width="100%"/>
                    </div>

                    <div class={classes.studentName}>
                        Teena Dhabi
                    </div>
                    <div class={classes.studentAchievement}>
                        UPSC - 2020, AIR-5
                    </div>
                    <div class={classes.text}>
                        <div class={classes.inner}>
                            view profile
                        </div>
                    </div>
                </div>
                <div class={classes.singleCard}>
                    <div class={classes.image1}>
                        <img src="random.jpg" alt="" height="100%" width="100%"/>
                    </div>
                    <div class={classes.studentName}>
                        Teena Dhabi
                    </div>
                    <div class={classes.studentAchievement}>
                        UPSC - 2020, AIR-6
                    </div>
                    <div class={classes.text}>
                        <div class={classes.inner}>
                            view profile
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default HelloWorld;
