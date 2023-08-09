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

const Navbar = ({ children, activeLink }: NavbarPropsType) => {
  const router = useRouter()

  const handleButtonClick = (pageUrl: string) => router.push(`#${pageUrl}`)

  return (
    <div className="font-barlow h-screen max-w-full">
      <div className="fixed flex w-screen justify-between space-x-5 items-center px-16 z-50 h-[8vh] bg-white bg-opacity-80 shadow-xl backdrop-blur-sm">
        <Text size="md" extra="w-[170px]" weight={500}>
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
          <button className="styled-button">Download my CV</button>
        </div>
      </div>
      <div>{children}</div>
    </div>
  )
}
export default Navbar
