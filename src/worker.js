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
      "default-src 'self'; style-src 'self' 'unsafe-inline'; font-src 'self'; img-src 'self' data:; script-src 'self' https://static.cloudflareinsights.com; connect-src 'self' https://cloudflareinsights.com"
    );

    env.AE.writeDataPoint({
      blobs: [
        request.cf?.country ?? "XX",
        request.cf?.city ?? "",
        request.cf?.colo ?? "",
        new URL(request.url).pathname,
        request.headers.get("user-agent") ?? "",
      ],
      doubles: [
        request.cf?.latitude ?? 0,
        request.cf?.longitude ?? 0,
      ],
      indexes: [request.cf?.country ?? "XX"],
    });

    return newResponse;
  },
};
