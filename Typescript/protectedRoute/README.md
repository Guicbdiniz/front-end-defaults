# protectedRoute

When using [react-router](https://reactrouter.com/en/main) to create routes for a website, it is usually necessary to identify which routes can be accessed by all users and which routes can only be accessed by authenticated users. To do that, an easy alternative is to wrap the protected element in a `RequireAuth` component. This component will simply check if the user is authenticated, replacing the required route to a new one if necessary.

To check if the user is authenticated, it's usually a good practice to check if there is a auth token saved and available (in memory, local storage, cookies...). If so, it is a good idea to revalidate that token (sending a new request to the backend). The token can be saved, for example, in a custom hook (`useAuth`).