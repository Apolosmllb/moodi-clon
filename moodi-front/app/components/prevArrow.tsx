import Image from "next/image";

export function PrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <Image
      alt="Next Arrow"
      src="assets/arrow-left.svg"
      className={className}
      style={{
        ...style,
        display: "block",
        width: "30px",
        height: "30px",
        marginLeft: "-10px",
      }}
      onClick={onClick}
      width={30}
      height={30}
    />
  );
}
