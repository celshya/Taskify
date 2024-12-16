const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  dueDate: { type: Date, default:Date.now() },
  priority: { type: String, enum: ['Low', 'Medium', 'High'], required: true },
  status: { type: String, enum: ['Pending', 'In Progress', 'Completed'], default: 'Pending' }
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);
