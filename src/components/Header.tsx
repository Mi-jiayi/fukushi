"use client";

import React, { useState, useEffect, useRef } from "react";
import { PersonIcon } from "@radix-ui/react-icons";
import { useAccount } from "../context/AccountProvider";
import { getAccountList } from "@/app/actions";
import { Account } from "../model/schemas";

// ヘッダー
const Header = () => {
  // 現在選択されているアカウント情報
  const { selectedAccount, setSelectedAccount } = useAccount();
  // カウントリスト
  const [accountList, setAccountList] = useState<Account[]>([]);
  // セレクトボックス表示フラグ
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // dom要素ref
  const dropdownRef = useRef<HTMLDivElement>(null);

  // アカウントリストを取得
  const fetchAccountList = async () => {
    try {
      const res = await getAccountList();
      setAccountList(res.data);
      if (res.data && res.data.length > 0 && !selectedAccount) {
        setSelectedAccount(res.data[0]);
      }
    } catch (error) {
      console.error("Error fetching accounts:", error);
    }
  };

  // ドロップダウンを切り替え
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // 現在選択されているアカウントを変更
  const handleAccountChange = (account: Account) => {
    setSelectedAccount(account);
    setIsDropdownOpen(false);
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
    <header className="bg-zinc-300 p-2 flex justify-end items-center">
  <div className="relative" ref={dropdownRef}>
    <button
      className="flex items-center bg-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
      onClick={toggleDropdown}
    >
      <PersonIcon className="size-12 w-7 h-7" />
      <span className="text-black-600 ml-2  text-medium font-semibold">
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
