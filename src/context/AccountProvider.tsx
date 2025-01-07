"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { Account } from "../model/schemas";

type AccountContextType = {
  selectedAccount: Account | null;
  setSelectedAccount: (account: Account | null) => void;
};

// コンテキストを作成
const AccountContext = createContext<AccountContextType | null>(null);

// プロバイダコンポーネントを作成
export const AccountProvider = ({ children }: { children: ReactNode }) => {
  // 選択されたアカウント
  const [selectedAccount, setSelectedAccount] = useState<Account | null>(null);

  return (
    <AccountContext.Provider value={{ selectedAccount, setSelectedAccount }}>
      {children}
    </AccountContext.Provider>
  );
};

// アカウント情報をアクセス・更新するためのカスタムフック
export const useAccount = () => {
  const context = useContext(AccountContext);

  if (!context) {
    throw new Error("useAccount は AccountProvider 内で使用する必要があります");
  }

  return context;
};
