import React from 'react'
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/react";
import { Input } from '@nextui-org/react';
import {Calendar} from "@nextui-org/react";
import {today, getLocalTimeZone} from "@internationalized/date";
import {Select, SelectItem} from "@nextui-org/react";
import {Button} from "@nextui-org/react";



const Book = () => {

    let [date, setDate] = React.useState(today(getLocalTimeZone()));
  
    console.log(date);
  return (
    <div>
      <div className="-mt-32 relative w-full h-screen bg-blue-100 flex items-center justify-center">
      <div className="relative z-10 text-white text-center px-6">
      <Card className="max-w-[900px]">
      <CardHeader className="flex justify-center">
        </CardHeader>
      <CardBody className="px-10">
        <form action="">
            <div className="flex flex-row max-sm:flex-col gap-5">
                <div className="flex flex-col gap-5">
                <Input type="text" label="Name" />
                <Select 
                label="Select your Time" 
                className="max-w-xs" 
                >
                
                <SelectItem>
                    animal.label
                </SelectItem>
               
            </Select>
                </div>
                <div>
                <Calendar 
                aria-label="Date (Show Month and Year Picker)" 
                showMonthAndYearPickers 
                value={date} 
                onChange={setDate} 
                />
                </div>
            </div>
        </form>
      </CardBody>
      <CardFooter className="flex  max-sm:flex-row mb-3 justify-center gap-3">
  <Button color="primary">
    Book
  </Button>  
  <Button color="danger">
    Cancel
  </Button> 
</CardFooter>

    </Card>
    </div>
        <img
          src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-full h-full absolute inset-0 object-cover opacity-95"
          alt="slideshow"
        />
      </div>
    </div>
  )
}

export default Book
