'use client'
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import { Slider } from "@/components/ui/slider"
import { Switch } from '@/components/ui/switch';


export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [sliderValue, setSliderValue] = useState(33);
  

  return (
    <div className='' >
      <div className="bg-custom-blue  h-10 flex items-center justify-start ">
        <div className="text-sm text-white ml-[25px]">
          Questions? Call Us: 1.866.267.8286 (1.866.CORTAVO)
        </div>
      </div>
      <div className="flex flex-wrap justify-between items-center mx-10 mt-10 mb-10">
        <img src="./logo.webp" alt="Logo" className="h-8 w-auto" />
        <div className="xl:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={!isOpen ? "M4 6h16M4 12h16m-7 6h7" : "M6 18L18 6M6 6l12 12"}
              />
            </svg>
          </button>
        </div>
        <div className={`w-full md:w-auto ${isOpen ? 'block' : 'hidden'} xl:block`}>
          <NavigationMenu className="overflow-hidden">
            <NavigationMenuList className="flex flex-col md:flex-row">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-blue-500">More Than Managed IT</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link1</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-custom-blue">Cortavo Plans</NavigationMenuTrigger>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-custom-blue">Case Studies & Blogs</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-custom-blue">FAQs</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-custom-blue">About Us</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-custom-blue">Client Login</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="hidden md:flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="18"
            height="18"
            viewBox="0 0 30 30"
            className="inline-block mr-4"
          >
            <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
          </svg>
          <Button className='bg-blue-500'>LET'S TALK</Button>
        </div>
      </div>

      <div className="absolute overflow-hidden ">
        {/* <img
          src="./bgHero.png"
          alt="Background Hero"
          className="z-1 w-full h-[1000px] md:h-[700px] lg:h-[600px] xl:w-full min-w-full object-cover object-center"
        /> */}

      </div>
      <div className="h-[900px]  md:h-[500px] grid grid-cols-1 md:grid-cols-2 relative top-0 z-2 bg-gray-100">
        <div className="mt-[80px] ml-[30px]">
          <h1
             className="text-4xl font-bold text-custom-blue ">
              Managed IT Services With Your Budget In Mind
          </h1>
          <h4 className="font-semibold text-2xl text-blue-500">
              It's budget season, and we have just what you need to prepare
          </h4>
          <p>
            <span className=" text-gray-600 text-sm">
              Our IT service plans help you switch your IT spend from capital expenses (CAPEX) to operating expenses (OPEX). Avoid capital outlays, fully deduct expenses each year and trade surprise costs for a flat, annual budget.
            </span>
          </p>
          <p>
            <span className="text-sm text-gray-600">
              Ensure you've covered all your 2023 IT needs with a free IT budget checklist.
            </span>
          </p>
          <Button variant="destructive" className="mt-[20px] bg-blue-500 rounded-full h-[50px]">
            Download my IT budget checklist
          </Button>
        </div>
        <div className="flex items-center justify-center">
          {/* <img src="./grid.png" alt="Hero Image" className="z-1 left-[220px]  top-[-120px] relative " /> */}
          <img src="./Hero.webp" alt="Hero Image" className="z-2 relative " />

        </div>
      </div>
      
      <div className='flex items-center justify-center  '>
      <div className="relative top-[20px] bg-gray-100 w-[900px]  z-3">
      <div className='flex  flex-col lg:flex-row items-center justify-evenly p-10 space-y-5 xl:space-y-0'>
        <img src="./first.webp" alt="" />
        <img src="./middle.webp" alt="" />
        <img src="./last.webp" alt="" />
      </div>
      </div>
      </div>

      <div className=' flex items-center justify-center h-[300px] '>
          <div className=''>
          <h1 className='text-center text-2xl font-bold text-custom-blue'>Managed IT Plans For Everyone</h1>
          <h3 className='text-center mx-[10px] sm:mx-[25px]  lg:mx-[280px] text-gray-600 text-md'>Flat-fee service desk, cybersecurity, connectivity and computers.
          We provide the IT expertise businesses need for onsite, hybrid and remote workplaces</h3>
          </div> 
      </div>
          <div className='relative'>
            
        <img src="./plan.jpg" className='absolute top-0 right-0 w-full h-full xl:h-[600px] object-cover xl:object-contain object-right-top  '  alt="" />
        <h1 className='text-3xl font-bold text-center m-10 text-custom-blue relative top-10' >Which plan is right for you?</h1>
      <div className='flex flex-col md:flex-row items-center justify-evenly relative top-5'>
        <div>
        <img src="./illust.webp" alt=""  className='md:h-[350px] h-[300px] p-3' />
        </div>
        
  
<div className=" w-[300px] h-[300px] sm:w-[400px] sm:h-[200px] md:w-[500px] md:h-[290px] border-[1px] border-gray-300 rounded-xl p-6 m-5  ">
      <h1 className="text-lg font-semibold mb-4 text-custom-blue">How many users do you have in your workplace?</h1>
      <div className='mt-[30px]'>
      <Slider
          defaultValue={[sliderValue]}
          min={1}
          max={100}
          step={1}
          className="mb-6"
          aria-label="Users"
          aria-valuenow={sliderValue}
          onValueChange={(value) => setSliderValue(value[0])}
        />
      <div className='flex justify-between'>
      <p className="text-gray-600 text-sm ">1 User(s)</p>
      <p className="text-gray-600  text-sm">100 User(s)</p>
      </div>
      </div>
      <div className='flex items-center justify-start space-x-3 lg:mt-[50px] md:mt-[40px] sm:mt-[20px] mt-[10px]'>
      <Switch />
      <h1 className="text-lg font-semibold text-custom-blue" >Do you have more than 100 users?</h1>
      </div>
    <Button className='mt-5 bg-blue-500 ' >Next</Button>

    </div>
        </div>
        </div>

      <div className='mt-[20px]'>
        <h1 className='text-2xl text-center font-semibold  text-custom-blue mt-[100px]  '>
        Our Partners Support Us We Support You
        </h1>
          <marquee direction="" className="flex items-center justify-center ">
          <div className='flex items-center justify-around space-x-[20px] p-[10px] h-[101px] mt-[30px]  '>
  <img src="./slide1.webp" alt="" className="object-contain h-full" />
  <img src="./slide2.webp" alt="" className="object-contain h-full" />
  <img src="./slide3.webp" alt="" className="object-contain h-full" />
  <img src="./slide4.webp" alt="" className="object-contain h-full" />
  <img src="./slide5.webp" alt="" className="object-contain h-full" />
  <img src="./slide6.webp" alt="" className="object-contain h-full" />
  <img src="./slide7.webp" alt="" className="object-contain h-full" />
  <img src="./slide8.webp" alt="" className="object-contain h-full" />
  <img src="./slide9.webp" alt="" className="object-contain h-full" />
  <img src="./slide10.webp" alt="" className="object-contain h-full" />
  <img src="./slide11.webp" alt="" className="object-contain h-full" />
</div>


          </marquee>
      </div>
<div className='mx-10'>
  
      <div className='grid grid-cols-1 md:grid-cols-2 h-[500px] place-items-center mt-10 '>
        <div>
          <img src="./lock.webp" alt="" className='' />
        </div>
        <div>
          <h1 className='text-2xl font-bold text-custom-blue '>
          Cybersecurity
          </h1>
          <p  className="text-gray-600">With cyberattacks on the rise businesses are vulnerable to sophisticated ransomware. Protecting your data and systems is one of the biggest challenges for small businesses. Our experts can create a cybersecurity strategy that ensures the right tools are in place to prevent, detect and protect your business.</p>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 h-[500px] place-items-center '>
        
        <div>
          <h1 className='text-2xl font-bold text-custom-blue'>
          Certified IT Experts & 24/7 Help Desk
          </h1>
          <p  className="text-gray-600">Our US-based certified engineers are available 24/7, 365 to keep your team connected. Our team provides level 1-3 support and resolves 85% of support calls in one call.</p>
        </div>
        <div>
          <img src="./headphone.webp" alt="" />
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 h-[500px] place-items-center '>
        <div>
          <img src="./manage.webp" alt="" />
        </div>
        <div>
          <h1 className='text-2xl font-bold text-custom-blue'>
          Hybrid Workplace Management
          </h1>
          <p  className="text-gray-600">We manage your businesses' technology to ensure consistent, reliable and frictionless collaboration for your on-site and remote employees.</p>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 h-[500px] place-items-center '>
        
        <div>
          <h1 className='text-2xl font-bold  text-custom-blue'>
           
IT Cost Management
          </h1>
          <p  className="text-gray-600"> 
          We take the unpredictability and capital outlay out of technology costs. We replace all your in-plan computers periodically and provide expert help and advance replacement when you need it - all included in our flat monthly fee.
          </p>
        </div>
        <div>
          <img src="./illust.webp" alt="" />
        </div>
      </div>
      
</div>

<div className='w-full flex items-center  justify-center bg-custom-blue mt-[150px]'>
<div className='flex flex-col justify-center items-center h-[344px] space-y-4'>
  <img src="./branding.webp" className='h-[37px] w-[240px]' alt="" />
    <h2 className='text-sm text-center mt-[20px] text-gray-100 sm:mx-10 mx-5 '>
    “The engineers are great. Very knowledgeable and friendly. They always answer calls right away. They also provide hands-on work when requested. Couldn’t be happier.”
    </h2>
    <h2 className=' font-bold text-sm text-center text-gray-100'>David Scanlan</h2>
    <h2 className=' font-bold text-sm text-center text-gray-100'>IT Vice President, Atlanta Fine Homes</h2>
</div>

</div>

<div className='flex flex-col items-center justify-center mt-[20px] space-y-5 '>

    <h1 className='text-2xl font-bold text-custom-blue text-center'>
  We Take the “Shhh” Out of Your IT Strategy
    </h1>
  
  <div className='sm:w-[55%] w-[80%]'>
    <p className='text-center text-sm text-gray-600'>A good IT strategy begins with a thorough assessment, careful planning, state of the art equipment, expert installation followed by reliable support. You need Cortavo, the IT partner you can count on for the long game.</p>
  </div>
</div>

<div className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 place-items-center mt-[20px] space-y-5 lg:space-y-0  '>

<div className='border-[1px] border-gray-300 grid grid-cols-1 w-[300px] h-[200px] lg:w-[300px] lg:h-[250px] xl:w-[400px] xl:h-[250px] rounded-xl '>

    <div className='flex items-center flex-start space-x-2 ml-10'>
      <img src="./qualityicon.png"  className='' alt="" />
        <h1 className='md:text-md text-sm lg:text-xl font-bold '>Quality Services</h1>
    </div>
    <div className='px-10'>
      <p  className="text-gray-600 text-sm ">We'll assess your IT infrastructure, system access, cybersecurity, stability, and goals to tailor the best plan for your business.</p>
    </div>
</div>
<div className='border-[1px] border-gray-300 grid grid-cols-1  w-[300px] h-[200px] lg:w-[300px] lg:h-[250px] xl:w-[400px] xl:h-[250px] rounded-xl '>

    <div className='flex items-center flex-start space-x-2 ml-10'>
      <img src="./implement.png"  className='' alt="" />
        <h1 className='md:text-md text-sm lg:text-xl font-bold '>Implement</h1>
    </div>
    <div className='px-10'>
      <p  className="text-gray-600 text-sm ">Our expert engineers will set up and test your equipment at your business to ensure everything works perfectly.</p>
    </div>
</div>
<div className='border-[1px] border-gray-300 grid grid-cols-1  w-[300px] h-[200px] lg:w-[300px] lg:h-[250px] xl:w-[400px] xl:h-[250px] rounded-xl '>

    <div className='flex items-center flex-start space-x-2 ml-10'>
      <img src="./support.png"  className='' alt="" />
        <h1 className='md:text-md text-sm lg:text-xl font-bold '>Support</h1>
    </div>
    <div className='px-10'>
      <p  className="text-gray-600 text-sm ">We provide remote or on-site support once your systems are in place.We provide remote or on-site support once your systems are in place.</p>
    </div>
</div>

</div>

<div className='bg-blue-100 flex flex-col items-center mt-[20px] '>
  
<h1 className='text-2xl text-center font-bold text-custom-blue mt-[50px]'>
So, what are you waiting for?
</h1>
<p className='text-center mx-4 sm:mx-2'>Set up a meeting and take the first step to transform your business technology.</p>

<iframe width="100%" data-hs-ignore="true" className='min-width: 312px; min-height: 516px; h-[756px] border: none;' src="https://meetings.hubspot.com/team-cortavo?embed=true&parentHubspotUtk=f621e1cf731a58507fe6d6029a9c5fed&parentPageUrl=https://cortavo.com/&ab=false&contentId=75012199566" ></iframe>

</div>


<div className=' bg-custom-blue h-[670px] xl:h-[350px] '>

<div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-[20%]  ">

<div className='mt-[20px]'>
  <div>
    <h1 className='text-2xl font-bold text-white'>Managed IT</h1>
    <h1 className="text-2xl font-bold text-white"> Solutions</h1>
    <hr className='rounded-xl w-[30px] bg-blue-500 border-2 border-blue-500 h-[4px]' />
  </div>
  <div className='mt-[50px]'>
  <div className=' text-gray-300 text-sm'>Techtility Plan</div>
  <div className=' text-gray-300 text-sm'>Productivity Plan</div>
  <div className=' text-gray-300 text-sm'>Connectivity Plan</div>
  </div>
</div>



<div className='mt-[20px]'>
  <div>
    <h1 className='text-2xl font-bold text-white'>Resources</h1>
    <hr className='rounded-xl w-[30px] bg-blue-500 border-2 border-blue-500 h-[4px]' />
  </div>
  <div className='mt-[50px]'>
  <div className=' text-gray-300 text-sm'>Blog</div>
  <div className=' text-gray-300 text-sm'>Case Studies</div>
  <div className=' text-gray-300 text-sm'>FAQs</div>
  <div className=' text-gray-300 text-sm'>Support</div>
  <div className=' text-gray-300 text-sm'>Client Portal Login</div>
  <div className=' text-gray-300 text-sm'>News Room</div>
  </div>
</div>



<div className='mt-[20px]'>
  <div>
    <h1 className='text-2xl font-bold text-white'>Cortavo</h1>
    <hr className='rounded-xl w-[30px] bg-blue-500 border-2 border-blue-500 h-[4px]' />
  </div>
  <div className='mt-[50px]'>
  <div className=' text-gray-300 text-sm'>Who needs Cortavo?</div>
  <div className=' text-gray-300 text-sm'>Testimonials</div>
  <div className=' text-gray-300 text-sm'>Contact Us</div>
  <div className=' text-gray-300 text-sm'>Careers</div>
  </div>
</div>




</div>


<div className='flex items-center justify-center  mt-[20px]'>
<hr className="bg-gray-200 h-[1px] w-[90%] mx-auto" />


</div>
<div className='flex items-center justify-between mx-10 mt-2 '>
  <img src="./logo.webp" alt="" className="sm:w-auto w-[90px]" />
  <div className='flex '>
    <img src="./x.png" className='h-1/2' alt=""/>
    <img src="./insta.png" className='h-[25px]' alt=""/>
    <img src="./linkedin.png" className='h-[25px]' alt=""/>
  </div>
</div>
<div className='mx-10'>
  <p className='text-gray-300 text-sm'>Terms & ConditionsPrivacy Policy</p>
  <p className='text-gray-300 text-sm'>© 2024 Cortavo™. All Rights Reserved.</p>
</div>

</div>
    </div>

  );
}
