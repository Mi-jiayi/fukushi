"use client";
import { useState, useEffect } from "react";
import {
  getCommentList,
  newComment,
  updateComment,
  deleteComment,
} from "@/app/actions";
import { Comment } from "@/model/schemas";
import { useAccount } from "@/context/AccountProvider";
type CommentForEdit = Comment & {
  isEditing?: boolean;
};

interface PageProps {
  kanjyaId: number;
  kanjyaName: string;
}

export default function KanjyaDetail({
  params,
}: {
  params: Promise<PageProps>;
}) {
  // router param
  const [kanjyaDetail, setKanjyaDetail] = useState<PageProps | null>(null);
  // 二重制御
  const [isProcessing, setIsProcessing] = useState(false);
  // 現在選択されているアカウント情報を取得する
  const { selectedAccount } = useAccount();
  // コメントリスト
  const [commentList, setCommentList] = useState<CommentForEdit[]>([]);

  // 初期処理
  const init = async () => {
    try {
      // router paramsを取得
      const resolved = await params;
      setKanjyaDetail(resolved);
      // コメントリストを取得
      const res = await getCommentList(Number(resolved.kanjyaId));
      setCommentList(res.data);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  useEffect(() => {
    init();
  }, [params]);

  // 新規コメント投稿内容
  const [addComment, setAddComment] = useState<string>("");
  const handleSetAddComment = (inputValue: string) => {
    setAddComment(inputValue);
  };
  // 登録処理
  const handleAddComment = async () => {
    if (!isProcessing) {
      // 非空
      if (!addComment) {
        alert("コメントを入力してください。");
        return;
      }
      setIsProcessing(true);
      const kanjyaId = kanjyaDetail?.kanjyaId;
      try {
        const name = selectedAccount ? selectedAccount.accountName : "";
        const accountId = selectedAccount ? selectedAccount.accountId : "";
        await newComment(Number(accountId), Number(kanjyaId), addComment, name);
      } catch (error) {
        console.error("Error add comment:", error);
      }
      setIsProcessing(false);
      setAddComment("");
      init();
    }
  };
  // 編集コメント投稿内容
  const [editComment, setEditComment] = useState("");
  const [editCommentId, setEditCommentId] = useState(-1);
  // 編集処理
  const handleSetEditComment = (commentId: number) => {
    const updatedCommentList = commentList.map((comment) => {
      if (comment.commentId === commentId) {
        setEditComment(comment.content);
        setEditCommentId(comment.commentId);
        return { ...comment, isEditing: true };
      } else {
        return { ...comment, isEditing: false };
      }
    });
    setCommentList(updatedCommentList);
  };
  const handleEdit = async () => {
    if (window.confirm("コメントを更新しますか？")) {
      try {
        await updateComment(editCommentId, editComment);
      } catch (error) {
        console.error("Error update comment:", error);
      }
      // clear
      setEditComment("");
      setEditCommentId(-1);
      init();
    } else {
      const updatedCommentList = commentList.map((comment) => {
        return { ...comment, isEditing: false };
      });
      setCommentList(updatedCommentList);
    }
  };
  // 削除処理
  const handleDelete = async (commentId: number) => {
    if (window.confirm("コメントを削除しますか？")) {
      try {
        await deleteComment(commentId);
      } catch (error) {
        console.error("Error delete comment:", error);
      }
      init();
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between bg-white shadow-md rounded-lg p-4 border-b border-gray-300">
        <div className="flex items-center space-x-4">
          <div className="bg-gray-300 rounded-lg">
            <svg
              fill="#000000"
              width="42px"
              height="42px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12 2.5a5.5 5.5 0 00-3.096 10.047 9.005 9.005 0 00-5.9 8.18.75.75 0 001.5.045 7.5 7.5 0 0114.993 0 .75.75 0 101.499-.044 9.005 9.005 0 00-5.9-8.181A5.5 5.5 0 0012 2.5zM8 8a4 4 0 118 0 4 4 0 01-8 0z"
              />
            </svg>
          </div>
          <span className="text-gray-800 text-2xl font-bold">
            {kanjyaDetail
              ? decodeURIComponent(kanjyaDetail.kanjyaName as string)
              : ""}
          </span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto max-h-[70vh] p-4 space-y-4 w-11/12 mx-auto">
        {commentList.map((comment) => (
          <div
            className="bg-white shadow-md rounded-lg p-4 space-y-2 border border-gray-300"
            key={comment.commentId}
          >
            <div className="flex items-center space-x-4">
              <div className="bg-gray-300 rounded-lg p-2">
                <svg
                  fill="#000000"
                  width="32px"
                  height="32px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.5a5.5 5.5 0 00-3.096 10.047 9.005 9.005 0 00-5.9 8.18.75.75 0 001.5.045 7.5 7.5 0 0114.993 0 .75.75 0 101.499-.044 9.005 9.005 0 00-5.9-8.181A5.5 5.5 0 0012 2.5zM8 8a4 4 0 118 0 4 4 0 01-8 0z"
                  />
                </svg>
              </div>
              <span className="text-black-800 text-lg font-semibold">
                {comment.createAccountName}
              </span>
            </div>
            <div className="text-sm text-gray-500">{comment.updatedAt}</div>
            <div>
              {comment.isEditing ? (
                <textarea
                  value={editComment}
                  onChange={(e) => setEditComment(e.target.value)}
                  className="mt-2 p-2 border rounded w-full"
                  onBlur={() => {
                    handleEdit();
                  }}
                />
              ) : !comment.isEditing &&
                comment.accountId === selectedAccount?.accountId ? (
                <div
                  className="font-light text-black-500"
                  onClick={() => {
                    handleSetEditComment(comment.commentId);
                  }}
                >
                  {comment.content}
                </div>
              ) : (
                <div className="font-light text-black-500">
                  {comment.content}
                </div>
              )}

              <div className="flex justify-end whitespace-no-wrap">
                <button
                  onClick={() => handleDelete(comment.commentId)}
                  className="bg-red-500 text-white px-2 py-1 text-sm rounded-md whitespace-no-wrap flex flex-row"
                >
                  <svg
                    width="12px"
                    height="12px"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#ffffff"
                    stroke="#ffffff"
                    className="align-text-bottom m-1"
                  >
                    <path
                      d="M308.224 168.813714v-33.938285c0-56.32 45.641143-101.888 101.888-101.888h203.776c56.32 0 101.888 45.641143 101.888 101.888v33.938285h237.714286a33.938286 33.938286 0 0 1 0 67.949715H70.509714a33.938286 33.938286 0 0 1 0-67.949715h237.714286z m67.949714 0h271.652572v-33.938285a33.938286 33.938286 0 0 0-33.938286-33.938286H410.112a33.938286 33.938286 0 0 0-33.938286 33.938286v33.938285z m407.186286 710.582857V304.786286a34.084571 34.084571 0 1 1 68.242286 0v605.915428a73.142857 73.142857 0 0 1-73.142857 73.142857H245.540571a73.142857 73.142857 0 0 1-73.142857-73.142857V304.64a33.938286 33.938286 0 0 1 67.949715 0v574.756571a36.571429 36.571429 0 0 0 36.571428 36.571429h469.869714a36.571429 36.571429 0 0 0 36.571429-36.571429zM376.173714 338.651429c18.724571 0 33.938286 15.213714 33.938286 33.938285v407.478857a33.938286 33.938286 0 0 1-67.876571 0V372.589714c0-18.724571 15.140571-33.938286 33.938285-33.938285zM512 338.651429c18.724571 0 33.938286 15.213714 33.938286 33.938285v407.478857a33.938286 33.938286 0 0 1-67.876572 0V372.589714c0-18.724571 15.213714-33.938286 33.938286-33.938285z m135.826286 0c18.797714 0 33.938286 15.213714 33.938285 33.938285v407.478857a33.938286 33.938286 0 0 1-67.876571 0V372.589714c0-18.724571 15.213714-33.938286 33.938286-33.938285z"
                      fill="#ffffff"
                    />
                  </svg>{" "}
                  削除
                </button>
              </div>
            </div>
          </div>
        ))}
        <div className="scroll-mb-1" />
      </div>

      <footer className="fixed bottom-0 left-0 w-full mr-0 pr-0 bg-gray-100 border-t p-4">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="コメントを入力"
            value={addComment}
            onChange={(e) => {
              handleSetAddComment(e.target.value);
            }}
            className="flex-1 border rounded px-2 py-1 focus:outline-none focus:ring focus:border-blue-300 mr-0"
          />
          <button
            className="border-2 text-white px-4 py-1 rounded-md"
            onClick={handleAddComment}
          >
            <svg
              width="32px"
              height="32px"
              viewBox="0 0 24.00 24.00"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#000000"
              strokeWidth="0.00024000000000000003"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.3938 2.20468C3.70395 1.96828 4.12324 1.93374 4.4679 2.1162L21.4679 11.1162C21.7953 11.2895 22 11.6296 22 12C22 12.3704 21.7953 12.7105 21.4679 12.8838L4.4679 21.8838C4.12324 22.0662 3.70395 22.0317 3.3938 21.7953C3.08365 21.5589 2.93922 21.1637 3.02382 20.7831L4.97561 12L3.02382 3.21692C2.93922 2.83623 3.08365 2.44109 3.3938 2.20468ZM6.80218 13L5.44596 19.103L16.9739 13H6.80218ZM16.9739 11H6.80218L5.44596 4.89699L16.9739 11Z"
                fill="#000000"
              />
            </svg>
          </button>
        </div>
      </footer>
    </div>
  );
}
