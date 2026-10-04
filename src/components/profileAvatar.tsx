/* eslint-disable @next/next/no-img-element */
import { asset, initials } from "@/lib/utils";

/**
 * Shows your photo if one was found at build time, otherwise a circle with your initials.
 * Add your photo as public/assets/profile.jpg (or .png / .webp) and rebuild.
 */
export default function ProfileAvatar({
  name,
  photo,
}: {
  name: string;
  photo: string | null;
}) {
  const isDev = process.env.NODE_ENV === "development";

  if (photo) {
    return (
      <img
        src={asset(photo)}
        width={280}
        height={280}
        alt={`Photo of ${name}`}
        className="mx-auto aspect-square w-full max-w-[280px] overflow-hidden object-cover object-center rounded-full"
      />
    );
  }

  return (
    <div className="mx-auto w-full max-w-[280px]">
      <div
        role="img"
        aria-label={name}
        className="relative mx-auto flex aspect-square w-full items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-emerald-700 via-emerald-500 to-teal-300 text-white shadow-lg ring-8 ring-primary/10"
      >
        <span className="select-none text-[6rem] font-bold leading-none tracking-tighter sm:text-[7rem]">
          {initials(name)}
        </span>
      </div>
      {isDev && (
        <p className="mt-3 text-center text-xs text-muted-foreground">
          Add your photo as <code>public/assets/profile.jpg</code>
          <br />
          (this hint only shows in <code>npm run dev</code>)
        </p>
      )}
    </div>
  );
}
