"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight, Check, Loader2, ChevronDown } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast, Toaster } from "sonner"; 

const servicesList = [
  "Web Development", "Mobile App", "AI & LLM Integration", 
  "UI/UX Design", "SaaS Architecture", "DevOps & Cloud",
];

const industries = [
  "Technology", "Finance", "Healthcare", "Education", "Retail", "Other",
];

export default function Contact() {
  // Form State
  const [formData, setFormData] = useState({
    name: "", email: "", industry: "", phone: "", details: "",
  });
  const [selectedServices, setSelectedServices] = useState([]);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Service Selection
  const toggleService = (service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  // --- TANSTACK QUERY MUTATION ---
  const mutation = useMutation({
    mutationFn: async (dataToSend) => {
      return await axios.post("/api/contact", dataToSend);
    },
    onSuccess: () => {
      // 1. Show Success Toast
      toast.success("Message sent successfully!", {
        description: "We'll be in touch within few hours.",
        className: "bg-green-500 border-none text-white", // Optional custom styling
      });

      // 2. Clear Form
      setFormData({ name: "", email: "", industry: "", phone: "", details: "" });
      setSelectedServices([]);
    },
    onError: (error) => {
      // 3. Show Error Toast
      console.error("Submission failed", error);
      toast.error("Something went wrong.", {
        description: "Please try again or email us directly at sales@sunnysoftwareinc.com",
        className: "bg-red-500 border-none text-white",
      });
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { ...formData, services: selectedServices };
    mutation.mutate(payload);
  };

  return (
    <section className="bg-[#0B0F19] min-h-screen pt-32 pb-24 px-6 md:px-12 font-sans relative overflow-hidden">
      
      {/* <Toaster position="top-center" richColors theme="dark" /> */}

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
          >
            Let’s start a <br />
              conversation.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-xl max-w-2xl"
          >
            Have a project in mind? We'd love to hear about it.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* LEFT COL: Contact Info */}
          <div className="lg:col-span-4 space-y-12">
            {/* Same Contact Details as before... */}
            <div>
              <h3 className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-4">Email Us</h3>
              <a href="mailto:sales@sunnysoftwareinc.com" className="flex items-center gap-3 text-2xl text-white font-medium hover:text-indigo-400 transition-colors group">
                <Mail size={24} className="text-indigo-500 group-hover:scale-110 transition-transform" />
                sales@sunnysoftwareinc.com
              </a>
            </div>
            {/* ... other contact info ... */}
             <div className="p-6 rounded-2xl bg-white/5 border border-white/10 mt-8">
               <div className="flex items-center gap-3 mb-2">
                 <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                 </span>
                 <span className="text-white font-bold">Accepting New Projects</span>
               </div>
            </div>
          </div>

          {/* RIGHT COL: Form */}
          <div className="lg:col-span-8">
            <motion.form 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              onSubmit={handleSubmit}
              className="space-y-8 bg-[#0F131F] p-8 md:p-12 rounded-3xl border border-white/5"
            >
              
              {mutation.isSuccess ? (
                <div className="flex flex-col items-center justify-center py-20 text-center animate-in fade-in zoom-in duration-500">
                   <div className="w-20 h-20 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center mb-6">
                      <Check size={40} />
                   </div>
                   <h3 className="text-3xl font-bold text-white mb-2">Message Sent!</h3>
                   <p className="text-slate-400">Check your inbox for a confirmation.</p>
                   <button 
                     onClick={() => mutation.reset()}
                     type="button"
                     className="mt-8 text-indigo-400 hover:text-white underline underline-offset-4"
                   >
                     Send another message
                   </button>
                </div>
              ) : (
                <>
                  {/* Row 1 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-400 ml-1">Your Name</label>
                      <input 
                        required name="name" type="text" placeholder="John Doe"
                        value={formData.name} onChange={handleChange}
                        className="w-full bg-[#0B0F19] border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-600"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-400 ml-1">Email Address</label>
                      <input 
                        required name="email" type="email" placeholder="john@company.com"
                        value={formData.email} onChange={handleChange}
                        className="w-full bg-[#0B0F19] border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-600"
                      />
                    </div>
                  </div>

                  {/* Row 2: Industry & Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2 relative">
                      <label className="text-sm font-medium text-slate-400 ml-1">Select Industry*</label>
                      <div className="relative">
                        <select 
                          required name="industry" value={formData.industry} onChange={handleChange}
                          className="w-full bg-[#0B0F19] border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all appearance-none cursor-pointer"
                        >
                          <option value="" disabled className="text-slate-500">Select an option</option>
                          {industries.map(ind => <option key={ind} value={ind} className="bg-[#0B0F19]">{ind}</option>)}
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" size={18} />
                      </div>
                    </div>

                    <div className="space-y-2 relative">
                      <label className="text-sm font-medium text-slate-400 ml-1">Phone*</label>
                      <input 
                        required name="phone" type="tel" placeholder="(+1) 000-0000"
                        value={formData.phone} onChange={handleChange}
                        className="w-full bg-[#0B0F19] border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-600"
                      />
                    </div>
                  </div>

                  {/* Row 4: Interests */}
                  <div className="space-y-3">
                    <label className="text-sm font-medium text-slate-400 ml-1">I'm interested in...</label>
                    <div className="flex flex-wrap gap-3">
                      {servicesList.map((service) => (
                        <button
                          key={service} type="button" onClick={() => toggleService(service)}
                          className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                            selectedServices.includes(service) ? "bg-indigo-600 text-white border-indigo-500" : "bg-white/5 text-slate-400 border-white/10 hover:bg-white/10 hover:text-white"
                          }`}
                        >
                          {service}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Row 5: Message */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400 ml-1">Project Details</label>
                    <textarea 
                      required name="details" rows={4} placeholder="Tell us about your project..."
                      value={formData.details} onChange={handleChange}
                      className="w-full bg-[#0B0F19] border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-600 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                <button 
  disabled={mutation.isPending}
  type="submit"
  className="group w-auto inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-md py-2 px-6 rounded-xl hover:bg-white/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
>
  {mutation.isPending ? (
      <> <Loader2 className="animate-spin" /> Sending... </>
  ) : (
      <> Send Message <ArrowUpRight className="text-md group-hover:rotate-45 transition-transform duration-300" /> </>
  )}
</button>
                </>
              )}

            </motion.form>
          </div>

        </div>
      </div>
    </section>
  );
}