// // import { StudentSidebar } from "@/components/StudentSidebar";
// import  StatCard  from "@/components/StatCard";
// // import { ProgressRing } from "@/components/ProgressRing";
// import { Button } from "@/components/ui/button";
// import { 
//   Utensils, 
//   TrendingUp, 
//   Heart, 
//   Calendar,
//   ArrowRight,
//   Bell,
//   MessageSquare
// } from "lucide-react";
// import studentAvatar from "@/assets/student-avatar-1.jpg";

// const recentDonations = [
//   { id: 1, donor: "Anonymous", amount: 15000, date: "Today", message: "Keep pushing forward! 💪" },
//   { id: 2, donor: "Marie Dupont", amount: 25000, date: "Yesterday", message: "Education is the key to success!" },
//   { id: 3, donor: "Jean-Paul M.", amount: 10000, date: "2 days ago", message: null },
// ];

// const mealHistory = [
//   { id: 1, location: "University Cafeteria", amount: 1500, date: "Today, 12:30 PM" },
//   { id: 2, location: "Campus Restaurant", amount: 2000, date: "Yesterday, 1:00 PM" },
//   { id: 3, location: "University Cafeteria", amount: 1500, date: "2 days ago, 12:45 PM" },
// ];

// export default function StudentDashboard() {
//   const mealBalance = 45000;
//   const monthlyGoal = 60000;

//   return (
//     <div className="flex min-h-screen w-full bg-background">
//       {/* <StudentSidebar /> */}
      
//       <main className="flex-1 p-8 overflow-auto">
//         {/* Header */}
//         <header className="flex items-center justify-between mb-8 animate-fade-in">
//           <div>
//             <h1 className="text-3xl font-display font-bold text-foreground mb-1">
//               Welcome back, Amina! 👋
//             </h1>
//             <p className="text-muted-foreground">
//               Here's your meal support overview for this month
//             </p>
//           </div>
          
//           <div className="flex items-center gap-4">
//             <Button variant="ghost" size="icon" className="relative">
//               <Bell className="w-5 h-5" />
//               <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full text-[10px] text-primary-foreground flex items-center justify-center">
//                 3
//               </span>
//             </Button>
//             {/* <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary shadow-soft">
//               <img 
//                 src={studentAvatar} 
//                 alt="Student profile" 
//                 className="w-full h-full object-cover"
//               />
//             </div> */}
//           </div>
//         </header>

//         {/* Stats Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//           <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
//             <StatCard
//               title="Meal Balance"
//               value={`${mealBalance.toLocaleString()} XAF`}
//               subtitle="Available for meals"
//               icon={Utensils}
//               variant="primary"
//             />
//           </div>
//           <div className="animate-fade-in" style={{ animationDelay: "0.15s" }}>
//             <StatCard
//               title="Meals This Month"
//               value="18"
//               subtitle="3 remaining this week"
//               icon={Calendar}
//               trend={{ value: 12, isPositive: true }}
//             />
//           </div>
//           <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
//             <StatCard
//               title="Total Received"
//               value={`${(125000).toLocaleString()} XAF`}
//               subtitle="Since joining"
//               icon={TrendingUp}
//               variant="secondary"
//             />
//           </div>
//           <div className="animate-fade-in" style={{ animationDelay: "0.25s" }}>
//             <StatCard
//               title="Donors Supporting You"
//               value="7"
//               subtitle="Active supporters"
//               icon={Heart}
//             />
//           </div>
//         </div>

//         {/* Main Content Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Monthly Progress */}
//           <div className="dashboard-section animate-fade-in" style={{ animationDelay: "0.3s" }}>
//             <h2 className="text-lg font-semibold text-foreground mb-6">Monthly Goal</h2>
//             <div className="flex flex-col items-center">
//               {/* <ProgressRing value={mealBalance} max={monthlyGoal} size={180} strokeWidth={12}>
//                 <div className="text-center">
//                   <p className="text-3xl font-bold text-foreground">
//                     {Math.round((mealBalance / monthlyGoal) * 100)}%
//                   </p>
//                   <p className="text-sm text-muted-foreground">of goal</p>
//                 </div>
//               </ProgressRing> */}
//               <div className="mt-6 text-center">
//                 <p className="text-sm text-muted-foreground mb-1">
//                   {mealBalance.toLocaleString()} / {monthlyGoal.toLocaleString()} XAF
//                 </p>
//                 <p className="text-sm text-secondary font-medium">
//                   {(monthlyGoal - mealBalance).toLocaleString()} XAF needed
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Recent Donations */}
//           <div className="lg:col-span-2 dashboard-section animate-fade-in" style={{ animationDelay: "0.35s" }}>
//             <div className="flex items-center justify-between mb-6">
//               <h2 className="text-lg font-semibold text-foreground">Recent Support</h2>
//               <Button variant="ghost" size="sm" className="text-primary">
//                 View all <ArrowRight className="w-4 h-4 ml-1" />
//               </Button>
//             </div>
//             <div className="space-y-4">
//               {recentDonations.map((donation, index) => (
//                 <div 
//                   key={donation.id}
//                   className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
//                   style={{ animationDelay: `${0.4 + index * 0.05}s` }}
//                 >
//                   <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
//                     <Heart className="w-5 h-5 text-primary" />
//                   </div>
//                   <div className="flex-1">
//                     <div className="flex items-center justify-between mb-1">
//                       <p className="font-medium text-foreground">{donation.donor}</p>
//                       <span className="text-sm text-muted-foreground">{donation.date}</span>
//                     </div>
//                     <div className="flex items-center justify-between">
//                       <p className="text-sm text-secondary font-semibold">
//                         +{donation.amount.toLocaleString()} XAF
//                       </p>
//                       {donation.message && (
//                         <p className="text-sm text-muted-foreground italic truncate max-w-[200px]">
//                           "{donation.message}"
//                         </p>
//                       )}
//                     </div>
//                   </div>
//                   <Button variant="ghost" size="icon">
//                     <MessageSquare className="w-4 h-4 text-muted-foreground" />
//                   </Button>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Meal History */}
//         <div className="dashboard-section mt-8 animate-fade-in" style={{ animationDelay: "0.5s" }}>
//           <div className="flex items-center justify-between mb-6">
//             <h2 className="text-lg font-semibold text-foreground">Recent Meals</h2>
//             <Button variant="ghost" size="sm" className="text-primary">
//               View history <ArrowRight className="w-4 h-4 ml-1" />
//             </Button>
//           </div>
//           <div className="overflow-x-auto">
//             <table className="w-full">
//               <thead>
//                 <tr className="border-b border-border">
//                   <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Location</th>
//                   <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Amount</th>
//                   <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Date & Time</th>
//                   <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Status</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {mealHistory.map((meal) => (
//                   <tr key={meal.id} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
//                     <td className="py-4 px-4">
//                       <div className="flex items-center gap-3">
//                         <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
//                           <Utensils className="w-4 h-4 text-primary" />
//                         </div>
//                         <span className="font-medium text-foreground">{meal.location}</span>
//                       </div>
//                     </td>
//                     <td className="py-4 px-4 text-foreground">{meal.amount.toLocaleString()} XAF</td>
//                     <td className="py-4 px-4 text-muted-foreground">{meal.date}</td>
//                     <td className="py-4 px-4 textright">
//                       <span className="badge-forest">Completed</span>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Quick Actions */}
//         <div className="mt-8 p-6 rounded-2xl bg-gradient-hero text-primary-foreground animate-fade-in" style={{ animationDelay: "0.55s" }}>
//           <div className="flex items-center justify-between">
//             <div>
//               <h3 className="text-xl font-display font-semibold mb-2">
//                 Want to thank your supporters?
//               </h3>
//               <p className="text-primary-foreground/80">
//                 Send a heartfelt message to the donors who've helped you stay nourished.
//               </p>
//             </div>
//             <Button 
//               variant="outline" 
//               size="lg"
//               className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
//             >
//               <Heart className="w-5 h-5 mr-2" />
//               Thank Donors
//             </Button>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }
