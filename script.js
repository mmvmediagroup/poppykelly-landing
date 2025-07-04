const bots = [
  /facebookexternalhit/i,
  /Facebot/i,
  /Twitterbot/i,
  /Pinterest/i,
  /Slackbot/i,
  /Googlebot/i,
  /LinkedInBot/i,
  /WhatsApp/i,
  /TelegramBot/i,
  /Discordbot/i,
];

const ua = navigator.userAgent;
const isBot = bots.some(bot => bot.test(ua));

const content = document.getElementById("content");

if (!isBot) {
  content.innerHTML = `
    <h1>Welcome 👋</h1>
    <p>This is my exclusive content page.</p>
    <a class="button" href="https://onlyfans.com/yourusername" target="_blank" rel="noopener noreferrer">
      👉 Enter My OnlyFans
    </a>
  `;
} else {
  content.innerHTML = `
    <h1>Welcome!</h1>
    <p>Enjoy your visit.</p>
  `;
}
