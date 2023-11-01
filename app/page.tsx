import Link from "next/link";
import ProductCard from "./components/ProductCard";
//all the components in the app folder are server components by default
//server components cannot handle click events
//but buttons can be rendered on the client and the rest of the component can be rendered on the server
export default function Home() {
  return (
    <main>
      <h1>Henlo</h1>
      <Link href="/users">Users</Link>
      <ProductCard />
    </main>
  );
}
