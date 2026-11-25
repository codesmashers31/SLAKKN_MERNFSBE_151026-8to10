
import { useRef } from 'react'
import profile from '../assets/image.png'
const SrollingToTheContent = () => {

  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const contectRef = useRef(null)
  const skillsRef = useRef(null)

  const handleClick = (datas)=>{

     datas.current.scrollIntoView({
        behavior:"smooth"
     })

  }

  const handleTop = ()=>{
  
    homeRef.current.scrollIntoView({
        behavior:"smooth"
       
    })


  }

  return (
    <>
    <div className="p-10">
        <nav className="bg-blue-500 fixed w-screen shadow-2xl text-white rounded-2xl p-3 flex justify-between
         items-center gap-5">
            <div className="mx-15">
                Logo
            </div>
            <div className="flex gap-15 mx-15">
                <button onClick={()=>handleClick(homeRef)}>Home</button>
                <button onClick={()=>handleClick(aboutRef)}>About My Profile</button>
                <button onClick={()=>handleClick(contectRef)}>Conact Me</button>
                <button onClick={()=>handleClick(skillsRef)}>Skills</button>
            </div>
        </nav>
    </div>
    <section className="p-10" ref={homeRef}>
         <h2 className='text-2xl mb-10 font-sans'>My Home</h2>
        <div className='flex gap-15 justify-start items-center'> 
        
         <img src={profile} className="w-[30%] rounded-full"  />
         <div>
            <h2 className='text-4xl mb-5'>Objectives</h2>
            <p className='mb-5 '>Passionate Full Stack Developer and Technical Trainer with hands-on experience in MERN stack and real-world application development. Seeking a challenging opportunity to leverage my technical skills, problem-solving abilities and continuous learning mindset to build scalable applications and contribute to organizational growth.</p>
            <p className='mb-5'>Good morning. I am a Full Stack Developer and Technical Trainer with hands-on experience in React.js, Node.js, Express.js, MongoDB, SQL and JavaScript.

Currently, I am working at SLA Institute, where I train students in full stack development through practical, project-based learning.

Along with training, I have worked on real-time projects, including SIVELS Finance and SSK ERP. My responsibilities include frontend development, API integration, authentication, debugging and business workflow implementation.

My strengths are problem-solving, quick learning and technical communication.

I am looking for an opportunity where I can utilize my development experience, contribute to real-world projects and grow professionally.

Thank you.</p>
<p>My technical skills include HTML, CSS, JavaScript, TypeScript, React.js, Angular, Node.js, Express.js, MongoDB, SQL, Java and Python.</p>
         </div>
        </div>
    </section>

       <section className="p-10" ref={aboutRef}>
         <h2 className='text-2xl mb-10 font-sans'>About My Profile</h2>
        <div className='flex gap-15 justify-start items-center'> 
        
         <img src={profile} className="w-[30%] rounded-full"  />
         <div>
            <h2 className='text-4xl mb-5'>Objectives</h2>
            <p className='mb-5 '>Passionate Full Stack Developer and Technical Trainer with hands-on experience in MERN stack and real-world application development. Seeking a challenging opportunity to leverage my technical skills, problem-solving abilities and continuous learning mindset to build scalable applications and contribute to organizational growth.</p>
            <p className='mb-5'>Good morning. I am a Full Stack Developer and Technical Trainer with hands-on experience in React.js, Node.js, Express.js, MongoDB, SQL and JavaScript.

Currently, I am working at SLA Institute, where I train students in full stack development through practical, project-based learning.

Along with training, I have worked on real-time projects, including SIVELS Finance and SSK ERP. My responsibilities include frontend development, API integration, authentication, debugging and business workflow implementation.

My strengths are problem-solving, quick learning and technical communication.

I am looking for an opportunity where I can utilize my development experience, contribute to real-world projects and grow professionally.

Thank you.</p>
<p>My technical skills include HTML, CSS, JavaScript, TypeScript, React.js, Angular, Node.js, Express.js, MongoDB, SQL, Java and Python.</p>
         </div>
        </div>
    </section>



       <section className="p-10" ref={contectRef}>
         <h2 className='text-2xl mb-10 font-sans'>Contect</h2>
        <div className='flex gap-15 justify-start items-center'> 
        
         <img src={profile} className="w-[30%] rounded-full"  />
         <div>
            <h2 className='text-4xl mb-5'>Objectives</h2>
            <p className='mb-5 '>Passionate Full Stack Developer and Technical Trainer with hands-on experience in MERN stack and real-world application development. Seeking a challenging opportunity to leverage my technical skills, problem-solving abilities and continuous learning mindset to build scalable applications and contribute to organizational growth.</p>
            <p className='mb-5'>Good morning. I am a Full Stack Developer and Technical Trainer with hands-on experience in React.js, Node.js, Express.js, MongoDB, SQL and JavaScript.

Currently, I am working at SLA Institute, where I train students in full stack development through practical, project-based learning.

Along with training, I have worked on real-time projects, including SIVELS Finance and SSK ERP. My responsibilities include frontend development, API integration, authentication, debugging and business workflow implementation.

My strengths are problem-solving, quick learning and technical communication.

I am looking for an opportunity where I can utilize my development experience, contribute to real-world projects and grow professionally.

Thank you.</p>
<p>My technical skills include HTML, CSS, JavaScript, TypeScript, React.js, Angular, Node.js, Express.js, MongoDB, SQL, Java and Python.</p>
         </div>
        </div>
    </section>


       <section className="p-10" ref={skillsRef}>
         <h2 className='text-2xl mb-10 font-sans'>Skills</h2>
        <div className='flex gap-15 justify-start items-center'> 
        
         <img src={profile} className="w-[30%] rounded-full"  />
         <div>
            <h2 className='text-4xl mb-5'>Objectives</h2>
            <p className='mb-5 '>Passionate Full Stack Developer and Technical Trainer with hands-on experience in MERN stack and real-world application development. Seeking a challenging opportunity to leverage my technical skills, problem-solving abilities and continuous learning mindset to build scalable applications and contribute to organizational growth.</p>
            <p className='mb-5'>Good morning. I am a Full Stack Developer and Technical Trainer with hands-on experience in React.js, Node.js, Express.js, MongoDB, SQL and JavaScript.

Currently, I am working at SLA Institute, where I train students in full stack development through practical, project-based learning.

Along with training, I have worked on real-time projects, including SIVELS Finance and SSK ERP. My responsibilities include frontend development, API integration, authentication, debugging and business workflow implementation.

My strengths are problem-solving, quick learning and technical communication.

I am looking for an opportunity where I can utilize my development experience, contribute to real-world projects and grow professionally.

Thank you.</p>
<p>My technical skills include HTML, CSS, JavaScript, TypeScript, React.js, Angular, Node.js, Express.js, MongoDB, SQL, Java and Python.</p>
         </div>
        </div>
    </section>

    <div>
        <button onClick={handleTop}>Click to Top</button>
    </div>
    </>
  )
}

export default SrollingToTheContent
