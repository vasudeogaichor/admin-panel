export const loginUser = async (username, password) => {
    const VALID_USERNAME = "admin@example.com";
    const VALID_PASSWORD = "password123";
  
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === VALID_USERNAME && password === VALID_PASSWORD) {
          resolve({
            token: "mocked-jwt-token",
            user: {
              id: 1,
              name: "Admin User",
              role: "admin",
              permissions: ["users:view", "users:edit", "dashboard:view"]
            }
          });
        } else {
          reject(new Error("Invalid credentials"));
        }
      }, 800);
    });
  };
  