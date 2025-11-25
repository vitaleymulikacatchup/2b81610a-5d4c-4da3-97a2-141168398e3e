"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboardCorners from '@/components/sections/hero/HeroBillboardCorners';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Coffee, Heart, Leaf, Flame, Users, Sparkles, Star, HelpCircle } from "lucide-react";

export default function LandingPage() {
  const handleContactForm = (data: Record<string, string>) => {
    console.log('Contact form submitted:', data);
  };

  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="large"
      background="radialGradient"
      cardStyle="glass-elevated"
      primaryButtonStyle="flat"
      secondaryButtonStyle="minimal"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="Brew Haven"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764083317327-toqqbu3f.jpg"
          logoAlt="Brew Haven Coffee Logo"
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Menu", id: "menu" },
            { name: "Reviews", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Order Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCorners
          title="Crafted Coffee, Crafted Moments"
          description="Experience the finest specialty coffee in a welcoming atmosphere. From single-origin beans to signature blends, every cup tells a story."
          tag="Premium Coffee Experience"
          tagIcon={Coffee}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764083318455-8r7znu14.jpg",
              imageAlt: "Fresh coffee latte art"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764083319420-kpeoa5s6.jpg",
              imageAlt: "Roasted coffee beans"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764083320641-o08ivvov.jpg",
              imageAlt: "Cozy coffeeshop interior"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764083321608-gek3p2du.jpg",
              imageAlt: "Skilled barista at work"
            }
          ]}
          buttons={[
            { text: "Explore Menu", href: "menu" },
            { text: "Visit Us", href: "contact" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Our Coffee Story"
          description="Since 2015, Brew Haven has been dedicated to bringing the world's finest coffee to our community. We source directly from ethical, sustainable farms and roast every batch to perfection."
          tag="About Brew Haven"
          tagIcon={Heart}
          bulletPoints={[
            {
              title: "Ethical Sourcing",
              description: "Direct relationships with coffee farmers ensuring fair prices and sustainable practices",
              icon: Leaf
            },
            {
              title: "Expert Roasting",
              description: "Small-batch roasting brings out unique flavor profiles in every origin",
              icon: Flame
            },
            {
              title: "Community Focused",
              description: "A gathering place where connections are made over exceptional coffee",
              icon: Users
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764083323538-ts44cmv1.jpg"
          imageAlt="Coffee shop owner with passion"
          imagePosition="right"
          textboxLayout="split"
          buttons={[
            { text: "Learn More", href: "contact" }
          ]}
        />
      </div>

      <div id="menu" data-section="menu">
        <FeatureCardOne
          title="Our Signature Selection"
          description="Explore our carefully curated menu of premium coffee drinks, each crafted with precision and passion by our expert baristas."
          tag="Menu Highlights"
          tagIcon={Sparkles}
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          features={[
            {
              title: "Classic Espresso",
              description: "Bold, rich, and perfectly pulled. Our foundation for all espresso-based drinks made from single-origin beans.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764083324657-bmrj41nr.jpg",
              imageAlt: "Espresso shot"
            },
            {
              title: "Creamy Cappuccino",
              description: "Equal parts espresso, steamed milk, and velvety microfoam. A timeless favorite that never disappoints.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764083325569-76vx5t5n.jpg",
              imageAlt: "Cappuccino with latte art"
            },
            {
              title: "Rich Americano",
              description: "Espresso shots diluted with hot water, creating a smooth and satisfying full-bodied coffee experience.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764083327055-c3xv2iz3.jpg",
              imageAlt: "Black americano coffee"
            },
            {
              title: "Decadent Mocha",
              description: "Espresso meets premium chocolate and steamed milk. A perfect indulgence for chocolate coffee lovers.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764083328096-7ibbsf1b.jpg",
              imageAlt: "Mocha with chocolate"
            },
            {
              title: "Cold Brew",
              description: "Smooth, naturally sweet, and refreshing. Steeped overnight for the perfect cold coffee beverage.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764083329170-g7vp354t.jpg",
              imageAlt: "Cold brew iced coffee"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="Love from Our Community"
          description="Hear from the coffee lovers who make Brew Haven their daily destination."
          tag="Customer Reviews"
          tagIcon={Star}
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Local Business Owner",
              testimonial: "The best coffee in the city! Every visit is a treat. The baristas know their craft and the atmosphere is perfect for working or meeting friends.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764083330182-yo4vkms3.jpg",
              imageAlt: "Sarah Johnson portrait"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Coffee Enthusiast",
              testimonial: "I've visited cafes around the world and Brew Haven stands among the best. Their single-origin selections are exceptional.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764083331232-aqczu2fm.jpg",
              imageAlt: "Michael Chen portrait"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Regular Customer",
              testimonial: "This is my morning ritual. The quality is consistent, the people are friendly, and the coffee speaks for itself. Highly recommended!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764083332335-8i4tjr7g.jpg",
              imageAlt: "Emily Rodriguez portrait"
            },
            {
              id: "4",
              name: "David Park",
              role: "Freelance Writer",
              testimonial: "Perfect spot to work. Great coffee, reliable WiFi, and a welcoming community. I practically live here three days a week.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764083333438-w57ugd2w.jpg",
              imageAlt: "David Park portrait"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Find answers to your questions about our coffee, services, and shop."
          tag="Help Center"
          tagIcon={HelpCircle}
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What coffee beans do you use?",
              content: "We source specialty-grade coffee beans directly from sustainable farms around the world. Each month we feature different single-origin beans and maintain our signature blends year-round."
            },
            {
              id: "2",
              title: "Do you offer dairy-free options?",
              content: "Yes! We offer oat milk, almond milk, soy milk, and coconut milk as alternatives to dairy. Our baristas are happy to customize any drink to your preferences."
            },
            {
              id: "3",
              title: "Can I order online for pickup?",
              content: "Absolutely. You can order through our website or call ahead, and we'll have your order ready for pickup. Visit our contact page for ordering details."
            },
            {
              id: "4",
              title: "What are your hours?",
              content: "We're open Monday to Friday 6am-8pm, Saturday 7am-9pm, and Sunday 7am-6pm. Holidays may vary - check our social media for updates."
            },
            {
              id: "5",
              title: "Do you provide WiFi?",
              content: "Yes, we have free high-speed WiFi for all customers. Perfect for working, studying, or just browsing. No password needed."
            },
            {
              id: "6",
              title: "Can I host private events?",
              content: "We love hosting private coffee tastings and small events. Contact us directly to discuss your needs and availability."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Get In Touch"
          description="Have a question or ready to visit? We'd love to hear from you. Drop us a message and we'll respond promptly."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Your Email",
              required: true
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us what you think or ask a question...",
            rows: 5,
            required: true
          }}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764083334681-m2s47ghk.jpg"
          imageAlt="Brew Haven storefront"
          mediaPosition="right"
          buttonText="Send Message"
          onSubmit={handleContactForm}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764083317327-toqqbu3f.jpg"
          logoWidth={32}
          logoHeight={32}
          copyrightText="© 2025 Brew Haven. All rights reserved."
          columns={[
            {
              title: "Menu",
              items: [
                { label: "Coffee Selection", href: "menu" },
                { label: "Seasonal Drinks", href: "menu" },
                { label: "Pastries", href: "contact" }
              ]
            },
            {
              title: "Connect",
              items: [
                { label: "About Us", href: "about" },
                { label: "Instagram", href: "https://instagram.com" },
                { label: "Contact", href: "contact" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Privacy Policy", href: "https://example.com/privacy" },
                { label: "Terms & Conditions", href: "https://example.com/terms" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}