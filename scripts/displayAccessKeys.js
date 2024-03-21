function displayAccessKeys() {
    var navigation = document.getElementsByTagName("a");
    var accesskeylist = [];
    if (navigation.length >= 1) {
        for (var i = 0; i < navigation.length; i++) {
            var current_navigation = navigation[i];
            var accesskey = current_navigation.getAttribute("accesskey");
            var accesstext = current_navigation.firstChild.NodeValue;
            if (accesskey) {
                accesskeylist[accesskey] = accesstext;
            }
        }
    }
    var h3 = document.createElement("h3");
    var h3_text = document.createTextNode("Accesskeys");
    h3.appendChild(h3_text);
    var ul = document.createElement("ul");
    for (accesskey in accesskeylist) {
        var li = document.createElement("li");
        var str= accesskey + " : " + accesskeylist[accesskey];
        var li_text = document.createTextNode(str);
        li.appendChild(li_text);
    }bvbvbbnbnn 
}