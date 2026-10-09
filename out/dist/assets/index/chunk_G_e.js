import { Ya, p, r, y } from "../chunks/chunk-GCRJFCUZ.js";
const G_e = r("src/client/js/routes/page-history.js");
export async function W_e(e) {
    let { projectName, pageId, historyId } = e.params;
    try {
        let o = await Ya.PageHistory.fetchSnapshot({
            projectName,
            pageId,
            historyId
        });
        let [s, a] = await Promise.all([
            Ya.CurrentProject.fetch(projectName),
            Ya.Page.fetch({
                projectName,
                title: o.data.page.title
            })
        ]);
        Ya.Selection.clear();
        Ya.Cursor.clear();
        Ya.CurrentProject.set(s);
        Ya.Page.set(a);
        Ya.Layout.set("page", {
            scrollToTop: false
        });
        if (!Ya.PageHistory.isEnable) {
            await Ya.PageHistory.enable({
                snapshotId: historyId
            });
        }
    } catch (error) {
        if (p.isCancel(error)) {
            return G_e("canceled");
        }
        Ya.Error.set(error);
        Ya.Layout.set("error-page");
        if (!y(error)) {
            throw error;
        }
    }
}
