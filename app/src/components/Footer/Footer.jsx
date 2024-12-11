import React from 'react'
import ListItem from './ListItem'
import ListHead from './ListHead'
import Socials from './Socials'

function Footer() {
  return (
    <>
      <div className='flex flex-col sm:flex-row sm:justify-evenly gap-x-10 py-10 bg-[#0F0D0E] text-white px-3 mt-10'>
        <div>
          <ul className='list-none'>
            <ListHead text={"bigbasket"}/>
            <ListItem text={"About Us"}/>
            <ListItem text={"Become A bigbasket Rider"}/>
            <ListItem text={"In News"}/>
            <ListItem text={"Green bigbasket"}/>
            <ListItem text={"Privacy Policy"}/>
            <ListItem text={"Terms and Conditions"}/>
          </ul>
        </div>

        <div className='py-5 sm:py-0'>
          <ul className='list-none'>
            <ListHead text={"About"}/>
            <ListItem text={"FAQs"}/>
            <ListItem text={"Contact Us"}/>
            <ListItem text={"bb Wallet FAQs"}/>
            <ListItem text={"bb Wallet T&Cs"}/>
            <ListItem text={"Vendor Connect"}/>
          </ul> 
        </div>
        <hr className='sm:hidden'/>
        <div className='flex items-center flex-col gap-y-10 py-5'>
          <div>
            <img src="/bigbasket_black.svg"/>
          </div>
          <div className='flex gap-x-5'>
            <a href="https://play.google.com/store/apps/details?id=com.bigbasket.mobileapp"
            className='cursor-pointer hover:shadow-md hover:shadow-emerald-200'
            >
              <img src="/playstore.svg" />
            </a>
            <a href="https://apps.apple.com/in/app/bigbasket-grocery-app/id660683603?ign-mpt=uo%3D4"
            className='cursor-pointer hover:shadow-md hover:shadow-blue-300'
            >
              <img src="/appstore.svg" />
            </a>
          </div>
          <div className='w-full'> 
            <Socials />
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center gap-x-2 py-5 text-mono font-semibold bg-[#0F0D0E] '>
          <a href="https://github.com/sameer-saharan/bigbasket-cw">
            <img src="/github-svgrepo-com.svg" className='w-8'/>
          </a>
          <a href="https://github.com/sameer-saharan/bigbasket-cw"
          className='cursor-pointer text-white hover:text-[#A0CD4A]'
          >
            @sameersaharan
          </a>
      </div>
  
    </>
    
  )
}

export default Footer