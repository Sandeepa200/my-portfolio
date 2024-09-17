import Image from "next/image"

const DevImg = ({containerStyles, imgScr}) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgScr} fill priority alt="developer Image" />
    </div>
  )
}

export default DevImg