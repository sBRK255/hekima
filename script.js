document.addEventListener('DOMContentLoaded', function() {
    // Emoji garden setup
    const emojiGarden = document.querySelector('.emoji-container');
    const emojis = ['💖', '🌸', '✨', '🌈', '🦄', '🌺', '💫', '😊', '🌞', '🌷', '🎀', '🧸', '🦋', '🌻', '💐'];
    
    // Add emojis to the garden
    emojis.forEach(emoji => {
        const emojiElement = document.createElement('div');
        emojiElement.classList.add('emoji');
        emojiElement.textContent = emoji;
        emojiElement.addEventListener('click', createEmojiPopup);
        emojiGarden.appendChild(emojiElement);
    });
    
    // Special message popup functionality
    const messageBtn = document.getElementById('special-message-btn');
    const messagePopup = document.getElementById('message-popup');
    const closeBtn = document.querySelector('.close-btn');
    
    messageBtn.addEventListener('click', function() {
        messagePopup.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevent scrolling when popup is open
        
        // Create emoji explosions when message is opened
        createMultipleEmojis(10);
    });
    
    closeBtn.addEventListener('click', function() {
        messagePopup.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    });
    
    // Close popup if clicked outside content
    messagePopup.addEventListener('click', function(event) {
        if (event.target === messagePopup) {
            messagePopup.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Emoji popup creation function
    function createEmojiPopup(event) {
        // Get clicked emoji
        const emoji = this.textContent;
        
        // Create popup emoji
        const popupEmoji = document.createElement('div');
        popupEmoji.classList.add('popup-emoji');
        popupEmoji.textContent = emoji;
        
        // Position near the clicked emoji
        const rect = this.getBoundingClientRect();
        popupEmoji.style.left = `${rect.left + window.scrollX}px`;
        popupEmoji.style.top = `${rect.top + window.scrollY}px`;
        
        // Add to body
        document.body.appendChild(popupEmoji);
        
        // Remove after animation completes
        setTimeout(() => {
            popupEmoji.remove();
        }, 2000);
    }
    
    // Create multiple emojis for explosion effect
    function createMultipleEmojis(count) {
        for (let i = 0; i < count; i++) {
            setTimeout(() => {
                const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
                const popupEmoji = document.createElement('div');
                popupEmoji.classList.add('popup-emoji');
                popupEmoji.textContent = randomEmoji;
                
                // Random position
                const randomX = Math.random() * window.innerWidth;
                const randomY = Math.random() * (window.innerHeight / 2) + window.innerHeight / 4;
                
                popupEmoji.style.left = `${randomX}px`;
                popupEmoji.style.top = `${randomY}px`;
                
                document.body.appendChild(popupEmoji);
                
                setTimeout(() => {
                    popupEmoji.remove();
                }, 2000);
            }, i * 200); // Stagger emoji creation
        }
    }
    
    // Create random emoji popups periodically
    function createRandomEmojiPopup() {
        if (Math.random() > 0.7) { // 30% chance for an emoji to appear
            const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
            const popupEmoji = document.createElement('div');
            popupEmoji.classList.add('popup-emoji');
            popupEmoji.textContent = randomEmoji;
            
            // Random position
            const randomX = Math.random() * window.innerWidth;
            const randomY = Math.random() * window.innerHeight;
            
            popupEmoji.style.left = `${randomX}px`;
            popupEmoji.style.top = `${randomY}px`;
            
            document.body.appendChild(popupEmoji);
            
            setTimeout(() => {
                popupEmoji.remove();
            }, 2000);
        }
        
        // Schedule next popup
        setTimeout(createRandomEmojiPopup, Math.random() * 5000 + 2000); // Between 2-7 seconds
    }
    
    // Start the random emoji popup cycle after a delay
    setTimeout(createRandomEmojiPopup, 5000);
    
    // Add interactive hover effect to quote cards
    const quoteCards = document.querySelectorAll('.quote-card');
    quoteCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Create a small emoji popup when hovering over quotes
            const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
            const popupEmoji = document.createElement('div');
            popupEmoji.classList.add('popup-emoji');
            popupEmoji.textContent = randomEmoji;
            
            const rect = this.getBoundingClientRect();
            popupEmoji.style.left = `${rect.right - 20 + window.scrollX}px`;
            popupEmoji.style.top = `${rect.top + 20 + window.scrollY}px`;
            
            document.body.appendChild(popupEmoji);
            
            setTimeout(() => {
                popupEmoji.remove();
            }, 1500);
        });
    });
}); 