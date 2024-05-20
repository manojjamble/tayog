export default function Goal() {
  return (
    <div className="bg-blue w-full rounded-lg p-4 text-white my-4">
      <div className="text-2xl font-semibold">What is your goal today?</div>
      <div className="mt-2 text-sm">
        It will enhance you and provide with insights to enhance your experience
        on Tayog.
      </div>
      <div className="flex items-center mt-4 space-x-2">
        <input
          type="text"
          className="focus:outline-none flex-grow px-4 py-2 rounded-lg text-black"
          placeholder="Ex: Explore Opportunities, Research Domains, Career advise..."
        />
        <button className="bg-orange-400 px-4 py-2 rounded-lg font-semibold">
          Explore
        </button>
      </div>
    </div>
  );
}
