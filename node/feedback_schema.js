const mongoose = require('mongoose');

const FeedbackSchema = mongoose.Schema({
    username: {type: String, required : true},
    feedback: {type: String, required : true}
})

const FeedbackModel = mongoose.model('feedbacks', FeedbackSchema);

module.exports = FeedbackModel;