import Logo from "./component/Logo";
import Navigation from "./component/navigation";

export const metadata = {
  title: "The Wild Oasis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>
        <footer>CopyRight By The Wild Oasis</footer>
      </body>
    </html>
  );
}
