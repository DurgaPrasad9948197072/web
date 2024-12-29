"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Calendar, User, Tag, Facebook, Twitter, Linkedin, Clock } from 'lucide-react'
import { use } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'

// This would typically come from a database or API
const blogPosts = [
    {
      id: 1,
      title: 'The Future of Web Development: Trends to Watch in 2024',
      content: `
        <p>As we move further into the digital age, web development continues to evolve at a rapid pace. In 2024, we're seeing several exciting trends that are shaping the future of how we build and interact with websites and web applications.</p>
        
        <h2>1. AI-Driven Development</h2>
        <p>Artificial Intelligence is no longer just a buzzword in web development. It's becoming an integral part of the development process. AI-powered tools are helping developers write cleaner code, predict user behavior, and create more personalized user experiences. We're seeing the rise of AI-assisted coding, where machine learning algorithms can suggest code completions and even generate entire code blocks based on natural language descriptions.</p>
        
        <h2>2. WebAssembly (Wasm) Goes Mainstream</h2>
        <p>WebAssembly is gaining traction as a powerful tool for bringing high-performance applications to the web. It allows developers to run code written in languages like C++ and Rust directly in the browser at near-native speed. In 2024, we're seeing more complex applications, including games and data-intensive tools, being ported to the web using Wasm.</p>
        
        <h2>3. Progressive Web Apps (PWAs) Evolution</h2>
        <p>Progressive Web Apps continue to blur the line between web and native applications. With improved APIs and better integration with operating systems, PWAs in 2024 are offering experiences that are virtually indistinguishable from native apps. This trend is particularly important for businesses looking to provide a seamless experience across all devices without the need for separate native app development.</p>
        
        <h2>4. Serverless Architecture Dominance</h2>
        <p>Serverless computing is becoming the go-to solution for many web applications. It offers improved scalability, reduced operational costs, and allows developers to focus more on writing code rather than managing infrastructure. In 2024, we're seeing more complex applications being built entirely on serverless architectures, with improved tools and practices for handling state and managing larger serverless projects.</p>
        
        <h2>5. Enhanced Web Accessibility</h2>
        <p>Web accessibility is no longer an afterthought but a fundamental aspect of web development. In 2024, we're seeing a greater emphasis on creating websites that are accessible to all users, regardless of their abilities. This includes better screen reader compatibility, improved keyboard navigation, and AI-powered tools that can automatically suggest accessibility improvements.</p>
        
        <h2>Conclusion</h2>
        <p>The web development landscape of 2024 is exciting and full of potential. From AI-assisted coding to the widespread adoption of WebAssembly, these trends are not just changing how we build for the web, but also what's possible on the web. As developers, it's crucial to stay informed and adapt to these changes to create better, faster, and more inclusive web experiences.</p>
      `,
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80',
      author: 'John Doe',
      authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
      date: 'April 15, 2024',
      category: 'Web Development',
      readingTime: '8 min read'
    },
    {
      id: 2,
      title: 'Mastering Mobile App Design: Tips for a Seamless User Experience',
      content: `
        <p>In the ever-evolving world of mobile app development, creating a seamless user experience is paramount to success. This article explores key principles and best practices for mastering mobile app design in 2024.</p>
  
        <h2>1. Prioritize Intuitive Navigation</h2>
        <p>The cornerstone of any great mobile app is intuitive navigation. Users should be able to find what they're looking for with minimal effort. Implement clear hierarchies, use familiar icons, and consider thumb-friendly zones for important actions. Remember, the goal is to make your app feel like a natural extension of the user's device.</p>
  
        <h2>2. Embrace Minimalism and White Space</h2>
        <p>In the mobile world, less is often more. Embrace minimalism by focusing on essential elements and using white space effectively. This approach not only looks cleaner but also helps reduce cognitive load, making your app more enjoyable to use. Carefully consider each element and ask yourself if it's truly necessary for the user experience.</p>
  
        <h2>3. Optimize for Speed and Performance</h2>
        <p>No matter how beautiful your app looks, if it's slow, users will abandon it. Optimize your app's performance by minimizing load times, reducing unnecessary animations, and ensuring smooth transitions between screens. Consider implementing skeleton screens or subtle loading animations to keep users engaged during brief loading periods.</p>
  
        <h2>4. Personalize the User Experience</h2>
        <p>Leverage data and AI to create personalized experiences for your users. This could include customized content recommendations, tailored user interfaces based on usage patterns, or smart defaults that adapt to individual preferences. The key is to make each user feel like the app was designed specifically for them.</p>
  
        <h2>5. Design for Accessibility</h2>
        <p>Inclusive design is no longer optional. Ensure your app is usable by people with various abilities by following accessibility guidelines. This includes using sufficient color contrast, providing alternative text for images, ensuring your app works well with screen readers, and designing for various input methods beyond touch (like voice commands).</p>
  
        <h2>Conclusion</h2>
        <p>Mastering mobile app design is an ongoing process that requires a deep understanding of user needs, current trends, and technological capabilities. By focusing on intuitive navigation, embracing minimalism, optimizing performance, personalizing experiences, and designing for accessibility, you'll be well on your way to creating mobile apps that users love and return to again and again.</p>
      `,
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80',
      author: 'Jane Smith',
      authorImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
      date: 'April 10, 2024',
      category: 'Mobile Development',
      readingTime: '7 min read'
    },
    {
      id: 3,
      title: 'The Rise of AI in Digital Marketing: Strategies for Success',
      content: `
        <p>Artificial Intelligence (AI) is revolutionizing the digital marketing landscape, offering unprecedented opportunities for personalization, efficiency, and data-driven decision making. This article explores how AI is transforming digital marketing and provides strategies for leveraging this technology effectively.</p>
  
        <h2>1. Hyper-Personalization at Scale</h2>
        <p>AI enables marketers to deliver highly personalized content and experiences to individual users at scale. By analyzing vast amounts of data, AI can predict user preferences and behaviors, allowing for tailored messaging, product recommendations, and even personalized website experiences. Implement AI-driven personalization to significantly improve engagement and conversion rates.</p>
  
        <h2>2. Predictive Analytics for Better Decision Making</h2>
        <p>AI-powered predictive analytics can forecast trends, customer behaviors, and campaign performance with remarkable accuracy. Use these insights to optimize your marketing strategies, allocate resources more effectively, and stay ahead of market trends. By leveraging predictive analytics, you can make data-driven decisions that maximize ROI and minimize wasted efforts.</p>
  
        <h2>3. Chatbots and Conversational AI</h2>
        <p>AI-powered chatbots and virtual assistants are transforming customer service and engagement. These tools can handle routine inquiries, provide personalized recommendations, and even assist with purchases, all while learning and improving over time. Implement conversational AI to provide 24/7 support, improve response times, and free up your human team for more complex tasks.</p>
  
        <h2>4. AI-Generated Content</h2>
        <p>While human creativity remains irreplaceable, AI is becoming increasingly adept at generating and optimizing content. From writing assistance tools that help create compelling copy to AI-generated images and videos, these technologies can significantly boost content production efficiency. Use AI to augment your content creation process, generate ideas, and optimize content for better performance.</p>
  
        <h2>5. Advanced Customer Segmentation</h2>
        <p>AI can analyze complex patterns in customer data to create highly nuanced and accurate customer segments. This goes beyond traditional demographic segmentation, incorporating behavioral, psychographic, and even predictive elements. Leverage AI-driven segmentation to create more targeted and effective marketing campaigns across all channels.</p>
  
        <h2>Conclusion</h2>
        <p>The integration of AI in digital marketing is not just a trend; it's a fundamental shift in how marketing is conducted. By embracing AI for personalization, predictive analytics, customer engagement, content creation, and segmentation, marketers can gain a significant competitive edge. However, it's crucial to remember that AI is a tool to enhance human creativity and strategy, not replace it. The most successful digital marketing strategies will be those that effectively blend AI capabilities with human insight and creativity.</p>
      `,
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80',
      author: 'Mike Johnson',
      authorImage: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80',
      date: 'April 5, 2024',
      category: 'Digital Marketing',
      readingTime: '9 min read'
    },
    {
      id: 4,
      title: 'Cybersecurity Best Practices for Small Businesses',
      content: `
        <p>In an increasingly digital world, cybersecurity is no longer just a concern for large corporations. Small businesses are often targeted by cybercriminals due to potentially weaker security measures. This article outlines essential cybersecurity best practices that every small business should implement to protect their digital assets and customer data.</p>
  
        <h2>1. Implement Strong Password Policies</h2>
        <p>Weak passwords are one of the easiest ways for hackers to gain unauthorized access. Enforce a strong password policy that requires complex passwords, regular password changes, and the use of multi-factor authentication (MFA) wherever possible. Consider using a password manager to help employees maintain unique, strong passwords for all their accounts.</p>
  
        <h2>2. Keep Software and Systems Updated</h2>
        <p>Regularly update all software, including operating systems, applications, and security software. These updates often include critical security patches that address newly discovered vulnerabilities. Set up automatic updates where possible, and create a schedule for manually updating systems that can't be automated.</p>
  
        <h2>3. Educate Employees on Cybersecurity</h2>
        <p>Your employees are your first line of defense against cyber attacks. Conduct regular cybersecurity training sessions to educate staff about common threats like phishing emails, social engineering tactics, and the importance of data protection. Create a culture of cybersecurity awareness within your organization.</p>
  
        <h2>4. Use Encryption and VPNs</h2>
        <p>Encrypt sensitive data both at rest and in transit. Use full-disk encryption on all devices, especially mobile devices that may be lost or stolen. Implement a Virtual Private Network (VPN) for employees working remotely to ensure secure connections to your business network.</p>
  
        <h2>5. Backup Data Regularly</h2>
        <p>Implement a robust backup strategy following the 3-2-1 rule: keep at least three copies of your data, store two backup copies on different storage media, and keep one copy offsite. Regularly test your backups to ensure they can be successfully restored in case of a ransomware attack or other data loss event.</p>
  
        <h2>Conclusion</h2>
        <p>Cybersecurity is an ongoing process, not a one-time fix. By implementing these best practices, small businesses can significantly improve their security posture and reduce the risk of costly cyber incidents. Remember, the investment in cybersecurity is far less than the potential cost of a data breach or cyber attack. Stay vigilant, stay informed about emerging threats, and prioritize the security of your digital assets to ensure the long-term success and trustworthiness of your small business.</p>
      `,
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80',
      author: 'Sarah Lee',
      authorImage: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80',
      date: 'March 30, 2024',
      category: 'Cybersecurity',
      readingTime: '8 min read'
    },
    {
      id: 5,
      title: 'The Impact of 5G on IoT Development',
      content: `
        <p>The rollout of 5G networks is set to revolutionize the Internet of Things (IoT) landscape, opening up new possibilities and challenges for developers and businesses alike. This article explores the transformative impact of 5G on IoT development and the opportunities it presents.</p>
  
        <h2>1. Enhanced Speed and Reduced Latency</h2>
        <p>5G's ultra-fast speeds and near-zero latency are game-changers for IoT applications. This enables real-time data processing and decision-making, crucial for applications like autonomous vehicles, remote surgeries, and industrial automation. Developers can now design IoT solutions that require instantaneous communication and response times, unlocking new use cases previously limited by network constraints.</p>
  
        <h2>2. Massive Device Connectivity</h2>
        <p>5G networks can support up to a million connected devices per square kilometer, a significant increase from 4G capabilities. This massive scalability allows for the deployment of dense IoT networks in smart cities, large industrial facilities, and other complex environments. Developers must consider scalability in their designs to take full advantage of this increased connectivity potential.</p>
  
        <h2>3. Network Slicing for Customized IoT Solutions</h2>
        <p>5G introduces network slicing, allowing the creation of multiple virtual networks tailored to specific IoT application needs. This enables developers to design IoT solutions with guaranteed performance levels, security requirements, and quality of service. Network slicing opens up possibilities for more specialized and efficient IoT applications across various industries.</p>
  
        <h2>4. Edge Computing Integration</h2>
        <p>The combination of 5G and edge computing brings data processing closer to the source, reducing latency and bandwidth usage. This is particularly beneficial for IoT applications that generate large amounts of data or require real-time processing. Developers should consider edge computing architectures in their IoT designs to optimize performance and reduce cloud dependency where appropriate.</p>
  
        <h2>5. Enhanced Battery Life for IoT Devices</h2>
        <p>5G networks are designed to be more energy-efficient, potentially extending the battery life of IoT devices. This is crucial for deployments in remote or hard-to-reach areas where frequent battery replacements are impractical. Developers can now design IoT devices with longer operational lifespans, reducing maintenance costs and improving overall system reliability.</p>
  
        <h2>Conclusion</h2>
        <p>The advent of 5G is ushering in a new era of IoT development, characterized by faster speeds, lower latency, massive connectivity, and improved energy efficiency. As 5G networks continue to roll out globally, IoT developers and businesses must adapt their strategies to harness these capabilities fully. By embracing 5G technology, we can create more sophisticated, responsive, and transformative IoT solutions that have the potential to revolutionize industries and improve our daily lives in ways we're only beginning to imagine.</p>
      `,
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80',
      author: 'David Brown',
      authorImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
      date: 'March 25, 2024',
      category: 'IoT',
      readingTime: '10 min read'
    },
    {
      id: 6,
      title: 'Accessibility in Web Design: Creating Inclusive Digital Experiences',
      content: `
        <p>In today's digital landscape, creating accessible websites is not just a legal requirement but a moral imperative. Accessible web design ensures that people with disabilities can perceive, understand, navigate, and interact with websites effectively. This article explores key principles and best practices for creating inclusive digital experiences.</p>
  
        <h2>1. Implement Proper Semantic HTML</h2>
        <p>Using semantic HTML elements (like &lt;header&gt;, &lt;nav&gt;, &lt;main&gt;, &lt;footer&gt;) provides a clear structure to your content, making it easier for screen readers to interpret and navigate. Ensure that headings are used in the correct order (H1, H2, H3, etc.) to create a logical content hierarchy.</p>
  
        <h2>2. Provide Alternative Text for Images</h2>
        <p>Always include descriptive alt text for images. This allows screen readers to convey the image's content or function to visually impaired users. For decorative images, use an empty alt attribute (alt="") to indicate that the image can be safely ignored by assistive technologies.</p>
  
        <h2>3. Ensure Keyboard Navigation</h2>
        <p>Many users rely on keyboards to navigate websites. Ensure that all interactive elements are accessible via keyboard and that there's a visible focus indicator. Test your website by navigating through it using only the keyboard to identify any issues.</p>
  
        <h2>4. Use Sufficient Color Contrast</h2>
        <p>Adequate color contrast between text and background is crucial for readability. Use tools to check that your color combinations meet WCAG 2.1 guidelines. Remember that color should not be the only means of conveying information, as this excludes users with color vision deficiencies.</p>
  
        <h2>5. Design with Flexibility in Mind</h2>
        <p>Create layouts that adapt to different screen sizes and zoom levels. Use relative units like em or rem instead of fixed pixel sizes for text. This allows users to resize text without breaking the layout. Also, ensure that your design works well with browser zoom and text-only zoom.</p>
  
        <h2>Conclusion</h2>
        <p>Accessibility in web design is an ongoing process that requires attention to detail and a commitment to inclusivity. By implementing these practices, we can create digital experiences that are not just accessible to people with disabilities, but better for all users. Remember, an accessible web is a better web for everyone.</p>
      `,
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80',
      author: 'Emily Chen',
      authorImage: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80',
      date: 'March 20, 2024',
      category: 'Web Design',
      readingTime: '8 min read'
    }
  ];

export default function BlogPost({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params)
  const [post, setPost] = useState<typeof blogPosts[0] | null>(null)

  useEffect(() => {
    const fetchedPost = blogPosts.find(p => p.id === parseInt(resolvedParams.id))
    setPost(fetchedPost || null)
  }, [resolvedParams.id])

  if (!post) {
    return <div>Loading...</div>
  }

  const shareUrl = `https://techcoreapps.com/blog/${post.id}`

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Header />
      <main className="pt-20">
        <article className="relative overflow-hidden">
          <div className="relative h-[60vh] mb-12">
            <Image
              src={post.image}
              alt={post.title}
              layout="fill"
              objectFit="cover"
              className="brightness-50"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="container mx-auto">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl md:text-6xl font-bold mb-4"
                >
                  {post.title}
                </motion.h1>
                <div className="flex items-center text-gray-300 mb-4">
                  <div className="flex items-center mr-6">
                    <User size={16} className="mr-2" />
                    {post.author}
                  </div>
                  <div className="flex items-center mr-6">
                    <Calendar size={16} className="mr-2" />
                    {post.date}
                  </div>
                  <div className="flex items-center mr-6">
                    <Tag size={16} className="mr-2" />
                    {post.category}
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-2" />
                    {post.readingTime}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-2/3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="prose prose-lg prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </div>
              <div className="md:w-1/3">
                <div className="sticky top-24">
                  <div className="bg-gray-800 rounded-lg p-6 mb-8">
                    <h3 className="text-xl font-bold mb-4">About the Author</h3>
                    <div className="flex items-center mb-4">
                      <Image
                        src={post.authorImage}
                        alt={post.author}
                        width={64}
                        height={64}
                        className="rounded-full mr-4"
                      />
                      <div>
                        <h4 className="font-bold">{post.author}</h4>
                        <p className="text-gray-400">Web Developer</p>
                      </div>
                    </div>
                    <p className="text-gray-300">John is a seasoned web developer with over 10 years of experience in creating innovative digital solutions.</p>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-4">Share this article</h3>
                    <div className="flex space-x-4">
                      <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noopener noreferrer" className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors">
                        <Facebook size={24} />
                      </a>
                      <a href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer" className="bg-sky-500 p-2 rounded-full hover:bg-sky-600 transition-colors">
                        <Twitter size={24} />
                      </a>
                      <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer" className="bg-blue-800 p-2 rounded-full hover:bg-blue-900 transition-colors">
                        <Linkedin size={24} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <Link href="/blog" className="inline-flex items-center text-orange-500 hover:text-orange-600">
                <ArrowLeft size={20} className="mr-2" />
                Back to Blog
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}

