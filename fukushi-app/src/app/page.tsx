import { IoPersonOutline } from "react-icons/io5";
// 
export default function KanJaList() {
  return (
  <div>
    <header className="bg-gray-200 p-4 flex justify-end items-center">
      <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow">
        <IoPersonOutline className="text-gray-800 w-5 h-5" />
        <span className="text-gray-800 ml-2 font-medium">account</span>
      </div>
    </header>
  </div>
  );
}
