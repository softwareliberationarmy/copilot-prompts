# User Authentication

Our application will have `users` with the following information:

- The standard user information, including: `name`, `email` (unique).
- A link for a "magic" login, which will be a `GUID` as well as the expiration date for the link.
- Social login account IDs for Microsoft, GitHub, and Google.
- The timestamp of the last login.
- The timestamp for when the user was created.
