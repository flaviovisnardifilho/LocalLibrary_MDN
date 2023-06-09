const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookInstanceSchema = new Schema({
  book: { type: Schema.Types.ObjectId, ref: "Book", required: true }, //reference to the assoiated book
  imprint: { type: String, required: true },
  status: {
    type: String,
    required: true,
    enum: ["Available", "Maintenance", "Loaned", "Reserved"],
    default: "Maintenance",
  },
  due_back: { type: Date, default: Date.now },
});

// Virtual for bookinstance's URL
BookInstanceSchema.virtual("url").get(function () {
  return `/catalog/bookintance/${this._id}`;
});

module.exports = mongoose.model("BookInstance", BookInstanceSchema);
