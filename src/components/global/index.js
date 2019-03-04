import vBtn from './v-btn';
import vInput from './v-input';

const components = [vBtn, vInput];

export default {
    install(Vue) {
        components.forEach(component => {
            Vue.component(component.name, component);
        });
    }
};
