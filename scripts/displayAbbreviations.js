function displayAbbreviations() {
    if (!document.getElementById)    return false;
    if (!document.createElement)    return false;
    if (!document.createTextNode)   return false;
    var all_abbrs = document.getElementsByTagName("abbr");
    if (all_abbrs.length < 1)   return false;
    var title = [];
    var text = [];
    var defs = [];
    for (var i = 0; i < all_abbrs.length; i++) {
        var current_abbr = all_abbrs[i];
        if (current_abbr.childNodes.length < 1)     continue;
        title.append(current_abbr.getAttribute("title"));
        text.append(current_abbr.firstChild.nodeValue);
        defs[text] = title;
    }
    var dlist = document.createElement("dl");
    for (key in defs) {
        var definition = defs[key];
        var dtitle = document.createElement("dt");
        var dtitle_text = document.createTextNode(key);
        dtitle.appendChild(dtitle_text);
        var ddesc = document.createElement("dd");
        var ddesc_text = document.createTextNode(definition);
        ddesc.appendChild(ddesc_text);
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }
    if (dlist.childNodes.length < 1)    return false;
    var header = document.createElement("h2");
    var header_text = document.createTextNode("Abbreviations");
    header.appendChild(header_text);
    document.body.appendChild(header);
    document.body.appendChild(dlist);
}

function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != "function") {
        window.onload = func;
    } else {
        window.onload = function() {
            oldonload();
            func();
        }
    }
}

addLoadEvent(displayAbbreviations);