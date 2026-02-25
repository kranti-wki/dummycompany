import React from "react";
import "./Figmasidepanel.css";
import search from "../../assets/figmaimages/search .png";
import plusicon from "../../assets/figmaimages/plusicon.png";
import simplification from "../../assets/figmaimages/Simplification (1).png";

interface user {
  id: number;
  name: string;
  message: string;
  time: string;
  image: string;
}

const Figmasidepanel: React.FC<{ user: user[] }> = ({ user }) => {
  return (
    <>
      <div className="figma-side-panel">
        <div className="panel-container">
          <div className="searchContainer">
            <div className="searchbar">
              <img src={search} alt="" />
              <input
                type="text"
                placeholder="by name, username, or license number."
              />
            </div>
          </div>

          <div className="globalchat-container">
            <div className="globalchat">
              <input type="text" placeholder="#  Global Chat" />
            </div>
          </div>

          <div className="privatechat-container">
            <div className="privatechat">
              <h1>Private Rooms</h1>
              <img src={plusicon} alt="" />
            </div>
          </div>

          <div className="nursecommunity">
            <div className="commuity">
              <div className="simplicimg">
                <img src={simplification} alt="" />
              </div>
              <h1>Nurse Community</h1>
            </div>
            <h2>
              <span> # </span> Nurses Hub
            </h2>
            <h2>
              <span> # </span> Strike Support
            </h2>
          </div>

          <div className="direct-panel">
            <div className="direct">
              <h1>Direct Messages</h1>
            </div>

            <div className="userlist-container">
              <div className="userlist">

                {user.map((job:any) => (
                  <div className="userdetail" key={job.id}>
                    <div className="userdetailprofile">
                      <div className="userimgcircle">
                      <img src={job.image} alt="" />
                      </div>
                      <div className="active-circle"></div>
                    </div>
                    <div className="usertextcontantwo">
                      <div className="usertext">
                        <h1>{job.name}</h1>
                        <span>{job.message}</span>
                      </div>
                      <span className="seen-time">{job.time}</span>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Figmasidepanel;
