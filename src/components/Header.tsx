"use client";

import React, { useState, useEffect, useRef } from "react";
import { IoPersonOutline } from "react-icons/io5";
import { useAccount } from "../context/AccountProvider";
import axios from "axios";
import { Account } from "../model/schemas";

// ヘッダー
const Header = () => {
  const { selectedAccount, setSelectedAccount } = useAccount();
  const [accountList, setAccountList] = useState<Account[]>([]);
  // セレクトボックス表示フラグ
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // dom要素ref
  const dropdownRef = useRef<HTMLDivElement>(null);

  // アカウントリストを取得
  const fetchAccountList = async () => {
    try {
      const result = await axios.get("/api/account/list");
      setAccountList(result.data);

      if (result.data && result.data.length > 0 && !selectedAccount) {
        setSelectedAccount(result.data[0]);
      }
    } catch (error) {
      console.error("Error fetching accounts:", error);
    }
  };

  // ドロップダウンを切り替え
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // アカウントを変更
  const handleAccountChange = (account: Account) => {
    setSelectedAccount(account);
    setIsDropdownOpen(false); // 关闭下拉框
  };

  useEffect(() => {
    fetchAccountList();

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
          <span className="text-gray-800 ml-2 font-medium">
            {selectedAccount ? selectedAccount.accountName : ""}
          </span>
        </button>

        {/* セレクトボックス */}
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
            <ul className="py-1">
              {accountList.map((account, index) => (
                <li
                  key={index}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-800"
                  onClick={() => handleAccountChange(account)}
                >
                  {account.accountName}
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
