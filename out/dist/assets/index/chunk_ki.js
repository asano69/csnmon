import { b } from "../chunks/chunk-GCRJFCUZ.js";
import { e } from "../chunks/chunk-FXCI2R73.js";
export const ki = {
    callLog: "問合せログ",
    inProgress: "問合せ対応中",
    resolved: "問合せ対応完了",
    knowledgeArticle: "ナレッジ記事",
    reviewedKnowledgeArticle: "レビュー完了ナレッジ記事",
    pendingReviewKnowledgeArticle: "レビュー待ちナレッジ記事"
};
export function gY(e) {
    let t = e?.kcsTagNames;
    return {
        callLog: t?.callLog || ki.callLog,
        inProgress: t?.inProgress || ki.inProgress,
        resolved: t?.resolved || ki.resolved,
        knowledgeArticle: t?.knowledgeArticle || ki.knowledgeArticle,
        reviewedKnowledgeArticle: t?.reviewedKnowledgeArticle || ki.reviewedKnowledgeArticle,
        pendingReviewKnowledgeArticle: t?.pendingReviewKnowledgeArticle || ki.pendingReviewKnowledgeArticle
    };
}
export const Rn = e(b(), 1);
