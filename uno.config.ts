import presetRemToPx from '@unocss/preset-rem-to-px'
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  variants: [
    matcher => {
      if (!matcher.startsWith('selected:') && !matcher.startsWith('selected-'))
        return matcher
      return {
        matcher: matcher.slice(9),
        selector: s => `${ s }.active`,
      }
    },
  ],
  shortcuts: [
    {
      'flex-center': 'flex items-center justify-center',
    },
    [/^bg-url-\[(.*)\]$/, ([,c]) => `bg-[url('${ c }')]`],
  ],
  presets: [
    presetUno(),
    presetWebFonts({
      provider: 'fontshare',
      fonts: {
        satoshi: 'Satoshi',
        neco: 'Neco',
        bevellier: 'Bevellier',
        comico: 'Comico',
      },
    }),
    presetIcons({
      prefix: '',
    }),
    presetAttributify(),
    presetRemToPx({
      baseFontSize: 4,
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
