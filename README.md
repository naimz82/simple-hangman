# Simple Hangman Game

A classic word-guessing game built with HTML, CSS, and JavaScript. Players try to guess a hidden word by selecting letters, with a limited number of incorrect guesses allowed. **This simple game is developed mainly for learning purposes**.

## 🎮 Game Features

- **Interactive Virtual Keyboard**: Click letters to make guesses
- **Visual Lives System**: Heart icons that fade as you make incorrect guesses
- **Animated Character**: Facial expressions change based on your progress
- **Multiple Categories**: Words from various categories including:
  - Animals
  - Flowers
  - Countries
  - Cities
  - Brands
  - Fruits
  - Electronic items
  - Sports & Games
  - Tools
  - Transportation
- **Responsive Design**: Works on desktop and mobile devices
- **Sound Alerts**: Uses SweetAlert for game notifications

## 🚀 How to Play

1. **Start the Game**: A random word is selected and displayed as empty tiles
2. **See the Hint**: The category/clue is shown to help you guess
3. **Make Guesses**: Click letters on the virtual keyboard
4. **Correct Guesses**: Letters appear in their correct positions
5. **Wrong Guesses**: You lose a life (heart) and the character's expression changes
6. **Win**: Reveal all letters to win the game
7. **Lose**: Run out of lives and the game ends

## 🛠️ Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/naimz82/simple-hangman.git
   cd simple-hangman
   ```

2. **Open in browser**:
   - Simply open `index.html` in your web browser
   - Or serve through a local web server

3. **No build process required** - it's a pure client-side application!

## 📁 Project Structure

```
simple-hangman/
├── index.html              # Main HTML file
├── css/
│   ├── style.css           # Custom styles
│   ├── all.min.css         # Font Awesome icons
│   └── sweetalert.css      # Alert styling
├── js/
│   ├── scripts.js          # Game logic
│   ├── questions.json      # Word database
│   ├── jquery.min.js       # jQuery library
│   └── sweetalert.min.js   # Alert library
├── img/
│   ├── b1.png - b8.png     # Character expressions
│   └── logo.png            # Game logo
├── webfonts/               # Font Awesome fonts
├── LICENSE                 # MIT License
└── README.md              # This file
```

## 🎯 Game Statistics

The game includes over **1000+ words** across multiple categories:
- 🐾 **Animals**: 100+ entries
- 🌸 **Flowers**: 85+ entries  
- 🌍 **Countries**: 75+ entries
- 🏙️ **Cities**: 90+ entries
- 🏷️ **Brands**: 80+ entries
- 🍎 **Fruits**: 85+ entries
- 📱 **Electronics**: 85+ entries
- ⚽ **Sports & Games**: 100+ entries
- 🔧 **Tools**: 135+ entries
- 🚗 **Transportation**: 120+ entries

## 🧩 Technical Details

- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **Libraries**: 
  - jQuery 3.x for DOM manipulation
  - SweetAlert for notifications
  - Font Awesome for icons
- **Data Storage**: JSON file for word database
- **Browser Support**: All modern browsers
- **Mobile Friendly**: Responsive design

## 🎨 Customization

### Adding New Words
Edit `js/questions.json` to add new words:
```json
{
  "word": "EXAMPLE",
  "clue": "Category"
}
```

### Styling
Modify `css/style.css` to change:
- Colors and themes
- Fonts and typography
- Layout and spacing
- Animations and effects

### Game Logic
Edit `js/scripts.js` to modify:
- Number of lives
- Scoring system
- Game difficulty
- Special features

## 🎲 Game Rules

- **Lives**: You start with 7 lives (hearts)
- **Guessing**: Click letters on the virtual keyboard
- **Correct Letter**: Appears in all matching positions
- **Wrong Letter**: Loses one life and disables the letter
- **Win Condition**: Reveal all letters in the word
- **Lose Condition**: Run out of all lives
- **Hints**: Category clues help guide your guesses

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/new-feature`
3. **Add your changes**: 
   - New words to the database
   - UI improvements
   - Bug fixes
   - New features
4. **Commit changes**: `git commit -m "Add new feature"`
5. **Push to branch**: `git push origin feature/new-feature`
6. **Open a Pull Request**

### Ideas for Contributions
- Add difficulty levels
- Implement scoring system
- Add multiplayer support
- Create themed word packs
- Improve mobile experience
- Add sound effects
- Translate to other languages

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Naim Zulkipli**
- Email: naim@amz.com.my
- GitHub: [@naimz82](https://github.com/naimz82)

## 🙏 Acknowledgments

- Font Awesome for the beautiful icons
- SweetAlert for elegant notifications
- jQuery for simplified DOM manipulation
- All contributors who helped expand the word database

---

**Enjoy playing Simple Hangman! 🎯**

*Made with ❤️ for my coding students*
