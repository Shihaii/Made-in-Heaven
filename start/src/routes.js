import {createRouter, createWebHashHistory} from 'vue-router';
import Main from '../src/components/Main.vue';
import DesignManagment from '../src/components/DesignManagment.vue';
import CharacterPage from '../src/components/CharacterPage.vue'


const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/', component: Main},
        {path: '/design', component: DesignManagment},
        {path: '/character/:characterId?', component: CharacterPage}
    ]
});

export default router;