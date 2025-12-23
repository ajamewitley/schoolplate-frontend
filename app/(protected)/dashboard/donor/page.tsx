// // import { DonorSidebar } from "@/components/DonorSidebar";
// import  StatCard  from "@/components/StatCard";
// import { Button } from "@/components/ui/button";
// import { 
//   Heart, 
//   Users, 
//   TrendingUp, 
//   Target,
//   ArrowRight,
//   Bell,
//   Gift,
//   Trophy,
//   Star
// } from "lucide-react";
// import donorAvatar from "@/assets/donor-avatar-1.jpg";
// import studentAvatar1 from "@/assets/student-avatar-1.jpg";
// import studentAvatar2 from "@/assets/student-avatar-2.jpg";

// const studentsHelped = [
//   { id: 1, name: "Amina Bello", university: "University of Yaoundé I", mealsProvided: 24, avatar: studentAvatar1 },
//   { id: 2, name: "Emmanuel Ngono", university: "University of Buea", mealsProvided: 18, avatar: studentAvatar2 },
//   { id: 3, name: "Grace Fouda", university: "University of Douala", mealsProvided: 12, avatar: studentAvatar1 },
// ];

// const recentDonations = [
//   { id: 1, student: "Amina Bello", amount: 25000, date: "Today" },
//   { id: 2, student: "Emmanuel Ngono", amount: 15000, date: "Yesterday" },
//   { id: 3, student: "Grace Fouda", amount: 20000, date: "3 days ago" },
// ];

// const leaderboard = [
//   { rank: 1, name: "Dr. Ekane Joseph", donations: 850000, badge: "🥇" },
//   { rank: 2, name: "Marie Fotso", donations: 720000, badge: "🥈" },
//   { rank: 3, name: "You", donations: 485000, badge: "🥉", isCurrentUser: true },
//   { rank: 4, name: "Paul Mbarga", donations: 450000 },
//   { rank: 5, name: "Sarah Nkeng", donations: 380000 },
// ];

// export default function DonorDashboard() {
//   const totalDonated = 485000;
//   const studentsSupported = 12;
//   const mealsProvided = 89;

//   return (
//     <div className="flex min-h-screen w-full bg-background">
//       {/* <DonorSidebar /> */}
      
//       <main className="flex-1 p-8 overflow-auto">
//         {/* Header */}
//         <header className="flex items-center justify-between mb-8 animate-fade-in">
//           <div>
//             <h1 className="text-3xl font-display font-bold text-foreground mb-1">
//               Welcome back, Jean-Pierre! 🌟
//             </h1>
//             <p className="text-muted-foreground">
//               Your generosity is making a real difference in students' lives
//             </p>
//           </div>
          
//           <div className="flex items-center gap-4">
//             <Button variant="ghost" size="icon" className="relative">
//               <Bell className="w-5 h-5" />
//               <span className="absolute -top-1 -right-1 w-4 h-4 bg-secondary rounded-full text-[10px] text-secondary-foreground flex items-center justify-center">
//                 2
//               </span>
//             </Button>
//             {/* <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-secondary shadow-soft">
//               <img 
//                 src={donorAvatar} 
//                 alt="Donor profile" 
//                 className="w-full h-full object-cover"
//               />
//             </div> */}
//           </div>
//         </header>

//         {/* Quick Donate CTA */}
//         <div 
//           className="mb-8 p-6 rounded-2xl bg-gradient-forest text-secondary-foreground animate-fade-in"
//           style={{ animationDelay: "0.05s" }}
//         >
//           <div className="flex items-center justify-between">
//             <div>
//               <h3 className="text-xl font-display font-semibold mb-2">
//                 Make an Impact Today
//               </h3>
//               <p className="text-secondary-foreground/80">
//                 Every donation provides nutritious meals to help students focus on their education.
//               </p>
//             </div>
//             <Button 
//               variant="outline" 
//               size="lg"
//               className="bg-secondary-foreground/10 border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary"
//             >
//               <Gift className="w-5 h-5 mr-2" />
//               Donate Now
//             </Button>
//           </div>
//         </div>

//         {/* Stats Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//           <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
//             <StatCard
//               title="Total Donated"
//               value={`${totalDonated.toLocaleString()} XAF`}
//               subtitle="Lifetime contribution"
//               icon={Heart}
//               variant="secondary"
//             />
//           </div>
//           <div className="animate-fade-in" style={{ animationDelay: "0.15s" }}>
//             <StatCard
//               title="Students Supported"
//               value={studentsSupported}
//               subtitle="Across 5 universities"
//               icon={Users}
//               trend={{ value: 25, isPositive: true }}
//             />
//           </div>
//           <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
//             <StatCard
//               title="Meals Provided"
//               value={mealsProvided}
//               subtitle="This year"
//               icon={TrendingUp}
//               variant="primary"
//             />
//           </div>
//           <div className="animate-fade-in" style={{ animationDelay: "0.25s" }}>
//             <StatCard
//               title="Impact Score"
//               value="A+"
//               subtitle="Top 5% of donors"
//               icon={Target}
//             />
//           </div>
//         </div>

//         {/* Main Content Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Students Helped */}
//           <div className="lg:col-span-2 dashboard-section animate-fade-in" style={{ animationDelay: "0.3s" }}>
//             <div className="flex items-center justify-between mb-6">
//               <h2 className="text-lg font-semibold text-foreground">Students You're Helping</h2>
//               <Button variant="ghost" size="sm" className="text-secondary">
//                 View all <ArrowRight className="w-4 h-4 ml-1" />
//               </Button>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//               {studentsHelped.map((student, index) => (
//                 <div 
//                   key={student.id}
//                   className="p-4 rounded-xl bg-muted/50 hover:bg-muted transition-all hover:shadow-card group cursor-pointer"
//                   style={{ animationDelay: `${0.35 + index * 0.05}s` }}
//                 >
//                   <div className="flex flex-col items-center text-center">
//                     {/* <div className="w-16 h-16 rounded-full overflow-hidden mb-3 ring-2 ring-secondary/20 group-hover:ring-secondary transition-colors">
//                       <img 
//                         src={student.avatar} 
//                         alt={student.name} 
//                         className="w-full h-full object-cover"
//                       />
//                     </div> */}
//                     <h3 className="font-medium text-foreground mb-1">{student.name}</h3>
//                     <p className="text-xs text-muted-foreground mb-2">{student.university}</p>
//                     <span className="badge-forest text-xs">
//                       {student.mealsProvided} meals
//                     </span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Leaderboard */}
//           <div className="dashboard-section animate-fade-in" style={{ animationDelay: "0.4s" }}>
//             <div className="flex items-center gap-2 mb-6">
//               <Trophy className="w-5 h-5 text-amber" />
//               <h2 className="text-lg font-semibold text-foreground">Top Donors</h2>
//             </div>
//             <div className="space-y-3">
//               {leaderboard.map((donor) => (
//                 <div 
//                   key={donor.rank}
//                   className={`flex items-center gap-3 p-3 rounded-xl transition-colors ${
//                     donor.isCurrentUser 
//                       ? "bg-accent border border-primary/20" 
//                       : "hover:bg-muted/50"
//                   }`}
//                 >
//                   <span className="text-lg w-8 text-center">
//                     {donor.badge || `#${donor.rank}`}
//                   </span>
//                   <div className="flex-1">
//                     <p className={`font-medium ${donor.isCurrentUser ? "text-primary" : "text-foreground"}`}>
//                       {donor.name}
//                     </p>
//                     <p className="text-xs text-muted-foreground">
//                       {donor.donations.toLocaleString()} XAF
//                     </p>
//                   </div>
//                   {donor.isCurrentUser && (
//                     <Star className="w-4 h-4 text-primary animate-pulse-soft" />
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Recent Donations */}
//         <div className="dashboard-section mt-8 animate-fade-in" style={{ animationDelay: "0.5s" }}>
//           <div className="flex items-center justify-between mb-6">
//             <h2 className="text-lg font-semibold text-foreground">Recent Donations</h2>
//             <Button variant="ghost" size="sm" className="text-secondary">
//               View history <ArrowRight className="w-4 h-4 ml-1" />
//             </Button>
//           </div>
//           <div className="overflow-x-auto">
//             <table className="w-full">
//               <thead>
//                 <tr className="border-b border-border">
//                   <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Student</th>
//                   <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Amount</th>
//                   <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Date</th>
//                   <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Status</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {recentDonations.map((donation) => (
//                   <tr key={donation.id} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
//                     <td className="py-4 px-4">
//                       <div className="flex items-center gap-3">
//                         <div className="w-8 h-8 rounded-full bg-forest-light flex items-center justify-center">
//                           <Heart className="w-4 h-4 text-secondary" />
//                         </div>
//                         <span className="font-medium text-foreground">{donation.student}</span>
//                       </div>
//                     </td>
//                     <td className="py-4 px-4 text-secondary font-semibold">
//                       {donation.amount.toLocaleString()} XAF
//                     </td>
//                     <td className="py-4 px-4 text-muted-foreground">{donation.date}</td>
//                     <td className="py-4 px-4 text-right">
//                       <span className="badge-forest">Delivered</span>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Thank You Messages */}
//         <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div 
//             className="dashboard-section animate-fade-in" 
//             style={{ animationDelay: "0.55s" }}
//           >
//             <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
//               <Heart className="w-5 h-5 text-primary" />
//               Latest Thank You
//             </h3>
//             <div className="bg-accent/50 rounded-xl p-4">
//               <div className="flex items-start gap-3">
//                 {/* <img 
//                   src={studentAvatar1} 
//                   alt="Student" 
//                   className="w-10 h-10 rounded-full object-cover"
//                 /> */}
//                 <div>
//                   <p className="font-medium text-foreground mb-1">Amina Bello</p>
//                   <p className="text-sm text-muted-foreground italic">
//                     "Thank you so much for your generosity! Because of your support, I was able to focus on my exams without worrying about food. You're making a real difference! 🙏"
//                   </p>
//                   <p className="text-xs text-muted-foreground mt-2">2 hours ago</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div 
//             className="dashboard-section animate-fade-in" 
//             style={{ animationDelay: "0.6s" }}
//           >
//             <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
//               <Trophy className="w-5 h-5 text-amber" />
//               Your Achievement
//             </h3>
//             <div className="bg-amber-light rounded-xl p-4 text-center">
//               <div className="text-4xl mb-2">🏆</div>
//               <h4 className="font-display font-semibold text-foreground mb-1">Champion of Hope</h4>
//               <p className="text-sm text-muted-foreground">
//                 Awarded for supporting 10+ students in their educational journey
//               </p>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }
