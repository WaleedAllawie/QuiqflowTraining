import { type Request, type Response, type NextFunction } from 'express';
import Post from '../models/Post.js';

//@desc    get all posts
//@route   GET /api/posts
export const getAllPosts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const limit: number = parseInt(req.query.limit as string);
    const posts =
      !isNaN(limit) && limit > 0
        ? await Post.findAll({ limit })
        : await Post.findAll();
    res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
};

//@desc get a post with a specific id
//@route   GET /api/posts/:id
export const getPost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id: number = parseInt(req.params.id ?? '');
    const post = await Post.findByPk(id);

    if (!post) {
      const error = new Error('Post not found') as Error & { status?: number };
      error.status = 404;
      return next(error);
    }
    res.status(200).json(post);
  } catch (error) {
    next(error);
  }
};

//@desc    create a new post
//@route   POST  /api/posts
export const createPost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { title } = req.body;

    if (!title) {
      const error = new Error('Title is required') as Error & {
        status?: number;
      };
      error.status = 400;
      return next(error);
    }

    const newPost = await Post.create({ title });
    res.status(201).json(newPost);
  } catch (error) {
    next(error);
  }
};

//@desc    update a post by id
//@route   PUT  /api/posts/:id
export const updatePost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id: number = parseInt(req.params.id ?? '');
    const { title } = req.body;

    const post = await Post.findByPk(id);

    if (!post) {
      const error = new Error('Post not found') as Error & { status?: number };
      error.status = 404;
      return next(error);
    }

    post.title = title;
    await post.save();

    res.status(200).json(post);
  } catch (error) {
    next(error);
  }
};

//@desc    delete a  post by id
//@route   DELETE /api/posts/:id
export const deletePost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id: number = parseInt(req.params.id ?? '');
    const post = await Post.findByPk(id);

    if (!post) {
      const error = new Error('Post not found') as Error & { status?: number };
      error.status = 404;
      return next(error);
    }

    await post.destroy();
    res.status(200).json({ message: 'Post deleted successfully', id });
  } catch (error) {
    next(error);
  }
};
