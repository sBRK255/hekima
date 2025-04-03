# Hekima's Sunshine Page

A beautiful, interactive webpage created with love for Hekima, a little girl with a bright smile. This webpage features a colorful design, emoji popups, positive messages, and a special interactive message button.

## Features

- 🌈 Colorful, child-friendly design
- 💖 Interactive emoji garden - click on emojis to make them pop up
- 🌸 Random floating emojis that appear across the page
- 💌 Special message popup with animation
- 📱 Fully responsive design that works on all devices
- ✨ Beautiful animations and transitions

## How to Use

1. Simply open the `index.html` file in any modern web browser
2. Interact with the emojis in the Emoji Garden by clicking on them
3. Click the "Click For A Special Message!" button to see a loving message with emoji animations
4. Hover over the quote cards to see small emoji effects

## Customization

### Adding a Photo

To add Hekima's photo:
1. Replace the photo placeholder with an actual image by editing the HTML:
   ```html
   <div class="photo-placeholder">
       <img src="path/to/hekima-photo.jpg" alt="Hekima's beautiful smile">
   </div>
   ```

### Changing Colors

The color scheme can be modified in the `styles.css` file:
- Pink theme: `#ff66b3`, `#ffcce6`, `#ff99cc`
- Purple theme: `#6a5acd`, `#9966cc`, `#d9b3ff`
- Background gradient: `linear-gradient(135deg, #ffcce6, #f5f5ff)`

### Adding More Quotes

To add more positive quotes, edit the HTML and add more quote cards:
```html
<div class="quote-card animate__animated animate__fadeInUp">
    <p>"Your new positive quote here!"</p>
</div>
```

### Adding More Emojis

To add or change the emojis in the garden, edit the JavaScript file:
```javascript
const emojis = ['💖', '🌸', '✨', '🌈', '🦄', '🌺', '💫', '😊', '🌞', '🌷', '🎀', '🧸', '🦋', '🌻', '💐'];
```

### Changing the Special Message

The special message can be customized by editing the content in the popup div in the HTML file:
```html
<div id="message-popup" class="popup-container">
    <div class="popup-content">
        <!-- Edit message content here -->
    </div>
</div>
```

## Technologies Used

- HTML5
- CSS3 (with animations and responsive design)
- JavaScript (for interactivity)
- Animate.css (for additional animations)
- Google Fonts (Comic Neue & Bubblegum Sans)

## Browser Compatibility

This webpage is compatible with all modern browsers:
- Google Chrome
- Mozilla Firefox
- Safari
- Microsoft Edge

Made with 💖 for Hekima 