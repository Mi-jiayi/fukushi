"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { Account, AccountSchema } from "../model/schemas";

type AccountContextType = {
  selectedAccount: Account | null;
  setSelectedAccount: (account: Account | null) => void;
};

// 创建 Context
const AccountContext = createContext<AccountContextType | null>(null);

// 创建一个提供者组件
export const AccountProvider = ({ children }: { children: ReactNode }) => {
  // 选中的用户
  const [selectedAccount, setSelectedAccount] = useState<Account | null>(null);

  // const updateSelectedAccount = (newAccount: Account) => {
  //   const parsedData = AccountSchema.parse(newAccount); // 使用 zod 校验
  //   setSelectedAccount(parsedData);
  // };

  return (
    <AccountContext.Provider value={{ selectedAccount, setSelectedAccount }}>
      {children}
    </AccountContext.Provider>
  );
};

// 自定义 Hook 来访问和更新账户信息
export const useAccount = () => {
  const context = useContext(AccountContext);

  if (!context) {
    throw new Error("useAccount 必须在 AccountProvider 中使用");
  }

  return context;
};
