import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
    default: '',
  },
  link: {
    type: String,
    trim: true,
  },
  category: {
    type: String,
    trim: true,
  },
  // Optional additional fields for enhanced functionality
  githubUrl: {
    type: String,
    trim: true,
  },
  localCommand: {
    type: String,
    trim: true,
  },
  status: {
    type: String,
    enum: ['Stable', 'Debugging', 'Broken'],
    default: 'Stable',
  },
  techStack: {
    type: [String],
    default: [],
  },
  lastOpened: {
    type: Date,
    default: null,
  },
}, {
  timestamps: true,
});

export default mongoose.model('Project', projectSchema);

