export default {
  async fetch(request, env) {
    // 1. Handle CORS Preflight requests
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      });
    }

    // 2. Only allow POST requests for uploads
    if (request.method === "POST") {
      try {
        const body = await request.json();
        const imageBase64 = body.image;
        
        if (!imageBase64) {
          return new Response("No image provided", { status: 400 });
        }

        // Generate a unique ID for the image based on time
        const imageId = `img_${Date.now()}`;

        // Save the image to the KV Namespace bound as 'CAMERA_KV'
        await env.CAMERA_KV.put(imageId, imageBase64);

        return new Response(JSON.stringify({ success: true, id: imageId }), {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
          },
        });
      } catch (err) {
        return new Response("Error saving image", { status: 500 });
      }
    }

    return new Response("Method Not Allowed", { status: 405 });
  },
};
