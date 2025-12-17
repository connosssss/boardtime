import App from "../islands/App.tsx";

export default function Home() {
  return (
    <div class="min-h-screen bg-gray-100">
        {/* had to move App to islands to use react hooks */}
        <App />
    </div>
  );
}