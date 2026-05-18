import { AboutComponent } from "#/components/about-component";
import { HeaderComponent } from "#/components/header-component";
import TechStackComponent from "#/components/tech-stack";
import { ThemeProvider } from "#/components/theme-provider";

export default function HomePage() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex flex-col w-full items-center gap-2 py-8 px-82">
        <HeaderComponent />
        <AboutComponent />
        <TechStackComponent />
      </div>
    </ThemeProvider>
  );
}
