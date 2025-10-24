import { useEffect, useState } from "react";

const titles = [
  "Open Source Contributor",
  "Frontend Developer",
  "React Enthusiast",
  "UI Designer",
];

export default function DynamicText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-purple-400 text-3xl font-semibold transition-all duration-500 ease-in-out">
      {titles[index]}
    </div>
  );
}
