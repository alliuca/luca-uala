import { injectGlobal } from 'emotion';

injectGlobal`
  :root {
    --containerMaxWidth: 1152px;
    --containerPadding: 64px;
    --yellow-1: #F8E627;
    --yellow-2: #ECDA1F;
    --grey-1: #DDE4E4;
    --grey-2: #9B9B9B;
    --grey-3: #3A405B;
    --grey-4: #4A4A4A;
  }

  * {
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'Montserrat';
    src:  local('Montserrat-Regular'),
          url('./fonts/Montserrat-Regular.woff2') format('woff2'),
          url('./fonts/Montserrat-Regular.woff') format('woff'),
          url('./fonts/Montserrat-Regular.ttf') format('truetype');
    font-style: normal;
    font-weight: 400;
  }

  @font-face {
    font-family: 'Montserrat';
    src:  local('Montserrat-Bold'),
          url('./fonts/Montserrat-Bold.woff2') format('woff2'),
          url('./fonts/Montserrat-Bold.woff') format('woff'),
          url('./fonts/Montserrat-Bold.ttf') format('truetype');
    font-style: normal;
    font-weight: 600;
  }

  @font-face {
    font-family: 'OpenSans';
    src:  local('OpenSans-SemiBold'),
          url('./fonts/OpenSans-SemiBold.woff2') format('woff2'),
          url('./fonts/OpenSans-SemiBold.woff') format('woff'),
          url('./fonts/OpenSans-SemiBold.ttf') format('truetype');
    font-style: normal;
    font-weight: 400;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3, h4, h5 {
    font-family: Montserrat, sans-serif;
  }

  #root {
    display: flex;
    flex-direction: column;

    @media (min-width: 900px) {
      position: relative;
      display: block;
    }
  }
`;
