
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Briefcase,
  Users,
  DollarSign,
  Star,
  TrendingUp,
  Clock,
} from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
  trend?: {
    value: string;
    positive: boolean;
  };
}

const StatsCard = ({ title, value, description, icon, trend }: StatsCardProps) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between pb-2">
      <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
      <div className="h-8 w-8 rounded-lg bg-brand-100 p-1.5 text-brand-600">
        {icon}
      </div>
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
      <p className="text-xs text-muted-foreground mt-1">{description}</p>
    </CardContent>
    {trend && (
      <CardFooter className="p-2 pt-0">
        <div
          className={`flex items-center text-xs ${
            trend.positive ? "text-green-600" : "text-red-600"
          }`}
        >
          <TrendingUp size={14} className="mr-1" />
          <span>{trend.value} from last month</span>
        </div>
      </CardFooter>
    )}
  </Card>
);

interface DashboardStatsProps {
  userRole: "influencer" | "freelancer";
}

const DashboardStats = ({ userRole }: DashboardStatsProps) => {
  const influencerStats = [
    {
      title: "Active Jobs",
      value: "3",
      description: "Currently open positions",
      icon: <Briefcase className="h-5 w-5" />,
    },
    {
      title: "Applications",
      value: "28",
      description: "Across all active jobs",
      icon: <Users className="h-5 w-5" />,
      trend: {
        value: "+12%",
        positive: true,
      },
    },
    {
      title: "Total Spent",
      value: "$4,385",
      description: "On completed projects",
      icon: <DollarSign className="h-5 w-5" />,
    },
    {
      title: "Avg. Rating",
      value: "4.8",
      description: "From 12 completed projects",
      icon: <Star className="h-5 w-5" />,
    },
  ];

  const freelancerStats = [
    {
      title: "Jobs Applied",
      value: "18",
      description: "In the last 30 days",
      icon: <Briefcase className="h-5 w-5" />,
    },
    {
      title: "Active Projects",
      value: "4",
      description: "Currently in progress",
      icon: <Clock className="h-5 w-5" />,
    },
    {
      title: "Total Earned",
      value: "$6,490",
      description: "Lifetime earnings",
      icon: <DollarSign className="h-5 w-5" />,
      trend: {
        value: "+23%",
        positive: true,
      },
    },
    {
      title: "Client Rating",
      value: "4.9",
      description: "From 16 completed jobs",
      icon: <Star className="h-5 w-5" />,
    },
  ];

  const stats = userRole === "influencer" ? influencerStats : freelancerStats;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <StatsCard key={index} {...stat} />
      ))}
    </div>
  );
};

export default DashboardStats;
