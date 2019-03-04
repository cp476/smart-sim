import GlobalComponents from '../components/global';

export default {
    install(Vue) {
        GlobalComponents.forEach(component => {
            Vue.component(component.name, component);
        });
    }
};
