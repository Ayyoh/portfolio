import { HeaderComponent } from "#/components/header-component";
import { ThemeProvider } from "#/components/theme-provider";

export default function HomePage() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex flex-col w-full items-center py-4 px-100">
        <HeaderComponent />
      </div>
    </ThemeProvider>
  );
}
