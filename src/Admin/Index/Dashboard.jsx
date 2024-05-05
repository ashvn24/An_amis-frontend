import React from 'react'
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";


const Dashboard = () => {
  return (
    <div className='mt-10 flex flex-row max-sm:flex-col md:justify-center md:items-center'>
      <div className='m-5 md:w-80 md:h-96'>
    <Card className="py-4">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <h2 className="font-bold text-3xl">Users</h2>
        </CardHeader>
        <CardBody className="overflow-visible py-2 mt-5">
            <h1 className="font-bold text-xl"> 54</h1>
        </CardBody>
    </Card>
</div>
      
      <div className='m-5  md:w-80 md:h-96'>

       <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h2 className="font-bold text-3xl">OverAll Booking</h2>
      </CardHeader>
      <CardBody className="overflow-visible py-2 mt-5">
        <h1 className="font-bold text-xl"> 54</h1>
      </CardBody>
    </Card>
      </div>
      <div className='m-5  md:w-80 md:h-96'>

       <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h2 className="font-bold text-3xl">Today's</h2>
      </CardHeader>
      <CardBody className="overflow-visible py-2 mt-5">
        <h1 className="font-bold text-xl"> 54</h1>
      </CardBody>
    </Card>
      </div>
    </div>
  )
}

export default Dashboard
