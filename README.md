# Basic Calculator

https://nallamaruadithyavardhan.github.io/Calculator/

A fully functional, responsive calculator built with HTML, CSS, and JavaScript. This calculator performs basic arithmetic operations with a modern, user-friendly interface.

##  Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [How to Use](#how-to-use)
- [Functionality](#functionality)
- [Keyboard Shortcuts](#keyboard-shortcuts)
- [Error Handling](#error-handling)
- [Project Requirements Met](#project-requirements-met)
- [Future Enhancements](#future-enhancements)

##  Features

- **Basic Arithmetic Operations**: Addition (+), Subtraction (-), Multiplication (×), Division (/)
- **Responsive Design**: Modern, clean interface with smooth animations
- **Chain Calculations**: Perform multiple operations in sequence
- **Keyboard Support**: Full keyboard input functionality
- **Error Handling**: Graceful handling of division by zero and invalid inputs
- **Number Formatting**: Display numbers with comma separators for readability
- **Delete Function**: Remove the last entered digit
- **Clear Function**: Reset all values and start fresh
- **Visual Feedback**: Button hover effects and transitions

## 🛠 Technologies Used

- **HTML5**: Structure and layout
- **CSS3**: Styling, animations, and responsive design
- **JavaScript (ES6+)**: Calculator logic and functionality

##  Project Structure

```
calculator/
│
├── index.html          # Main HTML structure
├── style.css           # Styling and visual design
├── script.js           # Calculator logic and functionality
└── README.md           # Project documentation
```

##  Installation

1. **Clone or Download** the repository to your local machine
2. **Navigate** to the project folder
3. **Open** `index.html` in your web browser

No additional dependencies or installations required!

Alternatively, you can set up a local server:
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if http-server is installed)
npx http-server
```

Then navigate to `http://localhost:8000` in your browser.

##  How to Use

### Using Mouse/Touch:

1. **Enter Numbers**: Click on the number buttons (0-9)
2. **Add Decimal**: Click the decimal point (.) button
3. **Choose Operation**: Click an operator button (+, -, ×, /)
4. **Calculate Result**: Click the equals (=) button
5. **Clear Display**: Click the AC (All Clear) button
6. **Delete Last Digit**: Click the DEL button

### Using Keyboard:

- Type numbers directly using your keyboard
- Use operator keys (+, -, *, /)
- Press Enter or = to calculate
- Press Escape or C to clear
- Press Backspace to delete the last digit

##  Functionality

### Core Operations

The calculator supports the following operations:

- **Addition**: `5 + 3 = 8`
- **Subtraction**: `10 - 4 = 6`
- **Multiplication**: `6 × 7 = 42`
- **Division**: `20 / 4 = 5`

### Display Features

- **Previous Operand Display**: Shows the previous number and operation
- **Current Operand Display**: Shows the current number being entered
- **Number Formatting**: Large numbers display with comma separators (e.g., 1,000,000)
- **Decimal Support**: Handle decimal numbers with precision

### Chain Calculations

Perform multiple operations without pressing equals:
```
5 + 3 = 8
(continues) + 2 = 10
(continues) × 3 = 30
```

##  Keyboard Shortcuts

| Key | Function |
|-----|----------|
| `0-9` | Enter digits |
| `.` | Decimal point |
| `+` | Addition |
| `-` | Subtraction |
| `*` | Multiplication |
| `/` | Division |
| `Enter` or `=` | Calculate result |
| `Escape` or `C` | Clear all |
| `Backspace` | Delete last digit |

##  Error Handling

The calculator includes robust error handling:

- **Division by Zero**: Displays "Error" message and automatically resets after 1.5 seconds
- **Invalid Input**: Prevents multiple decimal points in a single number
- **Empty Operations**: Prevents operations when no number is entered
- **Floating Point Precision**: Rounds results to avoid JavaScript floating-point errors

##  Project Requirements Met

### User Interface ✓
- User-friendly interface with clear display
- Buttons for all digits (0-9), decimal point, and operators
- Special buttons for Clear (AC) and Equals (=)
- Additional DEL button for better user experience

### Functionality ✓
- Core calculator functionality implemented with JavaScript
- Users can enter values, perform calculations, and see results
- Responsive to both button clicks and keyboard input

### Operations ✓
- Supports all basic arithmetic operations
- Follows correct order of operations (BODMAS/BIDMAS)
- Chain calculations supported

### Input Handling ✓
- Accurate handling of user input
- Responds to both button clicks and keyboard input
- Input validation to prevent errors

### Error Handling ✓
- Division by zero detection and handling
- Invalid input prevention
- Clear error messages

##  Future Enhancements

Optional features that could be added:

- **Advanced Operations**:
  - Square root (√)
  - Percentage (%)
  - Power/Exponent (^)
  
- **Memory Functions**:
  - Memory Add (M+)
  - Memory Subtract (M-)
  - Memory Recall (MR)
  - Memory Clear (MC)

- **History**:
  - Calculation history log
  - Previous calculations recall

- **Themes**:
  - Dark mode toggle
  - Custom color schemes

- **Additional Features**:
  - Scientific calculator mode
  - Parentheses support for complex expressions
  - Copy result to clipboard

##  Code Quality

- **Well-Structured**: Clean separation of HTML, CSS, and JavaScript
- **Commented Code**: Clear comments explaining functionality
- **Object-Oriented**: Uses ES6 class for calculator logic
- **Best Practices**: Follows modern JavaScript conventions
- **Maintainable**: Easy to read and modify

##  Development

### Code Structure

**HTML (index.html)**:
- Semantic HTML structure
- Organized button layout using grid system
- Linked external CSS and JavaScript files

**CSS (style.css)**:
- Modern styling with gradients and shadows
- Responsive design principles
- Smooth transitions and animations
- Grid layout for button arrangement

**JavaScript (script.js)**:
- Calculator class encapsulating all functionality
- Event listeners for keyboard support
- Helper methods for display formatting
- Comprehensive error handling

##  License

This project is open source and available for educational purposes.

##  Contributing

Feel free to fork this project and add your own enhancements. Some ideas:
- Add new operations
- Improve the UI design
- Add unit tests
- Implement memory functions
- Create themes

##  Contact

For questions or feedback about this project, please reach out through the project repository.

---

**Project Difficulty**: Hard  
**Technologies**: HTML, CSS, JavaScript  
**Status**: Complete and Functional

Enjoy calculating! 
