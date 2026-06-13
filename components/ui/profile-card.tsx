"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";
import { cn } from "@/lib/utils";

export interface ProfileCardProps {
  name?: string;
  title?: string;
  description?: string;
  imageUrl?: string;
  githubUrl?: string;
  twitterUrl?: string;
  youtubeUrl?: string;
  linkedinUrl?: string;
  className?: string;
}

export function ProfileCard(props: ProfileCardProps) {
  const {
    name = "Arnav Sharma",
    title = "Full-Stack Web & App Developer",
    description = "Hi, I'm Arnav, a passionate developer focused on building modern websites, web applications, mobile apps, automation tools, and AI-powered solutions. I enjoy transforming ideas into fast, scalable, and user-friendly digital products.",
    imageUrl = "/profile.png",
    githubUrl = "https://github.com",
    twitterUrl = "https://twitter.com",
    youtubeUrl = "https://youtube.com",
    linkedinUrl = "https://linkedin.com",
    className,
  } = props;

  const socialIcons = [
    { icon: FaGithub, url: githubUrl, label: "GitHub" },
    { icon: FaTwitter, url: twitterUrl, label: "Twitter" },
    { icon: FaYoutube, url: youtubeUrl, label: "YouTube" },
    { icon: FaLinkedin, url: linkedinUrl, label: "LinkedIn" },
  ];

  return (
    <div className={cn("w-full max-w-5xl mx-auto px-4", className)}>
      {/* Desktop */}
      <div className='hidden md:flex relative items-center'>
        {/* Square Image */}
        <div className='w-[470px] h-[470px] rounded-3xl overflow-hidden bg-gray-200 dark:bg-gray-700 flex-shrink-0 flex items-center justify-center'>
          <Image
            src={imageUrl}
            alt={name}
            width={470}
            height={470}
            className='w-full h-full object-cover'
            draggable={false}
            priority
          />
        </div>
        {/* Overlapping Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className='bg-white dark:bg-card rounded-3xl shadow-2xl p-8 ml-[-80px] z-10 max-w-xl flex-1'
        >
          <div className='mb-6'>
            <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-2'>
              {name}
            </h2>

            <p className='text-sm font-medium text-gray-700 dark:text-gray-500'>
              {title}
            </p>
          </div>

          <p className='text-black dark:text-white text-base leading-relaxed mb-8'>
            {description}
          </p>

          <div className='flex space-x-4'>
            {socialIcons.map(({ icon: Icon, url, label }) => (
              <Link
                key={label}
                href={url}
                target='_blank'
                rel='noopener noreferrer'
                className='w-12 h-12 bg-gray-900 dark:bg-gray-100 rounded-full flex items-center justify-center transition-colors hover:bg-gray-800 dark:hover:bg-gray-200 hover:scale-105'
                aria-label={label}
              >
                <Icon className='w-5 h-5 text-white dark:text-gray-900' />
              </Link>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Mobile */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className='md:hidden max-w-sm mx-auto text-center bg-transparent'
      >
        {/* Square Mobile Image */}
        <div className='w-full aspect-square bg-gray-200 dark:bg-gray-700 rounded-3xl overflow-hidden mb-6 flex items-center justify-center'>
          <Image
            src={imageUrl}
            alt={name}
            width={400}
            height={400}
            className='w-full h-full object-cover'
            draggable={false}
            priority
          />
        </div>

        <div className='px-4'>
          <h2 className='text-xl font-bold text-gray-900 dark:text-white mb-2'>
            {name}
          </h2>

          <p className='text-sm font-medium text-gray-600 dark:text-gray-300 mb-4'>
            {title}
          </p>

          <p className='text-black dark:text-white text-sm leading-relaxed mb-6'>
            {description}
          </p>

          <div className='flex justify-center space-x-4'>
            {socialIcons.map(({ icon: Icon, url, label }) => (
              <Link
                key={label}
                href={url}
                target='_blank'
                rel='noopener noreferrer'
                className='w-12 h-12 bg-gray-900 dark:bg-gray-100 rounded-full flex items-center justify-center transition-colors hover:bg-gray-800 dark:hover:bg-gray-200'
                aria-label={label}
              >
                <Icon className='w-5 h-5 text-white dark:text-gray-900' />
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
