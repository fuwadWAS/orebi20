import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import List from '../List'

const Navber = () => {
  return (
    <section className="py-[31px] bg-[#FFF]">
        <Container>
            <Flex>
                <div className="w-[20%]">
                  
                </div>
                <div className="w-[80%] ml-[400px]">
                    <ul>
                        <Flex className="gap-x-[40px]">
                          <List className="hover:text-[#262626] hover:font-bold" text="Home"/>
                          <List className="hover:text-[#262626] hover:font-bold" text="Shop"/>
                          <List className="hover:text-[#262626] hover:font-bold" text="About"/>
                          <List className="hover:text-[#262626] hover:font-bold" text="Contacts"/>
                          <List className="hover:text-[#262626] hover:font-bold" text="Journal"/>
                        </Flex>
                    </ul>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Navber