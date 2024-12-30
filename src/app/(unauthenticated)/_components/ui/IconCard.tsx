import Image from "next/image";
import Link from "next/link";

export default function IconCard({
  src,
  title,
  id,
}: {
  src: string;
  title: string;
  id: string;
}) {
  return (
    <Link
      href={`/business-listing?catId=${id}`}
      className="bg-[#e2f2f7] rounded-lg w-[120px] h-[120px] py-3"
    >
      <div className="flex flex-col gap-2 items-center">
        <div className="w-[50px] h-[50px] flex justify-center items-center">
          <Image
            src={`https://aaw.dev-rr.xyz/storage/${src}`}
            alt="image"
            width={50}
            height={50}
            className=""
          />
        </div>
        <h4 className="text-xs font-semibold text-center">{title}</h4>
      </div>
    </Link>
  );
}
