import Link from "next/link";

type BadgeProps = {
  tag: string;
  style?: string;
};

export default function Badge({ tag, style }: BadgeProps) {
  const defaultStyle =
    "z-10 absolute top-[8PX] right-[20PX] cursor-pointer bg-green-500 p-[4PX] text-sm font-medium rounded-3xl text-center text-gray-900 xs:text-xs";
  return (
    <Link href={`/`} className={style ? style : defaultStyle}>
      <span>{tag}</span>
    </Link>
  );
}
