const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/protected",
    element: (
      <RequireAuth>
        <h1>Protected</h1>
      </RequireAuth>
    ),
  },
]);

function RequireAuth({ children }: { children: React.ReactNode }) {
  let auth = useAuth();
  let location = useLocation();

  if (auth.token && auth.reauthenticate(() => {})) {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace />;
}

export default function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}
