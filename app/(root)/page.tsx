import Hello from "../components/hello";
import Home from "../components/home";

export default function Page() {
  console.log('Where am I doing here? -- SERVER/CLIENT?');

  return (
    <>
      <h1 className="text-3xl">Welcome to Next.js</h1>
      <Hello />
      <Home />
    </>
  );
}
