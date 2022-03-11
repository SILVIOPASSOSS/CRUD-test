const Home = ()=> import ('./components/Home.vue');
const About = ()=> import ('./components/About.vue');

//Importando componentes para Agenda

const Mostrar = ()=> import ('./components/agenda/Mostrar.vue');
const Criar = ()=> import ('./components/agenda/Criar.vue');
const Editar = ()=> import ('./components/agenda/Editar.vue');
const Ver = ()=> import ('./components/agenda/Ler.vue');


export const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'about',
        path: '/about',
        component: About
    },
    {
        name: 'mostrarContatos',
        path: '/contatos',
        component: Mostrar
    },
    {
        name: 'cadastrarContatos',
        path: '/cadastrar',
        component: Criar
    },
    {   name: 'editarContato',
        path: '/editar/:id',
        component: Editar
    },
    {   name: 'lerContato',
        path: '/ler/:id',
        component: Ver
    },
]

