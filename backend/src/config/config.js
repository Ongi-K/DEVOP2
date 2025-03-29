/*
This configuration file holds all global settings for the backend application. Instead of using an external environment file, it directly defines configuration values such as the port number and credentials for external services (e.g., Supabase). This approach simplifies setup for learning purposes by keeping all configurations in one file, making it easy to adjust settings as needed.
*/

// Direct configuration settings without using .env
// For a learning project, it's fine to hardcode these values
module.exports = {
  port: 3000,
  supabaseUrl: 'your_supabase_url_here',
  supabaseKey: 'your_supabase_key_here',
  // Add additional configuration as needed
};
