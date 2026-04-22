import { Globe, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white px-8 py-4 border-t border-natural-border text-[10px] uppercase tracking-widest text-gray-500 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="font-medium">
        &copy; {new Date().getFullYear()} Mitti & Mudra Export Private Ltd.
      </div>
      <div className="text-center md:text-right font-light">
        All Prices in Indian Rupee (INR) &bull; Worldwide Delivery &bull; Fair Trade Certified
      </div>
    </footer>
  );
}

