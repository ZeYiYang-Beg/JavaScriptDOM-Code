function showPic(whichpic)
{
    if (!document.getElementById("placeholder")) return false;
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    if (placeholder.nodeName != "IMG")  return false;
    placeholder.setAttribute("src", source);
    if (document.getElementById("description")){
        var text = whichpic.getAttribute("title") ? whichpic.getAttribute("title") : "";
        var description = document.getElementById("description");
        if (description.firstChild.nodeType == 3) {
            description.firstChild.nodeValue = text;
        }
    }
    return true;
}

function prepareGallery() {
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById("imagegallery"))   return false;
    var gallary = document.getElementById("imagegallery");
    var links = gallary.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        links[i].onclick = function() {
            return showPic(this) ? false : true;
        }
    }
}

function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload!="function") {
        window.onload = func;
    }
    else {
        window.onload = function() {
            oldonload();
            func();
        }
    }
}

function preparePlaceholder() {
    if (!document.createElement)    return false;
    if (!document.createTextNode)   return false;
    if (!document.getElementById)   return false;
    var img_element = document.createElement("img");
    var p_element = document.createElement("p");
    var text = document.createTextNode("Choose an image");
    img_element.setAttribute("id", "placeholder");
    img_element.setAttribute("src", "./images/Gotham City/Cop.jpg");
    img_element.setAttribute("alt", "my image gallery");
    p_element.setAttribute("id", "description");
    p_element.appendChild(text);
    var gallery = document.getElementById("imagegallery");
    insertAfter(img_element, gallery);
    insertAfter(p_element, img_element);
}

function insertAfter(newElement, targetElement) {
    var parent = targetElement.parentNode;
    if (parent.lastChild == targetElement) {
        parent.appendChild(newElement);
    } else {
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}

addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);