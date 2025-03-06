# Day/Night Toggle React Component

A beautiful and interactive day/night toggle component built with React and Tailwind CSS. This component provides a visually appealing way to switch between light and dark modes in your application.

![Day/Night Toggle](./screenshot.jpg)

## Features

- Smooth transitions between day and night modes
- Beautiful visual effects including stars, clouds, sun, and moon
- Accessible design with appropriate ARIA attributes
- Built with React and Tailwind CSS
- Fully responsive

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/daynight-toggle.git
   cd daynight-toggle
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

```jsx
import DayNightToggle from './components/DayNightToggle';

function App() {
  return (
    <div className="App">
      <h1>Day/Night Toggle</h1>
      <DayNightToggle />
    </div>
  );
}
```

## Customization

You can customize the component by modifying the CSS classes and styles in the `DayNightToggle.jsx` file.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Design inspired by modern UI/UX principles
- Built with [React](https://reactjs.org/) and [Tailwind CSS](https://tailwindcss.com/)
