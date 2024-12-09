"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterSection() {
  return (
    <section className="border border-gray-200">
      <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="aspect-[4/3] relative">
          <img
            src="https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea"
            alt="Modern living room"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
        <div className="max-w-md">
          <h2 className="text-3xl font-medium mb-2">
            S'inscrire & économiser <span className="text-[#40E0D0]">10%</span>
          </h2>
          <p className="text-gray-500 mb-8">
            Office ipsum you must be muted. Synergize helicopter prioritize anyway job due harvest most opportunity didn't. Yet busy any meeting shark light marginalised 4-blocker message. Productize corporate nail caught synergy highlights lunch. Company another pushback items dear or any.
          </p>
          <div className="flex gap-2">
            <Input
              type="email"
              placeholder="john@doe.com"
              className="flex-1"
            />
            <Button className="bg-[#40E0D0] hover:bg-[#3BC9C9] text-white px-8">
              S'INSCRIRE →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}