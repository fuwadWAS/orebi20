import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Heading from '../Heading'
import List from '../List'
import Image from '../Image'
import Logo from '../../assets/logo.png'


const Footer = () => {
  return (
    <section className="pt-[55px] pb-[59px] bg-[#F5F5F3]">
        <Container>
            <Flex className="mb-[65px]">
                <div className="w-[53px] h-[179px] mr-[145px]">
                    <Heading className="font-bold font-DM text-[#262626] text-[16px] leading-[23px] pb-[17px]" text="MENU" as="h1"/>
                    <ul>
                        <List className="pb-[10px] leading-[23px]" href="#" text="Home"/>
                        <List className="pb-[6px] leading-[23px]" href="#" text="Shop"/>
                        <List className="pb-[6px] leading-[23px]" href="#" text="About"/>
                        <List className="pb-[6px] leading-[23px]" href="#" text="Contact"/>
                        <List className="pb-[6px] leading-[23px]" href="#" text="Journal"/>
                    </ul>
                </div>
                <div className="w-[73px] h-[179px] mr-[141px]">
                    <Heading className="font-bold font-DM text-[#262626] text-[16px] leading-[23px] pb-[17px]" text="MENU" as="h1"/>
                    <ul>
                        <List className="pb-[6px] leading-[23px]" href="#" text="Category 1"/>
                        <List className="pb-[6px] leading-[23px]" href="#" text="Category 2"/>
                        <List className="pb-[6px] leading-[23px]" href="#" text="Category 3"/>
                        <List className="pb-[6px] leading-[23px]" href="#" text="Category 4"/>
                        <List className="pb-[6px] leading-[23px]" href="#" text="Category 5"/>
                    </ul>
                </div>
                <div className="w-[129px] h-[179px] mr-[145px]">
                    <Heading className="font-bold font-DM text-[#262626] text-[16px] leading-[23px] pb-[17px]" text="MENU" as="h1"/>
                    <ul>
                        <List className="pb-[6px] leading-[23px]" href="#" text="Privacy Policy"/>
                        <List className="pb-[6px] leading-[23px]" href="#" text="Terms & Conditions"/>
                        <List className="pb-[6px] leading-[23px]" href="#" text="Special E-shop"/>
                        <List className="pb-[6px] leading-[23px]" href="#" text="Shipping"/>
                        <List className="pb-[6px] leading-[23px]" href="#" text="Secure Payments"/>
                    </ul>
                </div>
                <div className="w-[262px] mr-[256px]">
                    <Heading className="font-bold font-DM text-[#262626] text-[16px] leading-[24px] w-[186px] pb-[15px]" text="(052) 611-5711 company@domain.com" as="h2"/>
                    <a href="#" className="font-DM font-regular text-[14px] text-[#6D6D6D]">575 Crescent Ave. Quakertown, PA 18951</a>
                </div>
                <div className="w-[230px] h-[30px]">
                    <Image src={Logo}/>
                </div>
            </Flex>
            <Flex className="justify-between">
                <div className="gap-x-[10px] flex w-[92px] justify-between">
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-linkedin-in"></i>
                    <i class="fa-brands fa-instagram"></i>
                </div>
                <a href="#" className="font-DM font-regular text-[14px] text-[#6D6D6D]">2020 Orebi Minimal <span className='font-bold text-red-500'>eCommerce</span> Figma Template by Adveits</a>
            </Flex>
        </Container>
    </section>
  )
}

export default Footer

