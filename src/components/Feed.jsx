import MiniProfile from "./MiniProfile";
import Posts from "./Posts";
import Stories from "./Stories";
import Suggestions from "./Suggestions";

export default function Feed() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-3 md:max-w-7xl mx-auto">
      <section className="md:col-span-2">
        <Stories />
        <Posts />
      </section>

      <section className="mini hidden md:inline-grid md:col-span-1 bg-gray-50">
        <div className="fixed w-[380px]">
          <MiniProfile />
          <Suggestions />
        </div>
      </section>
    </main>
  );
}
