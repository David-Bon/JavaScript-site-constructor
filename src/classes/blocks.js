import {col, css, row} from "../utils";

class Blocks {
    constructor(value, options) {
        this.value=value;
        this.options=options;
    }
    toHTML() {
        throw new Error('Метод toHTML обязательно должен быть реализован')
    }

}

export class TitleBlock extends Blocks {
    constructor(value, options) {
        super(value, options);
    }
    toHTML() {
        const {tag = 'h1', styles} = this.options
        return row(col(`<${tag}>${this.value}</${tag}>`), css(styles))
    }
}

export class TextBlock extends Blocks {
    constructor(value, options) {
        super(value, options);
    }
    toHTML() {
        return row(col(`<p>${this.value}</p>`))
    }
}

export class ColumnsBlock extends Blocks {
    constructor(value, options) {
        super(value, options);
    }
    toHTML() {
        const res = this.value.map(col).join('')
        return row(res)
    }
}

export class ImageBlock extends Blocks {
    constructor(value, options) {
        super(value, options);
    }
    toHTML() {
        return row(`<img src=${this.value} alt="some image"/>`)
    }
}