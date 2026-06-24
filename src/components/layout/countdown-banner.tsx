"use client";

import { useEffect, useState } from "react";

const DEADLINE_G1 = new Date("2026-06-18T23:59:59+08:00");
const DEADLINE_G2 = new Date("2026-07-13T23:59:59+08:00");

export default function CountdownBanner() {
  const [phase, setPhase] = useState<string>("G1 active");
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      let target: Date;
      let phaseLabel: string;

      if (now < DEADLINE_G1) {
        target = DEADLINE_G1;
        phaseLabel = "G1 active";
      } else if (now < DEADLINE_G2) {
        target = DEADLINE_G2;
        phaseLabel = "G2 active";
      } else {
        phaseLabel = "CLOSED";
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setPhase(phaseLabel);
        return;
      }

      setPhase(phaseLabel);

      const diff = target.getTime() - now.getTime();
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  if (phase === "CLOSED") {
    return (
      <div className="bg-text-dark/80 text-white py-2 px-4 text-center text-xs">
        Penerimaan SPMB TP 2026/2027 telah ditutup.
      </div>
    );
  }

  return (
    <div className="bg-primary/90 text-primary-foreground py-2 px-4 text-center text-xs">
      <span>
        {phase === "G1 active"
          ? `Penerimaan Gelombang 1 ditutup ${timeLeft.days}d ${formatNumber(timeLeft.hours)}j ${formatNumber(timeLeft.minutes)}m ${formatNumber(timeLeft.seconds)}d —`
          : `Gelombang 2 (terakhir) ditutup ${timeLeft.days}d ${formatNumber(timeLeft.hours)}j ${formatNumber(timeLeft.minutes)}m ${formatNumber(timeLeft.seconds)}d —`}{" "}
        <a
          href="#admissions"
          className="underline underline-offset-2 text-accent/90 hover:text-accent font-medium"
        >
          Informasi Pendaftaran →
        </a>
      </span>
    </div>
  );
}
