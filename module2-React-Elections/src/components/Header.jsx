export default function Header({ children }) {
  return (
    <header>
      <div className="bg-white mx-auto p-4">
        <h1 className="text-center text-xl text-$gray800">{children}</h1>
      </div>
    </header>
  );
}
