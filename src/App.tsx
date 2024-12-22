import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import { ThemeProvider } from "./components/theme-provider";
import '@/i18next'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import About from "./pages/About/About";
import AuthorPage from "./pages/Author/Author-page";
import LoginError from "./pages/login-error/LoginError";
import AuthGuard, { AuthGuardWhileSignOut } from "./components/route-guard/auth";
import Profile from "./pages/Profile/Profile";
import { BlogProvider } from "./contextApi/auth";
import { useAuthContext } from "./contextApi/auth/hook/useAuthContext";
import { useEffect } from "react";
import { supabase } from "./supabase";


const queryClient = new QueryClient();
function App() {
  const { handleStoreUser } = useAuthContext()

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
       if (session) {
           handleStoreUser(session);
       }
   });
   const {
     data: { subscription },
   } = supabase.auth.onAuthStateChange((_event, session) => {
       if (session) {
         handleStoreUser(session)
       }
   });

   return () => subscription.unsubscribe();
 }, []);

  return (
    <main>
      <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<BlogProvider><Home /></BlogProvider>}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/author" element={<AuthorPage />}></Route>
              <Route path="/profile" element={<AuthGuardWhileSignOut><Profile /></AuthGuardWhileSignOut>}></Route>
              <Route path="/signin" element={<AuthGuard><SignIn /></AuthGuard>}></Route>
              <Route path="/loginerror" element={<LoginError />}></Route>
              <Route path="/signup" index element={<AuthGuard><SignUp /></AuthGuard>}></Route>
            </Route>
          </Routes>
        </ThemeProvider>
        </QueryClientProvider>
      </BrowserRouter>
    </main>
  );
}
export default App;
