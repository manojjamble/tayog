import ProfileSetUp from "./ProfileSetUp";
import Goal from "./Goal";

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen bg-white text-blue my-6">
        <div className="w-1/12">
          <div className="flex flex-col items-center fixed">
            <Icon />
            <Icon />
            <Icon />
            <Icon />
            <Icon />
          </div>
        </div>
        <div className="my-4 w-2/3">
          <div className="text-black text-2xl font-bold">Welcome👋</div>
          <div className="text-sm mt-4 text-gray-600">
            A nice quote to help user navigate across the website.
          </div>
          <ProfileSetUp />
          <Goal />
        </div>
        <div className="p-4">
          <div className="w-1/5 mx-auto fixed">
            <div className="rounded-lg bg-gray-300 w-full text-blue p-2">
              <CalendarIcon />
            </div>
            <div className="rounded-lg w-full mt-4">
              <div className="bg-gray-300 flex flex-col items-center text-blue">
                <div className="flex justify-between items-center">
                  <div>2024</div>
                  <div>May</div>
                  <div>{"< >"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const CalendarIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.8}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
      />
    </svg>
  );
};

const Icon = () => {
  return (
    <div className="mx-8 my-4 p-2 text-blue bg-sky-100 rounded-lg hover:cursor-pointer hover:bg-sky-300 hover:text-white hover:scale-110 transition duration-300">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
    </div>
  );
};
