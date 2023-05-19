import { useEffect, useState } from "react";
import { Image } from "react-bootstrap";

export default function IconCarousel(): JSX.Element {
  let [count, setCount] = useState(1)


  useEffect((): any => {
    const interval = setInterval(() => {
      setCount(count + 1)

    }, 3000)

    if (count >= 4) { setCount(1) }

    return () => clearInterval(interval)
  }, [count])

  return <Image src={require(`../assets/tech_icon/${count}.png`)} height={"300vh"} className="animate__animated animate__fadeIn" />
}