"use client"
import React, {useState, useEffetc, useEffect} from 'react'
import moment from 'moment'
import Link from 'next/link'
import { getRecentPosts, getSimilarPosts } from '../services';

const PostWidget = ({ categories, slug }) => {
    const [relatedPosts, setRelatedPosts ] = useState([]);


    useEffect(() => {
      if(slug) {
          getSimilarPosts(categories, slug)
                .then((result) => setRelatedPosts(result))
      } else{
          getRecentPosts()
            .then((result) => setRelatedPosts(result))
      }
    }, [slug])
console.log(relatedPosts)
    return (
        <div className="bg-white shadow-lg text-black   p-8 pb-12 mb-8">
        <h3 className="text-xl mb-8 text-black font-semibold border-b pb-4">{slug ? 'Related Posts' : 'Recent Posts'}</h3>
        {relatedPosts.map((post, index) => (
          <div key={index} className="flex items-center w-full mb-4">
            <div className="w-16 flex-none">
              <img
             
                alt={post.title}
                height="60"
                width="60"
                unoptimized
                className="align-middle rounded-full"
                src={post.featuredImage.url}
              />
            </div>
            <div className="flex-grow ml-4">
              <p className="text-gray-500 font-xs">{moment(post.createdAt).format('MMM DD, YYYY')}</p>
              <Link href={`blog/post/${post.slug}`} className="text-md" key={index }>{post.title}</Link>
            </div>
          </div>
        ))}
      </div>
    )
}

export default PostWidget
