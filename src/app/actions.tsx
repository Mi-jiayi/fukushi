"use server";
import { accountDao, commentDao, kanjyatDao } from "../db/dao";
import { CommentAddSchema, CommentEditSchema, Result } from "../model/schemas";

/**
 * アカウント情報を取得するメソッド
 * @returns データベース内のアカウント情報を返します。
 */
export async function getAccountList() {
  let result: Result = { success: false, error: "" };
  try {
    const accounts = accountDao.list();
    result.success = true;
    result.data = accounts;
    return result;
  } catch (getAccountsError) {
    console.error("アカウント情報の取得に失敗しました:", getAccountsError);
    result.error =
      "アカウント情報の取得に失敗しました。しばらくしてからもう一度お試しください。";
    return result;
  }
}

/**
 * 患者情報を全て取得するメソッド
 * @returns データベース内の患者情報を返します。
 */
export async function getKanjyaList() {
  let result: Result = { success: false, error: "" };
  try {
    const kanjyaList = kanjyatDao.list();
    result.success = true;
    result.data = kanjyaList;
    return result;
  } catch (getPatientsError) {
    console.error("患者情報の取得に失敗しました:", getPatientsError);
    result.error =
      "患者情報の取得に失敗しました。しばらくしてからもう一度お試しください。";
    return result;
  }
}

/**
 * コメントを追加するメソッド
 * @param accountId アカウントID
 * @param kanjyaId 患者ID
 * @param content コメント内容
 * @param createAccountName アカウント名
 * @returns コメント追加操作の結果で、成功可否や関連データ、エラー情報を含みます。
 */
export async function newComment(
  accountId: number,
  kanjyaId: number,
  content: string,
  createAccountName: string
) {
  let result: Result = { success: false, error: "" };
  const validatedFields = CommentAddSchema.safeParse({
    accountId,
    kanjyaId,
    content,
    createAccountName,
  });
  if (!validatedFields.success) {
    result.error = Object.values(
      validatedFields.error.flatten().fieldErrors
    ).join(", ");
    return result;
  }
  try {
    const comment = {
      accountId,
      kanjyaId,
      content,
      createAccountName,
    };
    const res = commentDao.add(comment);
    result.success = res === 1;
    return result;
  } catch (addCommentError) {
    console.error("コメントの追加に失敗しました:", addCommentError);
    result.error =
      "コメントの追加に失敗しました。しばらくしてからもう一度お試しください。";
    return result;
  }
}

/**
 * コメントを更新するメソッド
 * @param kanjyaId 患者ID
 * @param commentId コメントID
 * @param content 新しいコメント内容
 * @returns コメント更新操作の結果で、成功可否や関連データ、エラー情報を含みます。
 */
export async function updateComment(kanjyaId: number,commentId: number, content: string) {
  let result: Result = { success: false, error: "" };
  const validatedFields = CommentEditSchema.safeParse({
    kanjyaId,
    content,
    commentId,
  });
  if (!validatedFields.success) {
    result.error = Object.values(
      validatedFields.error.flatten().fieldErrors
    ).join(", ");
    return result;
  }

  try {
    const commentEdit = {
      kanjyaId,
      content,
      commentId,
    };
    const res = commentDao.edit(commentEdit);
    result.success = res;
  } catch (updateCommentError) {
    console.error("コメントの更新に失敗しました:", updateCommentError);
    result.error =
      "コメントの更新に失敗しました。しばらくしてからもう一度お試しください。";
    return result;
  }
}

/**
 * コメントを削除するメソッド
 * @param commentId コメントID
 * @returns コメント削除操作の結果で、成功可否や関連データ、エラー情報を含みます。
 */
export async function deleteComment(commentId: number) {
  let result: Result = { success: false, error: "" };
  try {
    const res = commentDao.delete(commentId);
    result.success = res === 1;
  } catch (deleteCommentError) {
    console.error("コメントの削除に失敗しました:", deleteCommentError);
    result.error =
      "コメントの削除に失敗しました。しばらくしてからもう一度お試しください。";
    return result;
  }
}

/**
 * 指定された患者のコメント情報を取得するメソッド
 * @param kanjyaId 患者のID
 * @returns その患者のコメント情報を返します。
 */
export async function getCommentList(kanjyaId: number) {
  let result: Result = { success: false, error: "" };
  try {
    const kanjyaList = commentDao.list(kanjyaId);
    result.success = true;
    result.data = kanjyaList;
    return result;
  } catch (getCommentsError) {
    console.error("患者のコメント情報の取得に失敗しました:", getCommentsError);
    result.error =
      "患者のコメント情報の取得に失敗しました。しばらくしてからもう一度お試しください。";
    return result;
  }
}
