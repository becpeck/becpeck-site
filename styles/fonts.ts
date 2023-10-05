import localFont from 'next/font/local';

const heiseiMincho = localFont({ src: './fonts/Heisei Mincho Std W3.otf' });
const noah = localFont({ src: './fonts/Noah Regular.otf' });
const optimaNova = localFont({ src: './fonts/Optima Nova LT Regular.otf' });
const zapfCalligraphic = localFont({ src: './fonts/Zapf Calligraphic 801 Regular.otf' });

const fonts = {
    'heiseiMincho': heiseiMincho,
    'noah': noah,
    'optimaNova': optimaNova,
    'zapfCalligraphic': zapfCalligraphic,
}

export type FontLabel = keyof typeof fonts;
export default fonts;
