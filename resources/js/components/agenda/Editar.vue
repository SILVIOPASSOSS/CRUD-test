<template>
     <div class="container mt-2">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h3>Editar Contato</h3>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="atualizar">
                            <div class="row">
                                    <div class="col-6 mb-2">
                                        <div form-group>
                                            <label> Nome </label>
                                            <input type="text" class="form-control" v-model="contact.nome">
                                        </div>
                                    </div>
                                    <div class="col-6 mb-2">
                                        <div form-group>
                                            <label> Telefone </label>
                                            <input type="text" class="form-control" v-model="contact.telefone">
                                        </div>
                                    </div>
                                    <div class="col-6 mb-2">
                                        <div form-group>
                                            <label> Endereço </label>
                                            <input type="text" class="form-control" v-model="contact.endereco">
                                        </div>
                                    </div>
                                    <div class="col-6 mb-2">
                                        <div form-group>
                                            <label> Email </label>
                                            <input type="text" class="form-control" v-model="contact.email">
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <button type="submit" class="btn btn-primary">Salvar</button>
                                    </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"editar-contato",
    data(){
        return {
            contact:{
                nome:"",
                telefone:"",
                endereco:"",
                email:""
            }
        }
    },
    mounted(){
        this.mostrarContatos()
    },
    methods:{
        async mostrarContatos(){
            await this.axios.get(`/api/contact/${this.$route.params.id}`)
                .then(response=>{
                    const {nome, telefone, endereco, email, } = response.data
                    this.contact.nome = nome
                    this.contact.telefone = telefone
                    this.contact.endereco = endereco
                    this.contact.email = email
                })
                .catch(error=>{
                    console.log(error)
                })
        },
        async atualizar(){
            await this.axios.put(`/api/contact/${this.$route.params.id}`,this.contact).then(response=>{
                    this.$router.push({name:"mostrarContatos"})
                }).catch(error=>{
                    console.log(error)
                })
        }
    }  
}
</script>