function insertParagraph(text) {
    var str = "<div>";
    str += text;
    str += "</div>";
    document.write(str);
} 
/*
window.onload = function() {
    var paras = document.createElement("p");
    var testdiv = document.getElementById("testdiv");
    var txt = document.createTextNode("Hello world");
    testdiv.appendChild(paras);
    paras.appendChild(txt);
}
*/

window.onload = function() {
    var testdiv1 = document.getElementById("testdiv1");
    var para = document.createElement("p");
    var para_em = document.createElement("em");
    var para_em_txt = document.createTextNode("my");
    para_em.appendChild(para_em_txt);
    var para_first_txt = document.createTextNode("This is ");
    var para_last_txt = document.createTextNode(" content.");
    testdiv1.appendChild(para);
    para.appendChild(para_first_txt);
    para.appendChild(para_em);
    para.appendChild(para_last_txt);
}