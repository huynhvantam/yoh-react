import React from "react";

const Page: React.FC = () => {
  const data = [
    { value: 1, count: 4.5 },
    { value: 2, count: 2.2 },
    { value: 3, count: 3.7 },
  ];

  const renderNumbers = (count: number) => {
    const ones = Math.floor(count);
    const zeros = Math.ceil(count) - ones;

    const numbers = [];

    for (let i = 0; i < ones; i++) {
      numbers.push(1);
    }

    for (let i = 0; i < zeros; i++) {
      numbers.push(0);
    }

    return numbers;
  };

  return (
    <div>
      {data.map((item) => (
        <div key={item.value}>
          {renderNumbers(item.count).map((number, index) => (
            <span key={index}>{number}</span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Page;
