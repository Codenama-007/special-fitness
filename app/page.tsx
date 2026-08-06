import React from 'react'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import Experience from '@/components/ExperienceSection'
import Programs from '@/components/Program'
import SuccessStories from '@/components/Stories'
import Membership from '@/components/Membership'
import Products from '@/components/Products'
import Footer from '@/components/FooterSection'
import SmoothScroll from '@/components/SmoothScroll'

const page = () => {
  return (
    <SmoothScroll>
      <div className='min-h-screen flex flex-col items-center justify-between overflow-x-hidden'>
        <Navbar />
        <HeroSection
          title="TRANSFORM YOUR BODY. TRANSFORM YOUR LIFE."
          subtitle="Join Special Fitness and train with certified coaches, modern equipment, personalized workout plans, and a motivating community."
          image='/images/Banner.jpg'
          buttonText="Join Now"
          buttonLink="/membership"
        />
        <Experience />
        <Programs />
        <SuccessStories />
        <Membership />
        <Products />
        <Footer />
      </div>
    </SmoothScroll>
  )
}

export default page