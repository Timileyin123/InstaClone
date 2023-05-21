import ProfilePic from "@/Images/Logo-Instagram.png";
import InstaMobilePic from "@/Images/Mobile_Insta_Logo.png";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <div className="flex items-center justify-between max-w-6xl">
        <div className="h-24 w-24 mx-3 py-6 relative hidden lg:inline-grid cursor-pointer">
          <Image src={ProfilePic} />
        </div>
        <div className="h-24 w-14 py-5 relative lg:hidden cursor-pointer">
          <Image src={InstaMobilePic} />
        </div>
        <div className="relative">
          <div className="absolute top-2 left-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 text-gray-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md"
          />
        </div>
        <p>Right Hand Side</p>
      </div>
    </>
  );
}
