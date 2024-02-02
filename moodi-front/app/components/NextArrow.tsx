import Image from "next/image";

export function NextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <Image
      alt="Next Arrow"
      src="assets/arrow-right.svg"
      className={className}
      style={{
        ...style,
        display: "block",
        width: "30px",
        height: "30px",
        marginRight: "-10px",
      }}
      onClick={onClick}
      width={30}
      height={30}
    />
  );
}
