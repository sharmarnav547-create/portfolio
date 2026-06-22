import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, Calendar } from 'lucide-react';
import styles from './Blog.module.css';
import { Tag, TagGroup, TagList } from '../ui/tag-group';
import { Label } from '../ui/field';

const blogs = [
  {
    id: 1,
    title: "Meta Ads vs Google Ads: Which Works for Indian Brands? (2026)",
    desc: "A side-by-side comparison for Indian brands, cost, buyer intent, targeting, and when to use each.",
    category: "Performance Marketing",
    readTime: "8 min read",
    date: "Oct 12, 2026",
    featured: true,
    img: "/images/blog_img_1.png",
    link: "/blog/meta-vs-google-ads"
  },
  {
    id: 2,
    title: "7 Signs You're Wasting Your Meta Ads Budget (And What to Do Instead)",
    desc: "Discover the 7 biggest reasons businesses waste Meta Ads budget and learn practical fixes to improve conversions, lower CPA, and maximize ROI.",
    category: "Meta Ads",
    readTime: "6 min read",
    date: "Oct 10, 2026",
    featured: false,
    img: "/images/blog_img_2.png",
    link: "/blog/7-signs-wasting-meta-ads"
  },
  {
    id: 3,
    title: "Performance Marketing for Beginners: What Every Indian Founder Must Know Before Running Ads",
    desc: "Learn how performance marketing works, which channels matter, what metrics to track, how much budget you need, and how Indian businesses can generate measurable growth.",
    category: "Strategy",
    readTime: "12 min read",
    date: "Oct 05, 2026",
    featured: false,
    img: "/images/blog_img_3.png",
    link: "/blog/performance-marketing-for-beginners"
  },
  {
    id: 4,
    title: "The Complete Brand Identity Guide for Startups & D2C Brands in India (2026)",
    desc: "What is brand identity, why does it matter, and how do you build one that converts? The complete beginner's guide, covering the 5 Ps, brand funnel strategy, and everything in between.",
    category: "Branding",
    readTime: "10 min read",
    date: "Sep 28, 2026",
    featured: false,
    img: "/images/blog_img_4.png",
    link: "/blog/brand-identity-guide-startups"
  },
  {
    id: 5,
    title: "How D2C Brands Are Scaling with Influencer Marketing",
    desc: "Discover how Indian D2C brands use influencer marketing to build trust, increase sales, and scale profitably. Learn how to choose creators, measure ROI, and avoid common mistakes.",
    category: "Influencer",
    readTime: "8 min read",
    date: "Sep 20, 2026",
    featured: false,
    img: "/images/blog_img_5.png",
    link: "/blog/d2c-brands-scaling-influencer-marketing"
  },
  {
    id: 6,
    title: "The TikTok Algorithm: A Deep Dive",
    desc: "We reverse-engineered the world's most addictive algorithm. Here is what actually makes content go viral.",
    category: "Social",
    readTime: "12 min read",
    date: "Sep 15, 2026",
    featured: false,
    img: "/images/blog_img_6.png"
  }
];

const BlogCard = ({ blog }) => {
  const cardClass = blog.featured ? styles['featured-card'] : styles['regular-card'];

  return (
    <Link to={blog.link || "#"} className="block group">
      <motion.div 
        className={cardClass}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles['blog-image']} style={{ backgroundImage: `url(${blog.img})` }}></div>
        <div className={styles['blog-content']}>
          <div className={styles['category-tag']}>{blog.category}</div>
          <h3 className={`${styles['blog-title']} group-hover:text-[#7B5CF0] transition-colors`}>{blog.title}</h3>
          <p className={styles['blog-desc']}>{blog.desc}</p>
          <div className={styles['blog-meta']}>
            <div className={styles['meta-item']}>
              <Clock size={16} />
              <span>{blog.readTime}</span>
            </div>
            <div className={styles['meta-item']}>
              <Calendar size={16} />
              <span>{blog.date}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

const Blog = () => {
  const [selectedKeys, setSelectedKeys] = useState(new Set());

  // Extract unique categories from blogs
  const categories = Array.from(new Set(blogs.map(b => b.category)));

  // Filter blogs based on selected categories. If none selected, show all.
  const filteredBlogs = selectedKeys.size === 0 
    ? blogs 
    : blogs.filter(blog => selectedKeys.has(blog.category));

  return (
    <section id="blog" className={styles['blog-section']}>
      <div className="container">
        <div className="section-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '16px', fontWeight: '900', color: '#7B5CF0', letterSpacing: '-0.02em' }}>The Playbook.</h2>
          <p style={{ color: '#7B5CF0', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>Strategy, insights, and unfiltered takes on what's actually working in digital marketing right now.</p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
          <TagGroup 
            className="space-y-2" 
            selectionMode="multiple"
            selectedKeys={selectedKeys}
            onSelectionChange={setSelectedKeys}
          >
            <Label className="text-center w-full block text-white/50 mb-2">Filter by Category</Label>
            <TagList>
              {categories.map(category => (
                <Tag key={category} id={category}>{category}</Tag>
              ))}
            </TagList>
          </TagGroup>
        </div>

        <div className={styles['blog-grid']}>
          {filteredBlogs.map(blog => <BlogCard key={blog.id} blog={blog} />)}
        </div>
      </div>
    </section>
  );
};

export default Blog;
