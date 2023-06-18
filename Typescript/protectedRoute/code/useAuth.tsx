type AuthContextType = {
  token: string | null;
  signIn: (user: string, password: string, callback: VoidFunction) => void;
  signOut: (callback: VoidFunction) => void;
  reauthenticate: (callback: VoidFunction) => boolean;
};

let AuthContext = createContext<AuthContextType>(null);

function AuthProvider({ children }: { children: React.ReactNode }) {
  let [token, setToken] = useState<string | null>(null);

  let signIn = (user: string, password: string, callback: VoidFunction) => {
    return auth.authenticate(user, password, (token: string) => {
      setToken(token);
      callback();
    });
  };

  let signOut = (callback: VoidFunction) => {
    return auth.signOut(() => {
      setToken(null);
      callback();
    });
  };

  let reauthenticate = (callback: VoidFunction) => {
    const authenticated = auth.reauthenticate(token);
    if (authenticated) {
      callback();
      return true;
    } else {
      setToken(null);
      return false;
    }
  };

  return (
    <AuthContext.Provider value={{ token, signIn, signOut, reauthenticate }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  return useContext(AuthContext);
}

export { useAuth, AuthProvider };
