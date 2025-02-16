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
    (matcher) => {
      if (!matcher.startsWith('selected:') && !matcher.startsWith('selected-'))
        return matcher
      return {
        matcher: matcher.slice(9),
        selector: s => `${s}.active`,
      }
    },
  ],
  shortcuts: [
    {
      'flex-center': 'flex items-center justify-center',
    },
    [/^bg-url-\[(.*)\]$/, ([,c]) => `bg-[url('${c}')]`],
  ],
  presets: [
    presetUno(),
    presetWebFonts({
      provider: 'fontshare',
      fonts: {
        provider: 'google',
        en: 'Roboto',
        sc: 'Noto Sans SC',
      },
    }),
    presetIcons({
      prefix: '',
    }),
    presetAttributify(),
    // presetRemToPx({
    //   baseFontSize: 4,
    // }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
