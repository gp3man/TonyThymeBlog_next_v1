"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

const HoverCatCard = ({ category }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"]
  );

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
        width: category?.thumbnail?.width / 2,
        height: category?.thumbnail?.height / 2,
        borderRadius: 100
      }}
      className="relative  bg-gradient-to-br from-secondary to-accent m-4 p-4"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center rounded-xl  p-4"
      >
        <Image
          alt={category?.title}
          src={category?.thumbnail?.url}
          width={category?.thumbnail?.width}
          height={category?.thumbnail?.height}
          style={{
            transform: "translateZ(75px) translateX(-15px)",
            borderRadius: 100
          }}
          className="absolute inset-4 grid place-content-center rounded-xl"
        />
        <p
          style={{
            transform: "translateZ(76px)",
            borderRadius: 100
          }}
          className="text-center text-2xl font-bold text-secondary-content shadow-xl bg-secondary rounded-lg bg-opacity-80a"
        >
          {category?.title}
        </p>
      </div>
    </motion.div>
  );
};

export default HoverCatCard;
