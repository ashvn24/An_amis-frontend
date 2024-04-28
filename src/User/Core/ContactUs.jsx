import React from "react";
import {Card, CardBody, CardHeader} from "@nextui-org/react";
import { Input, Textarea } from '@nextui-org/react';
import {Button} from "@nextui-org/react";



const ContactUs = () => {
  return (
    <div>
      <div className="-mt-32 relative w-full h-screen bg-blue-100 flex items-center justify-center">
        <div className="relative z-10 text-white text-center px-6">
          <Card className="max-w-[80rem]">
          <CardHeader className="flex justify-center">
        <p className='text-center'>Contact us</p>
        </CardHeader>
            <CardBody className="px-10">
              <div className="flex flex-row max-sm:flex-col p-3 gap-10">
                <div className="flex flex-col gap-5">
                <Input type="email" label="Name" />
                <Input type="email" label="Email" />
                <Textarea
                label="Description"
                
                className="max-w-xs"
                />
                <div className="flex flex-row text-center justify-center gap-2">
                <Button color="primary">
                    Book
                </Button>  
                <Button color="danger">
                    Cancel
                </Button> 
                </div>
                </div>
                <div>
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3904.973253924527!2d75.56585567441121!3d11.837146038735181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba42ff7866b5497%3A0x5e82d259454cb6b8!2sAn%20Amis%20%2C%20The%20Beauty%20and%20Bridal%20Avenue!5e0!3m2!1sen!2sin!4v1714319564157!5m2!1sen!2sin"
                className="w-full h-full"
                style={{ border: "0" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
                </div>
              </div>
              
            </CardBody>
          </Card>
        </div>
        <img
          src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-full h-full absolute inset-0 object-cover opacity-95"
          alt="slideshow"
        />
      </div>
    </div>
  );
};

export default ContactUs;
