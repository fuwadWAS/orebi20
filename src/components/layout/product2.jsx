import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import SubHeader from '../SubHeader'
import Star from '../icons/Star'
import Heading from '../Heading'
import Button from '../Button'
import Paragraph from '../Paragraph'
import Level from '../Level'
import Input from '../Input'
import { GoTriangleDown } from "react-icons/go";
import { GoPlus } from "react-icons/go";
import { RxDividerHorizontal } from "react-icons/rx";



const product2 = ({Vasket, Sunglass, Headphone, Table}) => {
  return (
   <section className='pt-[136px] pb-[39px]'>
      <Container>
        <Flex className="flex-wrap gap-[40px]">
            <div className="w-[780px] h-[780px]">
                <Image className="h-[100%] w-[100%]" src={Vasket}/>
            </div>
            <div className="w-[780px] h-[780px]">
                <Image className="w-[100%] h-[100%]" src={Sunglass}/>
            </div>
            <div className="w-[780px] h-[780px]">
                <Image className="w-[100%] h-[100%]" src={Headphone}/>
            </div>
            <div className="w-[780px] h-[780px]">
                <Image className="w-[100%] h-[100%]" src={Table}/>
            </div>
        </Flex>
        <div className="pt-[49px] pb-[123px] w-[780px]">
          <div className="border-b-2 border-[#F0F0F0] pb-[24px]">
            <SubHeader text="Product"/>
            <Flex className="mt-[15px] gap-x-[25px] items-center">
              <Flex className="">
                <Star/> <Star/> <Star/> <Star/> <Star/>
              </Flex>
              <Heading className="font-regular font-DM text-[#767676] text-[14px]" text="1 Review" as="h5"/>
            </Flex>
            <Flex className="gap-x-[22px] mt-[21px] items-center ">
                <Heading className="font-regular font-DM text-[#767676] text-[14px]" text="$88.00" as="h5"/>
                <Heading className="font-bold font-DM text-[#262626] text-[20px] " text="$44.00" as="h5"/>
            </Flex>
          </div>
          <div className="border-b-2 border-[#F0F0F0] pb-[30px]">
              <Flex className="gap-x-[53px] mt-[29px]">
               <Heading className="font-bold font-DM text-[#262626] text-[16px]" text="COLOR:" as="h5"/>
                <Flex className="gap-x-[15px]">
                    <div className="w-[20px] h-[20px] rounded-full bg-[#979797]"></div>
                    <div className="w-[20px] h-[20px] rounded-full bg-[#FF8686]"></div>
                    <div className="w-[20px] h-[20px] rounded-full bg-[#7ED321]"></div>
                    <div className="w-[20px] h-[20px] rounded-full bg-[#B6B6B6]"></div>
                    <div className="w-[20px] h-[20px] rounded-full bg-[#15CBA5]"></div>
                </Flex>
            </Flex>
            <Flex className="mt-[30px] gap-x-[76px] items-center">
              <Heading className="font-bold font-DM text-[#262626] text-[16px]" text="SIZE:" as="h5"/>
             <Flex className="w-[139px] h-[36px] border-2 border-[#D8D8D8] items-center justify-between px-[15px]">
                <Heading className="font-regular font-DM text-[#767676] text-[16px]" text="S" as="h4"/>
                <a href="#" className='text-[#767676]'><GoTriangleDown/></a>
             </Flex>
            </Flex>
            <Flex className="mt-[30px] gap-x-[29px] items-center">
              <Heading className="font-bold font-DM text-[#262626] text-[16px]" text="QUANTITY:" as="h5"/>
             <Flex className="w-[139px] h-[36px] border-2 border-[#D8D8D8] items-center justify-between px-[15px]">
                <a href="#" className='text-[#767676]'><GoPlus /></a>
                <Heading className="font-regular font-DM text-[#767676] text-[16px]" text="1" as="h4"/>
                <a href="#" className='text-[#767676]'><RxDividerHorizontal /></a>
             </Flex>
            </Flex>
          </div>
          <Flex className="gap-x-[27px] mt-[21px] border-b-2 border-[#F0F0F0] pb-[30px]">
            <Heading className="font-bold font-DM text-[#262626] text-[16px]" text="STATUS:" as="h4"/>
            <Heading className="font-regular font-DM text-[#767676] text-[16px]" text="In stock" as="h4"/>
          </Flex>
          <Flex className="mt-[29px] gap-x-[20px] border-b-2 border-[#F0F0F0] pb-[30px]">
            <Button className="w-[200px] py-[16px]" text="Add to Wish List"/>
            <Button className="w-[200px] py-[16px]" text="Add to Cart"/>
          </Flex>
          <Flex className="py-[24px] justify-between border-b-2 border-[#F0F0F0]">
            <Heading className="font-bold font-DM text-[#262626] text-[16px]" text="FEATURES & DETAILS" as="h4"/>
            <a href="#" className='text-[#767676]'><GoPlus /></a>
          </Flex>
          <Flex className="py-[24px] justify-between border-b-2 border-[#F0F0F0]">
            <Heading className="font-bold font-DM text-[#262626] text-[16px]" text="SHIPPING & RETURNS" as="h4"/>
           <a href="#" className='text-[#767676]'> <GoPlus /></a>
          </Flex>
          <Paragraph className="font-regular font-DM text-[#767676] text-[16px] leading-[30px] pt-[19px]" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
        </div>
        <div className="pb-[15px] border-b-2 border-[#F0F0F0]">
            <Flex className="gap-x-[62px]">
              <Heading className="font-regular font-DM text-[#767676] text-[20px]" text="Description" as="h3"/>
              <Heading className="font-bold font-DM text-[#262626] text-[20px]" text="Reviews (1)" as="h3"/>
            </Flex>
            <Heading className="font-regular font-DM text-[#767676] text-[16px] pt-[42px] pb-[16px] border-b-2 border-[#F0F0F0]" text="1 review for Product" as="h5"/>
            <Flex className="mt-[23px] mb-[14px] gap-x-[25px] items-center">
              <Heading className="font-regular font-DM text-[#767676] text-[14px]" text="John Ford" as="h5"/>
              <Flex className="">
                <Star/> <Star/> <Star/> <Star/> <Star/>
              </Flex>
            </Flex>
            <Paragraph className="font-regular font-DM text-[#767676] text-[16px] leading-[30px]" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."/>
        </div>
        <div className="mt-[53px] w-[780px] mb-[341px]">
           <Heading className="font-bold font-DM text-[#262626] text-[20px] pb-[48px]" text="Add a Review" as="h2"/>
            <div className="mb-[23px]">
              <Level levelName="Name"/>
              <Input type="text" placeholder="your name here "/>
            </div>
            <div className="mb-[23px]">
              <Level levelName="Email"/>
              <Input type="email" placeholder="Your email here"/>
            </div>
            <div className="">
              <Level levelName="Review"/>
              <textarea className='focus:outline-none' placeholder='Your review here'  cols='100'/>
            </div>
            <Button className="w-[200px] py-[16px] mt-[30px]" text="Post"/>
        </div>
      </Container>
   </section>
  )
}

export default product2