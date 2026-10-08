const L$ = {
    options: {
        html: false,
        xhtmlOut: false,
        breaks: false,
        langPrefix: "language-",
        linkify: false,
        typographer: false,
        quotes: "“”‘’",
        highlight: null,
        maxNesting: 100
    },
    components: {
        core: {},
        block: {},
        inline: {}
    }
};
const zero = {
    options: {
        html: false,
        xhtmlOut: false,
        breaks: false,
        langPrefix: "language-",
        linkify: false,
        typographer: false,
        quotes: "“”‘’",
        highlight: null,
        maxNesting: 20
    },
    components: {
        core: {
            rules: [
                "normalize",
                "block",
                "inline",
                "text_join"
            ]
        },
        block: {
            rules: [
                "paragraph"
            ]
        },
        inline: {
            rules: [
                "text"
            ],
            rules2: [
                "balance_pairs",
                "fragments_join"
            ]
        }
    }
};
const commonmark = {
    options: {
        html: true,
        xhtmlOut: true,
        breaks: false,
        langPrefix: "language-",
        linkify: false,
        typographer: false,
        quotes: "“”‘’",
        highlight: null,
        maxNesting: 20
    },
    components: {
        core: {
            rules: [
                "normalize",
                "block",
                "inline",
                "text_join"
            ]
        },
        block: {
            rules: [
                "blockquote",
                "code",
                "fence",
                "heading",
                "hr",
                "html_block",
                "lheading",
                "list",
                "reference",
                "paragraph"
            ]
        },
        inline: {
            rules: [
                "autolink",
                "backticks",
                "emphasis",
                "entity",
                "escape",
                "html_inline",
                "image",
                "link",
                "newline",
                "text"
            ],
            rules2: [
                "balance_pairs",
                "emphasis",
                "fragments_join"
            ]
        }
    }
};
export const Ufe = {
    default: L$,
    zero,
    commonmark
};
const Ffe = /^(vbscript|javascript|file|data):/;
const zfe = /^data:image\/(gif|png|jpeg|webp);/;
export function qfe(e) {
    let t = e.trim().toLowerCase();
    if (Ffe.test(t)) {
        return zfe.test(t);
    }
    return true;
}
