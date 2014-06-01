define(function (require) {

		_ = require('lodash'),

		UserModel = Backbone.Model.extend({

			defaults: {
				username: 'jonny',
				password: '',
				email: '',
				fullname: 'John Doe',
				questions: [],
				answers: [],
				rating: 0,

				signupDate: new Date(),
				lastOnlineDate: new Date()
			},

			parse: function () {
				// check the parse method
			}
		});

	return UserModel;
});