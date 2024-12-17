'use client'
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { useParams } from "next/navigation";
import { Check, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

// Add keys to the star array
let star = [0, 1, 2, 3, 4].map((i) => <FaStar key={`star-${i}`} />);

interface Iproducts{
    title:string,
    price: string,
    id: number,
    rating?: string,
    old_price?: string,
    img_url: string,
    img1:string,
    img2: string,
    img3: string, 
}
let product:Iproducts[] = [
    {
      title: "T-SHIRT WITH TAPE DETAILS",
      id: 5,
      price: "$120",
      img_url: "/images/pic1.png",
      img1:"/images/pic9.png", 
      img2:"/images/pic10.png", 
      img3:"/images/pic11.png", 
    },
    {
      title: "SKINNY FIT JEANS",
      id: 6,
      price: "$240",
      img_url: "/images/pic2.png",
      old_price: "$260",
      img1:"/images/pic9.png", 
      img2:"/images/pic10.png", 
      img3:"/images/pic11.png", 
      },
      {
      title: "CHECKERED SHIRT",
      id: 7,
      price: "$180",
      img_url: "/images/pic3.png",
      img1:"/images/pic9.png", 
      img2:"/images/pic10.png", 
      img3:"/images/pic11.png",   
      },
      {
      title: "SLEEVE STRIPED T-SHIRT",
      id: 8,
      price: "$130",
      img_url: "/images/pic4.png",
      old_price: "$160",
      img1:"/images/pic9.png", 
      img2:"/images/pic10.png", 
      img3:"/images/pic11.png",  
      },
]

export default function Pro_Detail(){
  const  params = useParams();
  const id =  params.id  // Get dynamic id here 
  const item = product.find((item) => item.id === Number(id))
  if (!item) {
    return <h1>Product not found</h1>

  }
  return(
        <div className="flex flex-col md:flex-row justify-center sm:justify-evenly sm:mt-10 p-5 sm:p-0">
          {/*Left content */}
          <div className="flex sm:flex-col justify-between items-center w-full sm:w-[152px] order-2 sm:order-1">
            {/* Images */}
            <Image src={item.img1} className="w-[100px] sm:w-full h-[100px] sm:h-[150px]" alt="productdetail" width={100} height={100} ></Image>
            <Image src={item.img2} className="w-[100px] sm:w-full h-[100px] sm:h-[150px] sm:mt-3" alt="productdetail" width={100} height={100} ></Image>
            <Image src={item.img3} className="w-[100px] sm:w-full h-[100px] sm:h-[150px] sm:mt-3" alt="productdetail" width={100} height={100} ></Image>
            </div>

            {/* Mid div */}
            <div className="w-full sm:w-[444px] h-[260px] sm:h-[500px] mt-5 sm:mt-0 order-1 sm:order-2">
             <Image src={item.img1} alt="productdetail" className="w-full h-[95%]" width={100} height={100}></Image>
            </div>

           {/* Right content */}
           <div className="w-full sm:w-[600px] h-[500px] mt-3 order-3">
            <h1 className="text-2xl md:text-3xl font-bold">One Life Graphic T-shirt</h1>
            <div className="flex text-yellow-400">
              {star}
            </div>

            <p className="font-bold mt-1">{item.price} <span>{item.old_price}</span></p>
            <p>This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>

            {/*Select color */}
            <div className="mt-5">
              <p className="text-gray-500">Select Colors</p>
              <div className="flex space-x-3 mt-2">
                <div className="w-[37px] h-[37px] bg-[#4F4631] rounded-full flex justify-center items-center"><Check className="text-white opacity-0 hover:opacity-100 cursor-pointer"/></div>
                <div className="w-[37px] h-[37px] bg-[#314F4A] rounded-full flex justify-center items-center"><Check className="text-white opacity-0 hover:opacity-100 cursor-pointer"/></div>
                <div className="w-[37px] h-[37px] bg-[#31344F] rounded-full flex justify-center items-center"><Check className="text-white opacity-0 hover:opacity-100 cursor-pointer"/></div>
              </div>
            </div>

            {/* Choose Size */}
          <div className="mt-4">
          <p className="text-gray-500">Choose Size</p>
          <div className="flex space-x-3 mt-2">
            {["Small", "Medium", "Large", "X-Large"].map((size, i) => (
              <div
                key={`size-${i}`}
                className="w-[90px] h-[40px] flex justify-center items-center rounded-[62px] bg-[#F0F0F0] text-gray-400"
              >
                {size}
              </div>
            ))}
          </div>
        </div>

            {/* Buttons */}
            <div className="flex justify-start items-center mt-7 space-x-4">
              <div className="w-[100px] h-[40px] flex justify-between p-3 items-center rounded-[62px] bg-[#F0F0F0] text-gray-400">
                <Minus />
                1
                <Plus />
              </div>
              <Button className="bg-black text-white w-[300px]">Add to Cart</Button>

            </div>
           </div>
           
        

        </div>
    )
} 