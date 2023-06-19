import React from 'react';

 
import PostDetail from '@components/PostDetail'
import Categories from '@components/Categories'
import PostWidget from '@components/PostWidget'
import AdjacentPosts from '@sections/AdjacentPosts'
import Author from '@components/Author'
import Comments from '@components/Comments'
import CommentsForm from '@components/CommentsForm'
import {getPosts} from '@services'
import {getPostDetails} from '@services'

 
 //fetch('https://...', { next: { revalidate: 60 } });

const PostDetails = async ({ params }) => {
 
  const post = await getPostDetails(params.slug)
 
  return (
    <>
      <div className="mx-auto px-10 mb-8 py-8 bg-slate-900">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="col-span-1 lg:col-span-8">
            <PostDetail post={post} />
           <Author author={post.author} /> 
            <AdjacentPosts slug={post.slug} createdAt={post.createdAt} />
           <CommentsForm slug={post.slug} />
            <Comments slug={post.slug} />
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative lg:sticky top-8">
              <PostWidget jsx="true" slug={post.slug} categories={post.categories.map((category) => category.slug)} />
              <Categories />
            </div>
          </div> 
        </div>
      </div>
    </>
  );
};
export default PostDetails;

//Fetch data at build time
//export async function getStaticProps({ params }) {
//  const data = await getPostDetails(params.slug);
//  return {
 //   props: {
 //     post: data,
 //   },
  ////};
//}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
//    export async function getStaticPaths() {
  //  const posts = await getPosts();
  //  return {
   // paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
   // fallback: true,
 //    };
//}