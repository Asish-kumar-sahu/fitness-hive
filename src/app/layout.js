import "./globals.css";

export const metadata = {
  title:
    "Fitness Hive - Best Gym in JP Nagar Bangalore | Personal Training, Zumba, Yoga",
  description:
    "Fitness Hive in JP Nagar, Bangalore offers personal training, weight loss programs, Zumba, Yoga, and modern gym equipment. Join today for the best fitness experience.",
  keywords: [
    "gym in JP Nagar",
    "gym in Kothanur Bangalore",
    "best gym in Bangalore",
    "fitness hive gym",
    "personal trainer Bangalore",
    "zumba classes JP Nagar",
    "yoga classes Bangalore",
  ],
  openGraph: {
    title: "Fitness Hive Bangalore",
    description:
      "Best gym in JP Nagar with expert trainers and modern equipment.",
    url: "https://fitnesshive.fit",
    siteName: "Fitness Hive",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* 🔥 LOCAL SEO (STRUCTURED DATA) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Gym",
              name: "Fitness Hive",
              image: "https://fitnesshive.fit/logo.png",
              url: "https://fitnesshive.fit",
              telephone: "+919482306515",
              email: "fitnesshiveofficial@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "1st floor, Kothanur Main Rd, next to Royal Public school, Nayak Layout, 8th Phase, J. P. Nagar",
                addressLocality: "Bengaluru",
                addressRegion: "Karnataka",
                postalCode: "560076",
                addressCountry: "IN",
              },
              openingHours: "Mo-Su 06:00-22:00",
              sameAs: [
                "https://www.instagram.com/fitnesshive_official/",
                "https://www.facebook.com/p/Fitness-Hive-Bengaluru-61569802387436/",
              ],
            }),
          }}
        />
      </head>

      <body>{children}</body>
    </html>
  );
}