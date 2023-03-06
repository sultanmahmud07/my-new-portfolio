import React from 'react';
import "./MySkills.css";

const MySkills = () => {
  return (
    <div id='Skills' className=''>
    <div className='common-width py-12'>
      <div className='main-container flex flex-col md:flex-row bg-base-200 shadow-lg'>
        <div className=' w-full'>
          {/* <img className='w-full' src={SkillImg} alt="" /> */}
          <div className='mh-professional-skill'>
            <h3>Technical Skills</h3>
            <div className='each-skills'>
              {/* number  */}
              <div className='candidatos'>
                <div className='parcial'>
                  <div className='info'>
                    <div className='nome'>HTML & CSS</div>
                    <div className='percentage-num'>86%</div>
                  </div>
                  <div className='progressBAr'>
                    <div className='percentagem w-[86%]'></div>
                  </div>
                </div>
              </div>
              {/* number  */}
              <div className='candidatos'>
                <div className='parcial'>
                  <div className='info'>
                    <div className='nome'>JavaScript</div>
                    <div className='percentage-num'>86%</div>
                  </div>
                  <div className='progressBAr'>
                    <div className='percentagem w-1/12'></div>
                  </div>
                </div>
              </div>
              {/* number  */}
              <div className='candidatos'>
                <div className='parcial'>
                  <div className='info'>
                    <div className='nome'>React</div>
                    <div className='percentage-num'>86%</div>
                  </div>
                  <div className='progressBAr'>
                    <div className='percentagem w-1/12'></div>
                  </div>
                </div>
              </div>
              {/* number  */}
              <div className='candidatos'>
                <div className='parcial'>
                  <div className='info'>
                    <div className='nome'>Node</div>
                    <div className='percentage-num'>86%</div>
                  </div>
                  <div className='progressBAr'>
                    <div className='percentagem w-1/12'></div>
                  </div>
                </div>
              </div>
              {/* number  */}
              <div className='candidatos'>
                <div className='parcial'>
                  <div className='info'>
                    <div className='nome'>Express</div>
                    <div className='percentage-num'>86%</div>
                  </div>
                  <div className='progressBAr'>
                    <div className='percentagem w-1/12'></div>
                  </div>
                </div>
              </div>
              {/* number  */}
              <div className='candidatos'>
                <div className='parcial'>
                  <div className='info'>
                    <div className='nome'>Redux</div>
                    <div className='percentage-num'>86%</div>
                  </div>
                  <div className='progressBAr'>
                    <div className='percentagem w-1/12'></div>
                  </div>
                </div>
              </div>
              {/* number  */}
              <div className='candidatos'>
                <div className='parcial'>
                  <div className='info'>
                    <div className='nome'>MongoDB</div>
                    <div className='percentage-num'>86%</div>
                  </div>
                  <div className='progressBAr'>
                    <div className='percentagem w-1/12'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* skills set container  */}
        <div className='skill-container w-full'>
          <div className='mh-professional-slills'>
            <h3>Professional Skills</h3>
            <ul className='mh-professional-progress'>
              <li>
                <div className='mh-progress mh-progress-circle' data-progress="95"></div>
                <div className='pr-skill-name'>Communication</div>
              </li>
              
              <li>
                <div className='mh-progress mh-progress-circle' data-progress="55"></div>
                <div className='pr-skill-name'>Team Work</div>
              </li>
              <li>
                <div className='mh-progress mh-progress-circle' data-progress="86"></div>
                <div className='pr-skill-name'>Project Management</div>
              </li>
              <li>
                <div className='mh-progress mh-progress-circle' data-progress="60"></div>
                <div className='pr-skill-name'>Creativity</div>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default MySkills;