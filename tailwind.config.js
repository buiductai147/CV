module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}', 
  ],
    darkMode: 'class',
    theme: {
      fontFamily: {
        display: ['text-main'],
        body: ['text-main'],
      },
      extend: {
        fontSize: {
          14: '14px',
          test: ['32px', '22px'],
        },
        backgroundColor: {
          'main-bg': '#FAFBFB',
          'main-green-bg': '#14fe17',
          'main-dark-bg': '#272b23',
          'transparent-bg': 'rgba( 16, 255, 0, 0.15)',
          'secondary-dark-bg': '#33373E',
          'light-gray': '#F7F7F7',
          'half-transparent': 'rgba(0, 0, 0, 0.5)',
        },
        colors: {          
          'main': '#14fe17',
        },
        borderWidth: {
          1: '1px',
        },
        borderColor: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        width: {
          400: '400px',
          760: '760px',
          780: '780px',
          800: '800px',
          1000: '1000px',
          1200: '1200px',
          1400: '1400px',
        },
        height: {
          80: '80px',
        },
        minHeight: {
          590: '590px',
        },
        backgroundImage: {
          'hero-pattern':
            "url('https://demos.wrappixel.com/premium-admin-templates/react/flexy-react/main/static/media/welcome-bg-2x-svg.25338f53.svg')",
        },
        
      },
    },
    plugins: [],
  };
  