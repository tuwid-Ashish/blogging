/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Search, 
  Menu, 
  X, 
  Instagram, 
  Youtube, 
  Facebook, 
  Pin as Pinterest,
  ArrowRightCircle,
  Bell,
  Heart
} from "lucide-react";
import { useState } from "react";
import { imageUrls } from "./images";

// --- Components ---

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Redesign", href: "/redesign" },
    { name: "Trending food", href: "#" },
    { name: "Recipes", href: "#" },
    { name: "World cuisine", href: "#", active: true },
    { name: "Street food", href: "#" },
    { name: "Diet & healthy", href: "#" },
    { name: "Food blog", href: "#" },
    { name: "About", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <nav className="bg-[#1a1a1a] text-white py-4 px-6 md:px-12 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto">
        {/* Top Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <h1 className="text-3xl md:text-4xl font-serif tracking-tight text-white flex items-baseline">
              <span className="italic font-light opacity-80">fry</span>
              <span className="font-bold">cuisine</span>
            </h1>
          </div>
          
          <div className="hidden md:flex flex-1 max-w-md mx-12">
            <div className="relative w-full">
              <input 
                type="text" 
                placeholder="Search recipes, tips..." 
                className="w-full bg-[#333] border-none rounded-full py-2 px-10 text-sm focus:ring-1 focus:ring-brand-primary"
              />
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
              <X className="absolute right-3 top-2.5 w-4 h-4 text-gray-400 cursor-pointer" />
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex justify-center items-center gap-8 text-[11px] uppercase tracking-widest font-semibold font-sans border-t border-white/10 pt-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`hover:text-brand-primary transition-colors ${link.active ? 'border border-white/30 px-3 py-1 rounded' : ''}`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#1a1a1a] border-t border-white/10 mt-4 py-4"
          >
            <div className="flex flex-col gap-4 px-4 uppercase text-xs tracking-widest">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="hover:text-brand-primary py-2">{link.name}</a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-[600px] overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={imageUrls.hero} 
          alt="Delicious pasta" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      
      <div className="relative h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center items-start text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-serif leading-tight mb-6">
            Explore Trending, Global & Healthy <br />
            Food at FryCuisine
          </h2>
          <p className="text-lg md:text-2xl font-serif italic max-w-2xl text-gray-200 mb-10 leading-relaxed">
            From viral food trends and world-famous dishes to healthy diets and easy recipes — everything about food in one place.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-2 border-2 border-white/50 rounded-full px-8 py-3 hover:bg-white hover:text-black transition-all group">
              <span className="uppercase text-xs tracking-[0.2em] font-bold">World cuisine</span>
              <ArrowRightCircle className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="flex items-center gap-2 border-2 border-white/50 rounded-full px-8 py-3 hover:bg-white hover:text-black transition-all group">
              <span className="uppercase text-xs tracking-[0.2em] font-bold">Diet Food</span>
              <ArrowRightCircle className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const TrendingSection = () => {
  const posts = [
    {
      title: "Korean Corn Dogs",
      date: "January 1, 2026",
      tag: "Trending",
      desc: "Crispy outside, cheesy inside! Golden fried corn dogs with gooey cheese and bold Korean flavors.",
      img: imageUrls.trending[0].img
    },
    {
      title: "Dubai Chocolate Bar",
      date: "January 1, 2026",
      tag: "Trending",
      desc: "Luxury in every bite. Rich chocolate layered with premium fillings inspired by Dubai desserts.",
      img: imageUrls.trending[1].img
    },
    {
      title: "Viral Street Momo",
      date: "January 2, 2026",
      tag: "Trending",
      desc: "The internet's favorite street snack Juicy Momo tossed in spicy sauces, full of desi street-style flavor.",
      img: imageUrls.trending[2].img
    },
    {
      title: "Japanese Soufflé Pancakes",
      date: "January 2, 2026",
      tag: "Trending",
      desc: "Soft, fluffy & cloud-like Light-as-air pancakes that melt in your mouth with every bite.",
      img: imageUrls.trending[3].img
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-serif uppercase tracking-tight text-[#1a1a1a]">
          Trending Food Right Now
        </h2>
        <div className="w-24 h-0.5 bg-brand-primary mx-auto mt-4" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-16">
        {posts.map((post, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="overflow-hidden mb-6 aspect-[4/3]">
              <img 
                src={post.img} 
                alt={post.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
            </div>
            <div className="bg-[#f3f0e8] p-8 -mt-12 mx-4 relative z-10">
              <h3 className="text-2xl font-serif text-brand-primary mb-2">{post.title}</h3>
              <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-4 font-bold">
                {post.date} &bull; {post.tag}
              </p>
              <p className="text-sm text-gray-700 leading-relaxed mb-6">
                {post.desc}
              </p>
              <a href="#" className="uppercase text-[10px] tracking-[0.2em] font-black text-brand-primary hover:opacity-70">
                Read More...
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const WorldFoodSection = () => {
  const regions = [
    {
      country: "India",
      flag: "🇮🇳",
      dishes: "Butter Chicken, Dosa",
      img: imageUrls.worldFood[0].img
    },
    {
      country: "Korea",
      flag: "🇰🇷",
      dishes: "Kimchi, Bibimbap",
      img: imageUrls.worldFood[1].img
    },
    {
      country: "Italy",
      flag: "🇮🇹",
      dishes: "Pizza & Pasta",
      img: imageUrls.worldFood[2].img
    }
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
        <div className="flex items-center gap-8 w-full mb-16">
          <div className="flex-1 h-px bg-black/20" />
          <h2 className="text-4xl md:text-5xl font-serif text-center whitespace-nowrap">
            World Famous Food by Country
          </h2>
          <div className="flex-1 h-px bg-black/20" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {regions.map((region, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="bg-[#f3f4e9] p-2 flex flex-col"
            >
              <img src={region.img} alt={region.country} className="w-full aspect-[4/5] object-cover mb-4" />
              <div className="flex items-center justify-center gap-4 py-4">
                <span className="text-3xl border border-gray-300 p-1 bg-white">{region.flag}</span>
                <span className="text-2xl font-serif">{region.country}</span>
              </div>
              <p className="text-center italic font-serif text-xl mb-6">{region.dishes}</p>
              <button className="bg-brand-primary text-white py-3 px-8 mx-auto my-4 uppercase text-xs tracking-widest font-bold hover:brightness-110">
                Read More
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const RecipesSection = () => {
  const recipes = [
    {
      title: "Masala Frankie Roll",
      desc: "Spicy vegetable stuffing wrapped in soft roti with tangy sauces. Loaded with fresh veggies and Indian spices for bold taste. A quick and filling street-style meal.",
      img: imageUrls.recipes[0].img,
      date: "January 10, 2026"
    },
    {
      title: "Fruit Yogurt Bowl",
      desc: "Fresh seasonal fruits blended with creamy low-fat yogurt. Rich in vitamins, protein and natural sweetness. A refreshing and nutritious anytime snack.",
      img: imageUrls.recipes[1].img,
      date: "January 10, 2026",
      reverse: true
    },
    {
      title: "Air Fryer Paneer Tikka",
      desc: "Marinated paneer grilled to smoky perfection in air fryer. Low oil yet full of spicy and rich flavors. Great healthy alternative to fried snacks.",
      img: imageUrls.recipes[2].img,
      date: "January 10, 2026"
    },
    {
      title: "Dal Tadka & Rice",
      desc: "Slow cooked lentils tempered with aromatic Indian spices. Served with steamed rice for comforting homemade taste. Simple, nutritious and satisfying everyday meal.",
      img: imageUrls.recipes[3].img,
      date: "January 10, 2026",
      reverse: true
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
      <h2 className="text-6xl font-serif text-center uppercase mb-20 tracking-tighter">
        Recipes Section
      </h2>

      <div className="space-y-16">
        {recipes.map((recipe, index) => (
          <div 
            key={index} 
            className={`flex flex-col md:flex-row gap-8 items-center ${recipe.reverse ? 'md:flex-row-reverse' : ''}`}
          >
            <div className="flex-1 space-y-4">
              <span className="text-[10px] uppercase font-bold text-gray-400 tracking-[0.3em]">{recipe.date}</span>
              <h3 className="text-3xl font-serif">{recipe.title}</h3>
              <p className="text-gray-600 leading-relaxed max-w-md">
                {recipe.desc}
              </p>
              <button className="text-brand-primary uppercase text-[10px] tracking-[0.2em] font-bold border-b border-brand-primary pb-1">
                Continue Reading
              </button>
            </div>
            <div className="flex-1 w-full">
              <img src={recipe.img} alt={recipe.title} className="w-full aspect-video object-cover rounded-sm shadow-xl" />
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-20">
        <button className="bg-brand-primary text-white px-12 py-4 rounded font-serif text-xl hover:brightness-110">
          View More
        </button>
      </div>
    </section>
  );
};

const HealthyGuidesSection = () => {
  const guides = [
    {
      cat: "Weight Loss Diet Foods",
      title: "Quinoa Veg Salad Bowl",
      desc: "Fresh vegetables with quinoa and light dressing. Perfect for healthy weight loss and clean eating.",
      img: imageUrls.healthyGuides[0].img
    },
    {
      cat: "High Protein Diet Foods",
      title: "Paneer Protein Power Bowl",
      desc: "High protein paneer with veggies and healthy spices. Keeps you full and boosts energy.",
      img: imageUrls.healthyGuides[1].img
    },
    {
      cat: "Keto Food List",
      title: "Avocado Egg Keto Plate",
      desc: "Low carb avocado and eggs for keto lifestyle. Supports fat burning and steady energy.",
      img: imageUrls.healthyGuides[2].img
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center gap-8 w-full mb-20">
          <div className="flex-1 h-px bg-black/20" />
          <h2 className="text-5xl font-serif text-center uppercase tracking-[0.1em] leading-tight">
            Diet & Healthy Food <br /> Guides
          </h2>
          <div className="flex-1 h-px bg-black/20" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {guides.map((guide, index) => (
            <div key={index} className="bg-[#fdfbf7] border border-gray-100 flex flex-col overflow-hidden">
              <img src={guide.img} alt={guide.title} className="w-full aspect-square object-cover" />
              <div className="p-8 text-center flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-xl text-brand-primary font-serif mb-4">{guide.cat}</h4>
                  <h5 className="italic font-serif text-lg mb-4">{guide.title}</h5>
                  <p className="text-sm text-gray-600 mb-8 leading-relaxed">
                    {guide.desc}
                  </p>
                </div>
                <button className="bg-brand-primary text-white py-3 px-8 uppercase text-xs tracking-widest font-bold hover:brightness-110">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ExploreCategorySection = () => {
  return (
    <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex items-center gap-8 w-full mb-16">
        <h2 className="text-5xl md:text-6xl font-serif uppercase tracking-tight text-[#1a1a1a] whitespace-nowrap">
          Explore Food By <br />
          <span className="font-['Playfair_Display'] italic text-brand-primary transform -rotate-2 inline-block ml-32">Category</span>
        </h2>
        <div className="flex-1 h-px bg-black/20 mt-12" />
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 gap-y-16">
        {imageUrls.categories.map((cat, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center group cursor-pointer"
          >
            <div className="w-full aspect-[4/5] md:aspect-square overflow-hidden rounded-full mb-6 relative">
              <img src={cat.img} alt={cat.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <h4 className="text-xl font-serif italic text-brand-primary group-hover:text-black transition-colors">{cat.title}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const LatestFromFrycuisineSection = () => {
  const latestPosts = [
    { title: "Mexican Tacos Street Food", tag: "Trending Food", date: "Jan 20", desc: "Spicy fillings wrapped in soft tortillas for perfect flavor.", img: imageUrls.latestNews[0], aspect: "aspect-[4/3]" },
    { title: "Power of Avocado Salad", tag: "Food Facts", date: "Jan 20", desc: "Rich in healthy fats and essential nutrients.", img: imageUrls.latestNews[1], aspect: "aspect-square" },
    { title: "Chocolate Lava Cake Love", tag: "Famous Food", date: "Jan 20", desc: "Warm molten chocolate dessert loved worldwide.", img: imageUrls.latestNews[2], aspect: "aspect-video" },
    { title: "Creamy Pasta Alfredo", tag: "Trending Food", date: "Jan 20", desc: "Classic Italian comfort food with rich flavor.", img: imageUrls.latestNews[3], aspect: "aspect-square" },
    { title: "Spicy Samosa Chaat", tag: "Street Food", date: "Jan 20", desc: "Tangy, spicy, crunchy Indian favorite snack.", img: imageUrls.latestNews[4], aspect: "aspect-[3/4]" },
    { title: "Cheese Burst Burger", tag: "Trending Food", date: "Jan 20", desc: "Loaded with melted cheese and juicy crispy layers.", img: imageUrls.latestNews[5], aspect: "aspect-square" },
    { title: "Spicy Chicken Ramen", tag: "Famous Food", date: "Jan 20", desc: "Hot flavorful broth with tender noodles and topping", img: imageUrls.latestNews[6], aspect: "aspect-square" },
    { title: "Steamed Veg Momos", tag: "Street Food", date: "Jan 20", desc: "Soft dumplings filled with fresh vegetables and spices", img: imageUrls.latestNews[7], aspect: "aspect-video" },
    { title: "Oats & Fruit Breakfast Bowl", tag: "Diet Tips", date: "Jan 20", desc: "Light, healthy breakfast for better digestion & weight control.", img: imageUrls.latestNews[8], aspect: "aspect-square" },
    { title: "Sprouts Salad Bowl", tag: "Diet Tips", date: "Jan 20", desc: "Protein-rich sprouts with fresh veggies for a healthy meal.", img: imageUrls.latestNews[9], aspect: "aspect-square" },
    { title: "Creamy Mushroom Pasta", tag: "Trending Food", date: "Jan 20", desc: "Rich mushroom pasta with herbs for a comforting bite.", img: imageUrls.latestNews[10], aspect: "aspect-[3/4]" },
    { title: "Loaded Veggie Cheese Sandwich", tag: "Trending Food", date: "Jan 20", desc: "Delicious sandwich with fresh veggies and melted cheese.", img: imageUrls.latestNews[11], aspect: "aspect-[4/3]" },
    { title: "Dark Chocolate", tag: "Food Facts", date: "Jan 20", desc: "Healthy dark chocolate recipes.", img: imageUrls.latestNews[12], aspect: "aspect-square" },
    { title: "Hyderabadi Biryani", tag: "Famous Food", date: "Jan 20", desc: "Authentic dum biryani cooked to perfection.", img: imageUrls.latestNews[13], aspect: "aspect-video" },
  ];

  return (
    <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex items-center gap-8 w-full mb-16">
        <h2 className="text-5xl md:text-6xl font-serif text-[#1a1a1a] whitespace-nowrap">
          Latest from <span className="font-['Playfair_Display'] italic text-brand-primary ml-4">Frycuisine</span>
        </h2>
        <div className="flex-1 h-[2px] bg-brand-primary ml-4 opacity-50 relative">
           <div className="absolute right-0 -top-8 w-32 h-16 border-t-2 border-r-2 border-brand-primary rounded-tr-[100px] opacity-50 transform block" />
        </div>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
        {latestPosts.map((post, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="break-inside-avoid group cursor-pointer flex flex-col mb-8"
          >
            {i === 0 ? (
              <div className="relative overflow-hidden mb-4 rounded-sm shadow-md">
                <img src={post.img} alt={post.title} className={`w-full ${post.aspect} object-cover group-hover:scale-105 transition-transform duration-500`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                  <p className="text-white text-sm font-bold italic tracking-wider mb-2 drop-shadow-lg">{post.tag} , {post.date}</p>
                  <h3 className="text-white text-2xl font-serif mb-2 drop-shadow-lg">{post.title}</h3>
                  <p className="text-white/90 text-sm font-sans drop-shadow-md">{post.desc}</p>
                </div>
              </div>
            ) : (
              <>
                <div className="overflow-hidden mb-4 rounded-sm shadow-md">
                  <img src={post.img} alt={post.title} className={`w-full ${post.aspect} object-cover group-hover:scale-105 transition-transform duration-500`} />
                </div>
                <div className="flex flex-col">
                  <p className="text-[#1a1a1a] text-xs font-bold italic tracking-wider mb-1">{post.tag} , {post.date}</p>
                  <h3 className="text-[#1a1a1a] text-xl font-serif mb-2">{post.title}</h3>
                  <p className="text-gray-600 text-sm italic font-serif leading-relaxed">{post.desc}</p>
                </div>
              </>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const WhyChooseUsSection = () => {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto text-center">
      <div className="flex items-center justify-center gap-2 mb-16">
        <div className="flex-1 h-px bg-brand-primary opacity-30 hidden md:block" />
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1a1a1a] px-8">Why Food Lovers Choose FryCuisine</h2>
        <div className="flex-1 h-px bg-brand-primary opacity-30 hidden md:block" />
      </div>

      <div className="flex flex-col md:flex-row gap-12 items-center bg-[#fdfdfd] p-8 md:p-12 shadow-lg drop-shadow-xl rounded-xl">
        <div className="flex-1 w-full relative">
           <img src={imageUrls.category} alt="Healthy food spread" className="w-full h-[500px] object-cover rounded-md shadow-inner" />
        </div>
        <div className="flex-1 text-left space-y-6">
          <p className="text-[#1a1a1a] leading-loose text-xl font-serif italic">
            FryCuisine brings you global food coverage in a simple and easy way. From easy recipes and real food guides to trending and viral food updates, everything is shared in a clean and honest style. The content is created to help food lovers explore new dishes, learn quickly, and enjoy authentic food stories without long or complicated text.
          </p>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const sections = [
    {
      title: "Explore",
      links: ["Trending Food", "World Cuisine", "Diet Food", "Recipes"]
    },
    {
      title: "Categories",
      links: ["Indian Food", "Street Food", "Healthy Food", "Desserts", "Snacks"]
    },
    {
      title: "Company",
      links: ["About", "Blog", "Contact", "Privacy Policy", "Disclaimer"]
    }
  ];

  return (
    <footer className="relative bg-[#1a1a1a] text-white pt-32 pb-12 overflow-hidden">
      {/* Background with texture */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <img src={imageUrls.footer} className="w-full h-full object-cover" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center mb-20">
          <div className="flex flex-col items-center mb-8">
             <h2 className="text-4xl font-serif tracking-tighter flex items-baseline mb-4">
              <span className="italic font-light opacity-60">fry</span>
              <span className="font-bold">cuisine</span>
            </h2>
            <div className="w-full h-px bg-white/20 mb-1" />
            <div className="w-full h-px bg-white/20" />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-12 w-full">
            {sections.map((section) => (
              <div key={section.title}>
                <h4 className="text-xl font-serif mb-6">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link} className="flex items-center gap-2 text-sm text-gray-400 hover:text-white cursor-pointer transition-colors">
                      <span className="text-brand-primary">•</span> {link}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            
            <div>
              <h4 className="text-xl font-serif mb-6">Follow us</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-primary transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-primary transition-colors">
                  <Pinterest className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-primary transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-primary transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-black/40 backdrop-blur-md p-12 rounded-lg text-center max-w-4xl mx-auto border border-white/5">
          <h3 className="text-3xl md:text-4xl font-serif mb-4">Join FryCuisine – Food Stories in Your Inbox</h3>
          <p className="text-gray-400 mb-8 italic font-serif">Trending food updates | Healthy diet tips | World cuisine articles</p>
          
          <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            <div className="relative flex-1">
              <input 
                type="email" 
                placeholder="" 
                className="w-full bg-white text-black py-4 px-12 rounded focus:ring-0 outline-none"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-black w-5 h-5" />
              <X className="absolute right-4 top-1/2 -translate-y-1/2 text-black w-5 h-5 cursor-pointer" />
            </div>
            <button className="bg-[#ff1e1e] text-white px-8 py-4 rounded uppercase font-bold flex items-center gap-2 justify-center hover:brightness-110 transition-all">
              <Bell className="w-5 h-5" />
              Subscribe
            </button>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/10 flex justify-between items-center text-xs text-gray-500 uppercase tracking-[0.2em]">
          <p>© 2026 FryCuisine. All Rights Reserved.</p>
          <div className="flex items-center gap-2">
            <Heart className="w-3 h-3 text-[#ff1e1e] fill-[#ff1e1e]" />
            <span>Made with passion for food</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-brand-bg selection:bg-brand-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <TrendingSection />
        <WorldFoodSection />
        <RecipesSection />
        <HealthyGuidesSection />

        
        
        <ExploreCategorySection />
        <LatestFromFrycuisineSection />

        <WhyChooseUsSection />
      </main>
      <Footer />
    </div>
  );
}
