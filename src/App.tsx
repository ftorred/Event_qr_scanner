/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  UserCircle, 
  Bell, 
  Users, 
  Ticket, 
  QrCode, 
  PlusCircle, 
  Calendar, 
  MapPin, 
  Home, 
  BarChart3, 
  Settings,
  Search
} from 'lucide-react';
import { motion } from 'motion/react';

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  change: string;
}

const StatCard = ({ icon, label, value, change }: StatCardProps) => (
  <div className="flex flex-col gap-2 rounded-xl p-5 bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700">
    <div className="flex items-center justify-between">
      <div className="text-primary bg-primary/10 p-1.5 rounded-lg">
        {icon}
      </div>
      <span className="text-emerald-500 text-xs font-bold">{change}</span>
    </div>
    <div>
      <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">{label}</p>
      <p className="text-slate-900 dark:text-slate-100 text-2xl font-bold mt-1">{value}</p>
    </div>
  </div>
);

interface EventCardProps {
  image: string;
  title: string;
  date: string;
  location: string;
  status: 'ACTIVE' | 'DRAFT' | 'SELLING';
  progress: string;
  opacity?: string;
}

const EventCard = ({ image, title, date, location, status, progress, opacity = "opacity-100" }: EventCardProps) => {
  const statusStyles = {
    ACTIVE: "bg-primary/10 text-primary",
    DRAFT: "bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400",
    SELLING: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400"
  };

  return (
    <div className={`flex items-center gap-4 p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm ${opacity}`}>
      <div className="size-16 rounded-lg bg-slate-200 dark:bg-slate-700 overflow-hidden shrink-0">
        <img 
          className="h-full w-full object-cover" 
          src={image} 
          alt={title}
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-slate-900 dark:text-slate-100 font-bold truncate">{title}</h3>
        <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400 text-xs mt-1">
          <Calendar size={14} />
          <span>{date}</span>
        </div>
        <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400 text-xs">
          <MapPin size={14} />
          <span className="truncate">{location}</span>
        </div>
      </div>
      <div className="flex flex-col items-end gap-1">
        <span className={`${statusStyles[status]} text-[10px] px-2 py-0.5 rounded-full font-bold uppercase`}>
          {status}
        </span>
        <span className="text-slate-900 dark:text-slate-100 text-sm font-bold">{progress}</span>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden pb-24 dark">
      {/* Header */}
      <header className="sticky top-0 z-10 flex items-center bg-background-light/80 dark:bg-background-dark/80 ios-blur p-4 justify-between border-b border-slate-200 dark:border-slate-800">
        <div className="flex size-10 shrink-0 items-center">
          <div className="bg-primary/20 flex items-center justify-center rounded-full size-10 border border-primary/30">
            <UserCircle className="text-primary" size={24} />
          </div>
        </div>
        <div className="flex-1 px-3">
          <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Welcome back,</p>
          <h1 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight">Alex Rivera</h1>
        </div>
        <div className="flex gap-2">
          <button className="flex size-10 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
            <Bell size={20} />
          </button>
        </div>
      </header>

      <main className="flex flex-col gap-6 p-4">
        {/* Overview Section */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold tracking-tight">Overview</h2>
            <button className="text-primary text-sm font-semibold">View Insights</button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <StatCard 
              icon={<Users size={20} />} 
              label="Total Attendees" 
              value="1,240" 
              change="+12%" 
            />
            <StatCard 
              icon={<Ticket size={20} />} 
              label="Tickets Sold" 
              value="850" 
              change="+5%" 
            />
          </div>
        </section>

        {/* Quick Actions Section */}
        <section>
          <h2 className="text-xl font-bold tracking-tight mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-3">
            <motion.button 
              whileTap={{ scale: 0.95 }}
              className="flex flex-col gap-3 rounded-xl border border-primary/20 bg-primary/5 p-4 items-start transition-transform"
            >
              <div className="bg-primary text-white rounded-lg p-2 flex items-center justify-center">
                <QrCode size={24} />
              </div>
              <span className="text-slate-900 dark:text-slate-100 text-sm font-bold">Scan Tickets</span>
            </motion.button>
            <motion.button 
              whileTap={{ scale: 0.95 }}
              className="flex flex-col gap-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-4 items-start transition-transform"
            >
              <div className="bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-lg p-2 flex items-center justify-center">
                <PlusCircle size={24} />
              </div>
              <span className="text-slate-900 dark:text-slate-100 text-sm font-bold">New Event</span>
            </motion.button>
          </div>
        </section>

        {/* Upcoming Events Section */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold tracking-tight">Upcoming Events</h2>
            <button className="text-primary text-sm font-semibold">See all</button>
          </div>
          <div className="flex flex-col gap-3">
            <EventCard 
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuAujMNFyT-CwseSUsBh-P4ibnPEqtEAM-HB-o23slVJCGvjFa4DVhWG4gjhT2fMGB5rMx4_tvm9Oj5KAqgVV9c9SWLkG1EFCuUG9PJr0sbbNRd3_5rHsz8K7-bWd51v4nWmEVb6QW2YFesiu9XIXEh8JYV4G7mWJUKi-FZSdqJQekaWHRoOVSpBaJfiwjnZgHi7IGSOm4Refp51JbUgxgxkfAa45XCv7ST7C9ld_s5SsAjhVpJ-gX0aFzO002o8rRUAseacP_RpjOM"
              title="Tech Summit 2024"
              date="Oct 24 • 09:00 AM"
              location="Convention Center, NY"
              status="ACTIVE"
              progress="412/500"
            />
            <EventCard 
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuD8Kr7EySEeyRfh-xi0ZMvB6RqpgMnZRivU2Eu4mFPE6kCACsOVslb-eP13y7WaRrlfms_klPWPYIUegB4y1ho6zqkTbwYXxhD0-q0gBizetISCjOaXc3MYi8BWLUkS6mDbvFmzG4TP5ZAV-0TQOPpTx8mO9NiiULk3iuL66ZIwDK5YEuLAlk_gZIZRJnec6675eETthapdoiuLXcIQy2mNIiTKFlZvO8SJcblxiQT6QVP2OuY6U5mtybos6WVaL86f29P35DhqZio"
              title="Summer Vibes Fest"
              date="Nov 02 • 04:00 PM"
              location="Riverside Park, TX"
              status="DRAFT"
              progress="0/1200"
            />
            <EventCard 
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuANfIJVa9pIyO60XFwxX7q1VTthUT3yhhOT8gQ-knq1z2Um0gU-Qi6X75ZrUNPo464WUvkmlmyO4fYWmpD8lxrsJonoHA3gwjk2Sq2-G034V6oBONwt-GuE1nT-pI7SB2vQjWhahfzb4guTtYZ1QEisihq3yzLliT1eCWBHi4_4JFjX1pcIVH5FNzrK4voxsXGIJq32bRfqywi9jB4aduoTTX836l7H7TgsusL7f5jfuBSqe8s6pXT56Hwx7N9lvRbXXo5bcmYe6vk"
              title="Startup Workshop"
              date="Nov 15 • 10:00 AM"
              location="Innovation Hub, CA"
              status="SELLING"
              progress="88/150"
              opacity="opacity-80"
            />
          </div>
        </section>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-20 border-t border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 ios-blur px-4 pb-8 pt-2">
        <div className="flex justify-around items-center">
          <a className="flex flex-col items-center gap-1 text-primary" href="#">
            <div className="flex h-8 items-center justify-center">
              <Home size={24} />
            </div>
            <p className="text-[10px] font-bold leading-normal">Home</p>
          </a>
          <a className="flex flex-col items-center gap-1 text-slate-400 dark:text-slate-500" href="#">
            <div className="flex h-8 items-center justify-center">
              <Calendar size={24} />
            </div>
            <p className="text-[10px] font-medium leading-normal">Events</p>
          </a>
          <a className="flex flex-col items-center gap-1 text-slate-400 dark:text-slate-500" href="#">
            <div className="flex h-8 items-center justify-center -mt-8 size-14 rounded-full bg-primary text-white shadow-lg shadow-primary/40 border-4 border-background-light dark:border-background-dark">
              <QrCode size={28} />
            </div>
            <p className="text-[10px] font-medium leading-normal">Scan</p>
          </a>
          <a className="flex flex-col items-center gap-1 text-slate-400 dark:text-slate-500" href="#">
            <div className="flex h-8 items-center justify-center">
              <BarChart3 size={24} />
            </div>
            <p className="text-[10px] font-medium leading-normal">Reports</p>
          </a>
          <a className="flex flex-col items-center gap-1 text-slate-400 dark:text-slate-500" href="#">
            <div className="flex h-8 items-center justify-center">
              <Settings size={24} />
            </div>
            <p className="text-[10px] font-medium leading-normal">Settings</p>
          </a>
        </div>
      </nav>
    </div>
  );
}
