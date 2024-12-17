import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";



interface Iproducts{
    title:string,
    price: string,
    id: number,
    rating?: string,
    old_price?: string,
    img_url: string  
}
let product:Iproducts[] = [
    {
      title: "VERTICAL STRIPED SHIRT",
      id: 5,
      price: "$212",
      img_url: "/images/pic5.png", 
      old_price: "$232" 
    },
    {
        title: "COURAGE GRAPHIC T-SHIRT",
        id: 6,
        price: "$240",
        img_url: "/images/pic6.png",
        
      },
      {
        title: "LOOSE FIT BERMUDA SHORTS",
        id: 7,
        price: "$80",
        img_url: "/images/pic7.png"  
      },
      {
        title: "FADED SKINNY JEANS",
        id: 8,
        price: "$130",
        img_url: "/images/pic8.png",
         
      },
]
// Add keys to the star array
let star = [0, 1, 2, 3, 4].map((i) => <FaStar key={`star-${i}`} />);

export default function Top_sell(){
  return (
    <div className="w-full h-[500px] mt-10">
        <h1 className="text-3xl md:text-4xl font-bold text-center">TOP SELLING</h1>
        <div className="flex flex-col md:flex-row justify-center items-center md:justify-between px-8 mt-10">
            {
                product.map((data) => {
                    return(
                        <div key={data.id}>
                           <Link href={`/Products/${data.id}`}>
                           <div className="w-[240px] h-[230px] bg-[#F0EEED] rounded-[20px]">
                            <Image src={data.img_url} alt={data.title} 
                            className="w-full h-full rounded-[20px]"
                            width={100} height={100}></Image>
                        </div>
                           </Link>
                            <div>
                                <p className="text-lg mt-2 font-bold">{data.title}</p>
                                <p className="flex text-yellow-400">{star}</p>
                                <p className="font-bold mt-1">{data.price}<span className="text-gray-400 fon-bold line-through">{data.old_price}</span></p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}