export default {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request);
    const newResponse = new Response(response.body, response);

    newResponse.headers.set(
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains"
    );
    newResponse.headers.set("X-Content-Type-Options", "nosniff");
    newResponse.headers.set("X-Frame-Options", "DENY");
    newResponse.headers.set(
      "Referrer-Policy",
      "no-referrer-when-downgrade"
    );
    newResponse.headers.set(
      "Permissions-Policy",
      "camera=(), microphone=(), geolocation=()"
    );
    newResponse.headers.set(
      "Content-Security-Policy",
      "default-src 'self'; style-src 'self' 'unsafe-inline'; font-src 'self'; img-src 'self' data:; script-src 'self'"
    );

    return newResponse;
  },
};
