import React from "react";
import { blogs, Blogs } from "@/blogs/blogs";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-500 p-6">
      <h1 className="text-center text-4xl font-bold text-zinc-900 mb-8">Good Morning Readers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.length > 0 && blogs.map((blog: Blogs) => (
          <div 
            key={blog.id} 
            className="bg-gray-300 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-2"
          >
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{blog.title}</h2>
              <p className="text-gray-500 mb-4">By {blog.author} on {blog.date}</p>
              <p className="text-gray-700 mb-6">{blog.content.slice(0, 100)}...</p>
              <Link href={`/${blog.id}`}>
                <span className="inline-block text-indigo-500 hover:text-indigo-600 font-medium text-lg transition-colors duration-200 underline">
                  View More
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
