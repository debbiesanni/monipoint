"use client";
import Header from "@/Commponent/Header";
import HomePage from "@/Commponent/Home";
import { ThemeProvider } from "@mui/material";
import { theme } from "../../Styles/theme";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <main>
        <Header />
        <HomePage />
      </main>
    </ThemeProvider>
  );
}
