import InstaLogo from "@/Images/Logo-Instagram.png";
import InstaMobileLogo from "@/Images/Mobile_Insta_Logo.png";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <div className="shadow-sm sticky top-0 bg-white z-30">
        <div className="flex items-center justify-between max-w-6xl mx-4 xl:mx-auto">
          <div className="h-24 w-24 mx-3 py-6 relative hidden lg:inline-grid cursor-pointer">
            <Image src={InstaLogo} alt="Instagram Logo" />
          </div>
          <div className="h-24 w-14 py-5 relative lg:hidden cursor-pointer">
            <Image src={InstaMobileLogo} alt="Instagram mobile-logo" />
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
          <div className="flex space-x-4 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="hidden md:inline-flex h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-in-out"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-in-out"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <img
              src="https://media.licdn.com/dms/image/C4D03AQEt5MDiNt8vWQ/profile-displayphoto-shrink_200_200/0/1644694755065?e=1688601600&v=beta&t=IzetEnCrzWIRR0FiLDobRhOY5kkaPR7H2QjOEI35Wpg"
              alt="user-image"
              className="h-10 rounded-full cursor"
            />
          </div>
        </div>
      </div>
    </>
  );
}
