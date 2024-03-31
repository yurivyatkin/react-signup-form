// A function that simulates a signup request
export async function signup(
  username: string,
  password: string
): Promise<{ id: string, token: string }> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!username || !password) {
        reject(new Error("Invalid username or password"));
      }
      resolve({ id: "1", token: "123" });
    }, 1000);
  });
}
