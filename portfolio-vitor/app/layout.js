import Providers from '../providers';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './globals.css';

export const metadata = {
  title: 'Vitor Ferreira | Portfólio',
  description: 'Portfólio acadêmico e profissional de Vitor Ferreira, estudante de Sistemas para Internet na UNICAP.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" data-theme="dark">
      <body>
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}