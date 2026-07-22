# Talma Homes — Website

A 5-page real estate website with WhatsApp integration built in. Business
info and property listings all live in one file (`data.js`) so you can
update them without touching any other code.

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
images/         Your property photos
README.md       This file
```

## 1. See it locally

Just double-click `index.html` to open it in your browser. Every page links
to the others, so you can click around normally. Keep all the files in this
same folder — the pages depend on `styles.css`, `data.js`, `main.js` and
`images/` sitting next to them.

## 2. Business info & WhatsApp number

Near the top of `data.js`:

```js
const SITE = {
  businessName: "Talma Homes",
  whatsappNumber: "254700000000",   // ← put your real WhatsApp number here
  phoneDisplay: "+254 700 000 000",
  email: "hello@talmahomes.co.ke",
  address: "5th Floor, Delta Towers, Chiromo Road, Westlands, Nairobi",
  ...
```

**`whatsappNumber` is the important one** — international format, digits
only, no `+` or spaces (a Kenyan number `0712 345 678` becomes
`254712345678`). Every WhatsApp button on the site, the floating chat
button, and the contact form all read from this one line.

## 3. Add or remove a listing

All listings live in the `PROPERTIES` list further down `data.js`. Each
listing is one block that looks like this:

```js
  {
    id: 1,
    title: "The Karen Garden House",
    area: "Karen",
    type: "House",
    status: "For Sale",
    price: 85000000,
    priceLabel: "KES 85,000,000",
    ...
```

...and ends with a matching `},` a few lines down, right before the `{` of
the next listing starts.

### To remove a listing
1. Open `data.js` and use your editor's **Find** (Ctrl+F / Cmd+F) to search
   for the listing's title — e.g. `The Karen Garden House`.
2. That title sits inside a block that starts a few lines above it with a
   line that's just `{`, and ends a few lines below with a line that's just
   `},`. Select everything from that opening `{` to that closing `},`
   (including both of those lines) and delete it.
3. Save the file, then open `index.html` in your browser to check the site
   still looks right — if a whole page of listings disappears or looks
   broken, you likely deleted one bracket too many or too few. Undo (Ctrl+Z)
   and try again.

### To add a listing
1. Copy an entire existing block (from its `{` down to its closing `},`) and
   paste it just below, still inside the square brackets `[ ... ]`.
2. Fill in your own details. Here's a blank template with every field
   explained — copy this in instead if you'd rather start clean:

```js
  {
    id: 8,                          // any number not already used above
    title: "Your Property Title",
    area: "Neighbourhood name",
    type: "House",                  // House | Apartment | Townhouse | Land
    status: "For Sale",             // or "For Rent"
    price: 15000000,                // plain number, no commas — used for filtering
    priceLabel: "KES 15,000,000",   // this is what actually displays
    beds: 3,                        // or null if not applicable (e.g. Land)
    baths: 2,                       // or null if unknown
    sqft: 1800,                     // or null if unknown
    lot: "—",                       // e.g. "0.25 acres", or "—" if not applicable
    yearBuilt: 2020,                // or null if unknown
    ref: "TH-1301",                 // your own reference code, any format
    summary: "One-line summary (not shown yet, but good to fill in).",
    description: "A longer paragraph describing the property.",
    features: [
      "Feature one",
      "Feature two",
      "Feature three"
    ],
    images: [
      "images/your-photo-01.jpg",
      "images/your-photo-02.jpg"
    ]
  },
```

3. **Don't forget the comma** — every block needs a `,` right after its
   closing `}`, except the very last one in the list (a trailing comma there
   is fine too, JavaScript allows it).
4. Put your photo files in the `images` folder next to `data.js`, and point
   the `images: [...]` array at them (see section 4 below).
5. Save, then open `index.html` to check it worked. Your new listing shows
   up on the Listings page automatically, gets its own page at
   `property.html?id=8` (matching whatever `id` you gave it), and appears in
   the Home page's "Featured" section if it's one of the first 3 blocks in
   the list — so put important listings near the top.

### Easiest option
Hand-editing JavaScript can be fiddly (one missing comma and a page breaks).
If you'd rather not deal with that, just send me the details and photos here
in chat — paste the text, upload the photos — and I'll edit the file for you.

## 4. Photos

All property photos live together in one folder, `images/`, right next to
`data.js`. There's no required naming system — a filename just has to
exactly match whatever you type in that listing's `images: [...]` array —
but a consistent pattern makes a growing folder much easier to manage:

- Use a short slug for the property, then a number: `runda-villa-01.jpg`,
  `runda-villa-02.jpg`, `runda-villa-03.jpg` — that's the pattern used for
  the Kiambu Road duplex (`kiambu-road-duplex-01.jpg` through `-10.jpg`).
- Lowercase, hyphens instead of spaces, no special characters — phone
  exports like `WhatsApp Image 2026-07-22 at 18.38.52.jpeg` work fine
  locally but are worth renaming before they pile up, since spaces and
  capital letters can behave inconsistently once the site is hosted online.
- Keep the original file extension (`.jpg`/`.jpeg`/`.png`) — it doesn't
  matter which you use, just be consistent with what's in `data.js`.
- Everything sits flat in one `images/` folder rather than a folder per
  property — the slug prefix is what keeps each listing's photos grouped
  and identifiable.

To add photos for a new listing: rename your photos to `your-slug-01.jpg`,
`-02.jpg`, etc., drop them into `images/`, then list those exact filenames
in that property's `images: [...]` array in `data.js` (see section 3).

Any remaining placeholder photos (from picsum.photos) can be swapped out
the same way — just replace the link with your own file path.

## 5. Colors & fonts

All the design tokens are at the top of `styles.css` under `:root`. Changing
`--brass` or `--pine` there will update that color everywhere on the site.

## 6. How the WhatsApp integration works

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

## 7. Putting it online

Any static hosting works, since this is plain HTML/CSS/JS. Two easy free
options:
- **Netlify** — go to app.netlify.com/drop and drag this whole folder in
- **GitHub Pages** — push this folder to a GitHub repo and turn on Pages in
  the repo settings

Or upload the whole folder via FTP/cPanel to any regular web host. Just make
sure all the files stay together in one folder — the pages link to
`styles.css`, `data.js`, `main.js` and `images/` by relative path.
