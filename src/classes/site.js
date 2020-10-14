
export class Site {
    constructor(selectors) {
        this.$el = document.querySelector(selectors)
    }

    render(model) {
        this.$el.innerHTML=''
        model.forEach(block => {
            console.log(block)
            site.insertAdjacentHTML('beforeend', block.toHTML())
        })
    }

}