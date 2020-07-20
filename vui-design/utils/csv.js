import is from "./is";

const defaults = {
    quoted: false,
    separator: ","
};

const newLine = "\r\n";
const appendLine = (content, row, options) => {
    const line = row.map(data => {
        if (!options.quoted) {
            return data;
        }

        data = typeof data === "string" ? data.replace(/"/g, '"') : data;

        return `"${data}"`;
    });

    content.push(line.join(options.separator));
};

const isIE11 = () => {
    let iev = 0;
    const ieold = (/MSIE (\d+\.\d+);/.test(navigator.userAgent));
    const trident = !!navigator.userAgent.match(/Trident\/7.0/);
    const rv = navigator.userAgent.indexOf("rv:11.0");

    if (ieold) {
        iev = Number(RegExp.$1);
    }

    if (navigator.appVersion.indexOf("MSIE 10") > -1) {
        iev = 10;
    }

    if (trident && rv !== -1) {
        iev = 11;
    }

    return iev === 11;
};
const isEdge = () => {
    return /Edge/.test(navigator.userAgent);
};

const has = browser => {
    const ua = navigator.userAgent;

    if (browser === "ie") {
        const isIE = ua.indexOf("compatible") > -1 && ua.indexOf("MSIE") > -1;

        if (isIE) {
            const reIE = new RegExp("MSIE (\\d+\\.\\d+);");

            reIE.test(ua);

            return parseFloat(RegExp.$1);
        }
        else {
            return false;
        }
    }
    else {
        return ua.indexOf(browser) > -1;
    }
};

const getDownloadUrl = text => {
    const bom = "\uFEFF";

    if (window.Blob && window.URL && window.URL.createObjectURL) {
        const csvData = new Blob([bom + text], {
            type: "text/csv"
        });

        return URL.createObjectURL(csvData);
    }
    else {
        return "data:attachment/csv;charset=utf-8," + bom + encodeURIComponent(text);
    }
};

const csv = (columns, data, options) => {
    let settings = { ...defaults, ...options };

    let order;
    const content = [];
    const aaa = [];

    if (columns) {
        order = columns.map(column => {
            if (is.string(column)) {
                return column;
            }

            if (settings.showHeader) {
                aaa.push(is.undefined(column.title) ? column.key : column.title);
            }

            return column.key;
        });

        if (aaa.length > 0) {
            appendLine(content, aaa, settings);
        }
    }
    else {
        order = [];

        data.forEach(row => {
            if (!is.array(row)) {
                order = order.concat(Object.keys(row));
            }
        });

        if (order.length > 0) {
            order = order.filter((value, index, self) => self.indexOf(value) === index);

            if (settings.showHeader) {
                appendLine(content, order, settings);
            }
        }
    }

    if (is.array(data)) {
        data.forEach(row => {
            if (!is.array(row)) {
                row = order.map(k => (is.undefined(row[k]) ? "" : row[k]));
            }

            appendLine(content, row, settings);
        });
    }

    return content.join(newLine);
};

csv.download = (filename, text) => {
    if (has("ie") && has("ie") < 10) {
        const win = window.top.open("about:blank", "_blank");

        win.document.charset = "utf-8";
        win.document.write(text);
        win.document.close();
        win.document.execCommand("SaveAs", filename);
        win.close();
    }
    else if (has("ie") === 10 || isIE11() || isEdge()) {
        const bom = "\uFEFF";
        const data = new Blob([bom + text], {
            type: "text/csv"
        });

        navigator.msSaveBlob(data, filename);
    }
    else {
        const link = document.createElement("a");

        link.download = filename;
        link.href = getDownloadUrl(text);

        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);
    }
};

export default csv;