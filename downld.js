let apkList=["https://english.hadksks.com/beta/package/TB_English.apk","https://english.hadksks.com/beta/package/TB_Portugal.apk","https://english.hadksks.com/beta/package/TB_Spain.apk","https://english.hadksks.com/beta/package/TB_Thai.apk"];

let iosList=["https://fmwi30gf.ylkycfx.com/zx82c","https://pty22gg.pspsxfj.com/d9pha","https://xby14hl.pspsxfj.com/h3cnd","https://sd3fr4g.pspsxfj.com/uqwpn"];

function isIOS(){
    var u = navigator.userAgent;
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios
    return isiOS;
}

function download(i) {
 if (isIOS()) {
  window.location.href=iosList[i];
  return false;
 }

 const link = document.createElement("a");
 link.style.display = "none";
 link.href = apkList[i];
 link.download = "tbet.apk"
 document.body.appendChild(link);
 link.click();
 document.body.removeChild(link);
}