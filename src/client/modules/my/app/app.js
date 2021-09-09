import { LightningElement } from 'lwc';

export default class App extends LightningElement {
    constructor(){
        super()
        window.addEventListener('scroll' , this.windowScrollMethod)
    }
    windowScrollMethod = () => {
        const scrollDistance = document.documentElement.scrollTop
        const section = this.template.querySelectorAll('.page-section')
        console.log(section.length);
        section.forEach((element,index) => {
            if(element.offsetTop -150 < scrollDistance){
                document.querySelector('.nav-link.active').classList.remove('active')
                document.querySelectorAll('.nav-link')[index].classList.add('active')
            }
        });
    }
}
