"use client"

export default function Button({ onClick, children, variant = "default" }: {
  onClick?: () => void; children: React.ReactNode; variant?: string
}) {

  let classes = "px-3 py-1 rounded-lg text-sm"; // The idea is to build out a string containing everything in our className

  if (variant === "default") { // Depending on the variant, we can add some CSS to our className
    classes += " bg-blue-500 text-white";
  }

  if (variant === "outline") { // border creates a border, so instead of having a background color, there will just be a border around the button
    classes += " border border-gray-400";
  }

  if (variant === "danger") {
    classes += " bg-red-500 text-white";
  }

  // add 1 more button variant, ex: variant === "secondary" include both a bg-color and a border
  if (variant === "secondary") {
    classes += " bg-blue-200 border border-gray-500"
  } 
  return (
    <button
      className={classes}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
