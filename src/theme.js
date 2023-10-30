import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
  initialColorMode: 'light',
  //  If true, your app will change color mode based on the user's system preferences.
  useSystemColorMode: false,
})

export default theme;