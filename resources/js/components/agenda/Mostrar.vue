<template>
    <div class="container mt-2">
        <div class="row">
            <div class="col-lg-4 mb-2">
                <input v-model="search" type="text" class="form-control" placeholder="Buscar Contato">
            </div>
            <div class="col-lg-6 mb-2">
                <!-- Componente para criar-->
                <router-link :to='{name:"cadastrarContatos"}' class="btn btn-secondary"><i class="bi bi-plus-square-fill"></i> Novo Contato</router-link>
            </div>
            
            <div class="col-12">
                <div class="table-responsive">
                    <table class="table tabler-bordered" hover:contacts="contatosFiltrados">
                        <thead class="bg-primary text-white">
                            <tr>
                                <th>#</th>
                                <th>Nome</th>
                                <th>Telefone</th>
                                <th>Endereço</th>
                                <th>Email</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="contact in filtrosContatos" :key="contact.id">
                                <td>{{ contact.id }}</td>
                                <td>{{ contact.nome }}</td>
                                <td>{{ contact.telefone }}</td>
                                <td>{{ contact.endereco }}</td>
                                <td>{{ contact.email }}</td>
                                <td>
                                    <!--Componente para Editar-->
                                    <router-link :to='{name:"editarContato", params:{id:contact.id}}' class="btn btn-warning"><i class="bi bi-pencil-square"></i></router-link>
                                    <!--Componente Ler/Ver-->
                                    <router-link :to='{name:"lerContato", params:{id:contact.id}}' type="button" @click="verContato(contact.id)" class="btn btn-info"><i class="bi bi-eye-fill"></i></router-link>
                                    
                                    <a type="button" @click="excluirContatos(contact.id)" class="btn btn-danger mt-1"><i class="bi bi-trash"></i></a>

                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "contacts",
    data(){
        return{
            search:"",
            contacts:[],            
        }
    },
    mounted(){
        this.mostrarContatos()
    },
    filters:{
        toUpperCase(str) {
            return str.toUpperCase();
        },
        truncate(str, length) {
            var output = str;
            if (output.length > length) {
                output = str.substring(0, length) + ' ...';
            }
            return output;
        }       
    },
    computed:{
        filtrosContatos() {
            return this.contacts.filter((contact) =>{
                return contact.nome.match(this.search)
            })
        }
    },
    methods:{
        async mostrarContatos(){
            await this.axios.get('/api/contact').then(response=>{
                    this.contacts = response.data
                }).catch(error=>{
                    console.log(error)
                    this.contacts = []
                })
        },
        excluirContatos(id){
            if(confirm("Deseja excluir este Contato?")){
                this.axios.delete(`/api/contact/${id}`)
                .then(response=>{
                    this.mostrarContatos()
                })
                .catch(error=>{
                    console.log(error)
                })
            }
        },  
    },  
}
</script>