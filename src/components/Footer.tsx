import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";

const emailSchema = z.string().trim().email({ message: "Invalid email address" }).max(255, { message: "Email must be less than 255 characters" });

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    
    const result = emailSchema.safeParse(email);
    
    if (!result.success) {
      toast.error(result.error.errors[0].message);
      return;
    }
    
    toast.success("Successfully subscribed to our newsletter!");
    setEmail("");
  };

  const footerLinks = {
    spices: [
      { name: "Pepper Powder", href: "#" },
      { name: "Pepper Cracks", href: "#" },
      { name: "Pepper Skin", href: "#" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms & Conditions", href: "#" },
    ],
    payment: [
      { name: "Terms of Use", href: "#" },
      { name: "Delivery Methods", href: "#" },
      { name: "Shipping Costs", href: "#" },
      { name: "Estimated Delivery Time", href: "#" },
      { name: "Terms Of Use", href: "#" },
        ],
  };

  const paymentMethods = [
    "Visa",
    "Mastercard",
    "PayPal",
    "Discover",
    "AmEx",
    "Stripe",
  ];

  return (
    <footer className="bg-slate-900 text-white py-12 px-4">
      <div className="container mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Spices Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Spices</h3>
            <ul className="space-y-2">
              {footerLinks.spices.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Payment & Shopping Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Payment & Shopping</h3>
            <ul className="space-y-2">
              {footerLinks.payment.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe Our Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe Our Newsletter to receive updates on daily articles, special offers and other discount information
            </p>
            
            {/* Newsletter Form */}
            <form onSubmit={handleSubscribe} className="mb-4">
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-gray-500"
                />
                <Button 
                  type="submit"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-6"
                >
                  SEND
                </Button>
              </div>
            </form>

            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-gray-400">
                <Mail className="w-4 h-4" />
                <span>diploma@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              © Copyright 2021 - YourWebsite All rights Reserved
            </p>

            {/* Payment methods */}
            <div className="flex gap-3">
              {paymentMethods.map((method, index) => (
                <div
                  key={index}
                  className="bg-white text-slate-900 px-3 py-1 rounded text-xs font-semibold"
                >
                  {method}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
