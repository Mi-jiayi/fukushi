import fs from 'fs';
import path from 'path';
import { CommentSchema,Comment,DbSchemaType,DbSchema,CommentAdd,CommentAddSchema, CommentEdit } from '../model/schemas';

const dbPath = path.join(process.cwd(), 'src', 'db', 'db.json');

let dataSource:DbSchemaType = {
    accountList:[],
    kanjyaList:[],
    commentList:[]
};

function loadDataSource(){
    try {
        // 读取 db.json 文件
        const data = fs.readFileSync(dbPath, 'utf8');
        const jsonData = JSON.parse(data);
        // 转换
        dataSource = DbSchema.parse(jsonData);
    } catch (error) {
        console.error('Error reading db.json:', error);
    }
}

function save(){
    fs.writeFileSync(dbPath, JSON.stringify(
        dataSource, null, 2));
}

loadDataSource();

// アカウント
const accountDao = {
    list: () => dataSource.accountList
}

// 患者
const kanjyatDao = {
    listByAccountId: (accountId:number) => {
        return dataSource.kanjyaList.filter(
            kanjya => kanjya.accountId === accountId
        )
    },
    listByKanjyaId: (kanjyaId:number) => {
        return dataSource.kanjyaList.filter(
            kanjya => kanjya.kanjyaId === kanjyaId
        )
    },
}

// コメント
const commentDao = {
    add: (comment:CommentAdd) => {
        const maxId = dataSource.commentList[dataSource.commentList.length-1].commentId ;
        const oldLength = dataSource.commentList.length;
        dataSource.commentList = [
            ...dataSource.commentList,
            CommentSchema.parse({
                commentId:  maxId + 1,
                accountId: comment.accountId,
                kanjyaId: comment.kanjyaId,
                content: comment.content,
                createAccountName: comment.createAccountName,
                createdAt: formatDate(new Date()),
                updatedAt: formatDate(new Date()),
            })
        ]
        save();
        return oldLength - dataSource.commentList.length;
    },
    delete: (commentId:number) => {
        const oldLength = dataSource.commentList.length;
        dataSource.commentList = dataSource.commentList.filter(
            comment => comment.commentId !== commentId
        );
        save();
        return dataSource.commentList.length - oldLength;
    },
    edit: (comment:CommentEdit) => {
        const targetComment = dataSource.commentList.filter(
            item => item.commentId === comment.commentId
        )[0];
        const old = targetComment.updatedAt;
        targetComment.content = comment.content;
        targetComment.updatedAt = formatDate(new Date());
        save();
        return old === targetComment.updatedAt;
    },
    list: (kanjyaId:number) => {
        return dataSource.commentList.filter(
            comment => 
                comment.kanjyaId === kanjyaId
        )
    }
}

/**
 * 日付フォーマット（yyyy.mm.dd hh:mm）
 * @param date 
 * @returns 
 */
export function formatDate(date : Date) {
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    const hh = String(date.getHours()).padStart(2, '0');
    const min = String(date.getMinutes()).padStart(2, '0');
    return `${yyyy}.${mm}.${dd} ${hh}:${min}`;
}


export { accountDao, commentDao, kanjyatDao }; 
