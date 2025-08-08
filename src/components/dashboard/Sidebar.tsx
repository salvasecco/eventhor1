import { useState } from 'react';
import { 
  BarChart3, 
  Scale, 
  Target, 
  Sparkles, 
  BookOpen, 
  Brain, 
  TrendingUp, 
  Search, 
  Folder, 
  Settings,
  Menu,
  X,
  Zap
} from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: BarChart3 },
  { name: 'A/B Analysis', href: '/dashboard/ab-analysis', icon: Scale },
  { name: 'Individual Analysis', href: '/dashboard/analysis', icon: Target },
  { name: 'Variation Generator', href: '/dashboard/variations', icon: Sparkles },
  { name: 'Narrative Style', href: '/dashboard/narrative', icon: BookOpen },
  { name: 'Learning History', href: '/dashboard/learning', icon: Brain },
  { name: 'Statistics', href: '/dashboard/stats', icon: TrendingUp },
  { name: 'Explore Hooks', href: '/dashboard/hooks', icon: Search },
  { name: 'My Videos', href: '/dashboard/videos', icon: Folder },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
];

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Mobile Overlay */}
      {!isCollapsed && (
        <div className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden" onClick={() => setIsCollapsed(true)} />
      )}
      
      {/* Sidebar */}
      <div className={cn(
        "fixed left-0 top-0 z-50 h-full bg-card/50 backdrop-blur-md border-r border-border/50 transition-all duration-300 lg:relative lg:translate-x-0",
        isCollapsed ? "-translate-x-full lg:w-20" : "w-64"
      )}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border/50">
          {!isCollapsed && (
            <div className="flex items-center space-x-2">
              <div className="relative">
                            <Zap className="h-6 w-6 text-primary animate-pulse animate-text-glow" />
              </div>
                              <span className="font-sora font-bold bg-gradient-primary bg-clip-text text-transparent">
                  Eventhor
                </span>
            </div>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="lg:hidden"
          >
            {isCollapsed ? <Menu className="h-4 w-4" /> : <X className="h-4 w-4" />}
          </Button>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <NavLink
                key={item.name}
                to={item.href}
                className={cn(
                  "flex items-center space-x-3 px-3 py-3 rounded-xl transition-all duration-200",
                  isActive 
                    ? "bg-primary text-primary-foreground shadow-glow" 
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
              >
                <item.icon className={cn("h-5 w-5", isActive && "text-primary-foreground")} />
                {!isCollapsed && (
                  <span className="font-medium text-sm">{item.name}</span>
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* Upgrade Card */}
        {!isCollapsed && (
          <div className="absolute bottom-4 left-4 right-4">
            <div className="bg-gradient-primary rounded-xl p-4 text-white text-center">
              <h3 className="font-semibold mb-2">Upgrade to Pro</h3>
              <p className="text-xs opacity-90 mb-3">Unlock unlimited analyses and advanced features</p>
              <Button variant="secondary" size="sm" className="w-full text-primary">
                Upgrade Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}