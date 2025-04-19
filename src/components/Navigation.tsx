
import { Book, Activity, User, Trophy } from "lucide-react";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "./ui/navigation-menu";
import { cn } from "@/lib/utils";

export function Navigation() {
  return (
    <NavigationMenu className="max-w-none w-full justify-start bg-white shadow-sm">
      <NavigationMenuList className="gap-6">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-lg font-semibold bg-transparent">
            <Book className="mr-2 h-5 w-5" />
            Practice
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 w-[300px]">
              <li>
                <NavigationMenuLink asChild>
                  <a href="#" className="block p-3 hover:bg-slate-50 rounded-md">
                    <div className="text-sm font-medium">Algebra</div>
                    <p className="text-sm text-muted-foreground">
                      Master algebraic concepts and equations
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a href="#" className="block p-3 hover:bg-slate-50 rounded-md">
                    <div className="text-sm font-medium">Geometry</div>
                    <p className="text-sm text-muted-foreground">
                      Explore shapes, areas, and geometric problems
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-lg font-semibold bg-transparent">
            <Activity className="mr-2 h-5 w-5" />
            Progress
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 w-[300px]">
              <li>
                <NavigationMenuLink asChild>
                  <a href="#" className="block p-3 hover:bg-slate-50 rounded-md">
                    <div className="text-sm font-medium">Analytics</div>
                    <p className="text-sm text-muted-foreground">
                      View your performance statistics
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a href="#" className="block p-3 hover:bg-slate-50 rounded-md">
                    <div className="text-sm font-medium">History</div>
                    <p className="text-sm text-muted-foreground">
                      Review past practice sessions
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-lg font-semibold bg-transparent">
            <Trophy className="mr-2 h-5 w-5" />
            Achievements
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 w-[300px]">
              <li>
                <NavigationMenuLink asChild>
                  <a href="#" className="block p-3 hover:bg-slate-50 rounded-md">
                    <div className="text-sm font-medium">Badges</div>
                    <p className="text-sm text-muted-foreground">
                      View your earned badges and medals
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <a href="#" className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-lg font-semibold">
              <User className="mr-2 h-5 w-5" />
              Profile
            </a>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
