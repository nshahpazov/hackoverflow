define(['jade'], function(jade) { if(jade && jade['runtime'] !== undefined) { jade = jade.runtime; }

return function anonymous(locals
/**/) {
jade.debug = [{ lineno: 1, filename: "templates/questionTemplate.jade" }];
try {
var buf = [];
var locals_ = (locals || {}),title = locals_.title,text = locals_.text,date = locals_.date,author = locals_.author,answers_count = locals_.answers_count,views_count = locals_.views_count,tags = locals_.tags;jade.debug.unshift({ lineno: 1, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 1, filename: jade.debug[0].filename });
buf.push("<div class=\"question\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 2, filename: jade.debug[0].filename });
buf.push("<div class=\"image\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.shift();
buf.push("</div>");
jade.debug.shift();
jade.debug.unshift({ lineno: 3, filename: jade.debug[0].filename });
buf.push("<img src=\"images/voting.png\" alt=\"Question view\" width=\"60\" height=\"55\"/>");
jade.debug.shift();
jade.debug.unshift({ lineno: 4, filename: jade.debug[0].filename });
buf.push("<div class=\"info\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 5, filename: jade.debug[0].filename });
buf.push("<div id=\"title\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 5, filename: jade.debug[0].filename });
buf.push("" + (jade.escape((jade.interp = title) == null ? '' : jade.interp)) + "");
jade.debug.shift();
jade.debug.shift();
buf.push("</div>");
jade.debug.shift();
jade.debug.unshift({ lineno: 6, filename: jade.debug[0].filename });
buf.push("<div id=\"text\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 6, filename: jade.debug[0].filename });
buf.push("" + (jade.escape((jade.interp = text) == null ? '' : jade.interp)) + "");
jade.debug.shift();
jade.debug.shift();
buf.push("</div>");
jade.debug.shift();
jade.debug.unshift({ lineno: 7, filename: jade.debug[0].filename });
buf.push("<div id=\"footer\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 7, filename: jade.debug[0].filename });
buf.push("" + (jade.escape((jade.interp = date) == null ? '' : jade.interp)) + ", от " + (jade.escape((jade.interp = author) == null ? '' : jade.interp)) + "");
jade.debug.shift();
jade.debug.unshift({ lineno: 8, filename: jade.debug[0].filename });
buf.push("<p id=\"reviews\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 8, filename: jade.debug[0].filename });
buf.push("Отговори: " + (jade.escape((jade.interp = answers_count) == null ? '' : jade.interp)) + " Видяна: " + (jade.escape((jade.interp = views_count) == null ? '' : jade.interp)) + "");
jade.debug.shift();
jade.debug.shift();
buf.push("</p>");
jade.debug.shift();
jade.debug.unshift({ lineno: 9, filename: jade.debug[0].filename });
buf.push("<p id=\"tags\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 9, filename: jade.debug[0].filename });
buf.push("Тагове: ");
jade.debug.shift();
jade.debug.unshift({ lineno: 10, filename: jade.debug[0].filename });
buf.push("<ul class=\"tags-list\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 11, filename: jade.debug[0].filename });
// iterate tags
;(function(){
  var $$obj = tags;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var tag = $$obj[$index];

jade.debug.unshift({ lineno: 11, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 12, filename: jade.debug[0].filename });
buf.push("<li>");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 12, filename: jade.debug[0].filename });
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

jade.debug.unshift({ lineno: 11, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 12, filename: jade.debug[0].filename });
buf.push("<li>");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 12, filename: jade.debug[0].filename });
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
jade.debug.shift();
buf.push("</p>");
jade.debug.shift();
jade.debug.shift();
buf.push("</div>");
jade.debug.shift();
jade.debug.unshift({ lineno: 13, filename: jade.debug[0].filename });
buf.push("<span class=\"clrfix\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.shift();
buf.push("</span>");
jade.debug.shift();
jade.debug.unshift({ lineno: 14, filename: jade.debug[0].filename });
buf.push("<div id=\"ask-button\" class=\"btn\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 14, filename: jade.debug[0].filename });
buf.push("Отговори!");
jade.debug.shift();
jade.debug.shift();
buf.push("</div>");
jade.debug.shift();
jade.debug.unshift({ lineno: 15, filename: jade.debug[0].filename });
buf.push("<div id=\"answer-section\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 17, filename: jade.debug[0].filename });
buf.push("<form>");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 18, filename: jade.debug[0].filename });
buf.push("<textarea>");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.shift();
buf.push("</textarea>");
jade.debug.shift();
jade.debug.unshift({ lineno: 18, filename: jade.debug[0].filename });
buf.push("<input type=\"submit\"/>");
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
jade.debug.shift();
buf.push("</div>");
jade.debug.shift();
jade.debug.shift();;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade.debug[0].filename, jade.debug[0].lineno);
}
}

});