import { AuthProvider } from "@/context/AuthContext";
import "./globals.css";


export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="">
				<AuthProvider>
					<main className="mainContent">
						{children}
					</main>
				</AuthProvider>
			</body>
		</html>
	);
}
