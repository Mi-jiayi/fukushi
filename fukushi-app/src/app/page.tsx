"use client";

import { useState, useEffect, useRef } from "react";
import { IoPersonOutline } from "react-icons/io5";

const AccountSelector = () => {

  // mock data
  const accounts = ["アカウントA", "アカウントB", "アカウントC"];
  const [currentAccount, setCurrentAccount] = useState(accounts[0]);

  // セレクトボックス表示フラグ
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // dom要素ref
  const dropdownRef = useRef<HTMLDivElement>(null);

  // dom要素ref
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // ドロップダウンを切り替え
  const handleAccountSelect = (account: string) => {
    setCurrentAccount(account);
    // セレクトボックスを非表示
    setIsDropdownOpen(false);
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
                  onClick={() => handleAccountSelect(account)}
                >
                  {account}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default AccountSelector;
