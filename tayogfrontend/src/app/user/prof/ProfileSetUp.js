export default function ProfileSetUp() {
  return (
    <div className="w-full my-6">
      <div className="flex justify-between items-center text-black">
        <div className="font-semibold">Lets start with the basics</div>
        <div className="text-black bg-gray-300 rounded-full flex items-center p-1">
          <CrossIcon />
        </div>
      </div>
      <div className="flex justify-between items-center text-gray-500 text-xs mt-2">
        <div className="">Get more by setting up your profile.</div>
        <div className="">25% completed</div>
      </div>
      <progress value={25} max={100} className="w-full mt-4 h-2" />
      <div className="text-gray-500 mt-4 flex flex-col space-y-2">
        <div className="flex items-center space-x-4 text-xs">
          <input type="checkbox" className="rounded-full" />
          <div>Add your Educational Background</div>
        </div>
        <div className="flex items-center space-x-4 text-xs">
          <input type="checkbox" className="rounded-full" />
          <div>Network with mentors</div>
        </div>
      </div>
    </div>
  );
}

const CrossIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-4 h-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  );
};
