import React from "react";
import "./Card.css";

type Job = {
  id: number;
  company: string;
  time: string;
  title: string;
  type: string;
  level: string;
  salary: string;
  location: string;
  image: string;
};

type CardProps = {
  job: Job;
};

const Card: React.FC<CardProps> = ({job}) => {
  
  return (
    <>
    <div className="card-main-container">

      <div className="card-container">
        <div className="cards">
          <div className="card-front">
            <div className="cardimg">
            <img src={job.image} alt=""/>
            </div>
            <button> save <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="bookmark"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                />
              </svg>
              
            </button>
          </div>
          <div className="card-center">
            <h3>{job.company} <span>{job.time}</span></h3>
            <h2>{job.title}</h2>
            <div>
                <h4>part time</h4>
                <h4>seneor level</h4>
            </div>
          </div>

          <div className="cart-bottom">
            <div className="botomdiv">
                <h2>{job.salary}</h2>
                <p>{job.location}</p>
            </div>
            <div className="bottom-button">
                <button>apply now</button>
            </div>
          </div>
        </div>
      </div>

     </div> 
    </>
  );
};

export default Card;
