import image from './assets/e55230d2770cc7f362a8318d464af171.png'
import {TextBlock, ColumnsBlock, ImageBlock, TitleBlock} from "./classes/blocks";

export const model = [

    new TitleBlock('Конструктор сайтов на чистом JS', {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#fff',
            padding: '1.5rem',
            'text-align': 'center',
        }
    }),

    new TextBlock('here we go with some text'),

    new ColumnsBlock([
        '111111',
        '222222',
        '333333',
    ]),

    new ImageBlock(image),

]