var girdi1 = prompt("1 tane büyük harf giriniz:")
var girdi2 = prompt("1 tane küçük harf giriniz:")
var girdi3 = prompt("2 tane sayıyı giriniz:")
var girdi4 = prompt("1 tane simge giriniz:")

function randomcharornum(extent, charornum) {
    var mask = '';
    if (charornum.indexOf('a') > -1) mask += 'abcdefghijklmnopqrstuvwxyz';
    if (charornum.indexOf('A') > -1) mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (charornum.indexOf('0') > -1) mask += '0123456789';
    if (charornum.indexOf('#') > -1) mask += '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';
    var result = '';
    for (var i = extent; i > 0; --i) 
    {
        result += mask[Math.floor(Math.random() * mask.length)];
    }
    return result;
}
console.log(girdi1+girdi2+randomcharornum(5,'^#0aA')+girdi3+girdi4)