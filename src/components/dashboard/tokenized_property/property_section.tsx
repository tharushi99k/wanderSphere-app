'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface PropertySectionProps {
  imgSrc: string;
  title: string;
  subtitle: string;
  icon1Count: string;
  icon2Count: string;
  icon3Text: string;
  href: string;
}

const Property_Section: React.FC<PropertySectionProps> = ({ imgSrc, title, subtitle, icon1Count, icon2Count, icon3Text, href }) => {
  const router = useRouter();

  return (
    <div
      className="token flex flex-col items-center justify-center p-2 gap-3 pb-4 cursor-pointer"
      onClick={() => router.push(href)}
    >
      <Image
        src={imgSrc}
        alt={title}
        width={1000}
        height={1000}
        className="w-80 h-auto"
      />
      <div className="flex flex-col items-start justify-start w-full px-5">
        <h3 className="text-2xl font-bold">{title}</h3>
        <h4 className="text-sm font-normal">{subtitle}</h4>
      </div>
      <div className="flex items-start justify-start w-full pl-[0.65rem] gap-4">
        <div className="flex items-center justify-center px-3 py-1 bg-[#E7F5FF] rounded-lg gap-3">
          <Image
            src="/assets/images/dashboard/icon_1.png"
            alt="icon 1"
            width={500}
            height={500}
            className="w-4 h-auto"
          />
          <h4 className="text-xs font-normal">{icon1Count}</h4>
        </div>
        <div className="flex items-center justify-center px-3 py-1 bg-[#E7F5FF] rounded-lg gap-3">
          <Image
            src="/assets/images/dashboard/icon_2.png"
            alt="icon 2"
            width={500}
            height={500}
            className="w-4 h-auto"
          />
          <h4 className="text-xs font-normal">{icon2Count}</h4>
        </div>
        <div className="flex items-center justify-center px-3 py-1 bg-[#E7F5FF] rounded-lg gap-3">
          <Image
            src="/assets/images/dashboard/icon_3.png"
            alt="icon 3"
            width={500}
            height={500}
            className="w-4 h-auto"
          />
          <h4 className="text-xs font-normal">{icon3Text}</h4>
        </div>
      </div>
    </div>
  );
};

const tokenData = [
  {
    imgSrc: "/assets/images/dashboard/token.png",
    title: "Bentley Avenue",
    subtitle: "Park of Nations, Portugal",
    icon1Count: "4",
    icon2Count: "2",
    icon3Text: "Car Parking",
    href: "/bentleyAvenue" // Add the href field for navigation
  },
  {
    imgSrc: "/assets/images/tokenized_pro/cavour.png",
    title: "Cavour Avenue",
    subtitle: "Liverpool, England",
    icon1Count: "4",
    icon2Count: "2",
    icon3Text: "Car Parking",
    href: "/bentleyAvenue"
  },
  {
    imgSrc: "/assets/images/tokenized_pro/dean.png",
    title: "Dean Avenue ",
    subtitle: "Train Village, Sylvania",
    icon1Count: "4",
    icon2Count: "2",
    icon3Text: "Car Parking",
    href: "/bentleyAvenue"
  },
  {
    imgSrc: "/assets/images/tokenized_pro/elgin.png",
    title: "Elgin Avenue ",
    subtitle: "Train Village, Sylvania",
    icon1Count: "4",
    icon2Count: "2",
    icon3Text: "Car Parking",
    href: "/bentleyAvenue"
  },
  {
    imgSrc: "/assets/images/tokenized_pro/hurricane.png",
    title: "Hurricane Avenue ",
    subtitle: "Train Village, Sylvania",
    icon1Count: "4",
    icon2Count: "2",
    icon3Text: "Car Parking",
    href: "/bentleyAvenue"
  },
  {
    imgSrc: "/assets/images/tokenized_pro/marine.png",
    title: "Marine Avenue ",
    subtitle: "Train Village, Sylvania",
    icon1Count: "4",
    icon2Count: "2",
    icon3Text: "Car Parking",
    href: "/bentleyAvenue"
  }
];

const TokenGrid: React.FC = () => (
  <div className="grid grid-cols-3 w-full gap-4">
    {tokenData.map((token, index) => (
      <Property_Section
        key={index}
        imgSrc={token.imgSrc}
        title={token.title}
        subtitle={token.subtitle}
        icon1Count={token.icon1Count}
        icon2Count={token.icon2Count}
        icon3Text={token.icon3Text}
        href={token.href} // Pass the href to the Property_Section component
      />
    ))}
  </div>
);

export default TokenGrid;
