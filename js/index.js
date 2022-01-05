var htmlstr = '<div><p><b>Title</b>  :  ' + document.title + ' [Length=' + document.title.length + '] </p></div>';
metadata = document.getElementsByTagName("META");
for (var meta in metadata) {
    if (metadata[meta].name == 'description') {
        htmlstr += '<div><p><b>Description</b>  :  ' + metadata[meta].content + ' [Length=' + metadata[meta].content.length + ' ]</p></div>';
    }
}


for (var meta in metadata) {
    if (metadata[meta].name == 'keywords') {
        htmlstr += '<div><p><b>Keywords </b> :  ' + metadata[meta].content + ' [Count=' + metadata[meta].content.split(",").length + '] </p></div>';
    }
}
var links = document.getElementsByTagName("link");
for (var i = 0; i < links.length; i++) {
    if (links[i].getAttribute("rel") === "canonical") {
        var canonical = links[i].getAttribute("href");
        htmlstr += '<div><p><b>canonical </b> <br>  ' + canonical + '  </p></div>';
    }
    if (links[i].getAttribute("rel") === "amphtml") {
        var amphtml = links[i].getAttribute("href");
        htmlstr += '<div><p><b>amphtml </b><br>  <a href="' + amphtml + '">' + amphtml + '</a>  </p></div>';
    }
}
var h1 = document.getElementsByTagName("h1");
var h2 = document.getElementsByTagName("h2");
if (h1 != 0) {
    htmlstr += '<div><p><b>H1 </b>: Count ' + h1.length + ' [color:Light Blue] </p></div>';
    $("h1").css("background-color", "#7d5fff");
    $("h1").css("color", "#FFF");
}

if (h2 != 0) {
    htmlstr += '<div><p><b>H2 </b>: Count ' + h2.length + ' [color: Yellow] </p></div>';
    $("h2").css("background-color", "#fff200");

}

$('body').append('<style>.metabtn,.metacontent{padding:6px;box-shadow:0 1px 6px rgba(0,0,0,.12),0 1px 4px rgba(0,0,0,.24)}.metabox,.metabtn,.metacontent{box-shadow:0 1px 6px rgba(0,0,0,.12),0 1px 4px rgba(0,0,0,.24)}.metabox{font-size:18px;right:10px;border-top-right-radius:5px;border-top-left-radius:5px;position:fixed;bottom:0;width:300px;border:2px groove #333;background-color:#eeeeee;color:#000;z-index:9999;border-width:3px}.metabtn{padding:4px!important;text-align:center;border-bottom:solid 2px #333;font-size:18px;color:#FFF;background-color:#fa8231}.metabtn:hover{background-color:#fd9644;color:#000;}.metacontent{text-align:justify;display:none}.metacontent p{border-bottom:solid 2px #fa8231;font-size:16px!important;margin:3px;padding:3px;}</style><div class="metabox"><div class="metabtn">Meta Tool</div><div class="metacontent">' + htmlstr + '</div></div>');

$('.metabtn').on('click', function () {
    $('.metacontent').toggle(500);
});