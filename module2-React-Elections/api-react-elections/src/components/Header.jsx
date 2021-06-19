export default function Header({ children }) {
  return (
    <header>
      <div className="bg-purple-500 mx-auto p-4">
        <h1 className="text-center font-semibold text-xl text-white">
          {children}
        </h1>
      </div>
    </header>
  );
}
