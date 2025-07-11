import { Button } from "@/components/ui/button";

export const Home = () => {
  return (
    <header className="flex items-center justify-between p-6 bg-gray-100 shadow">
      <h1 className="text-xl font-semibold">Hello, user!</h1>
      <nav className="flex gap-4">
        <Button variant="default">My Profile</Button>
        <Button variant="secondary">Settings</Button>
        <Button variant="destructive">Logout</Button>
      </nav>
    </header>
  );
};

export default Home;
