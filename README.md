📸 Monochrome Blind Camera

A neo-brutalist, viewfinder-less camera Progressive Web App (PWA) designed to help you capture moments without staring at a screen. Snap photos, record videos, and store them in a secure local "Vault" with the option to back up your memories automatically to a free Cloudflare backend.

✨ Features

🙈 Blind Capture: No live preview! Focus on the moment, not the screen.

🎨 Customizable Themes: Switch between sleek Light, Dark, or vibrant Retro neo-brutalist styles.

🛠️ Pro Camera Tools: Includes a Timer (3s/10s), Burst Mode (3x rapid fire), and Flashlight toggle.

📱 PWA Ready: Install it directly to your home screen with a custom app icon for a native app feel.

⚡ Quick Capture: Double-tap anywhere on the screen or hit the Spacebar/Enter key to snap a photo instantly.

🔒 Privacy Vault: A built-in gallery with a blur toggle so your photos remain private until you want to see them.

☁️ Cloud Sync: Automatically back up your captured photos to a free Cloudflare Worker + KV storage backend.

🎛️ Customizable UI: Change the shape (Circle, Square, Minimal) and position of the capture button to fit your grip.

🔊 Haptic & Audio Feedback: Feel and hear when you capture a photo or start/stop recording.

🚀 Getting Started

1. The Frontend App (Web App)

The app is built entirely in a single HTML file using Vanilla JavaScript and Tailwind CSS (via CDN).

Clone this repository or download the index.html file.

Open index.html in any modern web browser.
(Note: Camera access requires the site to be served over HTTPS or localhost).

2. The Backend (Cloudflare Sync)

If you want to enable the Cloud Backup feature, you can deploy the included worker.js file to Cloudflare for free.

Create a free account on Cloudflare.

Navigate to Workers & Pages -> KV and create a new KV namespace named CAMERA_PICS.

Go back to Workers & Pages -> Create Application -> Create Worker. Name it (e.g., camera-sync-api).

Replace the default worker code with the code from worker.js in this repository.

Go to your Worker's Settings -> Variables -> KV Namespace Bindings. Add a binding with the name CAMERA_KV and select your CAMERA_PICS namespace.

Deploy the worker and copy its URL.

Open the Blind Camera App, go to Settings, enable Cloudflare Backup, and paste your worker URL.

📂 File Structure

index.html: The complete frontend application (HTML, Tailwind CSS, JavaScript).

worker.js: The Cloudflare Worker API code for saving photos to the cloud.

🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

📝 License

This project is open-source and available under the MIT License.
