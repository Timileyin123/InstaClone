export default function Story({ username, img }) {
  return (
    <div>
      <img
        className="h-14 rounded-full p-[1.5px] border-2 border-red-500 cursor-pointer hover:scale-110 transition-transform duration-200 ease-out"
        src={img}
        alt={username}
      />
      <p className="text-xs w-14 truncate">{username}</p>
    </div>
  );
}
