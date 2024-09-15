import Section from '@/components/Section'
import React from 'react'

const page = () => {
  return (
    <>
    <Section
        imageSrc="https://m.media-amazon.com/images/I/61ZfnhNeETL._AC_UF1000,1000_QL80_.jpg"
        imageAlt="About Me Image"
        heading="About Me"
        text="I am a dedicated and detail-oriented developer with a passion for creating beautiful, user-friendly digital experiences. With years of experience in web development, I have worked on a range of projects, from simple websites to complex applications."
        marginTop={true}
        isCircular={true} // Circular image
      />
    </>
  )
}

export default page