// import Image from "next/image";
// import { FaStar } from "react-icons/fa";


// interface Iproducts{
//     title:string,
//     price: string,
//     id: number,
//     rating?: string,
//     old_price?: string,
//     img_url: string  
// }
// let product:Iproducts[] = [
//     {
//       title: "T-SHIRT WITH TAPE DETAILS",
//       id: 1,
//       price: "$120",
//       img_url: "/images/pic1.png"  
//     },
//     {
//         title: "SKINNY FIT JEANS",
//         id: 2,
//         price: "$240",
//         img_url: "/images/pic2.png",
//         old_price: "$260"
//       },
//       {
//         title: "CHECKERED SHIRT",
//         id: 3,
//         price: "$180",
//         img_url: "/images/pic3.png"  
//       },
//       {
//         title: "SLEEVE STRIPED T-SHIRT",
//         id: 4,
//         price: "$130",
//         img_url: "/images/pic4.png",
//         old_price: "$160"  
//       },
// ]
// const star = [<FaStar/>, <FaStar/>, <FaStar/>,<FaStar/>,<FaStar/> ]

// export default function Products(){
//   return (
//     <div className="w-full h-full sm:h-[500px] mt-10">
//         <h1 className="text-3xl md:text-4xl font-bold text-center">NEW ARRIVALS</h1>
//         <div className="flex flex-col md:flex-row justify-center items-center md:justify-between px-8 mt-10">
//             {
//                 product.map((data) => {
//                     return(
//                         <div>
//                             <div className="w-[240px] h-[230px] bg-[#F0EEED] rounded-[20px]">
//                             <Image src={data.img_url} alt={data.title} 
//                             className="w-full h-full rounded-[20px]"
//                             width={100} height={100}></Image>

//                             </div>
//                             <div>
//                                 <p className="text-lg mt-2 font-bold">{data.title}</p>
//                                 <p className="flex text-yellow-400">{star}</p>
//                                 <p className="font-bold mt-1">{data.price}<span className="text-gray-400 fon-bold line-through">{data.old_price}</span></p>
//                             </div>
//                         </div>
//                     )
//                 })
//             }
//         </div>
//     </div>
//   )
// }


import Image from "next/image";
import { FaStar } from "react-icons/fa";

interface Iproducts {
  title: string;
  price: string;
  id: number;
  rating?: string;
  old_price?: string;
  img_url: string;
}

let product: Iproducts[] = [
  {
    title: "T-SHIRT WITH TAPE DETAILS",
    id: 1,
    price: "$120",
    img_url: "/images/pic1.png",
  },
  {
    title: "SKINNY FIT JEANS",
    id: 2,
    price: "$240",
    img_url: "/images/pic2.png",
    old_price: "$260",
  },
  {
    title: "CHECKERED SHIRT",
    id: 3,
    price: "$180",
    img_url: "/images/pic3.png",
  },
  {
    title: "SLEEVE STRIPED T-SHIRT",
    id: 4,
    price: "$130",
    img_url: "/images/pic4.png",
    old_price: "$160",
  },
];

// Assign unique keys to each star in the star array
const star = [0, 1, 2, 3, 4].map((i) => <FaStar key={`star-${i}`} />);

export default function Products() {
  return (
    <div className="w-full h-full sm:h-[500px] mt-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center">NEW ARRIVALS</h1>
      <div className="flex flex-col md:flex-row justify-center items-center md:justify-between px-8 mt-10">
        {product.map((data) => (
          // Add a unique "key" prop to the outermost element of the map
          <div key={data.id}>
            <div className="w-[240px] h-[230px] bg-[#F0EEED] rounded-[20px]">
              <Image
                src={data.img_url}
                alt={data.title}
                className="w-full h-full rounded-[20px]"
                width={100}
                height={100}
              />
            </div>
            <div>
              <p className="text-lg mt-2 font-bold">{data.title}</p>
              {/* Star array already contains unique keys */}
              <p className="flex text-yellow-400">{star}</p>
              <p className="font-bold mt-1">
                {data.price}
                <span className="text-gray-400 font-bold line-through">
                  {data.old_price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

