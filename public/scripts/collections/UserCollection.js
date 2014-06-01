define(function (require) {
	
	var Backbone = require("backbone"),
		_ = require("lodash"),
		UserModel = require("models/UserModel"),

		UserCollection = Backbone.Collection.extend({

			model: UserModel,

			url: '/users'
		});

	return UserCollection;


});