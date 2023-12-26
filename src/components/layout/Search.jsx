import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Heading from '../Heading';
import BarsIcon from '../icons/BarsIcon';
import BarsIcon1 from '../icons/BarsIcon1';
import BarsIcon2 from '../icons/BarsIcon2';
import { FaSearch } from "react-icons/fa";


const Search = () => {
  return (
    <section className='h-[100px] bg-[#F5F5F3] border-y border-[#767676]'>
        <Container>
            <Flex >
                <div className="w-[25%] mr-[10px] pt-[40px] ">
                <Flex className="items-center gap-x-[10px]">
                    <BarsIcon/>
                    <Heading className="font-DM font-regular text-[#262626] text-[14px]" text="Shop by Category" as="h3"/>
                </Flex>
                </div>
                <div className="w-[50%] text-center py-[25px] relative">
                  <input type="text" placeholder="Search Products " className=' py-[16px] px-[21px] w-[600px] text-[#C4C4C4] font-regular font-DM'>
                  </input>
                  <FaSearch className="absolute top-[45px] right-[120px]"/>
                </div>
                <div className="w-[25%] py-[42px]">
                   <Flex className="gap-x-[41px] justify-end">
                     <BarsIcon2/>
                     <BarsIcon1/>
                   </Flex>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Search