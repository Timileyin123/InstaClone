import ProfilePic from "@/Images/Logo-Instagram.png";
import InstaMobilePic from "@/Images/Mobile_Insta_Logo.png";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <div className="flex items-center justify-between max-w-6xl">
        <div className="h-24 w-24 mx-3 py-2 relative hidden lg:inline-grid cursor-pointer">
          <Image src={ProfilePic} />
        </div>
        <div className="h-24 w-14 py-5 relative lg:hidden cursor-pointer">
          <Image src={InstaMobilePic} />
        </div>
        <p>Right Hand Side</p>
      </div>
    </>
  );
}
