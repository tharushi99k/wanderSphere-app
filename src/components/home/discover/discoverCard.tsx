
'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface PropertySectionProps {
  imgSrc: string;
  title: string;
  subtitle: string;
  duration: string;
  price: string;
  icon1Count: string;
  href: string;
}

const Property_Section: React.FC<PropertySectionProps> = ({ imgSrc, title,duration, subtitle, price, icon1Count,  href }) => {
  const router = useRouter();

  return (
    <div
      className="token flex flex-col items-center justify-center  gap-3 pb-4 cursor-pointer "
      onClick={() => router.push(href)}
    >
      <Image
        src={imgSrc}
        alt={title}
        width={500}
        height={300}
        className="w-[250px] h-[250px] object-cover"
      />
      <div className="flex flex-col items-start justify-start w-full px-5 text-justify gap-3">
        <h3 className="text-base font-bold">{title}</h3>
        <h4 className="text-xs font-normal">{subtitle}</h4>
        <div className="flex flex-col w-full gap-1 ">
        <h4 className="text-xs font-semibold">{duration}</h4>
        
        <h4 className="text-xs font-semibold">{price}</h4>
        <button className="flex items-center justify-center px-4 py-2 bg-[#EE3B51] rounded-md mt-1">   
          <h4 className="text-xs font-semibold text-white">{icon1Count}</h4>
        </button>
        
        </div>
      </div>
    </div>
  );
};

const tokenData = [
  {
    imgSrc: "/assets/images/home/section_5/mirissa.jpg",
    title: "Beach Getaway in Mirissa",
    subtitle: " Mirissa, Unawatuna, Bentota Relax on golden beaches, enjoy whale watching, and experience stunning sunsets along the southern coast.",
    duration: "5 Days / 4 Nights",
    price: "Starting from $699",
    icon1Count: "View Package",
    href: "/bentleyAvenue"
  },
  {
    imgSrc: "/assets/images/home/section_5/cultural.jpg",
    title: "Cultural Triangle Tour",
    subtitle: "Anuradhapura, Polonnaruwa, Kandy Discover Sri Lanka’s ancient history, visit sacred temples, and explore the legendary Sigiriya Rock Fortress.",
    duration: "7 Days / 6 Nights",
    price: "Starting from $850",
    icon1Count: "View Package",
    href: "/bentleyAvenue"
  },
  {
    imgSrc: "/assets/images/home/section_5/ella.jpg",
    title: "Hill Country Adventure",
    subtitle: "Nuwara Eliya, Ella, Haputale Breathe fresh mountain air, hike through tea plantations, and ride the scenic Kandy-Ella train.",
    duration: "6 Days / 5 Nights",
    price: "Starting from $799",
    icon1Count: "View Package",
    href: "/bentleyAvenue"
  },
  {
    imgSrc: "/assets/images/home/section_5/udawalawa.jpg",
    title: "Wildlife & Safari Tour",
    subtitle: "Yala, Udawalawe, Wilpattu Spot leopards, elephants, and exotic birds while exploring Sri Lanka’s most famous national parks.",
    duration: "4 Days / 3 Nights",
    price: "Starting from $650",
    icon1Count: "View Package",
    href: "/bentleyAvenue"
  }
 

];

const DiscoverCard: React.FC = () => (
  <div className="grid grid-cols-4 w-full gap-4 px-10">
    {tokenData.map((token, index) => (
      <Property_Section
        key={index}
        imgSrc={token.imgSrc}
        title={token.title}
        subtitle={token.subtitle}
        duration={token.duration}
        price={token.price}
        icon1Count={token.icon1Count}
      />
    ))}
  </div>
);

export default DiscoverCard;
