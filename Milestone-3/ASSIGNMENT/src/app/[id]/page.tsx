"use client";
import React, { useRef, useState } from 'react';
import { Blogs, blogs } from "@/blogs/blogs";

export default function Blog(props: { params: { id: string } }) {
    const getBlogs = blogs.find((item: Blogs) => item.id === parseInt(props.params.id));
    if (!getBlogs) {
        return <h1 className="text-center text-2xl font-bold text-red-500 mt-8">Blog Not Found</h1>;
    }

    const [comments, setComments] = useState<string[]>([]);
    const getText = useRef<HTMLTextAreaElement>(null);

    const addComment = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (getText.current?.value) {
            setComments([...comments, getText.current.value]);
            getText.current.value = "";
        } else {
            alert("Please Write Comment Before Add...")
        }
    }

    const deleteComment = (index: number) => {
        setComments(comments.filter((_: string, i: number) => i !== index));
    }

    return (
        <div className="min-h-screen bg-blue-500 p-6">
            <div className="max-w-4xl mx-auto bg-gray-200 rounded-lg shadow-lg p-6 mb-6">
                <h1 className="text-4xl font-semibold text-gray-800 mb-4">{getBlogs.title}</h1>
                <p className="text-gray-600 mb-8">By <span className="font-medium">{getBlogs.author}</span> on {getBlogs.date}</p>
                <div className="text-gray-700 leading-relaxed">
                    <p>{getBlogs.content}</p>
                </div>
            </div>

            {/* Comment Form */}
            <div className="max-w-4xl mx-auto bg-gray-200 rounded-lg shadow-lg p-6 mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Add a Comment</h2>
                <form onSubmit={addComment} className="flex flex-col">
                    <textarea
                        rows={5}
                        className="border-2 border-gray-900 rounded-lg p-3 mb-4 resize-none focus:outline-none focus:border-indigo-500 transition"
                        placeholder="Write your comment here..."
                        ref={getText}
                    />
                    <button type="submit" className="self-end bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700 transition duration-300">
                        Add Comment
                    </button>
                </form>
            </div>

            {/* Display Comments */}
            <div className="max-w-4xl mx-auto bg-gray-200 rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Comments</h2>
                {comments.length > 0 ? (
                    comments.map((item: string, index: number) => (
                        <div key={index} className="flex justify-between items-center bg-gray-50 p-4 mb-2 rounded-lg border border-gray-200">
                            <p className="text-gray-700">{item}</p>
                            <button
                                onClick={() => deleteComment(index)}
                                className="text-red-500 hover:text-red-600 transition duration-200"
                            >
                                Remove
                            </button>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">No comments yet. Be the first to comment!</p>
                )}
            </div>
        </div>
    );
}
