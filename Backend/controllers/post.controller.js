// controllers/post.controller.js
const Post = require('../models/Post');


exports.createPost = async (req, res) => {
  const { title, description, company, location, salary, jobType, requirements } = req.body;

  try {
    const newPost = new Post({ 
      title, 
      description, 
      company, 
      location, 
      salary, 
      jobType, 
      requirements, 
      user: req.user.id 
    });
    
    await newPost.save();
    res.status(201).json({ message: 'Job posted successfully!', post: newPost });
  } catch (error) {
    res.status(500).json({ error: 'Error creating job post' });
  }
};


// Get all job posts
exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('user', 'username email');
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching job posts' });
  }
};

// Get a single job post by ID
exports.getPostById = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await Post.findById(id).populate('user', 'username email');
    if (!post) return res.status(404).json({ error: 'Job post not found' });
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching job post' });
  }
};

// Update a job post
exports.updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, description, company, location } = req.body;

  try {
    const post = await Post.findByIdAndUpdate(id, { title, description, company, location }, { new: true });
    if (!post) return res.status(404).json({ error: 'Job post not found' });
    res.json({ message: 'Job post updated successfully!', post });
  } catch (error) {
    res.status(500).json({ error: 'Error updating job post' });
  }
};

// Delete a job post
exports.deletePost = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await Post.findByIdAndDelete(id);
    if (!post) return res.status(404).json({ error: 'Job post not found' });
    res.json({ message: 'Job post deleted successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting job post' });
  }
};

