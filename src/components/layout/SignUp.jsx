import React from 'react'
import Container from '../Container'
import Header from '../Header'
import Paragraph from '../Paragraph'
import SubHeader from '../SubHeader'
import Level from '../Level'
import Input from '../Input'
import Flex from '../Flex'
import Heading from '../Heading'

const SignUp = () => {
  return (
   <section className='pt-[124px] pb-[140px] border-2 border-red-500'>
    <Container>
       <Header text="Sign up"/>
       <div className="pb-[62px] border-b-2 border-[#F0F0F0]">
          <Paragraph className="pt-[127px] w-[644px] pr-[20px] " text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the."/>
       </div>
       <div className="mt-[57px] mb-[58px]">
          <SubHeader text="Your Personal Details"/>
          <Flex className="gap-x-[39px]">
            <div className="w-[508px] mt-[42px]">
              <div className="mb-[23px]">
                <Level levelName="First Name"/>
                <Input type="text" placeholder="First Name "/>
              </div>
              <div className="">
                <Level levelName="Email"/>
                <Input type="email" placeholder="Your email here"/>
              </div>
              </div>
              <div className="w-[508px] mt-[42px]">
              <div className="mb-[23px]">
                <Level levelName="Last Name"/>
                <Input type="text" placeholder="Last Name"/>
              </div>
              <div className="">
                <Level levelName="Telephone"/>
                <Input type="email" placeholder="Your phone number"/>
              </div>
            </div>
          </Flex>
          <div className="border border-[#F0F0F0] mt-[69px]"></div>
       </div>
       <div className="mt-[57px] mb-[58px]">
          <SubHeader text="New Customer"/>
          <Flex className="gap-x-[39px]">
            <div className="w-[508px] mt-[42px]">
              <div className="mb-[23px]">
                <Level levelName="Address 1"/>
                <Input type="text" placeholder="4279 Zboncak Port Suite 6212 "/>
              </div>
              <div className="mb-[23px]">
                <Level levelName="City"/>
                <Input type="email" placeholder="Your city"/>
              </div>
              <div className="">
                <Level levelName="Country"/>
                <Input type="email" placeholder="Please select"/>
              </div>
              </div>
              <div className="w-[508px] mt-[42px]">
              <div className="mb-[23px]">
                <Level levelName="Address 2"/>
                <Input type="text" placeholder="-"/>
              </div>
              <div className="mb-[23px]">
                <Level levelName="Post Code"/>
                <Input type="email" placeholder="05228"/>
              </div>
              <div className="">
                <Level levelName="Region/State"/>
                <Input type="email" placeholder="Please select"/>
              </div>
            </div>
          </Flex>
          <div className="border border-[#F0F0F0] mt-[69px]"></div>
       </div>
       <div className="mt-[57px]">
          <SubHeader text="New Customer"/>
          <Flex className="gap-x-[39px]">
            <div className="w-[508px] mt-[42px]">
              <div className="">
                <Level levelName="Password"/>
                <Input type="text" placeholder="Password "/>
              </div>
              </div>
              <div className="w-[508px] mt-[42px]">
              <div className="">
                <Level levelName="Repeat Password"/>
                <Input type="text" placeholder="Repeat password"/>
              </div>
            </div>
          </Flex>
          <div className="border border-[#F0F0F0] mt-[69px]"></div>
       </div>
       <input type="checkbox"/>  I have read and agree to the Privacy Policy
       <Flex className="gap-x-[35px]">
        <Heading text="Subscribe Newsletter" as="h5"/>
        <input type="checkbox"/>Yes
        <input type="checkbox"/>No
       </Flex>
    </Container>
   </section>
  )
}

export default SignUp