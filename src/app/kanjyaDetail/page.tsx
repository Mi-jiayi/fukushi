'use client';

import { useState } from 'react';


export default function KanjyaDetail() {

  // 直接从store中获取todo
  const accounts = [
    {
      "id": 1,
      "name": "アカウント1",
      "role":1,
    },
    {
      "id": 2,
      "name": "アカウント2",
      "role":2,
    },
    {
      "id": 3,
      "name": "アカウント3",
      "role":3
    },
  ];

  const [currentAccount, setCurrentAccount] = useState(accounts[0]);
  
  const [commentList,setComment] = useState([
    {
      "id": 1,
      "content": "コメント2本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本",
      "createAccountName": "アカウント2",
      "createAccountId": 1,
      "createdAt": "2024.07.19 10:02",
      "updatedAt": "2024.07.19 10:17"
    },
    {
      "id": 2,
      "content": "コメント1２２２２",
      "createAccountName": "アカウント2",
      "createAccountId": 2,
      "createdAt": "2024.07.19 10:03",
      "updatedAt": "22024.07.19 10:17"
    }
  ])

  // 削除
  const handleDelete = (id:number)=> {
    console.log(id);
  }
  // 新規コメント投稿内容
  const [addComment,SetAddComment] = useState('');
  const handleSetAddComment = (inputValue:string)=> {
    SetAddComment(inputValue)
  }
  // 登録処理
  const handleAddComment = ()=> {
     // call api
     alert('登録処理');
  }

  // 編集コメント投稿内容
  const [isShowEdit,setIsShowEdit] = useState(false);
  const [editComment,SetEditComment] = useState('');
  const handleSetEditComment = (createId:number,commentId:number,commentContent:string)=> {
    SetEditComment(commentContent)
    setIsShowEdit(true)
  }
  // 編集処理
  const handleEdit= (createId:number,commentId:number,)=> {
    // call api
    alert('編集処理');
    setIsShowEdit(false)
 }
 
  return (

    <div>
      <div className="flex items-center justify-between bg-white shadow-md rounded-lg p-4">
        <div className="flex items-center space-x-4">
        <div className="bg-gray-300 rounded-lg">
        <svg fill="#000000" width="64px" height="64px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M12 2.5a5.5 5.5 0 00-3.096 10.047 9.005 9.005 0 00-5.9 8.18.75.75 0 001.5.045 7.5 7.5 0 0114.993 0 .75.75 0 101.499-.044 9.005 9.005 0 00-5.9-8.181A5.5 5.5 0 0012 2.5zM8 8a4 4 0 118 0 4 4 0 01-8 0z"/>
        </svg>
        </div>
        <span className="text-gray-800 text-lg font-medium"  >
        {11111}
        </span>
        </div>
    </div> 
    <div className="space-y-4">
    {commentList.map(
      (comment)=>
        <div className="bg-white shadow-md rounded-lg p-4 space-y-2" key={comment.id}>
          <div className="flex items-center space-x-4">
            <div className="bg-gray-300 rounded-lg p-2">
                <svg fill="#000000" width="64px" height="64px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M12 2.5a5.5 5.5 0 00-3.096 10.047 9.005 9.005 0 00-5.9 8.18.75.75 0 001.5.045 7.5 7.5 0 0114.993 0 .75.75 0 101.499-.044 9.005 9.005 0 00-5.9-8.181A5.5 5.5 0 0012 2.5zM8 8a4 4 0 118 0 4 4 0 01-8 0z"/>
                </svg>
            </div>
            <span className="text-gray-800 font-medium">{comment.createAccountName}</span>
          </div>
          {
            currentAccount.id === comment.createAccountId ?
            (
              <div>
                {isShowEdit?
                  (
                    <textarea
                      value={editComment}
                      onChange={(e) => SetEditComment(e.target.value)}
                      className="mt-2 p-2 border rounded w-full"
                      onBlur={ ()=> {handleEdit(comment.id,comment.createAccountId)}}
                  />
                  ):(
                    <div className="text-sm text-gray-500" onClick={()=>{handleSetEditComment(comment.createAccountId,comment.id,comment.content)}}>{comment.content}</div>
                  )
                }
               
                <div className="flex justify-end whitespace-no-wrap">
                  <button
                    onClick={()=> handleDelete(1) } 
                    className="bg-red-500 text-white px-4 py-1 text-sm rounded-md whitespace-no-wrap flex flex-row  "
                  >
                  <svg width="12px" height="12px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff" className="align-text-bottom m-1">
                    <path d="M308.224 168.813714v-33.938285c0-56.32 45.641143-101.888 101.888-101.888h203.776c56.32 0 101.888 45.641143 101.888 101.888v33.938285h237.714286a33.938286 33.938286 0 0 1 0 67.949715H70.509714a33.938286 33.938286 0 0 1 0-67.949715h237.714286z m67.949714 0h271.652572v-33.938285a33.938286 33.938286 0 0 0-33.938286-33.938286H410.112a33.938286 33.938286 0 0 0-33.938286 33.938286v33.938285z m407.186286 710.582857V304.786286a34.084571 34.084571 0 1 1 68.242286 0v605.915428a73.142857 73.142857 0 0 1-73.142857 73.142857H245.540571a73.142857 73.142857 0 0 1-73.142857-73.142857V304.64a33.938286 33.938286 0 0 1 67.949715 0v574.756571a36.571429 36.571429 0 0 0 36.571428 36.571429h469.869714a36.571429 36.571429 0 0 0 36.571429-36.571429zM376.173714 338.651429c18.724571 0 33.938286 15.213714 33.938286 33.938285v407.478857a33.938286 33.938286 0 0 1-67.876571 0V372.589714c0-18.724571 15.140571-33.938286 33.938285-33.938285zM512 338.651429c18.724571 0 33.938286 15.213714 33.938286 33.938285v407.478857a33.938286 33.938286 0 0 1-67.876572 0V372.589714c0-18.724571 15.213714-33.938286 33.938286-33.938285z m135.826286 0c18.797714 0 33.938286 15.213714 33.938285 33.938285v407.478857a33.938286 33.938286 0 0 1-67.876571 0V372.589714c0-18.724571 15.213714-33.938286 33.938286-33.938285z" fill="#ffffff"/>
                  </svg> 削除
                  </button>
                </div>
              </div>
            ):(
              <div>
                <div className="text-sm text-gray-500">{comment.content}</div>
                <div className="flex justify-end whitespace-no-wrap">
                  <button
                    onClick={()=> handleDelete(1) } 
                    className="bg-red-500 text-white px-4 py-1 text-sm rounded-md whitespace-no-wrap flex flex-row  "
                  >
                  <svg width="12px" height="12px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff" className="align-text-bottom m-1">
                    <path d="M308.224 168.813714v-33.938285c0-56.32 45.641143-101.888 101.888-101.888h203.776c56.32 0 101.888 45.641143 101.888 101.888v33.938285h237.714286a33.938286 33.938286 0 0 1 0 67.949715H70.509714a33.938286 33.938286 0 0 1 0-67.949715h237.714286z m67.949714 0h271.652572v-33.938285a33.938286 33.938286 0 0 0-33.938286-33.938286H410.112a33.938286 33.938286 0 0 0-33.938286 33.938286v33.938285z m407.186286 710.582857V304.786286a34.084571 34.084571 0 1 1 68.242286 0v605.915428a73.142857 73.142857 0 0 1-73.142857 73.142857H245.540571a73.142857 73.142857 0 0 1-73.142857-73.142857V304.64a33.938286 33.938286 0 0 1 67.949715 0v574.756571a36.571429 36.571429 0 0 0 36.571428 36.571429h469.869714a36.571429 36.571429 0 0 0 36.571429-36.571429zM376.173714 338.651429c18.724571 0 33.938286 15.213714 33.938286 33.938285v407.478857a33.938286 33.938286 0 0 1-67.876571 0V372.589714c0-18.724571 15.140571-33.938286 33.938285-33.938285zM512 338.651429c18.724571 0 33.938286 15.213714 33.938286 33.938285v407.478857a33.938286 33.938286 0 0 1-67.876572 0V372.589714c0-18.724571 15.213714-33.938286 33.938286-33.938285z m135.826286 0c18.797714 0 33.938286 15.213714 33.938285 33.938285v407.478857a33.938286 33.938286 0 0 1-67.876571 0V372.589714c0-18.724571 15.213714-33.938286 33.938286-33.938285z" fill="#ffffff"/>
                  </svg> 削除
                  </button>
                </div>
              </div>
            )
          }
        </div>
    )}
    </div>
    <footer className="fixed bottom-0 left-0 w-full mr-0 pr-0 bg-gray-100 border-t p-4">
      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="コメントを入力"
          value={addComment}
          onChange={ (e)=>{handleSetAddComment(e.target.value)}}
          className="flex-1 border rounded px-2 py-1 focus:outline-none focus:ring focus:border-blue-300 mr-0"
        />
        <button
          className="border-2 text-white px-4 py-1 rounded-md"
          onClick={handleAddComment}
        >
         <svg width="32px" height="32px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" strokeWidth="0.00024000000000000003">
            <path fillRule ="evenodd" clipRule="evenodd" d="M3.3938 2.20468C3.70395 1.96828 4.12324 1.93374 4.4679 2.1162L21.4679 11.1162C21.7953 11.2895 22 11.6296 22 12C22 12.3704 21.7953 12.7105 21.4679 12.8838L4.4679 21.8838C4.12324 22.0662 3.70395 22.0317 3.3938 21.7953C3.08365 21.5589 2.93922 21.1637 3.02382 20.7831L4.97561 12L3.02382 3.21692C2.93922 2.83623 3.08365 2.44109 3.3938 2.20468ZM6.80218 13L5.44596 19.103L16.9739 13H6.80218ZM16.9739 11H6.80218L5.44596 4.89699L16.9739 11Z" fill="#000000"/> 
        </svg>
        </button>
      </div>
    </footer>
    </div>

  );
}


