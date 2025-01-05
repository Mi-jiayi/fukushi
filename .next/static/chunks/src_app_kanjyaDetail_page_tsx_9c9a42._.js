(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_kanjyaDetail_page_tsx_9c9a42._.js", {

"[project]/src/app/kanjyaDetail/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>KanjyaDetail)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
function KanjyaDetail() {
    _s();
    // 直接从store中获取todo
    const accounts = [
        {
            "id": 1,
            "name": "アカウント1",
            "role": 1
        },
        {
            "id": 2,
            "name": "アカウント2",
            "role": 2
        },
        {
            "id": 3,
            "name": "アカウント3",
            "role": 3
        }
    ];
    const [currentAccount, setCurrentAccount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(accounts[0]);
    const [commentList, setComment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
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
    ]);
    // 削除
    const handleDelete = (id)=>{
        console.log(id);
    };
    // 新規コメント投稿内容
    const [addComment, SetAddComment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const handleSetAddComment = (inputValue)=>{
        SetAddComment(inputValue);
    };
    // 登録処理
    const handleAddComment = ()=>{
        // call api
        alert('登録処理');
    };
    // 編集コメント投稿内容
    const [isShowEdit, setIsShowEdit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editComment, SetEditComment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const handleSetEditComment = (createId, commentId, commentContent)=>{
        SetEditComment(commentContent);
        setIsShowEdit(true);
    };
    // 編集処理
    const handleEdit = (createId, commentId)=>{
        // call api
        alert('編集処理');
        setIsShowEdit(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between bg-white shadow-md rounded-lg p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center space-x-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gray-300 rounded-lg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                fill: "#000000",
                                width: "64px",
                                height: "64px",
                                viewBox: "0 0 24 24",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    fillRule: "evenodd",
                                    d: "M12 2.5a5.5 5.5 0 00-3.096 10.047 9.005 9.005 0 00-5.9 8.18.75.75 0 001.5.045 7.5 7.5 0 0114.993 0 .75.75 0 101.499-.044 9.005 9.005 0 00-5.9-8.181A5.5 5.5 0 0012 2.5zM8 8a4 4 0 118 0 4 4 0 01-8 0z"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/kanjyaDetail/page.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/kanjyaDetail/page.tsx",
                                lineNumber: 83,
                                columnNumber: 9
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/kanjyaDetail/page.tsx",
                            lineNumber: 82,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-gray-800 text-lg font-medium",
                            children: 11111
                        }, void 0, false, {
                            fileName: "[project]/src/app/kanjyaDetail/page.tsx",
                            lineNumber: 87,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/kanjyaDetail/page.tsx",
                    lineNumber: 81,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/kanjyaDetail/page.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: commentList.map((comment)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white shadow-md rounded-lg p-4 space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gray-300 rounded-lg p-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            fill: "#000000",
                                            width: "64px",
                                            height: "64px",
                                            viewBox: "0 0 24 24",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                fillRule: "evenodd",
                                                d: "M12 2.5a5.5 5.5 0 00-3.096 10.047 9.005 9.005 0 00-5.9 8.18.75.75 0 001.5.045 7.5 7.5 0 0114.993 0 .75.75 0 101.499-.044 9.005 9.005 0 00-5.9-8.181A5.5 5.5 0 0012 2.5zM8 8a4 4 0 118 0 4 4 0 01-8 0z"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/kanjyaDetail/page.tsx",
                                                lineNumber: 99,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/kanjyaDetail/page.tsx",
                                            lineNumber: 98,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/kanjyaDetail/page.tsx",
                                        lineNumber: 97,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-800 font-medium",
                                        children: comment.createAccountName
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/kanjyaDetail/page.tsx",
                                        lineNumber: 102,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/kanjyaDetail/page.tsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this),
                            currentAccount.id === comment.createAccountId ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    isShowEdit ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        value: editComment,
                                        onChange: (e)=>SetEditComment(e.target.value),
                                        className: "mt-2 p-2 border rounded w-full",
                                        onBlur: ()=>{
                                            handleEdit(comment.id, comment.createAccountId);
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/kanjyaDetail/page.tsx",
                                        lineNumber: 110,
                                        columnNumber: 21
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-gray-500",
                                        onClick: ()=>{
                                            handleSetEditComment(comment.createAccountId, comment.id, comment.content);
                                        },
                                        children: comment.content
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/kanjyaDetail/page.tsx",
                                        lineNumber: 117,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-end whitespace-no-wrap",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleDelete(1),
                                            className: "bg-red-500 text-white px-4 py-1 text-sm rounded-md whitespace-no-wrap flex flex-row  ",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "12px",
                                                    height: "12px",
                                                    viewBox: "0 0 1024 1024",
                                                    version: "1.1",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    fill: "#ffffff",
                                                    stroke: "#ffffff",
                                                    className: "align-text-bottom m-1",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M308.224 168.813714v-33.938285c0-56.32 45.641143-101.888 101.888-101.888h203.776c56.32 0 101.888 45.641143 101.888 101.888v33.938285h237.714286a33.938286 33.938286 0 0 1 0 67.949715H70.509714a33.938286 33.938286 0 0 1 0-67.949715h237.714286z m67.949714 0h271.652572v-33.938285a33.938286 33.938286 0 0 0-33.938286-33.938286H410.112a33.938286 33.938286 0 0 0-33.938286 33.938286v33.938285z m407.186286 710.582857V304.786286a34.084571 34.084571 0 1 1 68.242286 0v605.915428a73.142857 73.142857 0 0 1-73.142857 73.142857H245.540571a73.142857 73.142857 0 0 1-73.142857-73.142857V304.64a33.938286 33.938286 0 0 1 67.949715 0v574.756571a36.571429 36.571429 0 0 0 36.571428 36.571429h469.869714a36.571429 36.571429 0 0 0 36.571429-36.571429zM376.173714 338.651429c18.724571 0 33.938286 15.213714 33.938286 33.938285v407.478857a33.938286 33.938286 0 0 1-67.876571 0V372.589714c0-18.724571 15.140571-33.938286 33.938285-33.938285zM512 338.651429c18.724571 0 33.938286 15.213714 33.938286 33.938285v407.478857a33.938286 33.938286 0 0 1-67.876572 0V372.589714c0-18.724571 15.213714-33.938286 33.938286-33.938285z m135.826286 0c18.797714 0 33.938286 15.213714 33.938285 33.938285v407.478857a33.938286 33.938286 0 0 1-67.876571 0V372.589714c0-18.724571 15.213714-33.938286 33.938286-33.938285z",
                                                        fill: "#ffffff"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/kanjyaDetail/page.tsx",
                                                        lineNumber: 127,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/kanjyaDetail/page.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 19
                                                }, this),
                                                " 削除"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/kanjyaDetail/page.tsx",
                                            lineNumber: 122,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/kanjyaDetail/page.tsx",
                                        lineNumber: 121,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/kanjyaDetail/page.tsx",
                                lineNumber: 107,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-gray-500",
                                        children: comment.content
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/kanjyaDetail/page.tsx",
                                        lineNumber: 134,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-end whitespace-no-wrap",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleDelete(1),
                                            className: "bg-red-500 text-white px-4 py-1 text-sm rounded-md whitespace-no-wrap flex flex-row  ",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "12px",
                                                    height: "12px",
                                                    viewBox: "0 0 1024 1024",
                                                    version: "1.1",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    fill: "#ffffff",
                                                    stroke: "#ffffff",
                                                    className: "align-text-bottom m-1",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M308.224 168.813714v-33.938285c0-56.32 45.641143-101.888 101.888-101.888h203.776c56.32 0 101.888 45.641143 101.888 101.888v33.938285h237.714286a33.938286 33.938286 0 0 1 0 67.949715H70.509714a33.938286 33.938286 0 0 1 0-67.949715h237.714286z m67.949714 0h271.652572v-33.938285a33.938286 33.938286 0 0 0-33.938286-33.938286H410.112a33.938286 33.938286 0 0 0-33.938286 33.938286v33.938285z m407.186286 710.582857V304.786286a34.084571 34.084571 0 1 1 68.242286 0v605.915428a73.142857 73.142857 0 0 1-73.142857 73.142857H245.540571a73.142857 73.142857 0 0 1-73.142857-73.142857V304.64a33.938286 33.938286 0 0 1 67.949715 0v574.756571a36.571429 36.571429 0 0 0 36.571428 36.571429h469.869714a36.571429 36.571429 0 0 0 36.571429-36.571429zM376.173714 338.651429c18.724571 0 33.938286 15.213714 33.938286 33.938285v407.478857a33.938286 33.938286 0 0 1-67.876571 0V372.589714c0-18.724571 15.140571-33.938286 33.938285-33.938285zM512 338.651429c18.724571 0 33.938286 15.213714 33.938286 33.938285v407.478857a33.938286 33.938286 0 0 1-67.876572 0V372.589714c0-18.724571 15.213714-33.938286 33.938286-33.938285z m135.826286 0c18.797714 0 33.938286 15.213714 33.938285 33.938285v407.478857a33.938286 33.938286 0 0 1-67.876571 0V372.589714c0-18.724571 15.213714-33.938286 33.938286-33.938285z",
                                                        fill: "#ffffff"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/kanjyaDetail/page.tsx",
                                                        lineNumber: 141,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/kanjyaDetail/page.tsx",
                                                    lineNumber: 140,
                                                    columnNumber: 19
                                                }, this),
                                                " 削除"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/kanjyaDetail/page.tsx",
                                            lineNumber: 136,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/kanjyaDetail/page.tsx",
                                        lineNumber: 135,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/kanjyaDetail/page.tsx",
                                lineNumber: 133,
                                columnNumber: 15
                            }, this)
                        ]
                    }, comment.id, true, {
                        fileName: "[project]/src/app/kanjyaDetail/page.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/kanjyaDetail/page.tsx",
                lineNumber: 92,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "fixed bottom-0 left-0 w-full mr-0 pr-0 bg-gray-100 border-t p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center space-x-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: "コメントを入力",
                            value: addComment,
                            onChange: (e)=>{
                                handleSetAddComment(e.target.value);
                            },
                            className: "flex-1 border rounded px-2 py-1 focus:outline-none focus:ring focus:border-blue-300 mr-0"
                        }, void 0, false, {
                            fileName: "[project]/src/app/kanjyaDetail/page.tsx",
                            lineNumber: 153,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "border-2 text-white px-4 py-1 rounded-md",
                            onClick: handleAddComment,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "32px",
                                height: "32px",
                                viewBox: "0 0 24.00 24.00",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                stroke: "#000000",
                                strokeWidth: "0.00024000000000000003",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M3.3938 2.20468C3.70395 1.96828 4.12324 1.93374 4.4679 2.1162L21.4679 11.1162C21.7953 11.2895 22 11.6296 22 12C22 12.3704 21.7953 12.7105 21.4679 12.8838L4.4679 21.8838C4.12324 22.0662 3.70395 22.0317 3.3938 21.7953C3.08365 21.5589 2.93922 21.1637 3.02382 20.7831L4.97561 12L3.02382 3.21692C2.93922 2.83623 3.08365 2.44109 3.3938 2.20468ZM6.80218 13L5.44596 19.103L16.9739 13H6.80218ZM16.9739 11H6.80218L5.44596 4.89699L16.9739 11Z",
                                    fill: "#000000"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/kanjyaDetail/page.tsx",
                                    lineNumber: 165,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/kanjyaDetail/page.tsx",
                                lineNumber: 164,
                                columnNumber: 10
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/kanjyaDetail/page.tsx",
                            lineNumber: 160,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/kanjyaDetail/page.tsx",
                    lineNumber: 152,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/kanjyaDetail/page.tsx",
                lineNumber: 151,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/kanjyaDetail/page.tsx",
        lineNumber: 79,
        columnNumber: 5
    }, this);
}
_s(KanjyaDetail, "lB7WykrvraU7Rc6i7jyh5akrC2U=");
_c = KanjyaDetail;
var _c;
__turbopack_refresh__.register(_c, "KanjyaDetail");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/kanjyaDetail/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=src_app_kanjyaDetail_page_tsx_9c9a42._.js.map