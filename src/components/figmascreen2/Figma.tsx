import React from 'react'
import "./Figma.css"
import FigmaNav from './FigmaNav'
import Figmasidepanel from './Figmasidepanel'
import Chatbox from './Chatbox'
import Centerscreen from './Centerscreen'

const Figma: React.FC = () => {

const users = [
  { id: 1, name: "Aarav Sharma", message: "you: hii", time: "9:12 AM", image: "https://i.pravatar.cc/150?img=1" },
  { id: 2, name: "Riya Patel", message: "okay noted", time: "9:18 AM", image: "https://i.pravatar.cc/150?img=2" },
  { id: 3, name: "Kabir Khan", message: "see you soon", time: "9:30 AM", image: "https://i.pravatar.cc/150?img=3" },
  { id: 4, name: "Ananya Gupta", message: "thanks!", time: "9:42 AM", image: "https://i.pravatar.cc/150?img=4" },
  { id: 5, name: "Vivaan Singh", message: "on my way", time: "10:05 AM", image: "https://i.pravatar.cc/150?img=5" },
  { id: 6, name: "Meera Iyer", message: "call me", time: "10:20 AM", image: "https://i.pravatar.cc/150?img=6" },
  { id: 7, name: "Arjun Verma", message: "done 👍", time: "10:33 AM", image: "https://i.pravatar.cc/150?img=7" },
  { id: 8, name: "Ishita Das", message: "working on it", time: "10:47 AM", image: "https://i.pravatar.cc/150?img=8" },
  { id: 9, name: "Rohan Mehta", message: "sent the file", time: "11:02 AM", image: "https://i.pravatar.cc/150?img=9" },
  { id: 10, name: "Sneha Reddy", message: "great!", time: "11:18 AM", image: "https://i.pravatar.cc/150?img=10" },
  { id: 11, name: "Aditya Jain", message: "check inbox", time: "11:29 AM", image: "https://i.pravatar.cc/150?img=11" },
  { id: 12, name: "Pooja Nair", message: "sure", time: "11:45 AM", image: "https://i.pravatar.cc/150?img=12" },
  { id: 13, name: "Karan Malhotra", message: "later", time: "12:01 PM", image: "https://i.pravatar.cc/150?img=13" },
  { id: 14, name: "Neha Kapoor", message: "good job", time: "12:15 PM", image: "https://i.pravatar.cc/150?img=14" },
  { id: 15, name: "Rahul Roy", message: "let’s go", time: "12:36 PM", image: "https://i.pravatar.cc/150?img=15" },
  { id: 16, name: "Simran Kaur", message: "meeting at 2", time: "12:50 PM", image: "https://i.pravatar.cc/150?img=16" },
  { id: 17, name: "Varun Shah", message: "okay", time: "1:05 PM", image: "https://i.pravatar.cc/150?img=17" },
  { id: 18, name: "Priya Sen", message: "got it", time: "1:22 PM", image: "https://i.pravatar.cc/150?img=18" },
  { id: 19, name: "Aman Yadav", message: "cool", time: "1:40 PM", image: "https://i.pravatar.cc/150?img=19" },
  { id: 20, name: "Nisha Bose", message: "see mail", time: "1:58 PM", image: "https://i.pravatar.cc/150?img=20" },
  { id: 21, name: "Dev Patel", message: "approved", time: "2:10 PM", image: "https://i.pravatar.cc/150?img=21" },
  { id: 22, name: "Kavya Nair", message: "thanks a lot", time: "2:25 PM", image: "https://i.pravatar.cc/150?img=22" },
  { id: 23, name: "Rakesh Kumar", message: "will do", time: "2:41 PM", image: "https://i.pravatar.cc/150?img=23" },
  { id: 24, name: "Alisha Khan", message: "perfect", time: "3:00 PM", image: "https://i.pravatar.cc/150?img=24" },
  { id: 25, name: "Manish Gupta", message: "ping me", time: "3:18 PM", image: "https://i.pravatar.cc/150?img=25" },
  { id: 26, name: "Tanya Sharma", message: "sure 👍", time: "3:35 PM", image: "https://i.pravatar.cc/150?img=26" },
  { id: 27, name: "Suresh Iyer", message: "completed", time: "3:52 PM", image: "https://i.pravatar.cc/150?img=27" },
  { id: 28, name: "Deepak Verma", message: "nice", time: "4:10 PM", image: "https://i.pravatar.cc/150?img=28" },
  { id: 29, name: "Ankit Singh", message: "talk later", time: "4:28 PM", image: "https://i.pravatar.cc/150?img=29" },
  { id: 30, name: "Priti Das", message: "bye", time: "4:45 PM", image: "https://i.pravatar.cc/150?img=30" },
  { id: 1, name: "Aarav Sharma", message: "you: hii", time: "9:12 AM", image: "https://i.pravatar.cc/150?img=1" },
  { id: 2, name: "Riya Patel", message: "okay noted", time: "9:18 AM", image: "https://i.pravatar.cc/150?img=2" },
  { id: 3, name: "Kabir Khan", message: "see you soon", time: "9:30 AM", image: "https://i.pravatar.cc/150?img=3" },
  { id: 4, name: "Ananya Gupta", message: "thanks!", time: "9:42 AM", image: "https://i.pravatar.cc/150?img=4" },
  { id: 5, name: "Vivaan Singh", message: "on my way", time: "10:05 AM", image: "https://i.pravatar.cc/150?img=5" },
  { id: 6, name: "Meera Iyer", message: "call me", time: "10:20 AM", image: "https://i.pravatar.cc/150?img=6" },
  { id: 7, name: "Arjun Verma", message: "done 👍", time: "10:33 AM", image: "https://i.pravatar.cc/150?img=7" },
  { id: 8, name: "Ishita Das", message: "working on it", time: "10:47 AM", image: "https://i.pravatar.cc/150?img=8" },
  { id: 9, name: "Rohan Mehta", message: "sent the file", time: "11:02 AM", image: "https://i.pravatar.cc/150?img=9" },
  { id: 10, name: "Sneha Reddy", message: "great!", time: "11:18 AM", image: "https://i.pravatar.cc/150?img=10" },
  { id: 11, name: "Aditya Jain", message: "check inbox", time: "11:29 AM", image: "https://i.pravatar.cc/150?img=11" },
  { id: 12, name: "Pooja Nair", message: "sure", time: "11:45 AM", image: "https://i.pravatar.cc/150?img=12" },
  { id: 13, name: "Karan Malhotra", message: "later", time: "12:01 PM", image: "https://i.pravatar.cc/150?img=13" },
  { id: 14, name: "Neha Kapoor", message: "good job", time: "12:15 PM", image: "https://i.pravatar.cc/150?img=14" },
  { id: 15, name: "Rahul Roy", message: "let’s go", time: "12:36 PM", image: "https://i.pravatar.cc/150?img=15" },
  { id: 16, name: "Simran Kaur", message: "meeting at 2", time: "12:50 PM", image: "https://i.pravatar.cc/150?img=16" },
  { id: 17, name: "Varun Shah", message: "okay", time: "1:05 PM", image: "https://i.pravatar.cc/150?img=17" },
  { id: 18, name: "Priya Sen", message: "got it", time: "1:22 PM", image: "https://i.pravatar.cc/150?img=18" },
  { id: 19, name: "Aman Yadav", message: "cool", time: "1:40 PM", image: "https://i.pravatar.cc/150?img=19" },
  { id: 20, name: "Nisha Bose", message: "see mail", time: "1:58 PM", image: "https://i.pravatar.cc/150?img=20" },
  { id: 21, name: "Dev Patel", message: "approved", time: "2:10 PM", image: "https://i.pravatar.cc/150?img=21" },
  { id: 22, name: "Kavya Nair", message: "thanks a lot", time: "2:25 PM", image: "https://i.pravatar.cc/150?img=22" },
  { id: 23, name: "Rakesh Kumar", message: "will do", time: "2:41 PM", image: "https://i.pravatar.cc/150?img=23" },
  { id: 24, name: "Alisha Khan", message: "perfect", time: "3:00 PM", image: "https://i.pravatar.cc/150?img=24" },
  { id: 25, name: "Manish Gupta", message: "ping me", time: "3:18 PM", image: "https://i.pravatar.cc/150?img=25" },
  { id: 26, name: "Tanya Sharma", message: "sure 👍", time: "3:35 PM", image: "https://i.pravatar.cc/150?img=26" },
  { id: 27, name: "Suresh Iyer", message: "completed", time: "3:52 PM", image: "https://i.pravatar.cc/150?img=27" },
  { id: 28, name: "Deepak Verma", message: "nice", time: "4:10 PM", image: "https://i.pravatar.cc/150?img=28" },
  { id: 29, name: "Ankit Singh", message: "talk later", time: "4:28 PM", image: "https://i.pravatar.cc/150?img=29" },
  { id: 30, name: "Priti Das", message: "bye", time: "4:45 PM", image: "https://i.pravatar.cc/150?img=30" }
];


  return (
    <>
    {/* <div className='figma-container'> */}
    <FigmaNav />
    <div className='combine-figma'>
    <Figmasidepanel user={users} />
    <div className='combine-two'>
    <Centerscreen />
    <Chatbox />
   
    </div>
    </div>
    
    {/* </div> */}
    </>
  )
}

export default Figma