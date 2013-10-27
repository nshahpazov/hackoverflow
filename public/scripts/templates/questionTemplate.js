define(['jade'], function(jade) { if(jade && jade['runtime'] !== undefined) { jade = jade.runtime; }

return function anonymous(locals
/**/) {
jade.debug = [{ lineno: 1, filename: "templates/questionTemplate.jade" }];
try {
var buf = [];
var locals_ = (locals || {}),title = locals_.title,text = locals_.text,date = locals_.date,author = locals_.author,answers_count = locals_.answers_count,views_count = locals_.views_count,tags = locals_.tags;jade.debug.unshift({ lineno: 1, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 1, filename: jade.debug[0].filename });
buf.push("<div class=\"wrapper\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 2, filename: jade.debug[0].filename });
buf.push("<legend id=\"title\" class=\"legend\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 3, filename: jade.debug[0].filename });
buf.push("<img src=\"images/voting.png\" alt=\"Question view\" width=\"60\" height=\"55\"/>");
jade.debug.shift();
jade.debug.unshift({ lineno: 4, filename: jade.debug[0].filename });
buf.push("<span id=\"title\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 4, filename: jade.debug[0].filename });
buf.push("" + (jade.escape((jade.interp = title) == null ? '' : jade.interp)) + "");
jade.debug.shift();
jade.debug.shift();
buf.push("</span>");
jade.debug.shift();
jade.debug.shift();
buf.push("</legend>");
jade.debug.shift();
jade.debug.unshift({ lineno: 5, filename: jade.debug[0].filename });
buf.push("<div id=\"div-message\" class=\"alert alert-warning\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 6, filename: jade.debug[0].filename });
buf.push("<body id=\"text\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 6, filename: jade.debug[0].filename });
buf.push("" + (jade.escape((jade.interp = text) == null ? '' : jade.interp)) + "");
jade.debug.shift();
jade.debug.shift();
buf.push("</body>");
jade.debug.shift();
jade.debug.unshift({ lineno: 7, filename: jade.debug[0].filename });
buf.push("<footer id=\"footer\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 8, filename: jade.debug[0].filename });
buf.push("Публикувано на " + (jade.escape((jade.interp = (new Date(date)).getDate()) == null ? '' : jade.interp)) + "-" + (jade.escape((jade.interp = (new Date(date)).getMonth()) == null ? '' : jade.interp)) + "-" + (jade.escape((jade.interp = (new Date(date)).getFullYear()) == null ? '' : jade.interp)) + " в " + (jade.escape((jade.interp = (new Date(date)).getHours()) == null ? '' : jade.interp)) + ":" + (jade.escape((jade.interp = (new Date(date)).getMinutes()) == null ? '' : jade.interp)) + ":" + (jade.escape((jade.interp = (new Date(date)).getSeconds()) == null ? '' : jade.interp)) + "  , от " + (jade.escape((jade.interp = author) == null ? '' : jade.interp)) + "");
jade.debug.shift();
jade.debug.unshift({ lineno: 9, filename: jade.debug[0].filename });
buf.push("<p id=\"reviews\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 9, filename: jade.debug[0].filename });
buf.push("Отговори: " + (jade.escape((jade.interp = answers_count) == null ? '' : jade.interp)) + " Видяна: " + (jade.escape((jade.interp = views_count) == null ? '' : jade.interp)) + "");
jade.debug.shift();
jade.debug.shift();
buf.push("</p>");
jade.debug.shift();
jade.debug.unshift({ lineno: 10, filename: jade.debug[0].filename });
buf.push("<p id=\"tags\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 10, filename: jade.debug[0].filename });
buf.push("Тагове: ");
jade.debug.shift();
jade.debug.unshift({ lineno: 11, filename: jade.debug[0].filename });
buf.push("<ul class=\"tags-list\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 12, filename: jade.debug[0].filename });
// iterate tags
;(function(){
  var $$obj = tags;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var tag = $$obj[$index];

jade.debug.unshift({ lineno: 12, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 13, filename: jade.debug[0].filename });
buf.push("<li>");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 13, filename: jade.debug[0].filename });
buf.push("" + (jade.escape((jade.interp = tag) == null ? '' : jade.interp)) + "");
jade.debug.shift();
jade.debug.shift();
buf.push("</li>");
jade.debug.shift();
jade.debug.shift();
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var tag = $$obj[$index];

jade.debug.unshift({ lineno: 12, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 13, filename: jade.debug[0].filename });
buf.push("<li>");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 13, filename: jade.debug[0].filename });
buf.push("" + (jade.escape((jade.interp = tag) == null ? '' : jade.interp)) + "");
jade.debug.shift();
jade.debug.shift();
buf.push("</li>");
jade.debug.shift();
jade.debug.shift();
    }

  }
}).call(this);

jade.debug.shift();
jade.debug.shift();
buf.push("</ul>");
jade.debug.shift();
jade.debug.unshift({ lineno: 14, filename: jade.debug[0].filename });
buf.push("<div class=\"clrfix\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.shift();
buf.push("</div>");
jade.debug.shift();
jade.debug.shift();
buf.push("</p>");
jade.debug.shift();
jade.debug.shift();
buf.push("</footer>");
jade.debug.shift();
jade.debug.shift();
buf.push("</div>");
jade.debug.shift();
jade.debug.unshift({ lineno: 15, filename: jade.debug[0].filename });
buf.push("<span class=\"clrfix\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.shift();
buf.push("</span>");
jade.debug.shift();
jade.debug.unshift({ lineno: 16, filename: jade.debug[0].filename });
buf.push("<div id=\"answer-section\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 18, filename: jade.debug[0].filename });
buf.push("<form>");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 18, filename: jade.debug[0].filename });
buf.push("<p class=\"input-group-addon span-width\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 18, filename: jade.debug[0].filename });
buf.push("Haпиши отговор:");
jade.debug.shift();
jade.debug.shift();
buf.push("</p>");
jade.debug.shift();
jade.debug.unshift({ lineno: 19, filename: jade.debug[0].filename });
buf.push("<textarea rows=\"3\" id=\"text\" class=\"form-control input-field input-width\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.shift();
buf.push("</textarea>");
jade.debug.shift();
jade.debug.unshift({ lineno: 20, filename: jade.debug[0].filename });
buf.push("<input type=\"submit\" value=\"Отговори\" class=\"btn btn-info\"/>");
jade.debug.shift();
jade.debug.shift();
buf.push("</form>");
jade.debug.shift();
jade.debug.shift();
buf.push("</div>");
jade.debug.shift();
jade.debug.shift();
buf.push("</div>");
jade.debug.shift();
jade.debug.shift();;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade.debug[0].filename, jade.debug[0].lineno);
}
}

});