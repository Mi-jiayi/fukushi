import fs from "fs";
import path from "path";
import {
  CommentSchema,
  DbSchemaType,
  DbSchema,
  CommentAdd,
  CommentEdit,
} from "../model/schemas";

const dbPath = path.join(process.cwd(), "src", "db", "db.json");

let dataSource: DbSchemaType = {
  accountList: [],
  kanjyaList: [],
  commentList: [],
};

function loadDataSource() {
  try {
    // db.json ファイルを読み込む
    const data = fs.readFileSync(dbPath, "utf8");
    const jsonData = JSON.parse(data);
    // 変換する
    dataSource = DbSchema.parse(jsonData);
  } catch (error) {
    console.error("db.json の読み込みエラー:", error);
  }
}

function save() {
  fs.writeFileSync(dbPath, JSON.stringify(dataSource, null, 2));
}

loadDataSource();

// アカウント
const accountDao = {
  list: () => {
    loadDataSource();
    return dataSource.accountList;
  },
};

// 患者
const kanjyatDao = {
  list: () => {
    loadDataSource();
    return dataSource.kanjyaList.sort((cur, next) => {
      const dateCurUpdated = new Date(cur.updatedAt);
      const dateNextUpdated = new Date(next.updatedAt);
      if (dateCurUpdated.getTime() === dateNextUpdated.getTime()) {
        const dateCurCreated = new Date(cur.createdAt);
        const dateNextCreated = new Date(next.createdAt);
        return dateNextCreated.getTime() - dateCurCreated.getTime();
      }
      return dateNextUpdated.getTime() - dateCurUpdated.getTime();
    });;
  },
};

// コメント
const commentDao = {
  add: (comment: CommentAdd) => {
    const maxId =
      dataSource.commentList.length === 0
        ? 0
        : dataSource.commentList[dataSource.commentList.length - 1].commentId;
    const oldLength = dataSource.commentList.length;
    dataSource.commentList = [
      ...dataSource.commentList,
      CommentSchema.parse({
        commentId: maxId + 1,
        accountId: comment.accountId,
        kanjyaId: comment.kanjyaId,
        content: comment.content,
        createAccountName: comment.createAccountName,
        createdAt: formatDate(new Date()),
        updatedAt: formatDate(new Date()),
      }),
    ];
    commentDao.updateKanjya(comment.kanjyaId,formatDate(new Date()));
    save();
    loadDataSource();
    return dataSource.commentList.length - oldLength;
  },
  delete: (commentId: number) => {
    const oldLength = dataSource.commentList.length;
    dataSource.commentList = dataSource.commentList.filter(
      (comment) => comment.commentId !== commentId
    );
    save();
    loadDataSource();
    return dataSource.commentList.length - oldLength;
  },
  edit: (comment: CommentEdit) => {
    const targetComment = dataSource.commentList.filter(
      (item) => item.commentId === comment.commentId
    )[0];
    const old = targetComment.updatedAt;
    targetComment.content = comment.content;
    targetComment.updatedAt = formatDate(new Date());
    commentDao.updateKanjya(comment.kanjyaId,formatDate(new Date()));
    save();
    loadDataSource();
    return old === targetComment.updatedAt;
  },
  list: (kanjyaId: number) => {
    loadDataSource();
    return dataSource.commentList
      .filter((comment) => comment.kanjyaId === kanjyaId)
      .sort((cur, next) => {
        const dateCurUpdated = new Date(cur.updatedAt);
        const dateNextUpdated = new Date(next.updatedAt);

        if (dateCurUpdated.getTime() === dateNextUpdated.getTime()) {
          const dateCurCreated = new Date(cur.createdAt);
          const dateNextCreated = new Date(next.createdAt);
          return dateNextCreated.getTime() - dateCurCreated.getTime();
        }
        return dateNextUpdated.getTime() - dateCurUpdated.getTime();
      });
  },
  // コメントの更新とともに、患者情報も更新する
  updateKanjya(kanjyaId:number,updateAt:string){
    const targetKanjya = dataSource.kanjyaList.filter(
      (item) => item.kanjyaId === kanjyaId
    )[0];
    const old = targetKanjya.updatedAt;
    targetKanjya.updatedAt = updateAt;
    return old === targetKanjya.updatedAt;
  }
};

/**
 * 日付フォーマット（yyyy.mm.dd hh:mm）
 * @param date
 * @returns
 */
function formatDate(date: Date) {
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  const hh = String(date.getHours()).padStart(2, "0");
  const min = String(date.getMinutes()).padStart(2, "0");
  return `${yyyy}.${mm}.${dd} ${hh}:${min}`;
}

export { accountDao, commentDao, kanjyatDao };
