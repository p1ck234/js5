function my() {
  s = String();
  k = new String();
  s = forma.pole.value;
  d = new Array();
  d = s.split(" ");
  for (i = 0; i < d.length; i++)
    d[i] = d[i].replace(d[i].charAt(0), d[i].charAt(0).toUpperCase());
  k = d.join(" ");
  document.getElementById("b").innerHTML = k;
}

var str = prompt("Введите строку", "");
document.writeln("<b>Исходная строка:</b>" + str + "<br>");
l = str.length;
s = new Array();
slovo = new Array();
k = 0;
for (i = 0; i <= l - 1; ++i) {
  if (str.slice(i, i + 1) == " ") k = k + 1;
}
s1 = "";
slovo = str.split(" ");
for (i = 0; i <= k; ++i) {
  l = slovo[i].length;
  a = slovo[i].indexOf("a");
  s1 = s1 + slovo[i].slice(0, a) + "o" + " ";
}
document.writeln("<b> Преобразованная строка: </b>" + s1 + "<br>");

// Текст это последовательное объединение предложений которое представляет собой смысловую содержательную и структурную целостность

var str = prompt("Введите предложение", "");
var longest = 0;
var word = null;
var strSplit = str.split(" ");
for (var i = 0; i <= strSplit.length - 1; i++) {
  if (longest < strSplit[i].length) {
    longest = strSplit[i].length;
    word = strSplit[i];
  }
}
document.writeln("<b>Самое длинное слово: </b>" + word + "<br>");
