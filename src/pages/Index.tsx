import { Menu, X, ShoppingCart, Instagram, Twitter, Facebook, Mail } from "lucide-react";
import React, { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cartItems, setCartItems] = useState<number[]>([]);
  const [likedItems, setLikedItems] = useState<number[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { toast } = useToast();

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Hero slides data
  const heroSlides = [
    {
      id: 1,
      title: "PRETENDING T-SHIRT",
      description: "The Pretending Tee Featuring a painted portrait with a zipper covering the eyes and the words \"so — when do we stop pretending,\"",
      image: "https://vindof.com/cdn/shop/articles/vindof-casualwear-redefined.jpg?v=1749536025&width=1000"
    },
    {
      id: 2,
      title: "ARTISTIC EXPRESSION",
      description: "Discover our collection of artistic t-shirts that blend creativity with comfort. Each piece tells a unique story.",
      image: "https://images.pexels.com/photos/8532609/pexels-photo-8532609.jpeg?auto=compress&cs=tinysrgb&w=1000"
    },
    {
      id: 3,
      title: "PREMIUM COLLECTION",
      description: "Elevate your style with our premium collection featuring high-quality materials and contemporary designs.",
      image: "https://images.pexels.com/photos/8532635/pexels-photo-8532635.jpeg?auto=compress&cs=tinysrgb&w=1000"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);

    return () => clearInterval(slideInterval);
  }, [heroSlides.length]);

  // Navigation links data
  const navLinks = [
    { text: "Home", href: "#" },
    { text: "New", href: "#" },
    { text: "Catalog", href: "#" },
  ];

  // Mobile menu links
  const mobileMenuLinks = [
    { text: "HOME", href: "#" },
    { text: "SHOP", href: "#" },
    { text: "ABOUT", href: "#" },
    { text: "ACCOUNT", href: "#" },
    { text: "ARTICLES", href: "#" },
    { text: "CONTACT", href: "#" },
  ];

  // Updated T-shirts data with vindof.com affiliate links
  const tShirts = [
    {
      id: 1,
      name: "ART ADDICTS T-SHIRT",
      price: "Rs. 2,837.00",
      image: "https://vindof.com/cdn/shop/files/18-05-2025_VINDOF01066_copy.jpg?v=1747987027&width=1000",
      affiliateLink: "https://vindof.com/products/art-addicts-t-shirt"
    },
    {
      id: 2,
      name: "PRETENDING T-SHIRT",
      price: "Rs. 2,837.00",
      image: "https://vindof.com/cdn/shop/files/18-05-2025_VINDOF01006_copy_cfca951e-0018-48d6-bf72-9baddf7bcd0e.jpg?v=1750245434&width=1000",
      affiliateLink: "https://vindof.com/products/pretending-t-shirt"
    },
    {
      id: 3,
      name: "CREATIVE MINDS T-SHIRT",  
      price: "Rs. 2,837.00",
      image: "https://vindof.com/cdn/shop/files/18-05-2025_VINDOF00912_copy_0d7896e4-c9b0-425f-9d52-35fc6e89f759.jpg?v=1750245563&width=1000",
      affiliateLink: "https://vindof.com/products/creative-minds-t-shirt"
    },
  ];

  // Updated Premium shirts data with vindof.com affiliate links
  const premiumShirts = [
    {
      id: 4,
      name: "PREMIUM ART SHIRT",
      price: "Rs. 3,500.00",
      image: "https://vindof.com/cdn/shop/files/premium-art-shirt.jpg?v=1750000000&width=1000",
      affiliateLink: "https://vindof.com/products/premium-art-shirt"
    },
    {
      id: 5,
      name: "DESIGNER COLLECTION",
      price: "Rs. 3,200.00",
      image: "https://vindof.com/cdn/shop/files/designer-collection.jpg?v=1750000001&width=1000",
      affiliateLink: "https://vindof.com/products/designer-collection"
    },
    {
      id: 6,
      name: "LUXURY CASUAL SHIRT",
      price: "Rs. 3,800.00",
      image: "https://vindof.com/cdn/shop/files/luxury-casual.jpg?v=1750000002&width=1000",
      affiliateLink: "https://vindof.com/products/luxury-casual-shirt"
    },
  ];

  // Add to cart functionality
  const addToCart = (productId: number) => {
    setCartItems(prev => [...prev, productId]);
    toast({
      title: "Added to Cart",
      description: "Product has been added to your cart successfully!",
    });
    console.log(`Added product ${productId} to cart`);
  };

  // Toggle like functionality
  const toggleLike = (productId: number) => {
    setLikedItems(prev => {
      const isLiked = prev.includes(productId);
      if (isLiked) {
        toast({
          title: "Removed from Wishlist",
          description: "Product removed from your wishlist.",
        });
        return prev.filter(id => id !== productId);
      } else {
        toast({
          title: "Added to Wishlist",
          description: "Product added to your wishlist!",
        });
        return [...prev, productId];
      }
    });
  };

  // Toggle cart functionality
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  // Get product by ID for cart
  const getProductById = (id: number) => {
    return [...tShirts, ...premiumShirts].find(product => product.id === id);
  };

  return (
    <div className="bg-white w-full min-h-screen">
      <div className="bg-white overflow-hidden w-full mx-auto relative">
        {/* Header - Made bigger for mobile/tablet */}
        <header className="w-full h-16 md:h-18 lg:h-20 xl:h-16 relative bg-white flex items-center justify-between px-4 md:px-6 lg:px-[106px]">
          {/* Mobile Menu Button - Left Side */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="xl:hidden z-50 relative order-1"
          >
            {isMenuOpen ? (
              <X className="w-8 h-8 md:w-9 md:h-9 text-black" />
            ) : (
              <Menu className="w-6 h-6 md:w-7 md:h-7 text-black" />
            )}
          </button>

          {/* Logo - Center on mobile, left on desktop */}
          <div className="flex items-center order-2 xl:order-1">
            <img
              className="h-6 md:h-7 lg:h-8 xl:h-6 object-cover animate-fade-in"
              alt="Racan Logo"
              src="https://i.postimg.cc/rsYBTFzm/image-41.png"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex space-x-6 2xl:space-x-12 order-2">
            <a
              href="#"
              className="font-['Outfit',sans-serif] font-normal text-black text-sm xl:text-base 2xl:text-lg hover:text-green-800 transition-colors relative group animate-fade-in"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-800 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#"
              className="font-['Outfit',sans-serif] font-normal text-black text-sm xl:text-base 2xl:text-lg hover:text-green-800 transition-colors relative group animate-fade-in"
            >
              New
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-800 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#"
              className="font-['Outfit',sans-serif] font-normal text-black text-sm xl:text-base 2xl:text-lg hover:text-green-800 transition-colors relative group animate-fade-in"
            >
              Catalog
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-800 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-2 md:space-x-3 xl:space-x-4 order-3">
            {/* Shopping Bag Icon - Fixed */}
            <button 
              onClick={toggleCart}
              className="relative w-9 h-9 md:w-10 md:h-10 xl:w-8 xl:h-8 bg-[#eeeeee] rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
            >
              <img
                src="https://img.icons8.com/?size=100&id=3686&format=png&color=000000"
                alt="Shopping Bag"
                className="w-4 h-4 md:w-5 md:h-5 xl:w-4 xl:h-4"
              />
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#ff2c6a] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {cartItems.length}
                </span>
              )}
            </button>

            {/* Try Racan Button - Desktop Only */}
            <button className="hidden xl:block h-7 xl:h-8 bg-[#ff2c6a] rounded-[20px] px-3 xl:px-4 font-['Poppins',sans-serif] font-medium text-white text-xs xl:text-sm hover:bg-[#e6245e] transition-colors">
              Try Racan
            </button>

            {/* Profile Image - Desktop Only */}
            <img
              className="hidden xl:block w-7 xl:w-8 h-7 xl:h-8 object-cover rounded-full"
              alt="User Profile"
              src="https://i.pinimg.com/736x/94/e6/cc/94e6cc707a02f2ae57b722cf3dddb9af.jpg"
            />
          </div>
        </header>

        {/* Cart Dropdown */}
        {isCartOpen && (
          <div className="fixed top-18 md:top-20 xl:top-16 right-4 md:right-6 lg:right-[106px] w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-4">
            <h3 className="font-['Poppins',sans-serif] font-medium text-lg mb-4">Shopping Cart ({cartItems.length})</h3>
            {cartItems.length === 0 ? (
              <p className="text-gray-500">Your cart is empty</p>
            ) : (
              <div className="space-y-2">
                {cartItems.map((itemId, index) => {
                  const product = getProductById(itemId);
                  return (
                    <a
                      key={index}
                      href={product?.affiliateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-between items-center py-2 border-b hover:bg-gray-50 cursor-pointer transition-colors"
                    >
                      <span className="text-sm font-medium">{product?.name || `Product ${itemId}`}</span>
                      <span className="text-sm text-gray-600">{product?.price || "Rs. 2,837.00"}</span>
                    </a>
                  );
                })}
                <button className="w-full mt-4 bg-[#ff2c6a] text-white py-2 rounded-lg hover:bg-[#e6245e] transition-colors">
                  Checkout
                </button>
              </div>
            )}
          </div>
        )}

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="xl:hidden fixed inset-0 bg-white z-40 pt-16 md:pt-18">
            <div className="flex flex-col justify-center items-center h-full space-y-8">
              {mobileMenuLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="font-['Outfit',sans-serif] font-normal text-black text-2xl hover:text-green-800 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.text}
                </a>
              ))}
              {/* Try Racan Button in Mobile Menu */}
              <button 
                className="mt-8 h-12 bg-[#ff2c6a] rounded-[30px] px-8 font-['Poppins',sans-serif] font-medium text-white text-lg hover:bg-[#e6245e] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Try Racan
              </button>
            </div>
          </div>
        )}

        {/* Hero Section with Auto-sliding */}
        <section className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[742px] relative overflow-hidden">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                backgroundImage: `url('${slide.image}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute left-4 md:left-8 lg:left-[29px] top-1/2 transform -translate-y-1/2 lg:top-[350px] lg:transform-none flex flex-col items-start space-y-3 md:space-y-6 lg:space-y-8 max-w-[calc(100%-2rem)] md:max-w-[495px]">
                <h1 className="font-['Poppins',sans-serif] font-normal text-white text-xl sm:text-2xl md:text-3xl lg:text-[40px] leading-tight animate-fade-in">
                  {slide.title}
                </h1>
                <p className="font-['Outfit',sans-serif] font-normal text-white text-sm md:text-lg lg:text-xl max-w-[280px] sm:max-w-[350px] lg:max-w-[390px] leading-relaxed animate-fade-in">
                  {slide.description}
                </p>
                <button className="w-32 sm:w-36 md:w-40 lg:w-44 h-10 sm:h-12 lg:h-[51px] rounded-[30px] border-2 border-white bg-transparent text-white font-['Outfit',sans-serif] font-medium text-base sm:text-lg lg:text-xl flex items-center justify-center hover:bg-white hover:text-black transition-colors animate-fade-in hover:scale-105 transform">
                  Shop Now
                </button>
              </div>
            </div>
          ))}

          {/* Pagination dots */}
          <div className="absolute bottom-4 md:bottom-8 lg:bottom-[45px] right-4 md:right-8 lg:right-[53px] flex space-x-1">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-[31px] lg:h-[30px] rounded-sm transition-colors ${
                  index === currentSlide ? 'bg-[#ddff80]' : 'bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </section>

        {/* T-shirts For Men Section */}
        <section className="mt-8 sm:mt-12 md:mt-16 lg:mt-[83px] px-4 md:px-6 lg:px-8 xl:px-[155px]">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 md:mb-8 lg:mb-10">
            <h2 className="font-['Shinko_Sans-Regular',sans-serif] font-normal text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-4 sm:mb-0 animate-fade-in hover:text-gray-700 transition-colors cursor-default">
              T-shirts For Men
            </h2>
            <div className="flex items-center animate-fade-in">
              <a
                href="#"
                className="font-['Poppins',sans-serif] font-medium text-[#0e6eff] text-base sm:text-lg md:text-xl lg:text-2xl underline hover:no-underline hover:scale-105 transform transition-all"
              >
                View More
              </a>
              <span className="ml-2 text-[#0e6eff] text-base sm:text-lg md:text-xl lg:text-2xl">→</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
            {tShirts.map((shirt, index) => (
              <a
                key={shirt.id}
                href={shirt.affiliateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full aspect-[3/4] relative overflow-hidden shadow-lg group cursor-pointer animate-fade-in hover:scale-105 transform transition-all duration-300 min-h-[420px] sm:min-h-[460px] md:min-h-[500px] lg:min-h-[540px]"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(${shirt.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "0px",
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    toggleLike(shirt.id);
                  }}
                  className="absolute w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-[53px] xl:h-[53px] top-3 sm:top-4 md:top-5 lg:top-6 right-3 sm:right-4 md:right-5 lg:right-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <span className={`text-lg sm:text-xl md:text-2xl lg:text-3xl transition-colors ${
                    likedItems.includes(shirt.id) ? 'text-red-500' : 'text-white'
                  }`}>
                    {likedItems.includes(shirt.id) ? '❤️' : '♡'}
                  </span>
                </button>
                <div className="absolute bottom-0 left-0 p-4 sm:p-5 md:p-6 lg:p-7 xl:p-7 text-white">
                  <h3 className="font-['Poppins',sans-serif] font-medium text-base sm:text-lg md:text-xl lg:text-2xl xl:text-xl mb-3 sm:mb-4 md:mb-5 lg:mb-6 xl:mb-6">
                    {shirt.name}
                  </h3>
                  <p className="font-['Poppins',sans-serif] font-medium text-base sm:text-lg md:text-xl lg:text-2xl xl:text-xl">
                    {shirt.price}
                  </p>
                </div>
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    addToCart(shirt.id);
                  }}
                  className="absolute w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-[54px] xl:h-[54px] bottom-14 sm:bottom-16 md:bottom-18 lg:bottom-20 xl:bottom-[59px] right-3 sm:right-4 md:right-5 lg:right-6 bg-[#ff2c6a] rounded-full flex items-center justify-center hover:bg-[#e6245e] transition-colors transform hover:scale-105"
                >
                  <ShoppingCart className="text-white w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                </button>
              </a>
            ))}
          </div>
        </section>

        {/* Limited-Time Offers Section */}
        <section className="w-full mt-12 sm:mt-16 md:mt-20 lg:mt-[98px] bg-[#9fead33b] py-8 sm:py-12 md:py-16 lg:py-[76px]">
          <div className="px-4 md:px-8 lg:px-[95px]">
            <div className="flex flex-col lg:flex-row items-start mb-8 md:mb-12 lg:mb-[76px]">
              <h2 className="font-['Spline_Sans_Mono',monospace] font-medium text-[#363535] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[64px] leading-tight max-w-full lg:max-w-[650px] mb-4 lg:mb-0 animate-fade-in hover:text-[#2a2a2a] transition-colors cursor-default">
                Vindof Limited-Time Offers
              </h2>
              <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-[82px] lg:h-[82px] bg-[#ffe094] rounded-full border border-solid border-black flex items-center justify-center lg:ml-4 animate-pulse hover:scale-110 transform transition-all cursor-pointer">
                <span className="font-['Outfit',sans-serif] font-medium text-[#ff2d6b] text-lg sm:text-xl md:text-2xl lg:text-[32px]">
                  40%
                </span>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-10">
              <div className="w-full lg:w-2/3">
                <img
                  className="w-full h-48 sm:h-64 md:h-80 lg:h-[493px] object-cover rounded-lg"
                  alt="Limited time offer"
                  src="https://images.pexels.com/photos/8532609/pexels-photo-8532609.jpeg?auto=compress&cs=tinysrgb&w=800"
                />
              </div>
              <div className="w-full lg:w-1/3 bg-white rounded-xl border border-solid border-black p-4 md:p-6 lg:p-[26px] flex flex-col items-center">
                <img
                  className="w-full h-40 sm:h-48 md:h-56 lg:h-[262px] object-cover mb-4 sm:mb-6 md:mb-8 lg:mb-10 rounded-lg"
                  alt="Pretending Tee"
                  src="https://images.pexels.com/photos/8532473/pexels-photo-8532473.jpeg?auto=compress&cs=tinysrgb&w=400"
                />
                <p className="font-['Spline_Sans_Mono',monospace] font-medium text-black text-xs sm:text-sm md:text-base lg:text-base text-center leading-relaxed">
                  The Pretending Tee Featuring a painted portrait with a
                  zipper covering the eyes and the words "so — when do we
                  stop pretending,"
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vindof shirts for men Banner */}
        <section className="w-full h-48 sm:h-64 md:h-80 lg:h-[637px] bg-[url('https://images.pexels.com/photos/8532635/pexels-photo-8532635.jpeg?auto=compress&cs=tinysrgb&w=1000')] bg-cover bg-center relative">
          <h2 className="absolute w-full max-w-[280px] sm:max-w-xs md:max-w-md lg:max-w-[510px] top-1/2 transform -translate-y-1/2 left-4 md:left-8 lg:left-[92px] font-['Shinko_Sans-Regular',sans-serif] font-normal text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[64px] leading-tight animate-fade-in hover:text-gray-800 transition-colors cursor-default">
            Vindof shirts for men
          </h2>
        </section>

        {/* Premium shirts Section - Same styling as T-shirts */}
        <section className="mt-8 sm:mt-12 md:mt-16 lg:mt-[69px] px-4 md:px-6 lg:px-8 xl:px-[152px] pb-8 sm:pb-12 md:pb-16 lg:pb-[85px]">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 md:mb-8 lg:mb-10">
            <h2 className="font-['Shinko_Sans-Regular',sans-serif] font-normal text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-4 sm:mb-0 animate-fade-in hover:text-gray-700 transition-colors cursor-default">
              Premium shirts
            </h2>
            <div className="flex items-center animate-fade-in">
              <a
                href="#"
                className="font-['Poppins',sans-serif] font-medium text-[#0e6eff] text-base sm:text-lg md:text-xl lg:text-2xl underline hover:no-underline hover:scale-105 transform transition-all"
              >
                View More
              </a>
              <span className="ml-2 text-[#0e6eff] text-base sm:text-lg md:text-xl lg:text-2xl">→</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
            {premiumShirts.map((shirt, index) => (
              <a
                key={shirt.id}
                href={shirt.affiliateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full aspect-[3/4] relative overflow-hidden shadow-lg group cursor-pointer animate-fade-in hover:scale-105 transform transition-all duration-300 min-h-[420px] sm:min-h-[460px] md:min-h-[500px] lg:min-h-[540px]"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(${shirt.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "0px",
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    toggleLike(shirt.id);
                  }}
                  className="absolute w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-[53px] xl:h-[53px] top-3 sm:top-4 md:top-5 lg:top-6 right-3 sm:right-4 md:right-5 lg:right-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <span className={`text-lg sm:text-xl md:text-2xl lg:text-3xl transition-colors ${
                    likedItems.includes(shirt.id) ? 'text-red-500' : 'text-white'
                  }`}>
                    {likedItems.includes(shirt.id) ? '❤️' : '♡'}
                  </span>
                </button>
                <div className="absolute bottom-0 left-0 p-4 sm:p-5 md:p-6 lg:p-7 xl:p-7 text-white">
                  <h3 className="font-['Poppins',sans-serif] font-medium text-base sm:text-lg md:text-xl lg:text-2xl xl:text-xl mb-3 sm:mb-4 md:mb-5 lg:mb-6 xl:mb-6">
                    {shirt.name}
                  </h3>
                  <p className="font-['Poppins',sans-serif] font-medium text-base sm:text-lg md:text-xl lg:text-2xl xl:text-xl">
                    {shirt.price}
                  </p>
                </div>
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    addToCart(shirt.id);
                  }}
                  className="absolute w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-[54px] xl:h-[54px] bottom-14 sm:bottom-16 md:bottom-18 lg:bottom-20 xl:bottom-[59px] right-3 sm:right-4 md:right-5 lg:right-6 bg-[#ff2c6a] rounded-full flex items-center justify-center hover:bg-[#e6245e] transition-colors transform hover:scale-105"
                >
                  <ShoppingCart className="text-white w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                </button>
              </a>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full bg-white border-t border-gray-200 py-12 md:py-16 lg:py-20">
          <div className="px-4 md:px-8 lg:px-[95px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
              {/* About Racan */}
              <div className="lg:col-span-1">
                <img
                  className="h-8 mb-6"
                  alt="Racan Logo"
                  src="https://i.postimg.cc/rsYBTFzm/image-41.png"
                />
                <h3 className="font-['Poppins',sans-serif] font-semibold text-lg mb-4 text-black">About Racan</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Premium fashion brand offering high-quality clothing for the modern lifestyle.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="font-['Poppins',sans-serif] font-semibold text-lg mb-4 text-black">Quick Links</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><a href="#" className="hover:text-green-800 transition-colors">Home</a></li>
                  <li><a href="#" className="hover:text-green-800 transition-colors">New Arrivals</a></li>
                  <li><a href="#" className="hover:text-green-800 transition-colors">Catalog</a></li>
                  <li><a href="#" className="hover:text-green-800 transition-colors">Contact Us</a></li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="font-['Poppins',sans-serif] font-semibold text-lg mb-4 text-black">Contact</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <Mail className="w-4 h-4 mr-2" />
                    <a href="mailto:ssbkfdurga17@gmail.com" className="hover:text-green-800 transition-colors">
                      ssbkfdurga17@gmail.com
                    </a>
                  </li>
                  <li>Racan, Vadodara</li>
                  <li>Parul University</li>
                  <li>India</li>
                </ul>
              </div>

              {/* Follow Us */}
              <div>
                <h3 className="font-['Poppins',sans-serif] font-semibold text-lg mb-4 text-black">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-600 hover:text-green-800 transition-colors">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-green-800 transition-colors">
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-green-800 transition-colors">
                    <Facebook className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 mt-12 pt-8 text-center text-sm text-gray-500">
              © 2024 Racan. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
