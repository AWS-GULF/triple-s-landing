// // Carousel.jsx
// "use client"
// import React, { useEffect, useState } from "react"
// import one from "../assets/images/one.png"
// import two from "../assets/images/two.png"
// import three from "../assets/images/three.png"
// import four from "../assets/images/four.png"

// const images = [one, two, three, four]

// export default function Carousel() {
//   const [angle, setAngle] = useState(0)

//   // auto rotate
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setAngle((prev) => prev - 90) // كل مرة يلف 90 درجة
//     }, 3000)
//     return () => clearInterval(interval)
//   }, [])

//   return (
//     <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
//       <div
//         className="relative w-[700px] h-[400px]"
//         style={{
//           perspective: "2000px",
//         }}
//       >
//         <div
//           className="w-full h-full relative transition-transform duration-1000 ease-in-out"
//           style={{
//             transformStyle: "preserve-3d",
//             transform: `rotateY(${angle}deg)`,
//           }}
//         >
//           {images.map((img, index) => {
//             const rotation = index * (360 / images.length) // توزيع الصور حوالين دائرة
//             return (
//               <img
//                 key={index}
//                 src={img}
//                 alt={`slide-${index}`}
//                 className="absolute top-0 left-0 w-[600px] h-[380px] object-contain rounded-2xl shadow-lg"
//                 style={{
//                   transform: `rotateY(${rotation}deg) translateZ(500px)`,
//                 }}
//               />
//             )
//           })}
//         </div>
//       </div>
//     </div>
//   )
// }




// Carousel.jsx
// Carousel.jsx
"use client"
import React, { useEffect, useState } from "react"
import one from "../assets/images/one.png"
import two from "../assets/images/two.png"
import three from "../assets/images/three.png"
import four from "../assets/images/four.png"

const images = [one, two, three, four]

export default function Carousel() {
  const [current, setCurrent] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  // detect screen size
  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < 1024) // أقل من md → موبايل
    checkSize()
    window.addEventListener("resize", checkSize)
    return () => window.removeEventListener("resize", checkSize)
  }, [])

  // auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
      <div className="relative w-[1000px] h-[450px] md:w-[1000px] md:h-[450px] sm:w-[100%] ms-10 sm:ms-24 lg:ms-0 scale-125 sm:scale-100 sm:h-[500px]">
        {images.map((img, index) => {
          let position = (index - current + images.length) % images.length

          // سلم أفقي (لابتوب / تابلت)
          let offsetX = position * 200
          let offsetY = position * 30

          // سلم رأسي (موبايل)
          if (isMobile) {
            offsetX = position * 0
            offsetY = position * 70
          }

          const scale = 1 - position * 0.1
          const opacity = 1 - position * 0.2
          const zIndex = images.length - position

          return (
            <img
              key={index}
              src={img}
              alt={`slide-${index}`}
              className="absolute top-0 left-0 w-[90%] max-w-[600px] h-[350px] object-contain rounded-2xl shadow-lg transition-all duration-700 ease-in-out mx-auto"
              style={{
                transform: `translateX(${offsetX}px) translateY(${offsetY}px) scale(${scale})`,
                opacity,
                zIndex,
              }}
            />
          )
        })}
      </div>
    </div>
  )
}
