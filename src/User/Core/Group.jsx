import React from "react";
import ImageCard from "../Components/Image";
import bride from '../../assets/bride.jpg'
import hair from "../../assets/hair.jpg"
import henna from "../../assets/henna.jpg"
import color from "../../assets/color.jpg"
import dand from "../../assets/dand.jpg"
import eyeb from "../../assets/eyeb.jpg"
import perm from "../../assets/perm.jpg"
import acne from "../../assets/acne.jpg"
import man from "../../assets/man.jpeg"
import pierce from "../../assets/pearce.jpg"
import clean from "../../assets/clean.webp"
import wax from "../../assets/wax.jpg"
import wart from "../../assets/wart.png"
import bleach from "../../assets/bleach.png"
import cut from "../../assets/cut.jpeg"


const Group = () => {

    const data1={
        op1:{
        title:"Bridal bookings open now",
        desc:" Prebook your HD bridal make-up @ just 10,000/-",
        details:{d1:"For more details on bridal package",
                d2:"and others contact us"
        },
        image:bride
        },
       op2:{
        title:"Eyebrow Tattooing",
        image:eyeb
       },
        op3:{
            title:"Mehandi Designing",
            image:henna
        },
        op4:{
            title:"Hair Coloring",
            image:color
        },
        op5:{
            title:"Dandruff Treatment",
            image:dand
        }
    }
    const data2={
        op1:{
            title:"Hair",
            desc:{
                sub1:"Botox treatment",
                sub2:"Straightening",
                sub3:"Smoothening",
                sub4:"Volumizing",
                sub5:"Wash",
            },
            details:{d1:"For more details on bridal package",
                    d2:"and others contact us"
            },
            image:hair
            },
            op2:{
                title:"Perming",
                image:perm
               },
            op3:{
                title:"Acne Treatment",
                image:acne
            },
            op4:{
                title:"Manicure & Pedicure",
                image:man
            },
            op5:{
                title:"Ear Piercing",
                image:pierce
            }
    }
    const data3={
        op1:{
            title:"",
            desc:"clean up",
            details:{d1:"For more details on bridal package",
                    d2:"and others contact us"
            },
            image:clean
            },
           op2:{
            title:"Body Waxing",
            image:wax
           },
            op3:{
                title:"Wart Removing",
                image:wart
            },
            op4:{
                title:"Hair Bleach",
                image:bleach
            },
            op5:{
                title:"Hair Cut",
                image:cut
            }
        }
    

  return (
    <div className=" flex flex-col  justify-center items-center -mt-32 relative bg-gray-400 ">
      <div className="mt-40 flex flex-col gap-2">
        <ImageCard data1={data1}/>
        <ImageCard data1 = {data2}/>
         <ImageCard data1 = {data3} />
      </div>
    </div>
  );
};

export default Group;
