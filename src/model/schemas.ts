import { z } from "zod";

// アカウント
export const AccountSchema = z.object({
  accountId: z.number(),
  accountName: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

// 患者
export const KanjyaSchema = z.object({
  kanjyaId: z.number(),
  accountId: z.number(),
  kanjyaName: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

// コメント
export const CommentSchema = z.object({
  commentId: z.number(),
  accountId: z.number(),
  kanjyaId: z.number(),
  content: z.string(),
  createAccountName: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export const CommentAddSchema = z.object({
  accountId: z.number(),
  kanjyaId: z.number(),
  content: z.string(),
  createAccountName: z.string(),
});

export const CommentEditSchema = z.object({
  kanjyaId: z.number(),
  commentId: z.number(),
  content: z.string(),
});

export const DbSchema = z.object({
  accountList: z.array(AccountSchema),
  kanjyaList: z.array(KanjyaSchema),
  commentList: z.array(CommentSchema),
});

// レスポンス
export const ResultSchema = z.object({
  success: z.boolean(),
  error: z.string(), 
  data: z.optional(z.any()), 
});


// 型の推論（オプション）
export type Account = z.infer<typeof AccountSchema>;
export type Kanjya = z.infer<typeof KanjyaSchema>;
export type Comment = z.infer<typeof CommentSchema>;
export type CommentAdd = z.infer<typeof CommentAddSchema>;
export type CommentEdit = z.infer<typeof CommentEditSchema>;
export type DbSchemaType = z.infer<typeof DbSchema>;
export type Result = z.infer<typeof ResultSchema>;
