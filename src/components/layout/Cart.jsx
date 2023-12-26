import React from 'react'
import Container from '../Container'
import Header from '../Header'
import Flex from '../Flex'
import Heading from '../Heading'
import { ImCross } from "react-icons/im";
import Image from '../Image'
import Sunglass from '../../assets/sunglass.png'
import { GoTriangleDown } from "react-icons/go";
import { GoPlus } from "react-icons/go";
import { RxDividerHorizontal } from "react-icons/rx";
import Button from '../Button'


const Cart = () => {
  return (
    <section className='pt-[124px] pb-[140px] border-2 border-red-500'>
        <Container>
            <Header className="" text="Cart"/>
            <div className="pt-[136px] pb-[140px]">
                <Flex className="py-[22px] pl-[20px] pr-[344px] bg-[#F5F5F3] justify-between">
                  <Heading className="font-bold font-DM text-[16px] text-[#262626]" text="Product" as="h3"/>
                  <Heading className="font-bold font-DM text-[16px] text-[#262626]" text="Price" as="h3"/>
                  <Heading className="font-bold font-DM text-[16px] text-[#262626]" text="Quantity" as="h3"/>
                  <Heading className="font-bold font-DM text-[16px] text-[#262626]" text="Total " as="h3"/>
                </Flex>
                <Flex className="border-2 border-[#F0F0F0] py-[30px] pl-[20px] items-center">
                  <a href="#" className='text-[#767676]'><ImCross /></a>
                  <div className="h-[100px] w-[100px] ml-[40px] mr-[20px]"><Image src={Sunglass}/></div>
                  <Heading className="font-bold font-DM text-[16px] text-[#262626]" text="Product name" as="h3"/>
                  <Heading className="font-bold font-DM text-[16px] text-[#262626] ml-[123px]" text="$44.00" as="h3"/>
                  <Flex className="w-[139px] h-[36px] border-2 border-[#D8D8D8] items-center justify-between px-[15px] ml-[312px] mr-[292px]">
                    <a href="#" className='text-[#767676]'><RxDividerHorizontal /></a>
                    <Heading className="font-regular font-DM text-[#767676] text-[16px]" text="1" as="h4"/>
                    <a href="#" className='text-[#767676]'><GoPlus /></a>
                   </Flex>
                   <Heading className="font-bold font-DM text-[16px] text-[#262626] " text="$44.00" as="h3"/>
                </Flex>
                <Flex className="py-[20px] border-x-2 border-b-2 items-center">
                    <Flex className="w-[255px] h-[50px] border-2 border-[#D8D8D8] items-center justify-between px-[15px] ml-[20px]">
                        <Heading className="font-regular font-DM text-[#767676] text-[16px]" text="SIZE" as="h4"/>
                        <a href="#" className='text-[#767676]'><GoTriangleDown/></a>
                    </Flex>
                    <Heading className="font-bold font-DM text-[16px] text-[#262626] ml-[23px]" text="Apply coupon" as="h3"/>
                    <Heading className="font-bold font-DM text-[16px] text-[#262626] ml-[1050px]" text="Update cart" as="h3"/>
                </Flex> 
            </div>
        </Container> 
        <Container className="flex justify-end ">
            <div className=''>
               <Heading className="font-bold font-DM text-[16px] text-[#262626] text-end pt-[54px] pb-[24px]" text="Cart totals" as="h3"/>
               <table className='w-[646px]'>
                  <tr className=''>
                    <td className='border-2 py-[14px] px-[20px] font-bold font-DM text-[16px] text-[#262626]'>Subtotal</td>
                    <td className='border-2 py-[14px] px-[20px] font-regular font-DM text-[16px] text-[#767676]'>389.99 $</td>
                  </tr>
                  <tr>
                    <td className='border-2 py-[14px] px-[20px] font-bold font-DM text-[16px] text-[#262626]'>Total</td>
                    <td className='border-2 py-[14px] px-[20px] font-regular font-DM text-[16px] text-[#262626]'>389.99 $</td>
                  </tr>
               </table>
                <div className="text-end">
                   <Button className="w-[200px] h-[50px] mt-[30px]" text="Proceed to Checkout"/>
                </div>
           </div>
        </Container>                   
    </section>
  )
}

export default Cart