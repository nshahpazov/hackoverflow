define(['jade'], function(jade) { if(jade && jade['runtime'] !== undefined) { jade = jade.runtime; }

return function anonymous(locals) {
jade.debug = [{ lineno: 1, filename: "templates/addQuestion.jade" }];
try {
var buf = [];
jade.debug.unshift({ lineno: 1, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 1, filename: jade.debug[0].filename });
buf.push("<form method=\"post\" action=\"#\" name=\"input\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 2, filename: jade.debug[0].filename });
buf.push("Заглавие: input(type=\"text\", class=\"input\", placeholder=\"Заглавие\", name=\"title\")");
jade.debug.shift();
jade.debug.unshift({ lineno: 3, filename: jade.debug[0].filename });
buf.push("<input type=\"text\" placeholder=\"задайте въпроса си тук\" name=\"text\" class=\"inputText\"/>");
jade.debug.shift();
jade.debug.unshift({ lineno: 4, filename: jade.debug[0].filename });
buf.push("<input type=\"text\" placeholders=\"добавете тагове, разделени със запетай\" name=\"tags\" class=\"inputTags\"/>");
jade.debug.shift();
jade.debug.unshift({ lineno: 5, filename: jade.debug[0].filename });
buf.push("<input type=\"submit\" value=\"Submit\" class=\"button\"/>");
jade.debug.shift();
jade.debug.shift();
buf.push("</form>");
jade.debug.shift();
jade.debug.shift();;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade.debug[0].filename, jade.debug[0].lineno);
}
}

});