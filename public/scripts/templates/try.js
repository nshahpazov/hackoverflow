define(['jade'], function(jade) { if(jade && jade['runtime'] !== undefined) { jade = jade.runtime; }

return function anonymous(locals
/**/) {
jade.debug = [{ lineno: 1, filename: "templates/try.jade" }];
try {
var buf = [];
var locals_ = (locals || {}),books = locals_.books;jade.debug.unshift({ lineno: 1, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 1, filename: jade.debug[0].filename });
buf.push("{\"books\": [\"A\", \"B\", \"C\"]}");
jade.debug.shift();
jade.debug.unshift({ lineno: 4, filename: jade.debug[0].filename });
buf.push("<ul>");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 4, filename: jade.debug[0].filename });
// iterate books
;(function(){
  var $$obj = books;
  if ('number' == typeof $$obj.length) {

  if ($$obj.length) {
    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var book = $$obj[$index];

jade.debug.unshift({ lineno: 4, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 5, filename: jade.debug[0].filename });
buf.push("<li>" + (jade.escape(null == (jade.interp = book) ? "" : jade.interp)));
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.shift();
buf.push("</li>");
jade.debug.shift();
jade.debug.shift();
    }

  } else {
jade.debug.unshift({ lineno: 6, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 7, filename: jade.debug[0].filename });
buf.push("<li>");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 7, filename: jade.debug[0].filename });
buf.push("sorry, no books!");
jade.debug.shift();
jade.debug.shift();
buf.push("</li>");
jade.debug.shift();
jade.debug.shift();
  }
  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var book = $$obj[$index];

jade.debug.unshift({ lineno: 4, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 5, filename: jade.debug[0].filename });
buf.push("<li>" + (jade.escape(null == (jade.interp = book) ? "" : jade.interp)));
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.shift();
buf.push("</li>");
jade.debug.shift();
jade.debug.shift();
    }

    if ($$l === 0) {
jade.debug.unshift({ lineno: 6, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 7, filename: jade.debug[0].filename });
buf.push("<li>");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 7, filename: jade.debug[0].filename });
buf.push("sorry, no books!");
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
jade.debug.shift();;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade.debug[0].filename, jade.debug[0].lineno);
}
}

});