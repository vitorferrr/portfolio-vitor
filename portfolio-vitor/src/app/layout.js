import Providers from '../providers';
import './globals.css';

export const metadata = {
  title: 'Vitor Ferreira - Portfólio',
  description: 'Portfólio acadêmico e profissional do Vitor Ferreira, estudante de Sistemas para Internet na UNICAP.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}