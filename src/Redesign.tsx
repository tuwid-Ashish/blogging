import React from 'react';
import { Search, Menu, Facebook, Twitter, Instagram, LayoutGrid as Google } from 'lucide-react';
import { imageUrls } from './images';

const Header = () => {
  return (
    <>
      <header className="bg-[#2d2d2d] text-[#b3b3b3] text-sm">
        <div className="max-w-[1600px] mx-auto px-4 py-3 flex flex-wrap items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="text-white text-xl font-bold tracking-wider">
              <span className="text-white">REBLOG</span><span className="text-[#00c8aa]">PRO</span>
            </h1>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-white hover:text-[#00c8aa]">Home v</a>
              <a href="#" className="hover:text-white transition-colors">Shop</a>
              <a href="#" className="hover:text-white transition-colors">My Account</a>
              <a href="#" className="hover:text-white transition-colors">Cart</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
              <a href="#" className="hover:text-white transition-colors">Layout v</a>
            </nav>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center gap-4 text-xs">
              <Facebook className="w-4 h-4 hover:text-white cursor-pointer" />
              <Twitter className="w-4 h-4 hover:text-white cursor-pointer" />
              <Instagram className="w-4 h-4 hover:text-white cursor-pointer" />
              <Google className="w-4 h-4 hover:text-white cursor-pointer" />
            </div>
            
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search ..." 
                className="bg-white/90 text-black py-1.5 pl-9 pr-4 rounded text-sm outline-none focus:bg-white w-[200px]"
              />
            </div>
          </div>
        </div>
      </header>

      <div className="bg-[#f2f2f2] border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-[1600px] mx-auto px-4 py-3 flex items-center">
          <Menu className="w-6 h-6 text-gray-600 cursor-pointer" />
          
          <div className="flex-1 flex justify-center gap-8 text-xs font-semibold uppercase tracking-widest text-gray-500">
            <a href="#" className="text-blue-500 border-b-2 border-blue-500 pb-1">All</a>
            <a href="#" className="hover:text-gray-900 pb-1">Featured</a>
            <a href="#" className="hover:text-gray-900 pb-1">Popular</a>
          </div>
        </div>
      </div>
    </>
  );
};

const MasonryGrid = () => {
  // Use images from our file to simulate the dense grid
  const allImages = [
    imageUrls.hero,
    imageUrls.trending[0].img,
    imageUrls.trending[1].img,
    imageUrls.worldFood[0].img,
    imageUrls.recipes[1].img,
    imageUrls.trending[2].img,
    imageUrls.worldFood[1].img,
    imageUrls.trending[3].img,
    imageUrls.recipes[0].img,
    imageUrls.recipes[2].img,
    imageUrls.healthyGuides[0].img,
    imageUrls.worldFood[2].img,
    imageUrls.recipes[3].img,
    imageUrls.healthyGuides[1].img,
    imageUrls.healthyGuides[2].img,
    imageUrls.hero,
    imageUrls.trending[0].img,
    imageUrls.worldFood[0].img,
  ];

  const categories = ["BEAUTY, LIFE STYLE, NATURE", "LIFE STYLE, TECHNOLOGY", "FOOD, HEALTH", "LIFE STYLE, NATURE"];
  
  const posts = allImages.map((img, i) => ({
    id: i,
    image: img,
    date: "MAY\n24",
    category: categories[i % categories.length],
    title: i % 2 === 0 ? "Simplicity that goes a long way" : i % 3 === 0 ? "Apple watch design guidelines" : "How I feel about tour & travelling",
    excerpt: "Sometimes making a task just a little simpler can make a huge difference. Making something...",
    tall: i % 4 === 0 || i % 7 === 0 // just to vary aspect ratios if these were different sized imgs
  }));

  return (
    <main className="bg-[#f2f2f2] min-h-screen py-8">
      <div className="max-w-[1600px] mx-auto px-4">
        {/* CSS Columns approach for Masonry */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-6 space-y-6">
          {posts.map((post) => (
            <article key={post.id} className="break-inside-avoid bg-white group cursor-pointer shadow-sm hover:shadow-md transition-shadow">
              <div className="relative">
                <div className="overflow-hidden bg-gray-200">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${post.tall ? 'aspect-[3/4]' : 'aspect-square'}`}
                    loading="lazy"
                  />
                </div>
                
                {/* Diamond Date Badge */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#2d2d2d] text-white flex items-center justify-center rotate-45 z-10 transition-colors group-hover:bg-[#00c8aa]">
                  <div className="-rotate-45 text-center leading-tight">
                    <span className="block text-[8px] font-bold">MAY</span>
                    <span className="block text-xs font-bold">24</span>
                  </div>
                </div>
              </div>
              
              <div className="px-6 pt-10 pb-8 text-center bg-white">
                <p className="text-[9px] uppercase tracking-[0.15em] text-gray-400 mb-2 font-semibold">
                  {post.category}
                </p>
                <h3 className="text-lg font-serif mb-3 text-gray-800 leading-tight">
                  {post.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed font-serif italic">
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
};

export default function Redesign() {
  return (
    <div className="font-sans min-h-screen flex flex-col">
      <Header />
      <MasonryGrid />
    </div>
  );
}