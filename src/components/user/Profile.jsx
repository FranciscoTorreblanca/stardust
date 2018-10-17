import React, { Component } from 'react'


class Profile extends Component {

    render() {
        return (
            <div style={{width:"100%",display:"flex",justifyContent:"center"}}>
            
      <div className="profile-card">
        <div className="profile-cover">
          <div className="menu-container">
          </div>
          <div className="profile-avatar">
            <div className="btns-container">
              <div className="profile-links">
                <a className="zoom-avatar" href="#"><img src="https://dl.dropboxusercontent.com/s/5liaxzvwbfuqzpo/zoom.png" /></a>
                <a className="read-more" href="#"><img src="https://dl.dropboxusercontent.com/s/62dfoo9h44o58lw/more.png" /></a>
                <a className="view-map" href="#"><img src="https://dl.dropboxusercontent.com/s/9ofmihok0h64lvn/location.png" /></a>
              </div>
            </div>
            <a href="#"><img src="https://www.pizcadesabor.com/wp-content/uploads/2013/01/Pozole-rojo-1.jpg" style={{width:"100%",height:"100%"}} alt="Pozole" /></a>
          </div>
          <div className="profile-details" style={{color:"white"}}>
            <h1 style={{color:"white"}}>Pozole</h1>
            <h6 style={{color:"white"}}>@pozole</h6>
          </div>
        </div>
        <div className="profile-info" style={{display: 'none'}}>
          <h1>About Me</h1>
          <div className="info-area">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.Stet clita kasd gubergren, no sea takimata sanctus est.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          </div>
          <div className="clear" />
        </div>
        <div className="profile-map" style={{display: 'none'}}>
          <iframe width="100%" height={150} frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} src="https://maps.google.com/maps?f=q&source=s_q&hl=en&geocode=&q=Saveology+New+York&aq=&sll=37.0625,-95.677068&sspn=40.052282,86.572266&t=h&ie=UTF8&hq=Saveology&hnear=New+York&ll=40.552027,-74.420902&spn=0.357117,0.912844&iwloc=near&output=embed" />
          <div className="clear" />
        </div>
        <div className="profile-content">
          <ul>
            <li>
              <div className="digits">8</div>
              Followers
            </li>
            <li>
              <div className="digits">3</div>
              Stories
            </li>
            <li>
              <div className="digits">51</div>
              Claps
            </li>
          </ul>
          <div className="clear" />
        </div>
      </div>
            </div>
                        )
                    }
                }
                
export default Profile