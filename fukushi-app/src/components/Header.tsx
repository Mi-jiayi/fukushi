"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation"; // Next.js 路由钩子
import { IoPersonOutline } from "react-icons/io5";

// ヘッダー
const Header = () => {
  // mock data
  const accounts = [
    { name: "アカウントA"},
    { name: "アカウントB",},
    { name: "アカウントC"},
  ];

  const [currentAccount, setCurrentAccount] = useState(accounts[0].name);

  // セレクトボックス表示フラグ
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // dom要素ref
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Next.js router hook
  const router = useRouter();

  // ドロップダウンを切り替え
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // アカウントを変更
  const handleAccountChange = (account: { name: string }) => {
    setCurrentAccount(account.name);
    setIsDropdownOpen(false); // セレクトボックスを非表示
    router.push('kanjyaList'); // 遷移
  };

  useEffect(() => {
    // セレクトボックスを非表示
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-gray-300 p-4 flex justify-end items-center">
      <div className="relative" ref={dropdownRef}>
        <button
          className="flex items-center bg-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
          onClick={toggleDropdown}
        >
          <IoPersonOutline className="text-gray-800 w-5 h-5" />
          <span className="text-gray-800 ml-2 font-medium">{currentAccount}</span>
        </button>

        {/* セレクトボックス */}
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
            <ul className="py-1">
              {accounts.map((account, index) => (
                <li
                  key={index}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-800"
                  onClick={() => handleAccountChange(account)}
                >
                  {account.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
