var prod = {
  name: '女装',
  styles: ['短款', '冬季', '春装']
};

function getTpl(data) {
  var content = "";
  var dl_head = "<dl class = \"product\">", dt_head = "<dt>", dd_head = "<dd>";
  var dl_end = "</dl>", dt_end = "</dt>", dd_end = "</dd>";
  for (var i = 0; i < data.styles.length; i++) {
    content += "\t" + dd_head + data.styles[i] + dd_end + "\n";
  }
  return dl_head + "\n\t" + dt_head + data.name + dt_end + "\n" + content + dl_end;
}

var result = getTpl(prod);
console.log(result);
