# Talma Homes — Website

A 5-page real estate website with WhatsApp integration built in. This is a
working demo with placeholder text, photos and phone numbers — everything is
built so you can swap in your real details without touching code.

## What's in this folder

```
index.html      Home page
listings.html   All listings, with filters (type / area / price)
property.html   Property detail page (one template, works for every listing)
about.html      Company story, values, team
contact.html    Contact form + direct WhatsApp + map
styles.css      All design/styling
data.js         ← YOUR CONTENT LIVES HERE (business info + property listings)
main.js         Site behaviour (don't need to touch this to update content)
```

## 1. See it locally

Just double-click `index.html` to open it in your browser. Every page links
to the others, so you can click around normally. Keep all the files in this
same folder — the pages depend on `styles.css`, `data.js` and `main.js`
sitting next to them.

## 2. Make it yours — edit `data.js`

Open `data.js` in any text editor (Notepad, TextEdit, VS Code, etc.). Near
the top you'll find:

```js
const SITE = {
  businessName: "Talma Homes",
  whatsappNumber: "254700000000",   // ← put your real WhatsApp number here
  phoneDisplay: "+254 700 000 000",
  email: "hello@talmahomes.co.ke",
  address: "5th Floor, Delta Towers, Chiromo Road, Westlands, Nairobi",
  ...
```

**`whatsappNumber` is the important one** — it's in international format,
digits only, no `+` or spaces (e.g. a Kenyan number `0712 345 678` becomes
`254712345678`). Every WhatsApp button on the site, the floating chat
button, and the contact form all read from this one line.

Below that is the `PROPERTIES` list — one entry per listing, with title,
area, price, bedrooms, description, features and photos. Copy an existing
entry, change the details, and it will automatically appear on the Home page
(if it's one of the first 3), the Listings page, and get its own detail page
at `property.html?id=7` (matching whatever `id` you give it).

The `TEAM` list at the bottom works the same way for the About page.

## 3. Swap in real photos

Right now every photo is a placeholder from picsum.photos (a placeholder
image service — that's why they look random). Replace them by:
- Putting your own image files in this folder (e.g. an `images/` folder)
- Changing the `images: [...]` array for each property, and the `photo:`
  field for each team member, to point at your files instead of the
  picsum.photos links

## 4. Colors & fonts

All the design tokens are at the top of `styles.css` under `:root`. Changing
`--brass` or `--pine` there will update that color everywhere on the site.

## 5. How the WhatsApp integration works

This uses WhatsApp's free **click-to-chat** links (`wa.me`) — no backend
server, no API key, no approval process needed. When someone taps a WhatsApp
button:
- It opens WhatsApp (app or web) with your number already filled in
- The message is pre-filled based on context — e.g. tapping "Ask about this
  property" fills in that property's name and price automatically
- The contact form does the same: it builds a message from what the visitor
  typed and opens WhatsApp with it ready to send

Nothing is sent automatically — the visitor still taps "send" inside
WhatsApp, so it works with your personal WhatsApp Business app exactly as it
is today. If later on you want automated replies, chatbots, or messages sent
straight from your website without opening the WhatsApp app (the official
**WhatsApp Business Platform / Cloud API**), that's a separate setup that
needs Meta Business verification and a backend server — a bigger project,
but a natural next step once the site is live.

## 6. Putting it online

Any static hosting works, since this is plain HTML/CSS/JS. Two easy free
options:
- **Netlify** — go to app.netlify.com/drop and drag this whole folder in
- **GitHub Pages** — push this folder to a GitHub repo and turn on Pages in
  the repo settings

Or upload the whole folder via FTP/cPanel to any regular web host. Just make
sure all the files stay together in one folder — the pages link to
`styles.css`, `data.js` and `main.js` by relative path.
