import Image from "next/image";
import React from "react";
import { BsStar } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import { FiStar } from "react-icons/fi";
import { FaRegStar } from "react-icons/fa";
export default function page() {
  return (
    <div className="main-container mx-auto">
      <div className="w-10 h-10 bg-red-400 m-10">
        <div className="w-[10%] h-full bg-yellow-400"></div>
        <BsStar />
        <FiStar />
        <AiOutlineStar />
        <FaRegStar />
      </div>
    </div>
  );
}

function Flex() {
  const cards = [
    {
      image: "/assets/new/4_3 Ratio.jpg",
      title: "Card title1",
      text: "This is a card with text on the left and an image on",
    },
    {
      image: "/assets/new/4_3 Ratio.jpg",
      title: "Card title2",
      text: "This is a card with text on the left and an image on the right.",
    },
  ];
  return (
    <div>
      {cards.map((card, index) => (
        <div
          className={`card mx-auto flex even:flex-row-reverse
      `}
          key={index}
        >
          <>
            <Image
              className=""
              src={card.image}
              width={558}
              height={418}
              alt={card.title}
            />
            <div className="">
              <h4 className="">{card.title}</h4>
              <p className="">{card.text}</p>
            </div>
          </>
        </div>
      ))}
    </div>
  );
}
