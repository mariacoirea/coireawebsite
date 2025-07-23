
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, TrendingUp, Users, Target, Activity, Calendar, MessageSquare, Settings } from "lucide-react";

const CoireaDashboardMockup = () => {
  const metrics = [
    { label: "Team Alignment", value: "87%", trend: "+12%", icon: Users, color: "text-green-600" },
    { label: "Culture Health", value: "92%", trend: "+8%", icon: Activity, color: "text-blue-600" },
    { label: "Leadership Effectiveness", value: "78%", trend: "+15%", icon: Target, color: "text-purple-600" },
    { label: "Engagement Score", value: "85%", trend: "+5%", icon: TrendingUp, color: "text-orange-600" }
  ];

  const activities = [
    { title: "Weekly Team Pulse", status: "Completed", time: "2 hours ago" },
    { title: "Leadership Assessment", status: "In Progress", time: "1 day ago" },
    { title: "Culture Survey", status: "Scheduled", time: "Next week" },
    { title: "Coaching Session", status: "Upcoming", time: "Tomorrow" }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Dashboard Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8 space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-2xl sm:text-3xl font-display font-semibold text-primary mb-2">
            COIREA Dashboard
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Real-time insights into your organizational transformation
          </p>
        </div>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          <Badge variant="outline" className="text-xs sm:text-sm">Live Demo</Badge>
          <Badge variant="secondary" className="text-xs sm:text-sm">Interactive</Badge>
        </div>
      </div>

      {/* Mobile-First Dashboard Layout */}
      <div className="space-y-4 sm:space-y-6">
        {/* Metrics Grid - Mobile Optimized */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((metric, index) => (
            <Card key={index} className="p-4 sm:p-6 hover:shadow-md transition-all duration-300 border-0 bg-card/80 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className={`w-8 h-8 sm:w-10 sm:h-10 ${metric.color.replace('text-', 'bg-').replace('-600', '-100')} rounded-lg flex items-center justify-center`}>
                  <metric.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${metric.color}`} />
                </div>
                <span className={`text-xs sm:text-sm font-medium ${metric.color}`}>{metric.trend}</span>
              </div>
              <div className="space-y-1">
                <p className="text-xs sm:text-sm text-muted-foreground font-medium">{metric.label}</p>
                <p className="text-xl sm:text-2xl font-bold text-primary">{metric.value}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Dashboard Content - Mobile Stacked */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Main Chart Area - Mobile Full Width */}
          <div className="lg:col-span-2">
            <Card className="p-4 sm:p-6 border-0 bg-card/80 backdrop-blur-sm">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 space-y-2 sm:space-y-0">
                <h3 className="text-lg sm:text-xl font-display font-semibold text-primary">
                  Transformation Progress
                </h3>
                <div className="flex items-center space-x-2">
                  <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
                  <span className="text-xs sm:text-sm text-muted-foreground">Last 30 days</span>
                </div>
              </div>
              
              {/* Simplified Chart Visualization for Mobile */}
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm text-muted-foreground">Leadership Development</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 sm:w-32 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: '78%' }}></div>
                    </div>
                    <span className="text-xs sm:text-sm font-medium">78%</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm text-muted-foreground">Culture Alignment</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 sm:w-32 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-accent rounded-full" style={{ width: '92%' }}></div>
                    </div>
                    <span className="text-xs sm:text-sm font-medium">92%</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm text-muted-foreground">Team Engagement</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 sm:w-32 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-secondary rounded-full" style={{ width: '85%' }}></div>
                    </div>
                    <span className="text-xs sm:text-sm font-medium">85%</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Activities Sidebar - Mobile Full Width */}
          <div className="lg:col-span-1">
            <Card className="p-4 sm:p-6 border-0 bg-card/80 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-display font-semibold text-primary">
                  Recent Activities
                </h3>
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                {activities.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3 pb-3 sm:pb-4 border-b border-border/50 last:border-b-0">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs sm:text-sm font-medium text-foreground truncate">{activity.title}</p>
                      <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                      <Badge variant="outline" className="mt-2 text-xs">
                        {activity.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Quick Actions - Mobile Optimized */}
        <Card className="p-4 sm:p-6 border-0 bg-card/80 backdrop-blur-sm">
          <h3 className="text-lg sm:text-xl font-display font-semibold text-primary mb-4 sm:mb-6">
            Quick Actions
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            <button className="flex flex-col items-center space-y-2 p-3 sm:p-4 rounded-lg hover:bg-muted/50 transition-colors">
              <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              <span className="text-xs sm:text-sm text-muted-foreground text-center">Send Pulse</span>
            </button>
            <button className="flex flex-col items-center space-y-2 p-3 sm:p-4 rounded-lg hover:bg-muted/50 transition-colors">
              <Users className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              <span className="text-xs sm:text-sm text-muted-foreground text-center">Team Check</span>
            </button>
            <button className="flex flex-col items-center space-y-2 p-3 sm:p-4 rounded-lg hover:bg-muted/50 transition-colors">
              <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              <span className="text-xs sm:text-sm text-muted-foreground text-center">Analytics</span>
            </button>
            <button className="flex flex-col items-center space-y-2 p-3 sm:p-4 rounded-lg hover:bg-muted/50 transition-colors">
              <Settings className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              <span className="text-xs sm:text-sm text-muted-foreground text-center">Settings</span>
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CoireaDashboardMockup;
