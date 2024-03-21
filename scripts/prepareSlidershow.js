function prepareSlidershow() {
    // 确保浏览器支持DOM
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById)   return false;
    // 确保元素在页面
    if (!document.getElementById("linklist"))   return false;
    var slidedown = document.createElement("div");
    slidedown.setAttribute("id", "slidedown");
    var preview = document.createElement("img");
    preview.setAttribute("src", "../images/Gotham City/cop.jpg");
    preview.setAttribute("id", "preview");
    preview.setAttribute("alt", "building of the web design");
    var list = document.getElementById("linklist");
    insertAfter(slidedown, list);
    // 为图片应用样式
    var preview = document.getElementById("preview");
    // 取得列表所有的链接
    var list = document.getElementById("linklist");
    var links = list.getElementsByTagName("a");
    // 为onmouseover添加动画
    links[0].onmouseover = function() {
        moveElement("preview", -100, 0, 10);
    }
    links[1].onmouseover = function() {
        moveElement("preview", -200, 0, 10);
    }
    links[2].onmouseover = function() {
        moveElement("preview", -300, 0, 10);
    }
}

addLoadEvent(prepareSlidershow);