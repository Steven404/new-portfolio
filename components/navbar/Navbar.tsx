'use client'

import Text from '../text/Text'
import { PageUrl, pages } from '@/modules/common'
import { useRouter } from 'next/navigation'
import { ReactNode, useState } from 'react'
import { Squash as Hamburger } from 'hamburger-react'

const isActiveClass = (pageUrl: PageUrl, currentLocation: PageUrl): boolean =>
  pageUrl === currentLocation

interface NavbarPropsType {
  children: ReactNode
  activeLink: PageUrl
}

const Navbar = ({ children, activeLink }: NavbarPropsType) => {
  const router = useRouter()

  const [isDropdownShown, setIsDropdownShown] = useState<boolean>(false)

  const handleButtonClick = (pageUrl: string) => router.push(`#${pageUrl}`)

  const handleButtonClickMobile = (pageUrl: string) => {
    handleButtonClick(pageUrl)
    setTimeout(() => setIsDropdownShown(false), 500)
  }

  return (
    <div className="font-barlow">
      <div className="burger-svg">
        <Hamburger
          size={40}
          distance="sm"
          duration={0.5}
          color="#176B87"
          toggled={isDropdownShown}
          toggle={setIsDropdownShown}
        />
      </div>
      <div className="mobile-navbar">
        <div className="mobile-title">
          <Text size="lg" weight={500} color="blue">
            SM
          </Text>
        </div>
      </div>
      <div
        className={isDropdownShown ? 'dropdown-menu' : 'dropdown-menu-hidden'}
      >
        <div className="flex flex-col items-center justify-center space-y-6 font-semibold text-gray-900 ">
          {pages.map((page) => (
            <span
              key={page.pageUrl}
              onClick={() => handleButtonClickMobile(page.pageUrl)}
              className="navbar-item"
            >
              {page.pageName}
            </span>
          ))}
        </div>
        <a
          className={isDropdownShown ? 'styled-button' : 'styled-button-hidden'}
          href="/CV.pdf"
          target="blank"
        >
          Download my CV
        </a>
      </div>
      <div className="navbar">
        <Text size="md" extra="w-[170px] lg:text-xl" weight={500}>
          SM
        </Text>
        <div className="flex justify-items-center font-semibold text-gray-900">
          {pages.map((page) => (
            <button
              key={page.pageUrl}
              onClick={() => handleButtonClick(page.pageUrl)}
              className={
                isActiveClass(page.pageUrl, activeLink)
                  ? 'active-navbar-item'
                  : 'navbar-item'
              }
            >
              {page.pageName}
            </button>
          ))}
        </div>
        <div className="flex w-[170px] justify-end">
          <a className="styled-button" href="/CV.pdf" target="blank">
            Download my CV
          </a>
        </div>
      </div>
      <div>{children}</div>
    </div>
  )
}
export default Navbar
