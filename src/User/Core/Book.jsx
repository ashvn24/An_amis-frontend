import React, { useEffect, useState } from 'react'
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/react";
import { Input } from '@nextui-org/react';
import {Calendar} from "@nextui-org/react";
import {today, getLocalTimeZone} from "@internationalized/date";
import {Select, SelectItem} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { axiosInstance } from '../../Axios/AxiosInstance';



const Book = () => {
  const access = localStorage.getItem('access')
  const nav = useNavigate()
  let [date, setDate] = React.useState(today(getLocalTimeZone()));

  const [formData, setFormData] = useState({
    name:"",
    phone:"",
    time:""
  })
  
  const timeRanges = [
    '9:30-10:30', '10:30-11:30', '11:30-12:30', '12:30-1:30',
    '1:30-2:30', '2:30-3:30', '3:30-4:30', '4:30-5:30',
    '5:30-6:30', '6:30-7:30'
  ];
  
  
  const handleChange = (e) => {
    const {name, value } = e.target

    setFormData({
      ...formData,
      [name]:value
    }) 
  }

  useEffect(() => {
    if (access === null ){
      nav('/signin')
      toast('login first')
    }
  }, [])
  
  const handleSubmit =(e) => {
    e.preventDefault()
    console.log(formData);
    console.log(date.year+"-"+date.month+"-"+date.day);
    const appointment = date.year+"-"+date.month+"-"+date.day
    const isValid = Object.values(formData).every(value=>value!=='');
    if (isValid){
      const data = new FormData()
      data.append('Name', formData.name)
      data.append('Phone', formData.phone)
      data.append('time', formData.time)
      data.append('date', appointment)

      toast.promise(
        axiosInstance.post(`/book/create/`, data),

        {
          loading: 'please wait...', // Message shown while waiting for the response
          success: 'Booking successful!', // Message shown on successful login
          error: 'failed', // Message shown on login failure
        }
      )
    }else{
      toast.error('fill all fields')
    }
  }
  
  return (
    <div>
      <div className="-mt-32 relative w-full h-screen bg-blue-100 flex items-center justify-center">
      <div className="relative z-10 text-white text-center px-6">
        <form onSubmit={(e)=>handleSubmit(e)}>
      <Card className="max-w-[900px]">
      <CardHeader className="flex justify-center">
        </CardHeader>
      <CardBody className="px-10">
            <div className="flex flex-row max-sm:flex-col gap-5">
                <div className="flex flex-col gap-5">
                <Input type="text" label="Name" name='name' onChange={handleChange} value={formData.name}/>
                <Input type="text" label="Phone" name='phone' onChange={handleChange} value={formData.phone} />
                <Select 
                label="Select your Time" 
                className="max-w-xs" 
                name='time'
                value={formData.time}
                onChange={handleChange}
                >
                {timeRanges.map((timeRange, index) => (
        <SelectItem key={index} value={timeRange}>{timeRange}</SelectItem>
      ))}
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
      </CardBody>
      <CardFooter className="flex  max-sm:flex-row mb-3 justify-center gap-3">
  <Button type='submit' color="primary">
    Book
  </Button>  
  <Button color="danger">
    Cancel
  </Button> 
</CardFooter>

    </Card>
        </form>
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
