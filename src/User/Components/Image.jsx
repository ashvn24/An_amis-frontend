import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";
import { Link } from "react-router-dom";

export default function ImageCard({ data1 }) {
    console.log(data1.desc);
  return (
    <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
    <Card className="col-span-12 sm:col-span-4 h-[300px]">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        {/* <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p> */}
        <h4 className="text-white font-medium text-large">{data1.op5.title}</h4>
      </CardHeader>
      <Image
        isZoomed
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src={data1.op5.image}
      />
    </Card>
    <Card className="col-span-12 sm:col-span-4 h-[300px]">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        {/* <p className="text-tiny text-white/60 uppercase font-bold">Plant a tree</p> */}
        <h4 className="text-white font-medium text-large">{data1.op4.title}</h4>
      </CardHeader>
      <Image
      isZoomed
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src={data1.op4.image}
      />
    </Card>
    <Card className="col-span-12 sm:col-span-4 h-[300px]">
      <CardHeader className="absolute z-20 top-1 flex-col !items-start">
        {/* <p className="text-tiny text-white/60 uppercase font-bold">Supercharged</p> */}
        <h4 className="text-white font-extrabold text-large">{data1.op3.title}</h4>
      </CardHeader>
      <Image
      isZoomed
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src={data1.op3.image}
      />
    </Card>
    <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-lg text-white uppercase font-bold">{data1.op2.title}</p>
        {data1.op2.desc && <>
        <h4 className="text-white font-medium text-xl">{data1.op2.desc.sub1}</h4>
        <h4 className="text-white font-medium text-xl">{data1.op2.desc.sub2}</h4>
        <h4 className="text-white font-medium text-xl">{data1.op2.desc.sub3}</h4>
        <h4 className="text-white font-medium text-xl">{data1.op2.desc.sub4}</h4>
        <h4 className="text-white font-medium text-xl">{data1.op2.desc.sub5}</h4>
        </>
        }
      </CardHeader>
      <Image
        
        isZoomed
        removeWrapper
        alt="Card example background"
        className="z-0 w-full h-full object-cover"
        src={data1.op2.image}
      />
      {/* <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
        <div>
          <p className="text-black text-tiny">Available soon.</p>
          <p className="text-black text-tiny">Get notified.</p>
        </div>
        <Button className="text-tiny" color="primary" radius="full" size="sm">
          Notify Me
        </Button>
      </CardFooter> */}
    </Card>
    <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">{data1.op1.title}</p>
        {data1.op1.desc.sub1?<>
            <h4 className="text-white font-medium text-xl">{data1.op1.desc.sub1}</h4>
        <h4 className="text-white font-medium text-xl">{data1.op1.desc.sub2}</h4>
        <h4 className="text-white font-medium text-xl">{data1.op1.desc.sub3}</h4>
        <h4 className="text-white font-medium text-xl">{data1.op1.desc.sub4}</h4>
        <h4 className="text-white font-medium text-xl">{data1.op1.desc.sub5}</h4>
        </>:<h4 className="text-white/90 font-medium text-xl">{data1.op1.desc}</h4>}
      </CardHeader>
      <Image
        isZoomed
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover"
        src={data1.op1.image}
      />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-grow gap-2 items-center">
          <Image
          isZoomed
            alt="Breathing app icon"
            className="rounded-full w-10 h-11 bg-black"
            src="https://nextui.org/images/breathing-app-icon.jpeg"
          />
          <div className="flex flex-col">
            <p className="text-tiny text-white/60">{data1.op1.details.d1}</p>
            <p className="text-tiny text-white/60">{data1.op1.details.d2}</p>
          </div>
        </div>
        <Link to={'/contact'}> <Button radius="full" size="sm">Contact us</Button></Link>
      </CardFooter>
    </Card>
  </div>
  );
}
