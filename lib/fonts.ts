import { Anton, Inter, Imprima, Instrument_Sans, Sansita_Swashed } from "next/font/google";

export const anton = Anton({
  subsets: ["latin"],
  weight: "400",
});

export const inter = Inter({
  subsets: ["latin"],
});

export const imprima = Imprima({
  subsets: ["latin"],
  weight: "400",
});

export const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
});

export const sansitaSwashed = Sansita_Swashed({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});