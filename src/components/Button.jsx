const styles = {
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  secondary: "bg-white text-blue-600 border border-blue-600 hover:bg-blue-50",
  danger: "bg-red-600 text-white hover:bg-red-700",
  dangerOutline: "bg-white text-red-600 border border-red-600 hover:bg-red-50",
};

export default function Button({ variant = "primary", className = "", ...props }) {
  return (
    <button
      type="button"
      className={`cursor-pointer rounded-lg px-4 py-2 text-sm font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${styles[variant]} ${className}`}
      {...props}
    />
  );
}