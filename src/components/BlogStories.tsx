import { motion } from "motion/react";
import { BlogPost } from "../types";
import { Calendar, User, ArrowRight } from "lucide-react";

interface BlogStoriesProps {
  posts: BlogPost[];
}

export default function BlogStories({ posts }: BlogStoriesProps) {
  return (
    <section className="py-24 px-6 md:px-12 bg-earth-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-earth-900 mb-6">Artisan Chronicles</h2>
          <p className="text-earth-600 font-light leading-relaxed">
            Short stories about the hands that weave, the earth that molds, and the rituals that define our cultural soul.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col group h-full"
            >
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl mb-6">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="flex items-center gap-4 text-[10px] uppercase font-bold tracking-widest text-forest-500 mb-4">
                <div className="flex items-center gap-1">
                  <Calendar size={12} />
                  {post.date}
                </div>
                <div className="flex items-center gap-1">
                  <User size={12} />
                  {post.author}
                </div>
              </div>

              <h3 className="text-2xl font-serif font-bold text-earth-900 mb-4 group-hover:text-forest-900 transition-colors leading-tight">
                {post.title}
              </h3>
              
              <p className="text-earth-600 font-light mb-8 flex-grow leading-relaxed">
                {post.excerpt}
              </p>
              
              <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-earth-900 group-hover:text-gold-500 transition-colors">
                Read Full Story
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
