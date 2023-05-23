export default function MiniProfile() {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        className="h-16 rounded-full border p-[2px]"
        src="https://media.licdn.com/dms/image/C4D03AQEt5MDiNt8vWQ/profile-displayphoto-shrink_200_200/0/1644694755065?e=1688601600&v=beta&t=IzetEnCrzWIRR0FiLDobRhOY5kkaPR7H2QjOEI35Wpg"
        alt="user-image"
      />
      <div className="flex-1 ml-4">
        <h2 clasName="font-bold">Timileyin Olafisoye</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>
      <button className="font-semibold text-blue-400 text-sm">Sign out</button>
    </div>
  );
}
