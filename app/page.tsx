'use client'

import AboutMe from '@/pageParts/aboutMe/AboutMe'
import Home from '@/pageParts/home/Home'
import { useRef, useState } from 'react'
import { PageUrl, pages } from '@/modules/common'
import { useParams, useRouter } from 'next/navigation'
import Navbar from '@/components/navbar/Navbar'
import WorkExperience from '@/pageParts/workExperience/WorkExperience'

const App = () => {
  const refs = useRef<Array<HTMLDivElement | null>>(new Array())
  const params = useParams()

  const [activeLink, setActiveLink] = useState<PageUrl>('')

  const handleScroll = () => {
    if (refs.current && typeof window !== 'undefined') {
      refs.current.forEach((ref, index) => {
        if (
          ref &&
          Math.abs(ref.getBoundingClientRect().top) < window.innerHeight / 2
        ) {
          setActiveLink(index === 0 ? '' : pages[index - 1].pageUrl)
        }
      })
    }
  }

  // useEffect(() => {
  //   if (refs.current && typeof window !== 'undefined') {
  //     const sectionToJumpTo = window.location.hash.split('#')[1]
  //     const coorespondingPageIndex =
  //       pages.findIndex((page) => page.pageUrl === sectionToJumpTo) + 1
  //     refs.current[coorespondingPageIndex]?.scrollIntoView()
  //   }
  // }, [params])

  return (
    <div
      onScroll={handleScroll}
      className="h-screen overflow-y-auto scroll-smooth"
    >
      <Navbar activeLink={activeLink}>
        <Home ref={(element) => (refs.current[0] = element)} />
        <AboutMe ref={(element) => (refs.current[1] = element)} />
        <WorkExperience ref={(element) => (refs.current[2] = element)} />
      </Navbar>
    </div>
  )
}

export default App
