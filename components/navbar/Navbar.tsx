'use client'

import Text from '../text/Text'
import { PageUrl, pages } from '@/modules/common'
import { useRouter, useParams } from 'next/navigation'
import { ReactNode, useEffect, useState } from 'react'

const isActiveClass = (pageUrl: PageUrl, currentLocation: PageUrl): boolean =>
  pageUrl === currentLocation

interface NavbarPropsType {
  children: ReactNode
  activeLink: PageUrl
}

const downloadCV = () => {
  if (typeof window !== 'undefined') {
    window.location.href = '/CV.pdf'
  }
}

const Navbar = ({ children, activeLink }: NavbarPropsType) => {
  const router = useRouter()

  const [isDropdownShown, setIsDropdownShown] = useState<boolean>(false)

  const handleButtonClick = (pageUrl: string) => router.push(`#${pageUrl}`)

  const handleBurgerClick = () =>
    setIsDropdownShown((currentState) => !currentState)

  return (
    <div className="font-barlow">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2.5}
        stroke="#176B87"
        className="burger-svg"
        onClick={handleBurgerClick}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
      <div
        className={
          isDropdownShown ? 'dropdown-menu' : 'max-h-0 overflow-hidden'
        }
      >
        <div className="flex flex-col items-center justify-center space-y-6 font-semibold text-gray-900 ">
          {pages.map((page) => (
            <span
              key={page.pageUrl}
              onClick={() => handleButtonClick(page.pageUrl)}
              className="navbar-item"
            >
              {page.pageName}
            </span>
          ))}
        </div>
        <a className="styled-button" href="/CV.pdf" target="blank">
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
