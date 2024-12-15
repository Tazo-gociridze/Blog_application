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
import { useEffect } from "react";
import { supabase } from "./supabase";
import { useAuthContext } from "./contextApi/auth/hook/useAuthContext";
import AuthGuard, { AuthGuardWhileSignOut } from "./components/route-guard/auth";
import Profile from "./pages/Profile/Profile";

const queryClient = new QueryClient();
function App() {

  const { handleStoreUser } = useAuthContext()

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      handleStoreUser(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if(!session){
        supabase.auth.signInWithPassword({
          email: "tazogociridze9@gmail.com",
          password: "tamazi104",
        })
      }
      handleStoreUser(session)
    })

    return () => subscription.unsubscribe()
  }, [])


  return (
    <main>
      <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />}></Route>
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
