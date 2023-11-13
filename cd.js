function run(){
    let htmlCode = document.getElementById("html-code");
    let cssCode = document.getElementById("css-code");
    let jsCode = document.getElementById("js-code");
    let outputt = document.getElementById("out");
    outputt.contentDocument.body.innerHTML = htmlCode.value + "<style>" + cssCode.value +"</style>";
    outputt.contentWindow.eval(jsCode.value);
}
