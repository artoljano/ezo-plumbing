// components/ContactForm.tsx
"use client";

import { useState, useEffect, FormEvent } from "react";
import { SERVICES } from "@/data/services";
import { AREAS } from "@/data/areas";

const WHATSAPP_NUMBER = "447418640186"; // no +, used in wa.me link

type ContactFormProps = {
  /** Optional: preselect an area (by slug) when used on an area-specific page */
  defaultAreaSlug?: string;
};

export function ContactForm({ defaultAreaSlug }: ContactFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [postcode, setPostcode] = useState("");
  const [areaSlug, setAreaSlug] = useState(defaultAreaSlug ?? "");
  const [serviceId, setServiceId] = useState("");
  const [details, setDetails] = useState("");

  const [status, setStatus] = useState<"idle" | "preparing" | "opened">("idle");

  // Keep area in sync with the page (for /areas/[slug])
  useEffect(() => {
    if (defaultAreaSlug) {
      setAreaSlug(defaultAreaSlug);
    }
  }, [defaultAreaSlug]);

  const selectedArea =
    AREAS.find((a) => a.slug === areaSlug) ??
    (defaultAreaSlug
      ? AREAS.find((a) => a.slug === defaultAreaSlug)
      : undefined);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (status === "preparing") return;

    setStatus("preparing");

    const serviceName =
      SERVICES.find((s) => s.id === serviceId)?.name ||
      "General plumbing / heating issue";

    const areaName = selectedArea?.name || "Not specified";

    const lines = [
      `New plumbing/heating enquiry for EZO:`,
      "",
      `Name: ${name || "Not provided"}`,
      `Phone: ${phone || "Not provided"}`,
      `Email: ${email || "Not provided"}`,
      `Postcode: ${postcode || "Not provided"}`,
      `Area (city/town): ${areaName}`,
      `Service needed: ${serviceName}`,
      "",
      `Details:`,
      details || "No extra details yet.",
    ];

    const text = encodeURIComponent(lines.join("\n"));
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;

    window.open(url, "_blank", "noopener,noreferrer");

    setStatus("opened");
    // Optional: reset back to idle after a few seconds
    setTimeout(() => {
      setStatus("idle");
    }, 4000);
  }

  const inputClass =
    "w-full rounded-md border border-[#01487E]/30 bg-white px-3 py-2 text-sm text-[#01487E] placeholder:text-[#01487E]/55 focus:border-[#F08B1F] focus:outline-none focus:ring-1 focus:ring-[#F08B1F]";
  const labelClass = "text-xs font-semibold text-[#01487E]";
  const helperClass = "mt-1 text-[11px] text-[#01487E]/70";

  const isPreparing = status === "preparing";
  const buttonLabel =
    status === "preparing"
      ? "Preparing WhatsApp message…"
      : status === "opened"
      ? "WhatsApp opened – check your message"
      : "Open WhatsApp with my enquiry";

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-2xl border border-[#01487E]/20 bg-white/90 p-4 shadow-sm"
    >
      {/* Name */}
      <div className="space-y-1">
        <label className={labelClass} htmlFor="name">
          Name
        </label>
        <input
          id="name"
          type="text"
          className={inputClass}
          placeholder="Full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p className={helperClass}>
          Use the name you&apos;d like us to address you by.
        </p>
      </div>

      {/* Phone */}
      <div className="space-y-1">
        <label className={labelClass} htmlFor="phone">
          Phone number
        </label>
        <input
          id="phone"
          type="tel"
          className={inputClass}
          placeholder="Mobile number (for call or WhatsApp)"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <p className={helperClass}>
          We&apos;ll use this to call you or confirm details by message.
        </p>
      </div>

      {/* Email */}
      <div className="space-y-1">
        <label className={labelClass} htmlFor="email">
          Email (optional)
        </label>
        <input
          id="email"
          type="email"
          className={inputClass}
          placeholder="Only if you prefer email updates"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      {/* Postcode + Area */}
      <div className="grid gap-3 md:grid-cols-2">
        <div className="space-y-1">
          <label className={labelClass} htmlFor="postcode">
            Postcode
          </label>
          <input
            id="postcode"
            type="text"
            className={inputClass}
            placeholder="e.g. B1 1AA"
            value={postcode}
            onChange={(e) => setPostcode(e.target.value)}
          />
        </div>

        <div className="space-y-1">
          <label className={labelClass} htmlFor="area">
            Area / city
          </label>
          <select
            id="area"
            className={inputClass}
            value={areaSlug}
            onChange={(e) => setAreaSlug(e.target.value)}
          >
            <option value="">Select area (or closest)</option>
            {AREAS.map((area) => (
              <option key={area.slug} value={area.slug}>
                {area.name} – {area.region}
              </option>
            ))}
          </select>
          {defaultAreaSlug && selectedArea && (
            <p className={helperClass}>
              Preselected from this page:{" "}
              <span className="font-semibold">{selectedArea.name}</span>. You
              can change it if needed.
            </p>
          )}
        </div>
      </div>

      {/* Service type */}
      <div className="space-y-1">
        <label className={labelClass} htmlFor="service">
          Type of service needed
        </label>
        <select
          id="service"
          className={inputClass}
          value={serviceId}
          onChange={(e) => setServiceId(e.target.value)}
        >
          <option value="">Choose best match</option>
          {SERVICES.map((service) => (
            <option key={service.id} value={service.id}>
              {service.name}
            </option>
          ))}
        </select>
        <p className={helperClass}>
          If you&apos;re not sure, pick the closest one – we&apos;ll clarify in
          WhatsApp.
        </p>
      </div>

      {/* Details */}
      <div className="space-y-1">
        <label className={labelClass} htmlFor="details">
          Describe what&apos;s going wrong
        </label>
        <textarea
          id="details"
          className={`${inputClass} min-h-[120px] resize-vertical`}
          placeholder="Example: “Water dripping through kitchen ceiling when the shower runs above. Started yesterday evening.”"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />
        <p className={helperClass}>
          You can still add photos/video when WhatsApp opens.
        </p>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isPreparing}
        className={`inline-flex w-full items-center justify-center rounded-md px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-transform duration-150 ${
          isPreparing
            ? "bg-[#01487E]/70 cursor-not-allowed"
            : "bg-[#01487E] hover:-translate-y-0.5 hover:bg-[#015b9f]"
        }`}
      >
        {buttonLabel}
      </button>
      <p className="text-[11px] text-[#01487E]/70">
        This button opens WhatsApp with a pre-filled message. You can still edit
        any part of it before you send.
      </p>
    </form>
  );
}
