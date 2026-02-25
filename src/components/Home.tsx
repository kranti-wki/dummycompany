import React from 'react'
import "./Home.css"
import homechair from "../assets/images/homechair.jpg";
import sofa from "../assets/images/sofa.jpg"
import chair1 from "../assets/images/chair1.jpg"
import chair2 from "../assets/images/chair2.webp"
import chair3 from "../assets/images/chair3.jpg"
import Card from './Card';



const Home: React.FC = () => {

    const jobs = [
  {
    id: 1,
    company: "Amazon",
    time: "5 days ago",
    title: "Senior UI/UX Designer",
    type: "Part time",
    level: "Senior level",
    salary: "$100/hr",
    location: "Delhi, India",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
  },
  {
    id: 2,
    company: "Google",
    time: "2 days ago",
    title: "Frontend Developer",
    type: "Full time",
    level: "Mid level",
    salary: "$80/hr",
    location: "Mumbai, India",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
  },
  {
    id: 3,
    company: "Microsoft",
    time: "1 week ago",
    title: "Backend Developer",
    type: "Full time",
    level: "Senior level",
    salary: "$95/hr",
    location: "Bangalore, India",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
  },
  {
    id: 4,
    company: "Adobe",
    time: "3 days ago",
    title: "Graphic Designer",
    type: "Part time",
    level: "Junior level",
    salary: "$60/hr",
    location: "Pune, India",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Systems_logo.svg"
  },
  {
    id: 5,
    company: "Netflix",
    time: "6 days ago",
    title: "Product Designer",
    type: "Remote",
    level: "Mid level",
    salary: "$110/hr",
    location: "Remote",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
  },
  {
    id: 6,
    company: "Meta",
    time: "4 days ago",
    title: "React Developer",
    type: "Full time",
    level: "Senior level",
    salary: "$105/hr",
    location: "Hyderabad, India",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/05/Meta_Platforms_Inc._logo.svg"
  },
  {
    id: 7,
    company: "Apple",
    time: "1 day ago",
    title: "iOS Developer",
    type: "Full time",
    level: "Mid level",
    salary: "$120/hr",
    location: "Chennai, India",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
  },
  {
    id: 8,
    company: "Spotify",
    time: "2 weeks ago",
    title: "UI Designer",
    type: "Contract",
    level: "Junior level",
    salary: "$70/hr",
    location: "Kolkata, India",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"
  },
  {
    id: 9,
    company: "Tesla",
    time: "5 days ago",
    title: "Software Engineer",
    type: "Full time",
    level: "Senior level",
    salary: "$130/hr",
    location: "Remote",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Tesla_T_symbol.svg"
  },
  {
    id: 10,
    company: "Uber",
    time: "3 days ago",
    title: "Web Developer",
    type: "Part time",
    level: "Mid level",
    salary: "$85/hr",
    location: "Gurgaon, India",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
  }
];


  return (
    <>
    <div className='home-Main-Container'>
        <div className='home-main-section1'>
            <div className='home-main-section1-text'>
                <h1>We design and build better chairs, for a better life</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, inventore. Ab vel qui quam, corrupti iusto deserunt iste quod nostrum minus at ipsam fugit. Eveniet mollitia minus necessitatibus voluptatem quibusdam!</p>
                <button><a href='#'>--visit shop</a></button>
            </div>
            <div className='home-main-section1-img'>
                <img src={homechair} alt="section1 img"  />
            </div>
        </div>

        <div className='home-main-section2'>
            <h1>what our makes chairs special</h1>
            <div className='home-main-section2-box'>
                <div className='home-main-section2-boxx1'>
                    <h1>science meet design</h1>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quam sed illo aut ipsa iste temporibus itaque voluptatem harum tempora dignissimos, officia repudiandae perferendis labore vero? In laborum vel eos.
                </div>
                 <div className='home-main-section2-boxx1'>
                    <h1>maximal confort</h1>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quam sed illo aut ipsa iste temporibus itaque voluptatem harum tempora dignissimos, officia repudiandae perferendis labore vero? In laborum vel eos.
                </div>
                 <div className='home-main-section2-boxx1'>
                    <h1>ethical substanable</h1>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quam sed illo aut ipsa iste temporibus itaque voluptatem harum tempora dignissimos, officia repudiandae perferendis labore vero? In laborum vel eos.
                </div>
            </div>
        </div>


        <div className='home-main-section3'>
            <div className='home-main-section3-img'>
                <img src={sofa} alt=""/>
            </div>
            <div className='home-main-section3-text'>
                <h1>"We couldn't live without this chairsanymore"</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, at nisi. Ipsum vero quia perferendis architecto provident aperiam laudantium magnam nisi. Assumenda magnam doloribus inventore perspiciatis deleniti eaque iusto est!</p>
                <a href="#">--marry and sara johnson</a>
            </div>
        </div>

        <div className='home-main-section4'>
            <h1>our best selling chair</h1>
            <div className='home-main-section4-box'>
                <div className='box1'>
                    <img src={chair1} alt="" />
                    <h1>the lead black</h1>
                    <p>leasure releaxing</p>
                    <p>confort from 3 hours</p>
                     <div className='home-main-section4-detail'>
                        <p>price 5000</p>
                        <button> add to cart</button>
                    </div>
                </div>
                 <div className='box1'>
                    <img src={chair2} alt="" />
                    <h1>the work bee</h1>
                    <p>work</p>
                    <p>very confortable</p>
                    <div className='home-main-section4-detail'>
                        <p>price 2000</p>
                        <button> add to cart</button>
                    </div>
                </div>
                 <div className='box1'>
                    <img src={chair3} alt="" />
                    <h1>the chair 4/5</h1>
                    <p>leisure and relixing</p>
                    <p>only confortable</p>
                     <div className='home-main-section4-detail'>
                        <p>price 6000</p>
                        <button> add to cart</button>
                    </div>
                </div>
            </div>
        </div>

        <div className='userReview'>
         {jobs.map((elem) =>(
            <Card key={elem.id} job={elem} />
         ))}
    </div>
    </div>
    
    </>
  )
}

export default Home