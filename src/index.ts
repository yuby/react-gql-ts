import { getMongoRepository, createConnection } from 'typeorm';
import 'reflect-metadata';
import { Post } from './entity/Post';

const app = async () => {
  try {
    const PostRepository = getMongoRepository(Post);
    // const newPost = new Post();

    // newPost.title = `new Post ${Date.now()}`;

    // await PostRepository.save(newPost);

    // const post = await PostRepository.findOne(1);

    // console.log('Loaded posts: ', post);

    // post.title = `update Post ${Date.now()}`;

    // await PostRepository.save(post);

    const posts = await PostRepository.find({});

    console.log('Loaded posts: ', posts);
  } catch (err) {
    console.log(err);
  }
};

createConnection()
  .then(app)
  .catch((err) => console.error(err.toString()));
