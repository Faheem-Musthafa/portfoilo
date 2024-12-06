import React from 'react';
import { Calendar, Clock } from 'lucide-react';

const posts = [
  {
    title: 'Breaking Down Buffer Overflows',
    excerpt: 'A comprehensive guide to understanding and exploiting buffer overflow vulnerabilities...',
    date: '2024-03-15',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
  },
  {
    title: 'Web Application Security Testing',
    excerpt: 'Essential techniques and tools for identifying common web vulnerabilities...',
    date: '2024-03-10',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b',
  },
  {
    title: 'Hack The Box Walkthrough',
    excerpt: 'Detailed walkthrough of the latest Hack The Box challenge machine...',
    date: '2024-03-05',
    readTime: '15 min read',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31',
  },
];

export function Blog() {
  return (
    <section id="blog" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Latest Blog Posts
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.title}
              className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <div className="flex items-center text-sm text-gray-500 space-x-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {post.readTime}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}