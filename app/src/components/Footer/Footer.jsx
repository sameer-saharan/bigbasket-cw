import React from 'react'
import ListItem from './ListItem'
import ListHead from './ListHead'
import Socials from './Socials'

function Footer() {
  return (
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
          <img src="/playstore.svg" />
          <img src="/appstore.svg" />
        </div>
        <div className='flex gap-x-5'>
          
          <Socials />
          

          {/* <img src="/fb-logo.svg"  />
          <img src="/insta-logo.svg"  />
          <img src="/twitter-logo.svg"  />
          <img src="/pintrest-logo.svg"  /> */}
        </div>
      </div>
    </div>
  )
}

export default Footer